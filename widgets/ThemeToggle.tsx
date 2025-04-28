import { useTheme } from "next-themes";

import { BsMoon } from "react-icons/bs";
import { FiSun } from "react-icons/fi";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (theme === "system") {
    return null;
  }

  console.log(theme);

  return (
    <button className="cursor-pointer" onClick={toggleTheme}>
      {theme === "dark" ? <BsMoon size={25} /> : <FiSun size={25} />}
    </button>
  );
}
