import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

const pageVariants = {
  initial: { opacity: 0, filter: "blur(12px)" },
  in: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.5 } },
  out: { opacity: 0, filter: "blur(6px)", transition: { duration: 0.3 } },
};

export const PageTransition = ({ children }: PageTransitionProps) => (
  <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} style={{ minHeight: "100vh" }}>
    {children}
  </motion.div>
);
