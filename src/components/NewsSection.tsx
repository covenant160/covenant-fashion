// src/components/NewsSection.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ArticleProps {
  id: number;
  image: string;
  title: string;
  date: string;
  snippet: string;
}

const featured: ArticleProps = {
  id: 0,
  image: "/images/featured-news.jpg",
  title: "Exclusive: Fall/Winter 2025 Runway Trends",
  date: "Oct 31, 2025",
  snippet:
    "We got an exclusive look at the latest runway collections for Fall/Winter 2025. From bold colors to oversized silhouettes, discover the trends that will dominate the fashion scene.",
};

const articles: ArticleProps[] = [
  {
    id: 1,
    image: "/images/news1.jpg",
    title: "Exclusive: Fall/Winter 2025 Runway Trends", // New article added
    date: "Oct 31, 2025",
    snippet:
      "We got an exclusive look at the latest runway collections for Fall/Winter 2025. From bold colors to oversized silhouettes, discover the trends that will dominate the fashion scene.",
  },
  {
    id: 2,
    image: "/images/news2.jpg",
    title: "Top 10 Streetwear Trends of 2025",
    date: "Oct 28, 2025",
    snippet:
      "Discover the hottest streetwear trends that are taking over fashion this year. From sneakers to hoodies, stay ahead with the latest drops.",
  },
  {
    id: 3,
    image: "/images/news3.jpg",
    title: "Sustainable Fashion: How Brands Are Going Green",
    date: "Oct 25, 2025",
    snippet:
      "Eco-friendly clothing is more than a trend; it’s a revolution in style. Learn which brands are making sustainability chic and how you can make conscious choices.",
  },
  {
    id: 4,
    image: "/images/news4.jpg",
    title: "Fall/Winter 2025 Collection Highlights",
    date: "Oct 20, 2025",
    snippet:
      "A sneak peek into this season’s most iconic runway looks and street styles. See what everyone will be wearing this winter and get inspired for your own wardrobe.",
  },
];

export default function NewsSection() {
  return (
    <section id="news" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-14">
          Fashion News & Magazine
        </h2>

        {/* Featured Article */}
        <div className="relative mb-20 rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src={featured.image}
            alt={featured.title}
            width={1200}
            height={600}
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start p-10">
            <p className="text-sm text-gray-200 mb-2">{featured.date}</p>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {featured.title}
            </h3>
            <p className="text-gray-200 max-w-xl">{featured.snippet}</p>
            <Link href={`/news/${featured.id}`}>
              <button className="mt-4 bg-linear-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300">
                Read More
              </button>
            </Link>
          </div>
        </div>

        {/* Articles */}
        <div className="space-y-20">
          {articles.map((article, index) => (
            <div
              key={article.id}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Text */}
              <div className="md:w-1/2">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {article.date}
                </p>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {article.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{article.snippet}</p>
                <Link href={`/news/${article.id}`}>
                  <button className="bg-linear-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300">
                    Read More
                  </button>
                </Link>
              </div>

              {/* Image */}
              <div className="md:w-1/2 relative h-80 md:h-96 rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
