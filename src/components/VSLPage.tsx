import { useEffect } from "react";

const VSLPage = () => {
  const handleCtaClick = () => {
    const params = window.location.search || "";
    window.location.href = `https://ih.selorynax.online/preclick${params}`;
  };

  useEffect(() => {
    // Carrega player VTurb
    const script = document.createElement("script");
    script.src =
      "https://scripts.converteai.net/0c720c90-e7e2-43bb-bf68-a9f95307d607/players/69540ead818b1961afdbdd18/v4/player.js";
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return (
    <main className="a-b-cont">
      {/* VIDEO */}
      <section
        style={{
          background: "#000",
          paddingTop: "16px",
          paddingBottom: "16px",
        }}
      >
        <div
          style={{
            maxWidth: "1222px",
            margin: "0 auto",
            padding: "0 2%",
          }}
        >
          <div style={{ aspectRatio: "16 / 9" }}>
            <vturb-smartplayer
              id="vid-69540ead818b1961afdbdd18"
              style={{ display: "block", width: "100%" }}
            ></vturb-smartplayer>
          </div>
        </div>
      </section>

      {/* CTA (DELAY CONTROLADO PELO PLAYER) */}
      <section
        className="atomicat-delay"
        style={{
          background: "#000",
          paddingBottom: "100px",
          textAlign: "center",
        }}
      >
        <button
          onClick={handleCtaClick}
          style={{
            background: "rgba(34, 206, 73, 1)",
            fontSize: "30px",
            padding: "15px",
            boxShadow: "0px 0px 10px rgba(16,133,33,1)",
            borderRadius: "10px",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          CLICK HERE TO BUY
        </button>
      </section>

      {/* DISCLAIMER */}
      <section
        style={{
          background: "#1a1a1a",
          color: "#dedada",
          padding: "32px 16px",
          fontSize: "14px",
          lineHeight: "1.5",
          maxWidth: "803px",
          margin: "0 auto",
          textAlign: "justify",
        }}
      >
        <p>
          This content features AI-generated avatars and voiceovers. Predictions
          are for entertainment and educational purposes only. Results are not
          guaranteed, and past patterns do not ensure future outcomes.
          <br />
          <br />
          You must be 18 years or older to participate. Lottery games involve
          risk and should be played responsibly.
          <br />
          <br />
          This information does not constitute financial or gambling advice.
        </p>
      </section>

      {/* FOOTER LINKS */}
      <footer
        style={{
          background: "#1a1a1a",
          paddingBottom: "48px",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          fontSize: "14px",
        }}
      >
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/term-of-use">Term of Use</a>
        <a href="/cookies-policy">Cookies Policy</a>
        <a href="/cancellation-and-refunds">Cancellation and Refunds</a>
        <a href="/disclaimer">Disclaimer</a>
      </footer>
    </main>
  );
};

export default VSLPage;
