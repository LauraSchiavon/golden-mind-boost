import heroImage from "@/assets/capa.webp";

interface PreSellPageProps {
  onGoToWhite?: () => void;
}

const PreSellPage = ({ onGoToWhite }: PreSellPageProps) => {
  return (
    <main className="main-container">
      <div className="content-wrapper">
        {/* Text Section */}
        <div className="text-section">
          <div className="main-text">
            {`I was just a farmer from Texas.
I never really understood how the draws worked.

Then I saw a short video about an AI that looks at patterns and timing most people miss.

I'm doing this every week

Just a different way to see the numbers can change everything.

👉 Watch the free video`}
          </div>
        </div>

        {/* Image + CTA Section */}
        <div className="image-section">
          <div className="image-container">
            <img
              src={heroImage}
              alt="AI Pattern Analysis"
              width={635}
              height={357}
              loading="eager"
            />
          </div>

          <button className="cta-btn" id="cta-bottom" onClick={onGoToWhite}>
            CLICK TO WATCH
          </button>
        </div>
      </div>
    </main>
  );
};

export default PreSellPage;
