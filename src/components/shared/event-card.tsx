"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

interface EventCardProps {
  title: string;
  date: string;
  location?: string;
  description?: string;
  index?: number;
}

export function EventCard({
  title,
  date,
  location,
  description,
  index = 0,
}: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="group bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-start gap-3 mb-3">
        <Calendar className="w-5 h-5 text-accent mt-0.5 shrink-0" />
        <span className="text-sm font-medium text-accent">{date}</span>
      </div>
      <h3 className="text-lg font-semibold text-navy-700 mb-2 group-hover:text-accent transition-colors">
        {title}
      </h3>
      {location && (
        <div className="flex items-center gap-2 text-sm text-muted mb-2">
          <MapPin className="w-4 h-4" />
          {location}
        </div>
      )}
      {description && (
        <p className="text-muted text-sm leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
