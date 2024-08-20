import React from 'react'
import { ReactLenis, useLenis } from "lenis/react";

const SmothScroll = ({ children }) => {
    const lenisOptions = {
        lerp: 1,
        duration: 1.5,
        smoothTouch: false, //smooth scroll for touch devices
        smooth: true,
      };
    
      return (
        <ReactLenis root options={lenisOptions}>
          {children}
        </ReactLenis>
      );
}

export default SmothScroll