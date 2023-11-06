import { FC } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";

interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />

        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </HashRouter>
  );
};

export default App;
