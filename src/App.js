import GreetSection from "./components/GreetSection/GreetSection";
import Header from "./components/Header/Header";
import React, { useState, useEffect } from "react";
import StudiesSection from "./components/StudiesSection/StudiesSection";
import SkillsSection from "./components/SkillsSection/SkillsSection";
import AboutMe from "./components/AboutMe/AboutMe";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const root = document.documentElement;
    const greetImage = document.querySelector(".greet-image");

    if (isDark) {
      root.style.setProperty("--primary-color", "#003164");
      root.style.setProperty("--secondary-color", "#003772");
      root.style.setProperty("--background-color", "var(--dark)");
      root.style.setProperty("--font-color", "var(--light)");
    } else {
      root.style.setProperty("--primary-color", "#005fc6");
      root.style.setProperty("--secondary-color", "#007bff");
      root.style.setProperty("--background-color", "var(--light)");
      root.style.setProperty("--font-color", "var(--dark)");
    }

    greetImage.classList.toggle("darken");
  }, [isDark]);

  return (
    <div className="App">
      <Header
        isDark={isDark}
        setIsDark={setIsDark}
        language={language}
        setLanguage={setLanguage}
      />
      <GreetSection />
      <StudiesSection />
      <SkillsSection />
      <AboutMe />
    </div>
  );
}

export default App;
