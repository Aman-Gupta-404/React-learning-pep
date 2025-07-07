import React, { useEffect, useMemo, useRef, useState } from "react";

function Test() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);

    window.addEventListener("offline", handleOffline);

    // Cleanup
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Internet Connection Status</h1>
      <h2 style={{ color: isOnline ? "green" : "red" }}>
        {isOnline ? "🟢 You are Online" : "🔴 You are Offline"}
      </h2>
    </div>
  );
}

export default Test;
