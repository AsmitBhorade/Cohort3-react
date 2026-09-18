import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "14px 32px",
        background: "#ffffff",
        boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
        borderRadius: "16px",
        maxWidth: "1100px",
        margin: "20px auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <div
          style={{
            width: "42px",
            height: "42px",
            borderRadius: "12px",
            background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: "18px",
            boxShadow: "0 8px 18px rgba(79,70,229,0.35)",
          }}
        >
          S
        </div>

        <div
          style={{
            fontSize: "1.2rem",
            fontWeight: "700",
            color: "#111827",
            letterSpacing: "0.5px",
          }}
        >
          Sheyians
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "28px",
        }}
      >
        <NavLink
          to="/home"
          style={({ isActive }) => ({
            textDecoration: "none",
            color: isActive ? "#4f46e5" : "#1f2937",
            fontWeight: "600",
            fontSize: "0.96rem",
            transition: "color 0.2s ease",
          })}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          style={({ isActive }) => ({
            textDecoration: "none",
            color: isActive ? "#4f46e5" : "#1f2937",
            fontWeight: "600",
            fontSize: "0.96rem",
            transition: "color 0.2s ease",
          })}
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          style={({ isActive }) => ({
            textDecoration: "none",
            color: isActive ? "#4f46e5" : "#1f2937",
            fontWeight: "600",
            fontSize: "0.96rem",
            transition: "color 0.2s ease",
          })}
        >
          Contact
        </NavLink>

        <button
          style={{
            border: "none",
            background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
            color: "#fff",
            padding: "10px 18px",
            borderRadius: "10px",
            fontWeight: "700",
            cursor: "pointer",
            boxShadow: "0 10px 20px rgba(79,70,229,0.25)",
          }}
        >
          Get Started
        </button>
      </div>
    </nav>
  );
}