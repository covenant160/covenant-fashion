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
    <main className="min-h-screen bg-white dark:bg-zinc-900 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          The Full Lookbook
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {lookbookGallery.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={image}
                alt={`Lookbook image ${index + 1}`}
                width={400}
                height={400}
                className="w-full h-80 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
