import { useState } from "react";
import ContactForm from "../components/organisms/ContactForm";
import { motion } from "motion/react";

export default function Contacts() {
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  function handleInputChange(e) {
    const input = e.target;
    setFormData({ ...formData, [input.name]: input.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[calc(100vh-310.5px)] flex"
    >
      <div className="container flex flex-col md:flex-row">
        {/* CTA */}
        <div className="w-full md:w-2/5 h-fit self-center pt-12">
          <hgroup>
            <h3 className="eyebrow text-text-tertiary mb-3">contact</h3>
            <h1>Costruiamo qualcosa insieme</h1>
            <h2 className="subtitle text-text-secondary mt-4">
              Sono sempre disponibile per nuove collaborazioni
            </h2>
          </hgroup>
        </div>

        {/* FORM */}
        <div className="md:w-3/5 py-12 lg:py-20 md:pl-30 xl:pl-52">
          <ContactForm
            handleSubmit={handleSubmit}
            handleInputChange={handleInputChange}
            formData={formData}
          />
        </div>
      </div>
    </motion.section>
  );
}
