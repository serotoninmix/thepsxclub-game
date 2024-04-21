import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Landpage from "./pages/Landpage";
import FantasyGenerator1 from "./pages/FantasyGenerator1";
import FantasyGenerator11 from "./pages/FantasyGenerator11";
import KamaRoulette from "./pages/KamaRoulette";
import KamaRoulette1 from "./pages/KamaRoulette1";
import FetishAZ from "./pages/fetishaz";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/fantasy-generator-1":
        title = "";
        metaDescription = "";
        break;
      case "/fantasy-generator-1-1":
        title = "";
        metaDescription = "";
        break;
      case "/kamaroulette":
        title = "";
        metaDescription = "";
        break;
      case "/kamaroulette-1":
        title = "";
        metaDescription = "";
        break;
      case "/fetishaz":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Landpage />} />
      <Route path="/fantasy-generator-1" element={<FantasyGenerator1 />} />
      <Route path="/fantasygenerator11" element={<FantasyGenerator11 />} />
      <Route path="/kamaroulette" element={<KamaRoulette />} />
      <Route path="/kamaroulette-1" element={<KamaRoulette1 />} />
      <Route path="/fetishaz" element={<FetishAZ />} />
    </Routes>
  );
}
export default App;
