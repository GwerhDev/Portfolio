import { useEffect, useState } from "react";
import { DesktopNavigator } from "./DesktopNavigator";
import { MobileNavigator } from "./MobileNavigator";

export const Navigator = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile ? <MobileNavigator /> : <DesktopNavigator />;
};