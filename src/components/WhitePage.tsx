import { Button } from "@/components/ui/button";

const WhitePage = () => {
  const handleCtaClick = () => {
    const currentParams = window.location.search;
    window.location.href = `https://ih.selorynax.online/preclick${currentParams}`;
  };

  return (
    <main className="min-h-screen bg-background">
      <section className="container py-8 md:py-16">
        <header className="text-center mb-10">
          <h1 className="font-heading text-2xl md:text-4xl font-bold text-foreground mb-4">
            Welcome to <span className="text-primary">Clarity Brew</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Your journey to enhanced cognitive wellness starts here
          </p>
        </header>

        <article className="max-w-3xl mx-auto">
          <div className="bg-card rounded-lg p-6 md:p-10 border border-border mb-8">
            <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-4">
              About Our Mission
            </h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                At Clarity Brew, we are dedicated to providing science-backed
                solutions for cognitive health and mental clarity. Our team of
                experts has spent years researching natural approaches to brain
                wellness.
              </p>
              <p>
                We believe everyone deserves access to information that can help
                them maintain sharp, focused minds throughout their lives. Our
                methods are designed to be simple, effective, and accessible to
                all.
              </p>
              <p>
                Join thousands of individuals who have already discovered the
                benefits of our holistic approach to brain health.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-card rounded-lg p-6 border border-border text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">
                Research-Backed
              </h3>
              <p className="text-sm text-muted-foreground">
                Methods based on scientific studies
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">
                Quick & Easy
              </h3>
              <p className="text-sm text-muted-foreground">
                Simple daily habits that fit your life
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">
                Natural Approach
              </h3>
              <p className="text-sm text-muted-foreground">
                Holistic wellness for your mind
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button
              variant="cta"
              size="cta"
              onClick={handleCtaClick}
              className="mx-auto"
            >
              LEARN MORE
            </Button>
          </div>
        </article>
      </section>
    </main>
  );
};

export default WhitePage;
