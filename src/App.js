import GreetSection from "./components/GreetSection/GreetSection";
import Header from "./components/Header/Header";
import React, { useState, useEffect } from "react";
import StudiesSection from "./components/StudiesSection/StudiesSection";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.style.setProperty("--primary-color", "var(--dark)");
      root.style.setProperty("--secondary-color", "#00448c");
      root.style.setProperty("--background-color", "var(--dark)");
      root.style.setProperty("--font-color", "var(--light)");
    } else {
      root.style.setProperty("--primary-color", "var(--light)");
      root.style.setProperty("--secondary-color", "#007bff");
      root.style.setProperty("--background-color", "var(--light)");
      root.style.setProperty("--font-color", "var(--dark)");
    }
  }, [isDark]);

  return (
    <div className="App">
      <Header
        language={language}
        setLanguage={setLanguage}
        isDark={isDark}
        setIsDark={setIsDark}
      />
      <GreetSection />
      <StudiesSection />
    </div>
  );
}

export default App;
