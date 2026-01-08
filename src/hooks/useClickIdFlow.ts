import { useState, useEffect } from "react";

type PageView = "presell" | "vsl" | "white";

export const useClickIdFlow = () => {
  const [currentView, setCurrentView] = useState<PageView>("presell");
  const [hasClickId, setHasClickId] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const clickId = params.get("clickid");
    setHasClickId(!!clickId);
  }, []);

  const handleContinue = () => {
    if (hasClickId) {
      setCurrentView("vsl");
    } else {
      setCurrentView("white");
    }
  };

  return {
    currentView,
    hasClickId,
    handleContinue,
  };
};
