import { Link } from "react-router-dom";
import jobs from "../data/jobs.json";
import JobCard from "../components/JobCard";

export default function Home() {
  const featuredJobs = jobs.slice(0, 4);

  const categories = [
    { name: "Engineering", icon: "⚙️", count: 840 },
    { name: "Design", icon: "🎨", count: 215 },
    { name: "Data", icon: "📊", count: 142 },
    { name: "Marketing", icon: "📣", count: 310 },
    { name: "Product", icon: "📦", count: 125 },
    { name: "Finance", icon: "💰", count: 98 },
  ];

  return (
    <main>
      {/* HERO */}
      <section className="hero-gradient py-24 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center text-center">
          <div className="bg-primary-light text-primary-dark px-4 py-1 rounded-full text-xs font-semibold mb-4 inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            2,400+ opportunities growing daily
          </div>

          <h1 className="text-5xl font-bold text-on-surface mb-4 max-w-2xl leading-tight">
            Find a job where you truly{" "}
            <span className="text-primary">grow</span>
          </h1>

          <p className="text-lg text-on-surface-muted mb-10 max-w-xl">
            JobGrove is your calm corner of the internet to find work that feels right.
          </p>

          <div className="w-full max-w-2xl bg-white p-2 rounded-full soft-shadow flex items-center gap-2 border border-outline-light mb-6">
            <div className="flex-1 flex items-center px-4 gap-2">
              <span className="material-symbols-outlined text-outline">search</span>
              <input
                className="w-full border-none focus:ring-0 text-sm text-on-surface placeholder-on-surface-muted"
                placeholder="Search role, skill or company..."
                type="text"
              />
            </div>
            <button className="bg-primary text-white px-8 py-3 rounded-full text-sm font-semibold hover:brightness-110 transition-all">
              Search
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            <span className="text-xs text-on-surface-muted px-2 py-1">Popular:</span>
            {["React Developer", "UI Designer", "Remote", "Data Analyst", "Marketing"].map((tag) => (
              <Link key={tag} to="/jobs"
                className="bg-white border border-outline-light text-on-surface-muted px-4 py-1 rounded-full text-xs hover:bg-primary-light hover:text-primary transition-colors">
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white border-b border-outline-light py-4">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-wrap justify-center md:justify-around gap-4">
          {[
            { icon: "work", label: "2,400+ Jobs" },
            { icon: "corporate_fare", label: "580+ Companies" },
            { icon: "sentiment_satisfied", label: "12,000+ Happy Hires" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-2 text-on-surface-muted text-sm font-semibold">
              <span className="material-symbols-outlined text-primary">{stat.icon}</span>
              {stat.label}
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED JOBS */}
      <section className="py-16 max-w-[1200px] mx-auto px-6">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-on-surface mb-1">Featured Opportunities</h2>
            <p className="text-on-surface-muted">Hand-picked roles from companies that care.</p>
          </div>
          <Link to="/jobs" className="text-primary text-sm font-semibold flex items-center gap-1 hover:underline">
            View all jobs
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-surface-low py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-on-surface mb-1">Browse by Category</h2>
            <p className="text-on-surface-muted">Find your next role in specialized ecosystems.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <Link key={cat.name} to="/jobs"
                className="bg-white p-6 rounded-xl flex flex-col items-center text-center hover-lift soft-shadow border border-outline-light">
                <span className="text-3xl mb-3">{cat.icon}</span>
                <span className="font-semibold text-on-surface text-sm mb-1">{cat.name}</span>
                <span className="text-xs text-on-surface-muted">{cat.count} jobs</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="bg-primary rounded-3xl p-16 text-center relative overflow-hidden">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to start growing?</h2>
          <p className="text-primary-light mb-8 max-w-xl mx-auto">
            Join thousands of job seekers finding more than just a paycheck.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/jobs" className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:brightness-105 transition-all">
              Browse Jobs
            </Link>
            <button className="border border-primary-light text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition-all">
              Post a Job Role
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}