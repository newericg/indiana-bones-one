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
          <Route path="/dog-hiking-vancouver" element={<DogHikingPage/>} />
          <Route path="/weekend-dog-walking" element={<WorkInProgressPage/>} />
          <Route path="/senior-dog-hiking" element={<WorkInProgressPage/>} />
          <Route path="/boarding-and-sitting" element={<WorkInProgressPage/>} />
          <Route path="/camping-trip" element={<WorkInProgressPage/>} />
          <Route path="/faq" element={<WorkInProgressPage/>} />
          <Route path="/contact" element={<WorkInProgressPage/>} />
          <Route path="/safetypolicy" element={<WorkInProgressPage/>} />
          <Route path="/cancellationpolicy" element={<WorkInProgressPage/>} />
          <Route path="/privacypolicy" element={<WorkInProgressPage/>} />
          <Route path="/events" element={<WorkInProgressPage/>} />
          <Route path="/coverage-area-1" element={<WorkInProgressPage/>} />
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
