import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Routes,
} from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import { ReactLenis, useLenis, Lenis } from "lenis/react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const App = ({ routes }) => {

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden bg-primary">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/whatwedo" element={<ServicesPage />} />
        </Routes>
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
