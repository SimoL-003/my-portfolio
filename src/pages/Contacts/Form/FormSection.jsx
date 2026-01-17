import { useState } from "react";
import ContactForm from "./ContactForm";

export default function FormSection() {
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
    <div className="md:w-3/5 py-12 lg:py-16 md:pl-30 xl:pl-52">
      <ContactForm
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        formData={formData}
      />
    </div>
  );
}
