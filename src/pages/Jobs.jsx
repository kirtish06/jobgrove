import { useState } from "react";
import jobsData from "../data/jobs.json";
import JobCard from "../components/JobCard";

export default function Jobs() {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("All");

  const jobTypes = ["Full-time", "Part-time", "Contract", "Internship"];
  const categories = ["All", "Engineering", "Design", "Data", "Marketing"];

  const toggleType = (type) => {
    setTypeFilter((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const filteredJobs = jobsData.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase());
    const matchesType = typeFilter.length === 0 || typeFilter.includes(job.type);
    const matchesCategory = categoryFilter === "All" || job.category === categoryFilter;
    return matchesSearch && matchesType && matchesCategory;
  });

  return (
    <main className="max-w-[1200px] mx-auto px-6 py-16">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-on-surface mb-1">Find your next role</h1>
        <p className="text-on-surface-muted">{filteredJobs.length} jobs available</p>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        {/* SIDEBAR */}
        <aside className="w-full md:w-[280px] flex-shrink-0">
          <div className="bg-white p-6 rounded-xl border border-outline-light soft-shadow sticky top-24">
            <h3 className="font-semibold text-on-surface mb-4">Filter Jobs</h3>

            <div className="mb-6">
              <input
                type="text"
                placeholder="Search role or company..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border border-outline-light rounded-lg px-4 py-2 text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none"
              />
            </div>

            <div className="mb-6">
              <h4 className="text-xs text-on-surface-muted mb-2 uppercase font-semibold">Job Type</h4>
              <div className="flex flex-col gap-2">
                {jobTypes.map((type) => (
                  <label key={type} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={typeFilter.includes(type)}
                      onChange={() => toggleType(type)}
                      className="rounded border-outline-light text-primary focus:ring-primary"
                    />
                    <span className="text-sm text-on-surface-muted">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xs text-on-surface-muted mb-2 uppercase font-semibold">Category</h4>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="w-full border border-outline-light rounded-lg px-4 py-2 text-sm focus:ring-1 focus:ring-primary outline-none"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <button
              onClick={() => { setSearch(""); setTypeFilter([]); setCategoryFilter("All"); }}
              className="text-primary text-xs hover:underline font-semibold"
            >
              Clear all filters
            </button>
          </div>
        </aside>

        {/* JOB LIST */}
        <div className="flex-1 flex flex-col gap-4">
          {filteredJobs.length === 0 ? (
            <div className="bg-white rounded-xl border border-outline-light p-16 text-center">
              <span className="material-symbols-outlined text-5xl text-outline mb-4">search_off</span>
              <p className="text-xl font-bold text-on-surface mb-1">No jobs found</p>
              <p className="text-on-surface-muted">Try adjusting your filters or search term.</p>
            </div>
          ) : (
            filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
          )}
        </div>
      </div>
    </main>
  );
}