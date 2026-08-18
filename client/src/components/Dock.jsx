import React, { useRef } from "react";
import { Tooltip } from "react-tooltip";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { dockApps, locations } from "../constants/index";
import useWindowStore from "../store/window";
import useLocationStore from "../store/location";

const CONFIG = {
  baseWidth: 45,
  maxWidth: 85,
  distanceBoundary: 140,
};

const DockIcon = ({ mouseX, id, name, icon, canOpen = true, toggleApp }) => {
  const ref = useRef(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(
    distance,
    [-CONFIG.distanceBoundary, 0, CONFIG.distanceBoundary],
    [CONFIG.baseWidth, CONFIG.maxWidth, CONFIG.baseWidth]
  );

  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="aspect-square flex items-end mb-2 z-10"
    >
      <button
        type="button"
        className="dock-icon rounded-2xl overflow-hidden transition-all duration-200 shadow-md w-full h-full relative"
        aria-label={name}
        data-tooltip-id="dock-tooltip"
        data-tooltip-content={name}
        data-tooltip-delay-show={100}
        onClick={(e) => {
            e.stopPropagation();
            toggleApp({ id, canOpen });
        }}
      >
        <img
          src={`/images/${icon}`}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover pointer-events-none" 
        />
      </button>
    </motion.div>
  );
};

const Dock = () => {
  const mouseX = useMotionValue(Infinity);
  const { openWindow, closeWindow, windows } = useWindowStore() || { windows: {} };
  const { setActiveLocation } = useLocationStore();

  const toggleApp = (app) => {
    if (!app || !app.canOpen) return;

    if (app.id === "trash") {
        setActiveLocation(locations.trash);
        openWindow("finder");
        console.log("Opened Trash via Finder");
        return;
    }
    
    if (!windows[app.id]) {
        console.warn(`No window config found for ID: ${app.id}`);
        return;
    }

    console.log("Toggling App:", app.id); 

    const windowState = windows[app.id];

    if (windowState?.isOpen) {
        closeWindow(app.id);
    } else {
        openWindow(app.id);
    }
  };

  return (
    <section id="dock" className="z-[9999]">
      <motion.div
        className="dock-container"
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
      >
        {dockApps.map((app) => (
          <DockIcon
            key={app.id}
            mouseX={mouseX}
            toggleApp={toggleApp}
            {...app}
          />
        ))}

        <Tooltip
          id="dock-tooltip"
          place="top"
          className="dock-tooltip"
          offset={20}
        />
      </motion.div>
    </section>
  );
};

export default Dock;
