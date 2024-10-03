"use client"; // Add this at the very top for client-side interactivity

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { LoaderIcon } from "lucide-react";

export default function AnimationExamplesPage() {
  return (
    <div className="container mx-auto p-8 space-y-8">
      <h1 className="text-2xl font-bold">Animation Examples</h1>

      {/* Animated Button on Hover */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Button Hover Animation</h2>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => alert("Button Clicked")}
        >
          Hover Me
        </motion.button>
      </section>

      {/* Fade In Animation */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Fade In Animation</h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="p-4 bg-green-500 text-white rounded"
        >
          This content fades in!
        </motion.div>
      </section>

      {/* Slide Animation */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Slide Animation</h2>
        <motion.div
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="p-4 bg-red-500 text-white rounded"
        >
          Sliding in from the left!
        </motion.div>
      </section>

      {/* Conditional Animation */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Conditional Animation</h2>
        <ToggleContent />
      </section>

      {/* Loading Spinner */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Loading Spinner</h2>
        <Button disabled>
          <LoaderIcon className="w-5 h-5 mr-2 animate-spin" />
          Loading...
        </Button>
      </section>

      {/* Custom Keyframe Animation */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Custom Keyframe Animation</h2>
        <div className="p-4 bg-purple-500 text-white rounded animate-bounce">
          Bouncing Box!
        </div>
      </section>

      {/* Rotate Animation */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Rotate Animation</h2>
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 1 }}
          className="p-4 bg-yellow-500 text-white rounded"
        >
          Spin Me!
        </motion.div>
      </section>

      {/* Staggered List Animation */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Staggered List Animation</h2>
        <StaggeredList />
      </section>
    </div>
  );
}

function ToggleContent() {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <div>
      <Button onClick={() => setIsVisible(!isVisible)} className="mb-4">
        {isVisible ? "Hide" : "Show"} Content
      </Button>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="p-4 bg-gray-500 text-white rounded"
          >
            This content appears and disappears!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function StaggeredList() {
  const items = [1, 2, 3, 4, 5];
  return (
    <motion.ul
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      {items.map((item) => (
        <motion.li
          key={item}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="p-2 bg-indigo-500 text-white rounded mb-2"
        >
          Item {item}
        </motion.li>
      ))}
    </motion.ul>
  );
}
