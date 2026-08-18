import React from 'react';

const Home = () => {
  return (
    <div className="absolute top-8 bottom-0 left-0 right-0 -z-10 flex items-center justify-center overflow-hidden bg-black">
      {/* Background Wallpaper */}
      <img 
        src="/images/wallpaper.png" 
        alt="Wallpaper"
        className="w-full h-full object-cover object-center opacity-85"
        style={{ imageRendering: 'high-quality' }}
      />
    </div>
  );
};

export default Home;
