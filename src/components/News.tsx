import Image from "next/image";

export type NewsItem = {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
};

type NewsProps = {
  news: NewsItem;
};

export default function News({ news }: NewsProps) {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Image
        src={news.image}
        alt={news.title}
        width={400}
        height={250}
        className="w-full h-56 object-cover"
      />
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {news.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          {news.date}
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-sm">
          {news.description}
        </p>
      </div>
    </div>
  );
}
