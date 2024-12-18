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
import SafetyPolicyPage from "./pages/SafetyPolicyPage";
import VoteOnIdeasPage from "./pages/VoteOnIdeasPage";
import QuickWhipPage from "./pages/QuickWhipPage";
import EventsPage from "./pages/EventsPage";
import WeekendDogWalkingPage from "./pages/WeekendDogWalkingPage";
import BoardingDogSittingPage from "./pages/BoardingDogSittingPage";
import CampingTripPage from "./pages/CampingTripPage";
import CancellationPolicyPage from "./pages/CancellationPolicyPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import DronePage from "./pages/DronePage";
import SearchAndRescuePage from "./pages/SearchAndRescuePage";
import MembershipPage from "./pages/MembershipPage";
import AboutUsPage from "./pages/AboutUsPage";


const App = ({ routes }) => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] bg-primary">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/whatwedo" element={<ServicesPage/>} />
          <Route path="/newclients" element={<NewClientsPage />} />
          <Route path="/rates" element={<RatesPage/>} />
          <Route path="/gizmoknows" element={<GizmoKnowsPage/>} />
          <Route path="/about" element={<AboutUsPage/>} />
          <Route path="/dog-hiking-vancouver" element={<DogHikingPage/>} />
          <Route path="/weekend-dog-walking" element={<WeekendDogWalkingPage/>} />
          <Route path="/senior-dog-hiking" element={<WorkInProgressPage/>} />
          <Route path="/boarding-and-sitting" element={<BoardingDogSittingPage/>} />
          <Route path="/camping-trip" element={<CampingTripPage />} />
          <Route path="/faq" element={<WorkInProgressPage/>} />
          <Route path="/contact" element={<WorkInProgressPage/>} />
          <Route path="/safetypolicy" element={<SafetyPolicyPage/>} />
          <Route path="/cancellationpolicy" element={<CancellationPolicyPage/>} />
          <Route path="/privacypolicy" element={<PrivacyPolicyPage/>} />
          <Route path="/events" element={<WorkInProgressPage/>} />
          <Route path="/coverage-area-1" element={<WorkInProgressPage/>} />
          <Route path="/vote-on-ideas" element={<VoteOnIdeasPage/>} />
          <Route path="/quick-whip" element={<QuickWhipPage/>} />
          <Route path="/drone-services" element={<DronePage/>} />
          {/* <Route path="/riley-rips"  element={<EventsPage/>} /> */}
          <Route path="/search-and-rescue" element={<SearchAndRescuePage/>} />
          <Route path="/membership-benefits" element={<MembershipPage/>} />

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
