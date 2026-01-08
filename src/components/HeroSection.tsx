import { useState } from "react";
import PreSellPage from "./PreSellPage";
import VSLPage from "./VSLPage";
import WhitePage from "./WhitePage";

type PageView = "presell" | "vsl" | "white";

const HeroSection = () => {
  const [currentView, setCurrentView] = useState<PageView>("presell");

  return (
    <>
      {currentView === "presell" && <PreSellPage onGoToWhite={() => setCurrentView("white")} />}
      {currentView === "vsl" && <VSLPage />}
      {currentView === "white" && <WhitePage onGoToVSL={() => setCurrentView("vsl")} />}
    </>
  );
};

export default HeroSection;
