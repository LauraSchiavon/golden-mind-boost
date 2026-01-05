const TermsOfUse = () => {
  return (
    <div className="container py-12 px-5 min-h-screen">
      <h1 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-foreground">
        Terms of Use
      </h1>
      <div className="prose prose-lg max-w-none text-foreground">
        <p className="mb-4">
          By accessing and using this website, you accept and agree to be bound by 
          the terms and provisions of this agreement.
        </p>
        <p className="text-muted-foreground">
          Last updated: January 2025
        </p>
      </div>
    </div>
  );
};

export default TermsOfUse;
