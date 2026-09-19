"use client";

import { motion } from"framer-motion";

const FALLBACK_ROLES = ["Editing","Graphic Design","Social Media Management","Content Creation","Photography","Reel Creation","Cinematography"];

export const JoinRoles = ({ rolesProp }: { rolesProp?: string[] }) => {
  const roles = rolesProp && rolesProp.length > 0 ? rolesProp : FALLBACK_ROLES;

  return (
    <section className="overflow-hidden py-10">
      <div className="flex w-[200%]">
        <motion.div
          animate={{ x: ["0%","-50%"] }}
          transition={{ repeat: Infinity, ease:"linear", duration: 30 }}
          className="flex gap-12 whitespace-nowrap px-8 md:gap-20"
        >
          {[...roles, ...roles, ...roles].map((role, idx) => (
            <span
              key={idx}
              className="cursor-default font-geist text-2xl font-bold tracking-tight text-ivory-light/10 transition-colors duration-500 hover:text-slate-lighter md:text-4xl"
            >
              {role}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
