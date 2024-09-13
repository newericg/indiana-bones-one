import {
  Route,
  Routes,
} from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import NewClientsPage from "./pages/NewClientsPage";
import Footer from "./components/Footer";
import RatesPage from "./pages/RatesPage";
import GizmoKnowsPage from "./pages/GizmoKnowsPage";
import WorkInProgressPage from "./pages/WorkInProgressPage";
import DogHikingPage from "./pages/DogHikingPage";



const App = ({ routes }) => {

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden bg-primary">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/whatwedo" element={<ServicesPage/>} />
          <Route path="/newclients" element={<NewClientsPage />} />
          <Route path="/rates" element={<RatesPage/>} />
          <Route path="/gizmoknows" element={<GizmoKnowsPage/>} />
          <Route path="/about" element={<WorkInProgressPage/>} />
          <Route path="/doghiking" element={<DogHikingPage/>} />
          <Route path="/faq" element={<WorkInProgressPage/>} />
          <Route path="/contact" element={<WorkInProgressPage/>} />
          <Route path="/safetypolicy" element={<WorkInProgressPage/>} />
          <Route path="/cancellationpolicy" element={<WorkInProgressPage/>} />
          <Route path="/privacypolicy" element={<WorkInProgressPage/>} />
          <Route path="/events" element={<WorkInProgressPage/>} />
        </Routes>
        <Analytics />
        <SpeedInsights/>
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
