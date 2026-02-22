"use client";

import { useState } from "react";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "b678ffcc-f5dc-4b24-b806-7c90d097abd9", //ACCESS KEY DE WEB3FORMS
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="bg-black py-16 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 text-center ${spaceGrotesk.className}`}>
          Contacto
        </h2>
        <p className="text-base text-white/60 text-center mb-8">
          ¿Tienes un proyecto en mente? Cuéntanos tus necesidades
        </p>

        <div className="bg-white/5 border border-blue-500/30 rounded-xl p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Nombre + Email en fila */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-white/80 text-sm mb-1">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-black/50 border border-blue-500/30 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white/80 text-sm mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-black/50 border border-blue-500/30 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            {/* Teléfono */}
            <div>
              <label htmlFor="phone" className="block text-white/80 text-sm mb-1">Teléfono</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-black/50 border border-blue-500/30 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="+ Número de teléfono"
              />
            </div>

            {/* Mensaje */}
            <div>
              <label htmlFor="message" className="block text-white/80 text-sm mb-1">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 py-2 bg-black/50 border border-blue-500/30 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
                placeholder="Cuéntanos sobre tu proyecto..."
              />
            </div>

            {/* Botón */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-2.5 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed text-sm ${spaceGrotesk.className}`}
            >
              {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
            </button>

            {/* Mensajes de estado */}
            {submitStatus === "success" && (
              <div className="text-green-400 text-center p-4 bg-green-400/10 border border-green-400/30 rounded-lg">
                ¡Mensaje enviado correctamente! Te responderemos pronto.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="text-red-400 text-center p-4 bg-red-400/10 border border-red-400/30 rounded-lg">
                Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
