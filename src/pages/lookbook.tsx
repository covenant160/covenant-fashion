import Image from "next/image";

const lookbookGallery = [
  "/images/look1.jpg",
  "/images/footwear2.jpg",
  "/images/look3.jpg",
  "/images/footwear4.jpg",
  "/images/look5.jpg",
  "/images/footwear1.jpg",
];

export default function Lookbook() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-900 py-20 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12">
          The Full Lookbook
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {lookbookGallery.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:scale-105"
            >
              <Image
                src={image}
                alt={`Lookbook image ${index + 1}`}
                width={400}
                height={400}
                className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
