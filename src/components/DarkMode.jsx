import React from "react";

const DarkMode = () => {
  const [theme, setTheme] = React.useState(localStorage.getItem("theme") || "light");

  const element = document.documentElement; // access to html

  // Set theme to localStorage and html element
  React.useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }, [theme, element]);

  return (
    <div className="relative flex items-center">
      {/* Light Switch Icon */}
      <svg
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        xmlns="http://www.w3.org/2000/svg"
        className={`w-16 h-8 cursor-pointer transition-all duration-300`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        {/* Light switch background */}
        <rect
          x="2"
          y="5"
          width="20"
          height="14"
          rx="7"
          ry="7"
          fill={theme === "dark" ? "#333" : "#eee"}
          stroke="currentColor"
          strokeWidth="2"
        />
        {/* Light switch slider */}
        <circle
          cx={theme === "dark" ? "18" : "6"}
          cy="12"
          r="6"
          fill={theme === "dark" ? "#fff" : "#ffeb3b"}
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

export default DarkMode;
