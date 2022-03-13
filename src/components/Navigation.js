import { motion } from "framer-motion";

export const Navigation = () => {
  return (
    <nav className="px-10 py-10 bg-blue-500">
      <motion.h1
        animate={{ opacity: [0, 1], y: [30, -30, 0] }}
        class="text-6xl font-normal text-center text-white "
      >
        Rating of your Actor
      </motion.h1>
    </nav>
  );
};
