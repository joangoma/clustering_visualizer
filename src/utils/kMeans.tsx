import { Point, Centroid } from '../models/Point';

const getDistance = (p1: Point | Centroid, p2: Point | Centroid): number => {
  return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
};

// Assign each point to the nearest centroid (step 1)
const assignPointsToCentroids = (points: Point[], centroids: Centroid[]): Point[] => {
  return points.map(point => {
    let nearestCentroid = centroids[0];
    let minDistance = getDistance(point, centroids[0]);

    centroids.forEach(centroid => {
      const distance = getDistance(point, centroid);
      if (distance < minDistance) {
        minDistance = distance;
        nearestCentroid = centroid;
      }
    });

    return { ...point, cluster: nearestCentroid.cluster };
  });
};

// Recalculate centroid positions based on assigned points (step 2)
const recalculateCentroids = (points: Point[], centroids: Centroid[], k: number): Centroid[] => {
  const newCentroids: Centroid[] = centroids.map((centroid, i) => {
    const clusterPoints = points.filter(point => point.cluster === i);
    const meanX = clusterPoints.reduce((acc, p) => acc + p.x, 0) / clusterPoints.length || centroid.x;
    const meanY = clusterPoints.reduce((acc, p) => acc + p.y, 0) / clusterPoints.length || centroid.y;
    return { ...centroid, x: meanX, y: meanY };
  });

  return newCentroids;
};

// Perform one step of k-means (for animation)
export const kMeansStepwise = (points: Point[], centroids: Centroid[], k: number) => {
  const updatedPoints = assignPointsToCentroids(points, centroids);
  const updatedCentroids = recalculateCentroids(updatedPoints, centroids, k);

  return {
    updatedPoints,
    updatedCentroids,
  };
};
