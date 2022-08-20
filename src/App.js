import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { DarkTheme, lightTheme } from "./components/Themes";
import GobalStyle from "./globalStyles";
import {
  AboutPage,
  BlogPage,
  Main,
  MySkillsPage,
  WorkPage,
} from "./components/index";
import { AnimatePresence } from "framer-motion";
import SoundBar from "./subComponents/SoundBar";

const App = () => {
  const location = useLocation();
  return (
    <div>
      <GobalStyle />
      <ThemeProvider theme={lightTheme}>
        <SoundBar />
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/about" element={<AboutPage />} />
            <Route exact path="/blog" element={<BlogPage />} />
            <Route exact path="/work" element={<WorkPage />} />
            <Route exact path="/skills" element={<MySkillsPage />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </div>
  );
};

export default App;
