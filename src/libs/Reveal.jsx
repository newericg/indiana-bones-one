import { motion, useAnimation, useInView, useIsPresent } from "framer-motion";
import React, { useEffect, useRef } from "react";

const Reveal = ({ children, width = "fit-content" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }} className="mx-auto">
      <motion.div
        variants={{
            hidden: { opacity: 0, y: 75},
            visible: { opacity: 1, y: 0}
        }}
        initial="hidden"
        animate={mainControls}
        transition={{duration: 0.7, delay: 0.35}}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
