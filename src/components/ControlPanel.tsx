import React from 'react';

interface ControlPanelProps {
  k: number;
  setK: (k: number) => void;
  numPoints: number;
  setNumPoints: (num: number) => void;
  onGenerate: () => void;
  onCluster: () => void;
  onPause: () => void;
  onReset: () => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({
  k,
  setK,
  numPoints,
  setNumPoints,
  onGenerate,
  onCluster,
  onPause,
  onReset,
}) => {
  return (
    <div className="control-panel">
      <label>
        Number of Clusters (k):
        <input
          type="number"
          value={k}
          onChange={(e) => setK(parseInt(e.target.value))}
        />
      </label>
      <label>
        Total Number of Points:
        <input
          type="number"
          value={numPoints}
          onChange={(e) => setNumPoints(parseInt(e.target.value))}
        />
      </label>
      <button onClick={onGenerate}>Generate Points & Centroids</button>
      <button onClick={onCluster}>Start k-Means Clustering</button>
      <button onClick={onPause}>Pause</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default ControlPanel;
