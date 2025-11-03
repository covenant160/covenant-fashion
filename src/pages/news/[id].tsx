// src/pages/news/[id].tsx
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

interface ArticleProps {
  id: number;
  title: string;
  date: string;
  heroImage: string;
  content: string[];
  gallery?: string[]; // optional extra images
}

// Full articles with multiple paragraphs
const allArticles: ArticleProps[] = [
  {
    id: 0,
    title: "Exclusive: Fall/Winter 2025 Runway Trends",
    date: "Oct 31, 2025",
    heroImage: "/images/featured-news.jpg",
    content: [
      "We got an exclusive look at the latest runway collections for Fall/Winter 2025. From bold colors to oversized silhouettes, discover the trends that will dominate the fashion scene.",
      "Designers are experimenting with textures, layering, and statement accessories, making each runway show a visual feast. Expect rich fabrics like velvet, leather, and sustainable materials.",
      "Colors this season are bold: vibrant purples, electric blues, and fiery reds dominate, while classic neutrals provide balance. Oversized coats, wide-leg trousers, and chunky boots are key pieces.",
      "Fashion enthusiasts can expect a mix of retro influences and modern cuts, ensuring that each outfit is both nostalgic and cutting-edge."
    ],
    gallery: ["/images/news1.jpg", "/images/news2.jpg"],
  },
  {
    id: 1,
    title: "Top 10 Streetwear Trends of 2025",
    date: "Oct 28, 2025",
    heroImage: "/images/news1.jpg",
    content: [
      "Streetwear continues to evolve in 2025, blending high fashion with urban roots. Sneakers, hoodies, and graphic tees remain staples, but new collaborations push boundaries.",
      "Bold logos and vintage-inspired graphics are everywhere. Layering different textures and oversized pieces creates dynamic silhouettes for a modern street aesthetic.",
      "Sustainable streetwear is on the rise, with brands using recycled fabrics and eco-conscious production methods."
    ],
    gallery: ["/images/news1.jpg", "/images/news2.jpg"],
  },
  {
    id: 2,
    title: "Sustainable Fashion: How Brands Are Going Green",
    date: "Oct 25, 2025",
    heroImage: "/images/news2.jpg",
    content: [
      "Eco-friendly clothing is more than a trend; it’s a revolution in style. Learn which brands are making sustainability chic and how you can make conscious choices.",
      "From organic cotton to recycled synthetics, designers are reducing environmental impact without sacrificing aesthetics.",
      "Consumers are driving demand for transparency in production processes and ethical labor practices."
    ],
    gallery: ["/images/news2.jpg", "/images/news3.jpg"],
  },
  {
    id: 3,
    title: "Fall/Winter 2025 Collection Highlights",
    date: "Oct 20, 2025",
    heroImage: "/images/news3.jpg",
    content: [
      "A sneak peek into this season’s most iconic runway looks and street styles. See what everyone will be wearing this winter and get inspired for your own wardrobe.",
      "Layered looks, oversized outerwear, and statement boots dominate the streets and runways alike. Designers are embracing both maximalism and minimalism simultaneously.",
      "Accessories are bold and playful: hats, scarves, and jewellery take centre stage in styling."
    ],
    gallery: ["/images/news3.jpg", "/images/news4.jpg"],
  },
];

export default function ArticlePage() {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return null; // waiting for router
  const article = allArticles.find((a) => a.id === Number(id));

  if (!article) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl">Article not found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-20">
      <Link href="/">
        <button className="mb-6 bg-gray-200 dark:bg-gray-800 px-4 py-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700">
          ← Back
        </button>
      </Link>

      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{article.date}</p>

      {/* Hero Image */}
      <div className="relative w-full h-96 mb-8 rounded overflow-hidden shadow-lg">
        <Image src={article.heroImage} alt={article.title} fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="space-y-6 text-gray-700 dark:text-gray-300 text-lg">
        {article.content.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </div>

      {/* Gallery Images */}
      {article.gallery && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {article.gallery.map((img, idx) => (
            <div key={idx} className="relative h-64 rounded overflow-hidden shadow-lg">
              <Image src={img} alt={`Gallery ${idx}`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
