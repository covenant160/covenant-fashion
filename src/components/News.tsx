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
    <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <div className="relative w-full h-0 pb-[62.5%]"> 
        {/* Maintain aspect ratio 400x250 (250/400 = 62.5%) */}
        <Image
          src={news.image}
          alt={news.title}
          fill
          className="object-cover rounded-t-2xl"
          sizes="(max-width: 768px) 100vw, 400px"
          priority
        />
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {news.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{news.date}</p>
        <p className="text-gray-700 dark:text-gray-300 text-sm flex-1">{news.description}</p>
      </div>
    </div>
  );
}
