import React, { useEffect, useRef } from 'react';
import { Point, Centroid } from '../models/Point';

// Define dynamic cluster colors
const clusterColors = ['blue', 'red', 'green', 'orange', 'purple'];

interface CanvasProps {
  points: Point[];
  centroids: Centroid[];
}

const Canvas: React.FC<CanvasProps> = ({ points, centroids }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const previousCentroids = useRef<Centroid[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    if (ctx && canvas) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw points with smooth color transition
      points.forEach(point => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 5, 0, 2 * Math.PI);
        ctx.fillStyle = clusterColors[point.cluster ?? 0];
        ctx.fill();
        ctx.stroke();
      });

      // Draw centroids with smooth movement
      centroids.forEach(centroid => {
        ctx.beginPath();
        ctx.arc(centroid.x, centroid.y, 10, 0, 2 * Math.PI);
        ctx.fillStyle = clusterColors[centroid.cluster];
        ctx.fill();
        ctx.stroke();
      });

      // Draw lines from points to centroids (optional for visualization)
      points.forEach(point => {
        const centroid = centroids.find(c => c.cluster === point.cluster);
        if (centroid) {
          ctx.beginPath();
          ctx.moveTo(point.x, point.y);
          ctx.lineTo(centroid.x, centroid.y);
          ctx.strokeStyle = '#aaa';
          ctx.stroke();
        }
      });
    }
  }, [points, centroids]);

  return <canvas ref={canvasRef} width={500} height={500} />;
};

export default Canvas;
