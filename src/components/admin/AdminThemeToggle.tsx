import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export const AdminThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("devmart-admin-theme");
    const prefersDark = savedTheme === "dark" || savedTheme === null;
    setIsDark(prefersDark);
    
    if (!prefersDark) {
      document.body.classList.add("lightmode");
    } else {
      document.body.classList.remove("lightmode");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("devmart-admin-theme", newTheme ? "dark" : "light");
    
    if (newTheme) {
      document.body.classList.remove("lightmode");
    } else {
      document.body.classList.add("lightmode");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="admin-btn admin-btn-ghost"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};
