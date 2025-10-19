import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Shop from "./pages/Shop";
import Sell from "./pages/Sell";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      {/* Normal pages with header/footer */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="explore" element={<Explore />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sell" element={<Sell />} />
      </Route>

      {/* 404 page without layout */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
