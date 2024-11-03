"use client";

import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa6";
import Link from "next/link";

interface PackageCardProps {
  title: string;
  description: string;
  features: string[];
  index: number;
}

export default function PackageCard({ title, description, features, index }: PackageCardProps) {
  return (
    <Link 
      href="https://calendar.app.google/MryhU5MdfGnRV1rY8"
      target="_blank"
      rel="noopener noreferrer"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative cursor-pointer rounded-2xl border border-slate-100/20 bg-slate-900/50 p-8 transition-all hover:scale-[1.02] hover:bg-slate-900/75"
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="relative z-10">
          <h3 className="text-2xl font-medium text-white">{title}</h3>
          <p className="mt-4 text-slate-300">{description}</p>
          <ul className="mt-8 space-y-3">
            {features.map((feature, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: (index * 0.1) + (i * 0.1) }}
                className="flex items-center space-x-3 text-slate-300"
              >
                <FaCheck className="h-5 w-5 text-yellow-500" />
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-b from-yellow-500/20 to-transparent opacity-0 transition group-hover:opacity-100" />
      </motion.div>
    </Link>
  );
}
