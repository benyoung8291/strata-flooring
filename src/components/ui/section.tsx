"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "linen" | "dark";
}

export function Section({
  children,
  className,
  id,
  background = "white",
}: SectionProps) {
  const bgClasses = {
    white: "bg-white",
    linen: "bg-brand-100",
    dark: "bg-brand-900 text-white",
  };

  return (
    <section
      id={id}
      className={cn("section-padding", bgClasses[background], className)}
    >
      <div className="container-main">{children}</div>
    </section>
  );
}

export function SectionHeader({
  overline,
  title,
  description,
  centered = true,
  className,
}: {
  overline?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "mb-12 md:mb-16",
        centered && "text-center max-w-3xl mx-auto",
        className
      )}
    >
      {overline && <p className="overline mb-4">{overline}</p>}
      <h2 className="font-serif text-display-md md:text-display-lg text-brand-800 mb-4 text-balance">
        {title}
      </h2>
      {description && (
        <p className="text-body-lg text-brand-500 text-balance">{description}</p>
      )}
    </motion.div>
  );
}
