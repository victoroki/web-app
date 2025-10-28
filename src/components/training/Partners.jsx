import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AH from '../img/ah.jpeg';
import Denidev from '../img/senidev.jpeg';
import notion from '../img/notion.jpeg';
import gogreen from '../img/gogreen.png';
import React, { useState } from 'react';
import Slider from 'react-slick';

const LogoSlider = () => {
  const [settings] = useState({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, centerMode: true, centerPadding: '20px' },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, centerMode: true, centerPadding: '30px' },
      },
    ],
  });

  const partners = [
    { src: AH, alt: 'AH Logo', url: 'https://www.linkedin.com/company/engr-aziz-ul-hassan/' },
    { src: Denidev, alt: 'Senidev Logo', url: 'https://senidev.org/' },
    { src: notion, alt: 'Notions Logo', url: 'https://www.solarnotions.com' },
    { src: gogreen, alt: 'GoGreen Logo', url: 'https://greengoldsolarsolutions.co.ke/' },
  ];

  return (
    <div className="py-8 sm:py-12 bg-[#eadcc8]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 tracking-wide text-[#994a0c]">
          Our Trusted Partners
        </h2>

        <Slider {...settings}>
          {partners.map((partner, index) => (
            <a 
              key={index} 
              href={partner.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block px-2 sm:px-4 focus:outline-none group"
            >
              <div className="flex flex-col items-center">
                <div className="relative p-1 rounded-full bg-gradient-to-br from-[#994a0c] to-[#7a3a0a] group-hover:from-[#b3591d] group-hover:to-[#994a0c] transition-all duration-500">
                  <div className="p-1 bg-[#eadcc8] rounded-full">
                    <img
                      src={partner.src}
                      alt={partner.alt}
                      className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-cover rounded-full border-4 border-[#eadcc8] group-hover:border-[#994a0c] transition-all duration-300"
                    />
                  </div>
                </div>
                <span className="mt-3 text-xs sm:text-sm md:text-base font-medium text-[#7a3a0a] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Visit {partner.alt.split(' ')[0]}
                </span>
              </div>
            </a>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LogoSlider;
