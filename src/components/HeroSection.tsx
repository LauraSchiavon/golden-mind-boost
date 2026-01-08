import { useState } from "react";
import PreSellPage from "./PreSellPage";
import WhitePage from "./WhitePage";

type PageView = "presell" | "white";

const HeroSection = () => {
  const [currentView, setCurrentView] = useState<PageView>("presell");

  return (
    <>
      {currentView === "presell" && <PreSellPage onGoToWhite={() => setCurrentView("white")} />}
      {currentView === "white" && <WhitePage />}
    </>
  );
};

export default HeroSection;
