import React from 'react';
import { Star, MapPin } from 'lucide-react';

/**
 * Interface for Dive Shop Data
 */
interface DiveShop {
  name: string;
  location: string;
  rating: number;
  reviews: number;
  tag: string;
  imageUrl: string;
}

/**
 * Mock data strictly following the provided image content
 */
const diveShops: DiveShop[] = [
  {
    name: "Blue Ocean Dive Center",
    location: "Maldives",
    rating: 4.9,
    reviews: 256,
    tag: "PADI 5 Star Resort",
    imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Red Sea Divers",
    location: "Hurghada, Egypt",
    rating: 4.8,
    reviews: 189,
    tag: "Wreck Diving Specialists",
    imageUrl: "/red-sea-divers.jpg",
  },
  {
    name: "Bali Dive Paradise",
    location: "Bali, Indonesia",
    rating: 4.9,
    reviews: 342,
    tag: "Coral Reef Exploration",
    imageUrl: "/bali-dive.jpg",
  },
  {
    name: "Tropical Diving Thailand",
    location: "Koh Tao, Thailand",
    rating: 4.7,
    reviews: 425,
    tag: "Beginner Friendly",
    imageUrl: "/thailand-dive.jpg",
  },
  {
    name: "Caribbean Blue Diving",
    location: "Cozumel, Mexico",
    rating: 4.8,
    reviews: 298,
    tag: "Drift Diving Experts",
    imageUrl: "caribbean.jpg",
  },
  {
    name: "Great Barrier Adventures",
    location: "Cairns, Australia",
    rating: 4.9,
    reviews: 512,
    tag: "Marine Conservation",
    imageUrl: "barrier.jpg",
  },
];

const FeaturedDiveShops = () => {
  return (
    <section className="w-full bg-[#EBF5FF] py-20 px-4 md:px-8 lg:px-16 font-sans">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-[#1B365D] text-3xl md:text-4xl font-bold mb-4">
            Featured Dive Shops
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            Explore top-rated dive centers from around the world, trusted by thousands of divers
          </p>
        </div>

        {/* Dive Shops Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {diveShops.map((shop, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] hover:shadow-2xl transition-all duration-300 group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={shop.imageUrl} 
                  alt={shop.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>

              {/* Content Container */}
              <div className="p-8 text-left">
                <h3 className="text-[#1B365D] text-xl font-bold mb-2 group-hover:text-[#00AEEF] transition-colors">
                  {shop.name}
                </h3>
                
                <div className="flex items-center gap-1.5 text-gray-400 text-sm font-medium mb-4">
                  <MapPin size={16} className="text-[#00AEEF]" />
                  {shop.location}
                </div>

                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center gap-1.5">
                    <Star size={18} className="text-orange-400 fill-orange-400" />
                    <span className="text-[#1B365D] font-bold text-sm">{shop.rating}</span>
                    <span className="text-gray-400 text-sm">({shop.reviews})</span>
                  </div>
                  
                  <span className="bg-[#EBF8FF] text-[#00AEEF] text-[11px] font-bold px-3 py-1.5 rounded-lg border border-[#D0EFFF]">
                    {shop.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="bg-white border-2 border-[#00AEEF]/20 text-[#00AEEF] hover:bg-[#00AEEF] hover:text-white hover:border-[#00AEEF] px-12 py-3.5 rounded-xl font-bold text-base transition-all duration-300 shadow-sm active:scale-95">
            View All Dive Shops
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDiveShops;