import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-surface-low py-16 w-full border-t border-outline-light">
      <div className="flex flex-col md:flex-row justify-between items-start px-6 w-full max-w-[1200px] mx-auto gap-10">
        <div className="flex flex-col gap-4">
          <div className="text-lg font-bold text-primary">JobGrove</div>
          <p className="text-on-surface-muted max-w-xs text-sm">
            The calm corner of the web for purposeful careers and meaningful growth.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 w-full md:w-auto">
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-on-surface text-sm">Platform</h4>
            <Link to="/jobs" className="text-on-surface-muted hover:underline text-sm">Browse Jobs</Link>
            <Link to="/companies" className="text-on-surface-muted hover:underline text-sm">Companies</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-on-surface text-sm">Support</h4>
            <a href="#" className="text-on-surface-muted hover:underline text-sm">Contact Us</a>
            <a href="#" className="text-on-surface-muted hover:underline text-sm">Help Center</a>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-on-surface text-sm">Company</h4>
            <Link to="/about" className="text-on-surface-muted hover:underline text-sm">About Us</Link>
            <a href="#" className="text-on-surface-muted hover:underline text-sm">Careers</a>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-on-surface text-sm">Legal</h4>
            <a href="#" className="text-on-surface-muted hover:underline text-sm">Privacy Policy</a>
            <a href="#" className="text-on-surface-muted hover:underline text-sm">Terms</a>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 mt-16 pt-6 border-t border-outline-light flex justify-between items-center text-xs text-outline">
        <p>© 2026 JobGrove. All rights reserved.</p>
      </div>
    </footer>
  );
}