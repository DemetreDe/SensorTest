import React, { useEffect, useState } from "react";
import { Motion } from "@capacitor/motion";

const MagnetometerModule: React.FC = () => {
  const [magnetData, setMagnetData] = useState<{ heading: number }>({
    heading: 0,
  });

  useEffect(() => {
    // Magnetometer/compass listener (using orientation data)
    const magnetListener = Motion.addListener("orientation", (event) => {
      // event.alpha generally provides magnetic heading in degrees
      setMagnetData({
        heading: event.alpha,
      });
    });

    return () => {
      magnetListener.remove();
    };
  }, []);

  return (
    <div>
      <h2>Magnetometer</h2>
      <p>Heading (degrees): {magnetData.heading.toFixed(2)}</p>
    </div>
  );
};

export default MagnetometerModule;
