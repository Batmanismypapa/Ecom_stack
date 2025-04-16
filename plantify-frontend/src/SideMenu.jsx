import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const images = [
  'https://img.freepik.com/free-photo/volunteers-little-kid-planting-tree-covering-hole-ground_482257-91057.jpg?t=st=1744794909~exp=1744798509~hmac=ff864dbf83bb177a445a3e0e06592a5c4905797964641745fa1024c018830a5b&w=1380',
  'https://img.freepik.com/free-photo/elderly-person-children-holding-plant_1150-18573.jpg?t=st=1744794972~exp=1744798572~hmac=828fc6f4812995f1f966b2fbecce3c294f4ccd8f26c5a12f9ac15ad916d74ffb&w=1380',
  'https://img.freepik.com/free-photo/close-up-picture-hand-holding-planting-sapling-plant_1150-28360.jpg?t=st=1744794997~exp=1744798597~hmac=56c5cadf18defb22bdd50aeaf9b6eb883db04fd9a2d68cb9b89aeb325a307426&w=1380',
];

export default function SideMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Header */}
      <header className="bg-cyan-700 text-white p-4 text-center shadow-lg">
        <h1 className="text-2xl font-bold">My Website</h1>
      </header>

      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 bg-cyan-700 text-white p-2 rounded-md"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Side Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-cyan-700 text-white shadow-lg transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 z-40`}
      >
        <ul className="mt-16 space-y-4 p-4">
          <li className="p-2 hover:bg-emerald-600 rounded"><a href="#">Plants</a></li>
          <li className="p-2 hover:bg-emerald-600 rounded"><a href="#">Seeds</a></li>
          <li className="p-2 hover:bg-emerald-600 rounded"><a href="#">Nursery</a></li>
          <li className="p-2 hover:bg-emerald-600 rounded"><a href="#">Pesticides & Fertilizers</a></li>
          <li className="p-2 hover:bg-emerald-600 rounded"><a href="#">Gifts & Offers</a></li>
        </ul>
      </div>

      {/* Hero Section (Slider) */}
      <div className="mt-4">
        <div className="w-full h-[700px] overflow-hidden relative">
          <img
            src={images[currentImage]}
            alt="slider"
            className="w-full h-full object-cover rounded shadow-md transition-all duration-1000"
          />
          {/* Slider Dots */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentImage ? 'bg-white' : 'bg-gray-400'
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
