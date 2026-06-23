import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `text-sm transition-colors ${
      isActive
        ? "text-primary font-bold border-b-2 border-primary"
        : "text-on-surface-muted hover:text-primary"
    }`;

  return (
    <header className="bg-white border-b border-outline-light sticky top-0 z-50 h-16 w-full">
      <nav className="flex justify-between items-center px-6 w-full max-w-[1200px] mx-auto h-full">
        <Link to="/" className="text-lg font-bold text-primary flex items-center gap-2">
          <span className="material-symbols-outlined">energy_savings_leaf</span>
          <span>JobGrove</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/jobs" className={linkClass}>Find Jobs</NavLink>
          <NavLink to="/companies" className={linkClass}>Companies</NavLink>
          <NavLink to="/saved" className={linkClass}>Saved Jobs</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
        </div>

        <button className="hidden md:block bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold hover:brightness-110 transition-all">
          Post a Job
        </button>
      </nav>
    </header>
  );
}