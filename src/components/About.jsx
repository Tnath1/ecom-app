import "./css/about.css";

const metrics = [
  { value: "12K+", label: "Happy shoppers" },
  { value: "320+", label: "Curated products" },
  { value: "24/7", label: "Customer care" },
];

const values = [
  {
    title: "Thoughtful selection",
    text: "We focus on practical, well-designed essentials that feel easy to discover and even easier to trust.",
  },
  {
    title: "Simple shopping",
    text: "From browsing to checkout, every part of the experience is designed to stay clear, calm, and familiar.",
  },
  {
    title: "Everyday value",
    text: "We balance quality, pricing, and presentation so the store feels useful, not overwhelming.",
  },
];

const About = () => {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-copy">
          <p className="about-eyebrow">About Bandage</p>
          <h1>Built to make everyday shopping feel lighter.</h1>
          <p className="about-lead">
            Bandage is a modern storefront experience focused on clean design,
            useful product discovery, and a smoother path from browsing to
            buying.
          </p>
        </div>

        <div className="about-metrics">
          {metrics.map((metric) => (
            <div className="about-metric-card" key={metric.label}>
              <h2>{metric.value}</h2>
              <p>{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about-story">
        <div className="about-story-card">
          <p className="about-section-label">Our Story</p>
          <h2>A storefront shaped around clarity, trust, and ease.</h2>
          <p>
            We wanted the experience to feel polished without becoming busy.
            That means cleaner layouts, direct product access, and a shopping
            flow that feels approachable whether someone is exploring for the
            first time or coming back to buy again.
          </p>
          <p>
            The goal is simple: make product browsing feel more confident and
            less noisy, while keeping the visual identity sharp and modern.
          </p>
        </div>
      </section>

      <section className="about-values">
        <div className="about-values-heading">
          <p className="about-section-label">What Matters</p>
          <h2>The principles behind the experience.</h2>
        </div>

        <div className="about-values-grid">
          {values.map((value) => (
            <article className="about-value-card" key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default About;
