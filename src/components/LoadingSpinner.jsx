/* By Viswanathan Lakshmanan */
import React from "react";
import "../css/loadingSpinner.css";

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner" role="status" aria-label="Loading">
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingSpinner;
