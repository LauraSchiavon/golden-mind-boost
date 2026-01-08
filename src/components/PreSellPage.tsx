import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-product.png";

const PreSellPage = () => {
  const handleCtaClick = () => {
    const currentParams = window.location.search;
    window.location.href = `https://leo.serinavox.online/695ec8b8d375ea098c913926${currentParams}`;
  };
  return (
    <main>
      {/* Header Section */}
      <section className="container">
        <header className="pt-6 md:pt-12 pb-5 text-center px-2">
          <h1 className="font-heading text-2xl md:text-5xl font-bold leading-tight md:leading-[60px] tracking-tight text-foreground mb-5">
            Amplify Your Cognitive Power With This{" "}
            <span className="text-primary">Golden Elixir</span> Method
          </h1>
        </header>

        {/* Hero Image */}
        <div className="text-center mb-10">
          <img
            src={heroImage}
            alt="Golden Elixir Method - Brain Health Supplement"
            className="w-4/5 md:w-[540px] max-w-full h-auto inline-block"
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </section>

      {/* Content Section */}
      <section className="container pt-5 md:pt-10 pb-10">
        <Button
          variant="cta"
          size="cta"
          onClick={handleCtaClick}
          className="mx-auto block mb-5"
        >
          CLICK TO WATCH
        </Button>

        <article className="font-heading text-base md:text-[23px] font-normal leading-6 md:leading-[35px] tracking-tight text-foreground px-5 mb-5 text-justify md:text-left">
          <p className="mb-6">
            An acclaimed expert in neurology has unveiled a{" "}
            <strong>revolutionary approach</strong> proven to significantly
            boost brain health for countless individuals...
          </p>
          <p className="mb-6">
            This swift, 15-second daily habit offers a natural pathway to{" "}
            <strong>enhance your cognitive sharpness.</strong>
          </p>
          <p className="mb-6">
            Devised by a leading authority dedicated to{" "}
            <strong>holistic brain well-being</strong>, this technique is truly
            pioneering.
          </p>
          <p>
            The 'Clarity Brew' was expertly formulated to empower people to{" "}
            <strong>sustain vibrant, keen intellects.</strong>
          </p>
        </article>

        <Button
          variant="cta"
          size="cta"
          onClick={handleCtaClick}
          className="mx-auto block"
        >
          CLICK TO WATCH
        </Button>
      </section>
    </main>
  );
};

export default PreSellPage;
