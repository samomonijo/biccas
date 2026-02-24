import { useState, useEffect } from "react";
import OfflineUI from "./OfflineUI";

import Navbar from "./Navbar";
import Productivity from "./Productivity";
import Teams from "./Teams";

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      window.location.reload(); // reload when back online
    };
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <>
      {/* <link rel="icon" type="image/svg+xml" href="" /> */}

      {isOnline ? (
          <div className="font-[Inter]">
            <Navbar />
            <Productivity />
            <Teams />
          </div>
        ) : (
          <OfflineUI /> 
        )
      }
    </>
  );
};

export default App;