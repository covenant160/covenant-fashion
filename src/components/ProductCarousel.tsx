import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper"; // ✅ correct import
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Product = {
  id: number;
  name: string;
  price: string;
  img: string;
};

const featuredProducts: Product[] = [
  { id: 1, name: "Classic Jacket", price: "$120", img: "/images/product1.jpg" },
  { id: 2, name: "Street Hoodie", price: "$70", img: "/images/product2.jpg" },
  { id: 3, name: "Denim Fit", price: "$85", img: "/images/product3.jpg" },
  { id: 4, name: "Oversized Tee", price: "$40", img: "/images/product4.jpg" },
  { id: 5, name: "Leather Boots", price: "$150", img: "/images/product5.jpg" },
  { id: 6, name: "Beanie Hat", price: "$25", img: "/images/product6.jpg" },
];

export default function ProductCarousel() {
  return (
    <div className="w-full py-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {featuredProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="font-bold text-lg">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
