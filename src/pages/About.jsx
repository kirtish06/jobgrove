export default function About() {
  const values = [
    {
      icon: "auto_awesome",
      title: "Curated listings",
      description:
        "Every job on JobGrove is hand-reviewed. No spam, no duplicates — just real opportunities from companies that are genuinely hiring.",
    },
    {
      icon: "volume_off",
      title: "Zero noise",
      description:
        "No popups, no ads, no dark patterns. Just a clean, focused experience so you can find what matters without distraction.",
    },
    {
      icon: "favorite",
      title: "Built with care",
      description:
        "JobGrove was built by someone who wanted a calmer way to job hunt. Every detail — from colors to copy — was chosen intentionally.",
    },
  ];

  const team = [
    { name: "Kirtish", role: "Founder & Developer", initial: "K" },
    { name: "Design", role: "UI / UX", initial: "D" },
    { name: "Community", role: "Growth & Support", initial: "C" },
  ];

  return (
    <main>
      {/* HERO */}
      <section className="hero-gradient py-24">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-on-surface mb-4 leading-tight">
            We built JobGrove for{" "}
            <span className="text-primary">people</span>,<br />
            not algorithms.
          </h1>
          <p className="text-lg text-on-surface-muted max-w-xl mx-auto">
            Job hunting is stressful enough. JobGrove exists to make it a
            little calmer, a little clearer, and a lot more human.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl border border-outline-light soft-shadow p-10 md:p-16 flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-on-surface mb-4">Our mission</h2>
            <p className="text-on-surface-muted leading-relaxed mb-4">
              Most job boards feel like scrolling through noise — irrelevant
              listings, expired posts, and endless redirects. We wanted
              something different.
            </p>
            <p className="text-on-surface-muted leading-relaxed">
              JobGrove is built around the idea that finding a job should feel
              like a calm, purposeful walk through a grove — not a sprint
              through a crowded marketplace. Every feature is designed to
              reduce friction and increase clarity.
            </p>
          </div>
          <div className="w-full md:w-64 h-64 bg-surface-low rounded-2xl flex items-center justify-center flex-shrink-0">
            <span className="material-symbols-outlined text-8xl text-primary">
              energy_savings_leaf
            </span>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-surface-low py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-on-surface mb-2">
              What we stand for
            </h2>
            <p className="text-on-surface-muted">
              Three principles that guide every decision we make.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white p-8 rounded-xl border border-outline-light soft-shadow hover-lift"
              >
                <div className="w-12 h-12 bg-surface-low rounded-xl flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-primary text-2xl">
                    {value.icon}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-on-surface mb-2">
                  {value.title}
                </h3>
                <p className="text-on-surface-muted text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-on-surface mb-2">
            The people behind JobGrove
          </h2>
          <p className="text-on-surface-muted">Small team, big care.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white p-8 rounded-xl border border-outline-light soft-shadow text-center w-48"
            >
              <div className="w-16 h-16 bg-surface-low rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl text-primary">
                {member.initial}
              </div>
              <p className="font-bold text-on-surface">{member.name}</p>
              <p className="text-xs text-on-surface-muted mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1200px] mx-auto px-6 pb-16">
        <div className="bg-primary rounded-3xl p-16 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Start exploring →
          </h2>
          <p className="text-primary-light mb-8 max-w-md mx-auto">
            Your next opportunity is already here. Go find it.
          </p>
          <a
            href="/jobs"
            className="inline-block bg-white text-primary px-10 py-3 rounded-full font-semibold hover:brightness-105 transition-all"
          >
            Browse Jobs
          </a>
        </div>
      </section>
    </main>
  );
}