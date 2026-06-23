import { useState, useEffect } from "react";

function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      // small delay so it doesn't feel like a flicker
      setTimeout(() => setLoading(false), 500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!loading) return null;

  return (
    <div className="loader-screen">
      <div className="loader-spinner"></div>
    </div>
  );
}

export default Loader;