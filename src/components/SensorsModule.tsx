import React, { useEffect, useState } from "react";
import { Motion } from "@capacitor/motion";

const SensorsModule: React.FC = () => {
  const [accelData, setAccelData] = useState<{ x: number; y: number; z: number }>({
    x: 0,
    y: 0,
    z: 0,
  });
  const [gyroData, setGyroData] = useState<{ alpha: number; beta: number; gamma: number }>({
    alpha: 0,
    beta: 0,
    gamma: 0,
  });

  useEffect(() => {
    // Accelerometer listener
    const accelListener = Motion.addListener("accel", (event) => {
      setAccelData({ x: event.acceleration.x, y: event.acceleration.y, z: event.acceleration.z });
    });

    // Gyroscope listener
    const gyroListener = Motion.addListener("orientation", (event) => {
      setGyroData({ alpha: event.alpha, beta: event.beta, gamma: event.gamma });
    });

    return () => {
      accelListener.remove();
      gyroListener.remove();
    };
  }, []);

  return (
    <div>
      <h2>Accelerometer</h2>
      <p>X: {accelData.x.toFixed(2)}</p>
      <p>Y: {accelData.y.toFixed(2)}</p>
      <p>Z: {accelData.z.toFixed(2)}</p>

      <h2>Gyroscope</h2>
      <p>Alpha: {gyroData.alpha.toFixed(2)}</p>
      <p>Beta: {gyroData.beta.toFixed(2)}</p>
      <p>Gamma: {gyroData.gamma.toFixed(2)}</p>
    </div>
  );
};

export default SensorsModule;
