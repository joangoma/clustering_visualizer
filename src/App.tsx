import React, { useState, useRef } from 'react';
import './App.css';
import ControlPanel from './components/ControlPanel';
import Canvas from './components/Canvas';
import { Point, Centroid } from './models/Point';
import { kMeansStepwise } from './utils/kMeans';

const getRandomPoints = (numPoints: number, rangeX: [number, number], rangeY: [number, number]): Point[] => {
  const points: Point[] = [];
  for (let i = 0; i < numPoints; i++) {
    const x = Math.random() * (rangeX[1] - rangeX[0]) + rangeX[0];
    const y = Math.random() * (rangeY[1] - rangeY[0]) + rangeY[0];
    points.push({ x, y });
  }
  return points;
};

const getRandomCentroids = (k: number, rangeX: [number, number], rangeY: [number, number]): Centroid[] => {
  const centroids: Centroid[] = [];
  for (let i = 0; i < k; i++) {
    const x = Math.random() * (rangeX[1] - rangeX[0]) + rangeX[0];
    const y = Math.random() * (rangeY[1] - rangeY[0]) + rangeY[0];
    centroids.push({ x, y, cluster: i });
  }
  return centroids;
};

const App: React.FC = () => {
  const [k, setK] = useState<number>(3);
  const [numPoints, setNumPoints] = useState<number>(50); 
  const [points, setPoints] = useState<Point[]>([]);
  const [centroids, setCentroids] = useState<Centroid[]>([]);
  const [isRunning, setIsRunning] = useState<boolean>(false); // Animation control
  const iterationRef = useRef<number>(0); // Track iterations

  // Function to generate random points and centroids
  const generatePointsAndCentroids = () => {
    const randomPoints = getRandomPoints(numPoints, [50, 450], [50, 450]);
    const randomCentroids = getRandomCentroids(k, [50, 450], [50, 450]);
    setPoints(randomPoints);
    setCentroids(randomCentroids);
    iterationRef.current = 0;
  };

  // Function to animate k-means clustering
  const animateKMeans = () => {
    if (iterationRef.current >= 10) { // Set maximum iterations or convergence check
      setIsRunning(false);
      return;
    }

    const { updatedPoints, updatedCentroids } = kMeansStepwise(points, centroids, k);
    
    // Update points and centroids step by step
    setPoints(updatedPoints);
    setCentroids(updatedCentroids);

    iterationRef.current += 1;
    
    // Continue animation
    setTimeout(() => {
      if (isRunning) {
        animateKMeans();
      }
    }, 1000); // Adjust the speed of the animation (1 second between steps)
  };

  // Start the clustering animation
  const startClustering = () => {
    if (!isRunning) {
      setIsRunning(true);
      animateKMeans();
    }
  };

  const pauseClustering = () => {
    setIsRunning(false); // Stop the animation
  };

  return (
    <div className="App">
      <ControlPanel
        k={k}
        setK={setK}
        numPoints={numPoints}
        setNumPoints={setNumPoints}
        onGenerate={generatePointsAndCentroids}
        onCluster={startClustering}
        onPause={pauseClustering}
        onReset={() => {
          setPoints([]);
          setCentroids([]);
          setIsRunning(false);
          iterationRef.current = 0;
        }}
      />
      <Canvas points={points} centroids={centroids} />
    </div>
  );
};

export default App;
