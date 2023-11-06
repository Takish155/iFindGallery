import "./App.css";
import { Route, Routes } from "react-router";
import { Header } from "./components/Header";
import { IndexPage } from "./pages/index/IndexPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<IndexPage />} />
      </Routes>
    </>
  );
}

export default App;
