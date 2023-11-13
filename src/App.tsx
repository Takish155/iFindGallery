import "./App.css";
import { Route, Routes, useLocation } from "react-router";
import { Header } from "./components/Header";
import { IndexPage } from "./pages/index/IndexPage";
import { SearchPage } from "./pages/search/SearchPage";
import { UserPage } from "./pages/user/UserPage";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();

  // Scrolls to the top when the URL changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/search/*" element={<SearchPage />} />
        <Route path="/search/user/:username" element={<UserPage />} />
      </Routes>
    </>
  );
}

export default App;
