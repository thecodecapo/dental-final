// src/components/Preloader.js
import React, { useState, useEffect } from 'react';
import '../assets/css/preloader.css';

const Preloader = ({ onFinish }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => {
        const newCount = prevCount + 5;
        if (newCount >= 100) {
          clearInterval(interval);
          return 100;
        }
        return newCount;
      });
    }, 100);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      onFinish();
    }, 2100);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onFinish]);

  return (
    <div className="preloader">
      <div className="preload__counter">{count}</div>
    </div>
  );
};

export default Preloader;
