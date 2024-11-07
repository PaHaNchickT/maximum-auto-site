import { useState, useEffect } from 'react';

export const useResize = (): number => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);

    const handleResize = (event: Event): void => {
      setWidth((event.target as Window).innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return (): void => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return width;
};
