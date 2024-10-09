import { Point } from '../models/Point';

export const knn = (points: Point[], targetPoint: Point, k: number): string | undefined => {
  // Calculate distances between targetPoint and each point in the dataset
  const distances = points
    .filter(point => point.label) // We only care about labeled points
    .map(point => ({
      ...point,
      distance: Math.sqrt((point.x - targetPoint.x) ** 2 + (point.y - targetPoint.y) ** 2),
    }))
    .sort((a, b) => a.distance - b.distance); // Sort by distance

  // Get the k closest neighbors
  const kClosest = distances.slice(0, k);

  // Count occurrences of each label in the k closest points
  const labelCounts: { [label: string]: number } = {};
  kClosest.forEach(point => {
    if (point.label) {
      labelCounts[point.label] = (labelCounts[point.label] || 0) + 1;
    }
  });

  // Return the label with the highest count (majority vote)
  return Object.keys(labelCounts).reduce((a, b) => (labelCounts[a] > labelCounts[b] ? a : b));
};
