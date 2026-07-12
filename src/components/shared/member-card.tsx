"use client";

import { motion } from "framer-motion";
import { Building2, Quote } from "lucide-react";

interface MemberCardProps {
  name: string;
  role: string;
  institution: string;
  bio: string;
  photo?: string;
  index?: number;
}

export function MemberCard({
  name,
  role,
  institution,
  bio,
  photo,
  index = 0,
}: MemberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-lg transition-all duration-300 group"
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4 ring-2 ring-navy-100 group-hover:ring-accent transition-all duration-300">
          <img
            src={photo || `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop`}
            alt={name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <h3 className="text-xl font-semibold text-navy-700 mb-1">{name}</h3>
        <span className="inline-block bg-accent/10 text-accent text-sm font-medium px-3 py-1 rounded-full mb-2">
          {role}
        </span>
        <div className="flex items-center gap-1.5 text-sm text-muted mb-3">
          <Building2 className="w-4 h-4" />
          {institution}
        </div>
        <div className="relative">
          <Quote className="w-4 h-4 text-navy-200 absolute -top-1 -left-1" />
          <p className="text-sm text-muted leading-relaxed italic pl-4">{bio}</p>
        </div>
      </div>
    </motion.div>
  );
}
