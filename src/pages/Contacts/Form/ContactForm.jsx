export default function ContactForm({
  handleSubmit,
  handleInputChange,
  formData,
}) {
  return (
    <form className="form-card" onSubmit={handleSubmit} netlify>
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
      <div className="flex max-md:items-center flex-col gap-2 pt-2">
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
  );
}
