import { motion } from "motion/react";
import Cta from "./Cta";
import FormSection from "./Form/FormSection";

export default function ContactsPage() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[calc(100vh-310.5px)] flex"
    >
      <div className="container flex flex-col md:flex-row">
        {/* CTA */}
        <Cta />

        {/* FORM */}
        <FormSection />
      </div>
    </motion.section>
  );
}
