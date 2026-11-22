/* ART CATEGORIES — v42
   Change cover/title/order in the category array below.
   Add gallery images into PORTFOLIO_ART_WORKS (examples in guide).
   Do NOT overwrite your existing portfolio-data.js.
*/
window.PORTFOLIO_ART_CATEGORIES = [
  {slug:"oil-paintings",title:"OIL PAINTINGS",image:"art-cover-oil.webp"},
  {slug:"line-art",title:"LINE ART",image:"art-cover-line.webp"},
  {slug:"digital-illustrations",title:"DIGITAL ILLUSTRATIONS",image:"art-cover-illustrations.webp"},
  {slug:"digital-portraits",title:"DIGITAL PORTRAITS",image:"art-cover-portraits.webp"},
  {slug:"pencil",title:"PENCIL",image:"art-cover-pencil.webp"}
];

/* Add finished artworks here when ready.
   Example (remove leading // to use):
   { category:"oil-paintings", image:"my-painting.webp", title:"LIBRA", medium:"Oil on canvas, 40 × 50 cm" },
*/
window.PORTFOLIO_ART_WORKS = [

   {
    category: "oil-paintings",
    image: "focus.webp",
    title: "FOCUS",
    medium: "Oil on canvas, 30 × 40 cm",
      status: "No longer available"
  },
   {
    category: "oil-paintings",
    image: "libra.webp",
    title: "LIBRA",
    medium: "Oil on canvas, 30 × 40 cm",
      status: "Available"
  },
  {
    category: "pencil",
    image: "drawing-01.webp",
    title: "UNTITLED",
    medium: "Pencil on paper, 21 × 30 cm",
     status: "Available"
  }
];
