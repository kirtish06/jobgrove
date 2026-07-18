import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchCompanies } from "../services/api";

export default function Companies() {
  const [companies, setCompanies] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCompanies().then((data) => {
      setCompanies(data);
      setLoading(false);
    });
  }, []);

  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(search.toLowerCase()) ||
    company.industry.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="max-w-[1200px] mx-auto px-6 py-16">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-on-surface mb-2">
          Companies growing on JobGrove
        </h1>
        <p className="text-on-surface-muted">
          Discover great places to work. {companies.length} companies hiring right now.
        </p>
      </div>

      <div className="max-w-lg mx-auto mb-10">
        <div className="flex items-center gap-2 bg-white border border-outline-light rounded-full px-4 py-3 soft-shadow">
          <span className="material-symbols-outlined text-outline">search</span>
          <input
            type="text"
            placeholder="Search company or industry..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border-none focus:ring-0 text-sm text-on-surface outline-none"
          />
          {search && (
            <button onClick={() => setSearch("")} className="text-outline hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          )}
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="bg-white rounded-xl border border-outline-light p-6 animate-pulse">
              <div className="flex gap-4 mb-4">
                <div className="w-14 h-14 bg-surface-low rounded-xl"></div>
                <div className="flex-1">
                  <div className="h-4 bg-surface-low rounded mb-2 w-3/4"></div>
                  <div className="h-3 bg-surface-low rounded w-1/2"></div>
                </div>
              </div>
              <div className="h-3 bg-surface-low rounded mb-2"></div>
              <div className="h-3 bg-surface-low rounded w-3/4"></div>
            </div>
          ))}
        </div>
      ) : filteredCompanies.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-xl font-bold text-on-surface mb-2">No companies found</p>
          <p className="text-on-surface-muted">Try a different search term.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompanies.map((company) => (
            <div
              key={company._id}
              className="bg-white rounded-xl border border-outline-light soft-shadow hover-lift p-6 flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center font-bold text-xl flex-shrink-0"
                  style={{ backgroundColor: company.color, color: company.textColor }}
                >
                  {company.initial}
                </div>
                <div>
                  <h2 className="font-bold text-on-surface">{company.name}</h2>
                  <span className="text-xs text-on-surface-muted bg-surface-low px-2 py-1 rounded-md">
                    {company.industry}
                  </span>
                </div>
              </div>

              <p className="text-on-surface-muted text-sm mb-6 flex-1">
                {company.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-outline-light">
                <div className="flex items-center gap-1 text-primary text-xs font-semibold">
                  <span className="material-symbols-outlined text-[16px]">work</span>
                  {company.openRoles > 0
                    ? `${company.openRoles} open role${company.openRoles > 1 ? "s" : ""}`
                    : "No open roles"}
                </div>
                <Link to="/jobs" className="text-xs text-primary flex items-center gap-1 hover:underline font-semibold">
                  View jobs
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}