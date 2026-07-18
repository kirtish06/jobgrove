import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchJobById } from "../services/api";

export default function JobDetail() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJobById(id).then((data) => {
      setJob(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return (
      <main className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="animate-pulse">
          <div className="h-8 bg-surface-low rounded w-1/3 mb-6"></div>
          <div className="h-16 bg-surface-low rounded mb-4"></div>
          <div className="h-4 bg-surface-low rounded w-2/3"></div>
        </div>
      </main>
    );
  }

  if (!job) {
    return (
      <main className="max-w-[1200px] mx-auto px-6 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Job not found</h1>
        <Link to="/jobs" className="text-primary hover:underline">← Back to all jobs</Link>
      </main>
    );
  }

  return (
    <main className="max-w-[1200px] mx-auto px-6 py-16">
      <Link to="/jobs" className="text-primary text-sm flex items-center gap-1 mb-6 hover:underline w-fit">
        <span className="material-symbols-outlined text-[18px]">arrow_back</span>
        Back to all jobs
      </Link>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* LEFT */}
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-surface-low flex items-center justify-center rounded-xl font-bold text-2xl text-primary flex-shrink-0">
              {job.companyInitial}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-on-surface">{job.title}</h1>
              <p className="text-on-surface-muted">{job.company} • {job.location}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            <span className="bg-surface-low text-primary px-4 py-1 rounded-md text-xs font-semibold">{job.type}</span>
            {job.remote && <span className="bg-surface-low text-primary px-4 py-1 rounded-md text-xs font-semibold">Remote</span>}
            <span className="bg-surface-low text-primary px-4 py-1 rounded-md text-xs font-semibold">{job.category}</span>
            <span className="bg-surface-low text-on-surface-muted px-4 py-1 rounded-md text-xs font-semibold">Posted {job.posted}</span>
          </div>

          <div className="border-t border-outline-light pt-6 mb-6">
            <h2 className="text-xl font-bold text-on-surface mb-3">About this role</h2>
            <p className="text-on-surface-muted leading-relaxed">{job.description}</p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold text-on-surface mb-3">What you'll do</h2>
            <ul className="flex flex-col gap-3">
              {job.responsibilities.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-on-surface-muted text-sm">
                  <span className="material-symbols-outlined text-primary text-[18px] mt-[2px]">check_circle</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold text-on-surface mb-3">What we're looking for</h2>
            <ul className="flex flex-col gap-3">
              {job.requirements.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-on-surface-muted text-sm">
                  <span className="material-symbols-outlined text-primary text-[18px] mt-[2px]">task_alt</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-on-surface mb-3">Perks & benefits</h2>
            <div className="grid grid-cols-2 gap-3">
              {job.perks.map((perk, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-surface-low rounded-lg px-4 py-3 text-on-surface-muted text-sm">
                  <span className="material-symbols-outlined text-primary text-[18px]">redeem</span>
                  {perk}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT - APPLY CARD */}
        <div className="w-full lg:w-[320px] flex-shrink-0">
          <div className="bg-white border border-outline-light rounded-xl p-6 soft-shadow sticky top-24">
            <p className="text-xs text-on-surface-muted mb-1">Salary range</p>
            <p className="text-2xl font-bold text-primary mb-6">{job.salary}</p>

            <button className="w-full bg-primary text-white py-3 rounded-full font-semibold mb-3 hover:brightness-110 transition-all">
              Apply Now
            </button>
            <button className="w-full border border-primary text-primary py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-surface-low transition-all">
              <span className="material-symbols-outlined text-[18px]">bookmark</span>
              Save Job
            </button>

            <div className="border-t border-outline-light mt-6 pt-6">
              <p className="text-xs text-on-surface-muted mb-3">About the company</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-surface-low flex items-center justify-center rounded-lg font-bold text-primary">
                  {job.companyInitial}
                </div>
                <div>
                  <p className="font-semibold text-on-surface text-sm">{job.company}</p>
                  <Link to="/companies" className="text-xs text-primary hover:underline">View all jobs →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}