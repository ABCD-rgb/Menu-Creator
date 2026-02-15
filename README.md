# MenuMuse

A bright, modern landing page for a digital restaurant menu business with interactive, booklet-style menu previews.

## Stack
- React + Vite
- Tailwind CSS
- react-pageflip (menu booklet)
- framer-motion (section reveals)
- lucide-react (icons)
- shadcn/ui-style components (Button/Card)

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

```
Menu/
  src/
    components/
      menus/         # Menu-specific booklet components
      ui/            # shadcn/ui-style primitives
    data/            # Menu data for each sample
    lib/             # Utilities (cn)
```

## Menu Previews
Sample menus open in a new tab using query params:

```
/?view=booklet&menu=manila
/?view=booklet&menu=cebu
/?view=booklet&menu=davao
/?view=booklet&menu=boracay
```

## Notes
- Booklet size is responsive across phone, tablet, and laptop.
- Manila menu includes a cover page.
- Boracay menu uses a photo-left layout with prices on the right.

## Scripts
- `npm run dev` — start dev server
- `npm run build` — build for production
- `npm run preview` — preview production build
