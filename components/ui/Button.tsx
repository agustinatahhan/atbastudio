"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 text-sm font-medium tracking-wide transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-[#312f2c] text-[#fafafa] px-8 py-4 hover:bg-[#a8c4cf] hover:text-[#312f2c]",
    outline:
      "border border-[#312f2c] text-[#312f2c] px-8 py-4 hover:bg-[#312f2c] hover:text-[#fafafa]",
    ghost:
      "text-[#312f2c] underline-offset-4 hover:underline px-2 py-1",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
