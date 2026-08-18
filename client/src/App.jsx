import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar, Home, BootScreen, Dock } from "./components";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="relative w-full h-screen overflow-hidden bg-black">
  
      {isLoading && <BootScreen onComplete={() => setIsLoading(false)} />}

      <motion.div 
        className="w-full h-full"
        initial={{ scale: 1.1, filter: "blur(10px)" }} 
        animate={{ 
          scale: isLoading ? 1.1 : 1, 
          filter: isLoading ? "blur(10px)" : "blur(0px)" 
        }}
        transition={{ duration: 0.5, ease: "easeOut" }} 
      >
          <Home />
          <Navbar />
          {!isLoading && <Dock />}
      </motion.div>

    </main>
  );
};

export default App;
