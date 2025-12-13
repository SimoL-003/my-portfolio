import { useState } from "react";

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
    <section className="min-h-[calc(100vh-310.5px)] flex">
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
          <form className="form-card" onSubmit={handleSubmit}>
            {/* Nome / Azienda */}
            <div className="form__input-group">
              <label htmlFor="name">Nome / Azienda</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Nome Cognome / Studio XYZ"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Email */}
            <div className="form__input-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="email@esempio.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Telefono */}
            <div className="form__input-group">
              <label htmlFor="phone">Telefono (opzionale)</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+39 333 123 4567"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>

            {/* Messaggio */}
            <div className="form__input-group">
              <label
                htmlFor="message"
                className="text-xs uppercase tracking-widest text-text-tertiary"
              >
                Messaggio
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Raccontami brevemente chi sei..."
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Submit */}
            <div className="flex items-center gap-4 pt-2">
              <button
                type="submit"
                className="button button--primary inline-flex items-center justify-center cursor-pointer"
              >
                Invia messaggio
              </button>

              <span className="text-xs text-text-tertiary">
                Rispondo solitamente entro 24 ore
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
