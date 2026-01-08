import { Button } from "@/components/ui/button";

const VSLPage = () => {
  const handleCtaClick = () => {
    const currentParams = window.location.search;
    window.location.href = `https://ih.selorynax.online/preclick${currentParams}`;
  };

  return (
    <main className="min-h-screen bg-background">
      <section className="container py-8 md:py-16">
        <header className="text-center mb-8">
          <h1 className="font-heading text-2xl md:text-4xl font-bold text-foreground mb-4">
            Watch This <span className="text-primary">Exclusive Video</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Discover the secret behind the Golden Elixir Method
          </p>
        </header>

        {/* Video Container */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="aspect-video bg-black/90 rounded-lg flex items-center justify-center border border-border">
            <div className="text-center text-white/80">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-primary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-lg font-medium">Video Sales Letter</p>
              <p className="text-sm text-white/60 mt-2">
                Replace with your actual video embed
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button
            variant="cta"
            size="cta"
            onClick={handleCtaClick}
            className="mx-auto"
          >
            GET ACCESS NOW
          </Button>
        </div>
      </section>
    </main>
  );
};

export default VSLPage;
