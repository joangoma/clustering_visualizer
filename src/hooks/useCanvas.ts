import { useEffect } from 'react';

const useCanvas = (canvasRef: React.RefObject<HTMLCanvasElement>) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Handle canvas drawing logic here
      }
    }
  }, [canvasRef]);
};

export default useCanvas;
