// src/components/AuthLayout.tsx
import { ReactNode } from "react";
import { motion } from "framer-motion";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen bg-gradient-to-r from-blue-500 to-blue-600">
      {/* Left Side - Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="hidden md:flex md:w-1/2 items-center justify-center p-8"
      >
        <img
          src="/images/auth-image.png" // Replace with your image path
          alt="Auth"
          className="w-3/4 h-auto rounded-lg shadow-2xl"
        />
      </motion.div>

      {/* Right Side - Form */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 bg-white rounded-l-3xl shadow-2xl"
      >
        <div className="max-w-md w-full">{children}</div>
      </motion.div>
    </div>
  );
};

export default AuthLayout;
