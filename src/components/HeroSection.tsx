import { useClickIdFlow } from "@/hooks/useClickIdFlow";
import PreSellPage from "./PreSellPage";
import VSLPage from "./VSLPage";
import WhitePage from "./WhitePage";

const HeroSection = () => {
  const { currentView } = useClickIdFlow();

  return (
    <>
      {currentView === "presell" && <PreSellPage />}
      {currentView === "vsl" && <VSLPage />}
      {currentView === "white" && <WhitePage />}
    </>
  );
};

export default HeroSection;
