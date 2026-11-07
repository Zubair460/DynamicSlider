import React, { useState } from 'react';

export default function DynamicSlider() {
  const data = [
    { 
      id: 1, 
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee", 
      heading: "Desert Highway Roadtrip", 
      description: "An endless highway stretches through a deep valley of massive red rock canyon walls under a clear, bright sky." 
    },
    { 
      id: 2, 
      img: "https://images.unsplash.com/photo-1519608487953-e999c86e7455", 
      heading: "Cyberpunk City Nights", 
      description: "Vibrant neon pink and deep blue lighting illuminate an empty urban street with tram tracks after dark." 
    },
    { 
      id: 3, 
      img: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e", 
      heading: "Beautiful Mountain Escape", 
      description: "A breathtaking mountain landscape surrounded by crystal-clear lakes, green forests, and snow-covered peaks under a beautiful blue sky." 
    },
    { 
      id: 4, 
      img: "https://images.unsplash.com/photo-1518837695005-2083093ee35b", 
      heading: "Peaceful Ocean Adventure", 
      description: "Experience the beauty of the ocean with stunning blue waves, a peaceful coastline, and endless views of the sea." 
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const lastIndex = data.length - 1;

  // Handles moving to the next slide with infinite loop wrapping
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === lastIndex ? 0 : prevIndex + 1));
  };

  // Handles moving to the previous slide with infinite loop wrapping
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? lastIndex : prevIndex - 1));
  };

  return (
    <div>
      <h1>Dynamic Slider</h1>
      <button onClick={handlePrev}> Previous </button>
      <button onClick={handleNext}> Next </button>
      
      <div className='relative h-[400px] w-[60%] m-auto border-4 rounded-2xl overflow-hidden top-[10%]'>
        {data.map((ele, idx) => {
          let position = "nextSlide";
          
          // Fixed: Changed 'index' to 'currentIndex'
          if (idx === currentIndex) {
            position = "activeSlide";
          }
          if (idx === currentIndex - 1 || (currentIndex === 0 && idx === lastIndex)) {
            position = 'previousSlide';
          }

          return (
            // Fixed: Changed 'let-[0]' to 'left-0'
            <div className={`${position} absolute top-0 left-0 w-full h-full`} key={ele.id}>
              <h1>{ele.id}</h1>
              <img className='w-[200px] h-[200px]' src={ele.img} alt={ele.heading} />
              <h1>{ele.heading}</h1>
              <p>{ele.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
