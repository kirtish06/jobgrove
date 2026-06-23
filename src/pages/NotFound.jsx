import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="max-w-[1200px] mx-auto px-6 py-16 text-center">
      <div className="w-24 h-24 bg-surface-low rounded-full flex items-center justify-center mx-auto mb-6">
        <span className="material-symbols-outlined text-5xl text-primary">
          sentiment_dissatisfied
        </span>
      </div>
      <h1 className="text-5xl font-bold text-on-surface mb-4">404</h1>
      <p className="text-xl text-on-surface-muted mb-2">Page not found</p>
      <p className="text-on-surface-muted mb-8 max-w-sm mx-auto">
        Looks like this path doesn't exist in the grove. Let's get you back on track.
      </p>
      <Link
        to="/"
        className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:brightness-110 transition-all"
      >
        Back to Home
      </Link>
    </main>
  );
}