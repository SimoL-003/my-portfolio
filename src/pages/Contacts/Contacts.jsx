import { motion } from "motion/react";
import Cta from "./Cta";
import FormSection from "./Form/FormSection";

export default function ContactsPage() {
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="min-h-[calc(100vh-310.5px)] flex">
        <div className="container flex flex-col md:flex-row">
          {/* CTA */}
          <Cta />

          {/* FORM */}
          <FormSection />
        </div>
      </div>

      {/* MAIL */}
      <div className="text-center pb-16">
        <h4>
          Oppure contattami a:{" "}
          <a
            className="max-md:underline md:hover:underline text-accent-primary"
            href="mailto:s.leuzzi23@gmail.com"
          >
            s.leuzzi23@gmail.com
          </a>
        </h4>
      </div>
    </motion.section>
  );
}
