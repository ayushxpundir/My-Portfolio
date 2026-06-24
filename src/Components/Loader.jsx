import { useState, useEffect } from "react";

// 1. Accept the onLoaded prop from App.jsx
function Loader({ onLoaded }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      // small delay so it doesn't feel like a flicker
      setTimeout(() => {
        setLoading(false);
        
        // 2. Tell App.jsx that loading is finished so it can start the fade-in!
        if (onLoaded) {
          onLoaded();
        }
      }, 500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, [onLoaded]); // Added onLoaded to the dependency array

  if (!loading) return null;

  return (
    <div className="loader-screen">
      <div className="loader-spinner"></div>
    </div>
  );
}

export default Loader;