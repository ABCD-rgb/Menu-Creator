import { useEffect, useRef, useState } from "react";
import { ImageIcon, MoveHorizontal } from "lucide-react";
import HTMLFlipBook from "react-pageflip";

export default function MenuBooklet({ menu }) {
  const isDark = menu.theme.paper === "#1c1310";
  const hasBackgroundImage = Boolean(
    menu.background?.mode === "image" && menu.background?.imageUrl
  );
  const hasCoverLogo = Boolean(menu.cover?.logo?.enabled && menu.cover?.logo?.imageUrl);
  const chunkItems = (items, size) => {
    const chunks = [];
    for (let i = 0; i < items.length; i += size) {
      chunks.push(items.slice(i, i + size));
    }
    return chunks;
  };

  const pages = menu.sections.flatMap((section) => {
    const chunkSize = menu.layout === "photo-left" ? 3 : 4;
    return chunkItems(section.items, chunkSize).map((items, index) => ({
      label: index === 0 ? section.name : `${section.name} · More`,
      sections: [{ name: section.name, items }],
    }));
  });
  const hasCover = Boolean(menu.cover?.enabled);
  const fullPages = hasCover
    ? [
        {
          label: "Cover",
          isCover: true,
        },
        ...pages,
      ]
    : pages;
  const [pageIndex, setPageIndex] = useState(0);
  const touchStart = useRef(null);
  const bookRef = useRef(null);
  const [bookSize, setBookSize] = useState({ width: 520, height: 640 });

  const goNext = () => setPageIndex((prev) => Math.min(prev + 1, fullPages.length - 1));
  const goPrev = () => setPageIndex((prev) => Math.max(prev - 1, 0));

  useEffect(() => {
    const updateSize = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const padding = Math.max(16, Math.min(48, viewportWidth * 0.06));
      const isPhone = viewportWidth < 640;
      const isTablet = viewportWidth >= 640 && viewportWidth < 1024;
      const ratio = isPhone ? 0.56 : isTablet ? 0.5 : 0.42;
      const controlsAllowance = isPhone ? 84 : 96;
      const availableHeight = viewportHeight - padding * 2 - controlsAllowance;
      const height = Math.max(240, Math.min(availableHeight, viewportHeight * ratio));
      const maxWidth = viewportWidth - padding * 2;
      const width = Math.max(isPhone ? 260 : 320, Math.min(maxWidth, height * 0.72));
      setBookSize({ width, height });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const onTouchStart = (event) => {
    touchStart.current = event.touches[0].clientX;
  };

  const onTouchEnd = (event) => {
    if (touchStart.current === null) return;
    const delta = touchStart.current - event.changedTouches[0].clientX;
    if (delta > 40) bookRef.current?.pageFlip()?.flipNext();
    if (delta < -40) bookRef.current?.pageFlip()?.flipPrev();
    touchStart.current = null;
  };

  const renderMenuItem = (item, index, compactPrice = false) => {
    const [name, price, hasImage, imageUrl] = item;

    return (
      <div
        key={`${name}-${index}`}
        className={`group rounded-xl border px-3 ${
          hasImage ? "bg-white/45 py-3.5" : "bg-transparent py-2"
        }`}
        style={{ borderColor: hasImage ? `${menu.theme.secondary}55` : `${menu.theme.secondary}22` }}
      >
        <div className="flex items-center gap-3">
          {hasImage ? (
            <div
              className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border"
              style={{
                borderColor: `${menu.theme.secondary}80`,
                background:
                  "radial-gradient(circle at 25% 20%, rgba(255,255,255,0.7), rgba(255,255,255,0.2) 45%, rgba(0,0,0,0.04) 100%)",
              }}
            >
              {imageUrl ? (
                <>
                  <img src={imageUrl} alt={name} className="h-full w-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(0,0,0,0),rgba(0,0,0,0.22))]" />
                </>
              ) : (
                <>
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(255,255,255,0))]" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-[10px] font-semibold uppercase tracking-[0.14em] opacity-75">
                    <ImageIcon size={18} />
                    Image
                  </div>
                </>
              )}
            </div>
          ) : null}
          <div className="flex min-w-0 flex-1 items-center gap-2">
            <span className={`truncate ${hasImage ? "text-[15px] font-semibold" : "font-medium"}`}>
              {name}
            </span>
            <span
              className="h-px flex-1 border-b border-dotted opacity-35"
              style={{ borderColor: menu.theme.secondary }}
            />
            <span className={compactPrice ? "text-base font-semibold" : "font-semibold opacity-80"}>
              {price}
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className="h-dvh overflow-hidden"
      style={{
        backgroundColor: menu.background?.color ?? menu.theme.paper,
        backgroundImage: hasBackgroundImage
          ? `linear-gradient(180deg, rgba(14,18,20,0.35), rgba(14,18,20,0.12)), url(${menu.background.imageUrl})`
          : undefined,
        backgroundSize: hasBackgroundImage ? "cover" : undefined,
        backgroundPosition: hasBackgroundImage ? "center" : undefined,
        color: menu.theme.ink,
        fontFamily: menu.theme.bodyFamily,
      }}
    >
      <div className="flex h-full items-center justify-center px-4 py-3 sm:px-6 sm:py-4">
        <div className="relative w-full">
          <div
            className="absolute right-2 top-2 flex items-center gap-2 rounded-full border px-3 py-1 text-xs opacity-60"
            style={{ borderColor: menu.theme.secondary, color: menu.theme.secondary }}
          >
            <MoveHorizontal size={14} />
            Swipe
          </div>
          <button
            className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border bg-white/70 text-lg"
            style={{ borderColor: menu.theme.secondary, color: menu.theme.ink }}
            onClick={() => bookRef.current?.pageFlip()?.flipPrev()}
            aria-label="Previous page"
          >
            ‹
          </button>
          <button
            className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border bg-white/70 text-lg"
            style={{ borderColor: menu.theme.secondary, color: menu.theme.ink }}
            onClick={() => bookRef.current?.pageFlip()?.flipNext()}
            aria-label="Next page"
          >
            ›
          </button>
          <div
            className="flex w-full justify-center rounded-3xl border p-2 sm:p-4"
            style={{ borderColor: menu.theme.secondary }}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <HTMLFlipBook
              width={bookSize.width}
              height={bookSize.height}
              size="stretch"
              minWidth={260}
              maxWidth={900}
              minHeight={240}
              maxHeight={1200}
              maxShadowOpacity={0.25}
              showCover={hasCover}
              mobileScrollSupport={true}
              onFlip={(e) => setPageIndex(e.data)}
              ref={bookRef}
              className="shadow-2xl"
            >
              {fullPages.map((page) => (
                <div
                  key={page.label}
                  className="h-full w-full rounded-[28px] border-2 p-6 shadow-2xl"
                  style={{
                    borderColor: menu.theme.secondary,
                    background: isDark
                      ? "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(0,0,0,0.2))"
                      : "linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.6))",
                  }}
                >
                  {page.isCover ? (
                    <div className="flex h-full flex-col justify-between">
                      <div />
                      <div>
                        {hasCoverLogo ? (
                          <img
                            src={menu.cover.logo.imageUrl}
                            alt={`${menu.title} logo`}
                            className="mb-5 h-16 w-auto max-w-[200px] object-contain"
                          />
                        ) : null}
                        <h2 className="text-4xl sm:text-5xl" style={{ fontFamily: menu.theme.fontFamily }}>
                          {menu.cover?.title ?? menu.title}
                        </h2>
                        <p className="mt-3 text-lg opacity-80">
                          {menu.cover?.subtitle ?? menu.description}
                        </p>
                        <div
                          className="mt-6 inline-flex rounded-full border px-4 py-2 text-sm"
                          style={{ borderColor: menu.theme.secondary, color: menu.theme.secondary }}
                        >
                          {menu.cover?.detail ?? menu.tag}
                        </div>
                      </div>
                      <div />
                    </div>
                  ) : (
                    <>
                      {menu.layout === "photo-left" ? (
                        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                          <div className="overflow-hidden rounded-2xl border">
                            <img
                              src={menu.photo}
                              alt={`${menu.title} menu highlight`}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="space-y-6">
                            {page.sections.map((section) => (
                              <div key={section.name}>
                                <h3
                                  className="text-base font-semibold"
                                  style={{ color: menu.theme.accent }}
                                >
                                  {section.name}
                                </h3>
                                <div className="mt-3 space-y-2 text-sm">
                                  {section.items.map((item, index) => renderMenuItem(item, index, true))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-5">
                          {page.sections.map((section) => (
                            <div key={section.name}>
                              <h3
                                className="text-base font-semibold"
                                style={{ color: menu.theme.accent }}
                              >
                                {section.name}
                              </h3>
                              <div className="mt-3 space-y-2 text-sm">
                                {section.items.map((item, index) => renderMenuItem(item, index))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </HTMLFlipBook>
          </div>
        </div>
      </div>
    </div>
  );
}
