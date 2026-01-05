const Disclaimer = () => {
  return (
    <div className="container py-12 px-5 min-h-screen">
      <h1 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-foreground">
        Disclaimer
      </h1>
      <div className="prose prose-lg max-w-none text-foreground">
        <p className="mb-4">
          The information provided on this website is for general informational 
          purposes only. Individual results may vary.
        </p>
        <p className="text-muted-foreground">
          Last updated: January 2025
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;
