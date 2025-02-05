// src/components/OnboardingScreen1.tsx
import { motion } from "framer-motion";

const OnboardingScreen1 = ({ onNext }: { onNext: () => void }) => {
  const groupMembers = [
    "John Doe",
    "Jane Smith",
    "Alice Johnson",
    "Bob Brown",
    "Charlie Davis",
    "Eve White",
    "Frank Wilson",
    "Grace Lee",
    "Henry Martinez",
    "Ivy Garcia",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-blue-600 text-white p-8"
    >
      {/* Group Name */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl font-bold mb-4 text-center"
      >
        Finance App Team
      </motion.h1>

      {/* Project Name */}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-xl mb-8 text-center"
      >
        Personal Finance Management Application
      </motion.p>

      {/* Course Code */}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-lg mb-8 text-center"
      >
        Course Code: CS101 - Project Name: Finance App
      </motion.p>

      {/* Group Members */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8"
      >
        {groupMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 * index }}
            className="bg-white bg-opacity-10 p-4 rounded-lg text-center text-black"
          >
            {member}
          </motion.div>
        ))}
      </motion.div>

      {/* Next Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        onClick={onNext}
        className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
      >
        Next
      </motion.button>
    </motion.div>
  );
};

export default OnboardingScreen1;
