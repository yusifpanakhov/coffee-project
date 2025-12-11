import React from "react";

const testimonials = [
  {
    name: "James Smith",
    role: "Entrepreneur",
    rating: 4,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    name: "James Smith",
    role: "Entrepreneur",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    name: "James Smith",
    role: "Entrepreneur",
    rating: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.157c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.068 9.384c-.783-.57-.38-1.81.588-1.81h4.157a1 1 0 00.95-.69l1.286-3.957z" />
        </svg>
      ))}
    </div>
  );
};

export default function CoffeeSection() {
  return (
    <div className="w-full">
      <div className="bg-beige-100 flex justify-between items-center px-8 py-16">
        <div>
          <h1 className="text-3xl font-semibold mb-4">Check Out Our Best Coffee Beans</h1>
          <button className="bg-black text-white px-6 py-2 rounded-full">Explore Our Products</button>
        </div>
        <img src="/path/to/coffee-beans.png" alt="Coffee Beans" className="w-64 h-auto" />
      </div>

      <div className="text-center py-16 px-4">
        <h2 className="text-xl font-semibold mb-2">Come and Join</h2>
        <p className="text-gray-500 mb-8">OUR HAPPY CUSTOMERS</p>

        <div className="flex justify-center gap-8 flex-wrap">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-xl max-w-sm shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src="/path/to/avatar.jpg"
                  alt={t.name}
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div>
                  <h3 className="font-semibold">{t.name}</h3>
                  <p className="text-gray-500 text-sm">{t.role}</p>
                  <StarRating rating={t.rating} />
                </div>
              </div>
              <p className="text-gray-700">{t.text}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
        </div>
      </div>
    </div>
  );
}
