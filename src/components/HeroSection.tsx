import { useClickIdFlow } from "@/hooks/useClickIdFlow";
import PreSellPage from "./PreSellPage";
import VSLPage from "./VSLPage";
import WhitePage from "./WhitePage";

const HeroSection = () => {
  const { currentView, handleContinue } = useClickIdFlow();

  return (
    <>
      {currentView === "presell" && <PreSellPage onContinue={handleContinue} />}
      {currentView === "vsl" && <VSLPage />}
      {currentView === "white" && <WhitePage />}
    </>
  );
};

export default HeroSection;
