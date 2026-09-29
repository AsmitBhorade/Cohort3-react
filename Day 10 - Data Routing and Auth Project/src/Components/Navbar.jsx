import { useLocation, useNavigate } from "react-router";

const links = [
  { label: "Home", path: "/main" },
  { label: "About", path: "/main/about" },
  { label: "Services", path: "/main/services" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="border-b border-stone-200 bg-stone-50 px-6 py-4 shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-2">
        {links.map(({ label, path }) => {
          const isActive = location.pathname === path;

          return (
            <button
              key={path}
              type="button"
              onClick={() => navigate(path)}
              aria-current={isActive ? "page" : undefined}
              className={`border-b-2 px-5 py-3 text-sm font-medium tracking-wide transition-colors duration-200 ${
                isActive
                  ? "border-amber-700 text-slate-900"
                  : "border-transparent text-slate-600 hover:border-amber-700/50 hover:text-slate-900"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;