import React from 'react';

// Header Navigation Component
export const Header = () => {
  return (
    <header className="flex justify-between items-center w-full max-w-7xl mx-auto px-6 py-8">
      <div className="font-extrabold text-2xl tracking-tighter">Zetein_</div>
    </header>
  );
};

// Hero Section with Search Domain Feature
export const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center py-24 px-4 text-center w-full max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-12 leading-tight">
        Explore <br /> the world of .xyz
      </h1>
      
      {/* Search Input Field */}
      <div className="relative w-full max-w-2xl mx-auto flex items-center">
        <input
          type="text"
          placeholder="[ Search your domain .xyz ]"
          className="w-full px-8 py-5 text-lg border-2 border-gray-200 rounded-full focus:outline-none focus:border-black transition-colors"
        />
        <button className="absolute right-3 bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
          Search
        </button>
      </div>
    </section>
  );
};

// Expandable Accordion for Features and History
export const FeaturesAccordion = () => {
  const accordionItems = [
    "Why Choose Us",
    "Why Choose .xyz",
    "Explore .xyz History"
  ];

  return (
    <section className="w-full max-w-3xl mx-auto py-16 px-6">
      <div className="flex flex-col gap-4">
        {accordionItems.map((item, index) => (
          <div 
            key={index} 
            className="flex justify-between items-center py-6 border-b border-gray-200 cursor-pointer group"
          >
            <span className="text-xl font-medium group-hover:text-gray-600 transition-colors">
              {item}
            </span>
            <span className="text-2xl font-light group-hover:text-gray-600 transition-colors">
              +
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

// Footer Component with Site Links and Copyright
export const Footer = () => {
  const footerLinks = [
    { label: "About Zetein", href: "#" },
    { label: "Why Choose Us", href: "#" },
    { label: "The .xyz World", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Use", href: "#" },
    { label: "Contact Us", href: "#" },
  ];

  return (
    <footer className="w-full bg-black text-white mt-auto pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        
        {/* Brand and Contact */}
        <div className="flex flex-col gap-4">
          <div className="font-extrabold text-3xl tracking-tighter mb-2">Zetein_</div>
          <a 
            href="mailto:hello@zetein.xyz" 
            className="text-gray-400 hover:text-white transition-colors text-lg"
          >
            hello@zetein.xyz
          </a>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 gap-y-4 gap-x-8">
          {footerLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              className="text-gray-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-gray-800 text-gray-500 text-sm">
        © 2026 Zetein All Rights Reserved.
      </div>
    </footer>
  );
};
