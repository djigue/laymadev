"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useEmailJs } from "@/hooks/useEmails.js";
import SuccessModal from "@/components/SuccessModal";

const initialState = {
  from_name: "",
  from_email: "",
  phone: "",
  budget: "",
  deadline: "",
  project: "",
  website: "",
};

export default function ContactFormB() {
  const [showModal, setShowModal] = useState(false);
  const handleSuccess = () => {
    setShowModal(true);
  };
  const { form, handleChange, handleSubmit, status, loading, todayISO } =
    useEmailJs(initialState, handleSuccess);

  return (
    <div className="w-full flex justify-center py-12 relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
        className="relative w-full max-w-3xl"
      >
        {/* Glass + lumière directionnelle */}
        <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 shadow-2xl overflow-hidden">
          {/* Lumière directionnelle */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
          </div>

          {/* STEP INDICATOR */}
          <div className="flex items-center gap-6 mb-12 relative z-10">
            <div
              className={`flex items-center gap-2 text-sm font-medium ${
                form.project ? "text-blue-400" : "text-white"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center border ${
                  form.project
                    ? "bg-blue-500 border-blue-500"
                    : "border-white/30"
                }`}
              >
                1
              </div>
              Informations
            </div>

            <div className="flex-1 h-px bg-white/10" />

            <div
              className={`flex items-center gap-2 text-sm font-medium ${
                form.project ? "text-white" : "text-gray-500"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center border ${
                  form.project ? "border-white/30" : "border-white/20"
                }`}
              >
                2
              </div>
              Projet
            </div>
          </div>

          {/* TITRE */}
          <div className="mb-10 relative z-10">
            <h2 className="text-3xl font-semibold text-white tracking-tight">
              Décrivez votre projet
            </h2>
            <p className="text-gray-400 text-sm mt-3">
              Construisons une solution performante et adaptée à vos besoins.
            </p>
          </div>

          {/* FORM GRID */}
          <form
            onSubmit={handleSubmit}
            autoComplete="off"
            className="relative z-10"
          >
            {/* Honeypot */}
            <div className="hidden">
              <label htmlFor="website">Website</label>
              <input
                id="website"
                name="website"
                value={form.website}
                onChange={handleChange}
                autoComplete="off"
                tabIndex={-1}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* NOM */}
              <div className="flex flex-col gap-3">
                <label htmlFor="from_name" className="text-sm text-gray-400">
                  Nom
                </label>
                <input
                  id="from_name"
                  type="text"
                  name="from_name"
                  value={form.from_name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  placeholder="Votre nom"
                  className="bg-black/40 border border-white/10 rounded-2xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>

              {/* EMAIL */}
              <div className="flex flex-col gap-3">
                <label htmlFor="from_email" className="text-sm text-gray-400">
                  Email
                </label>
                <input
                  id="from_email"
                  type="email"
                  name="from_email"
                  value={form.from_email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  inputMode="email"
                  placeholder="vous@mail.com"
                  className="bg-black/40 border border-white/10 rounded-2xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>

              {/* TELEPHONE */}
              <div className="flex flex-col gap-3">
                <label htmlFor="phone" className="text-sm text-gray-400">
                  Téléphone
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="06 12 34 56 78"
                  className="bg-black/40 border border-white/10 rounded-2xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>

              {/* BUDGET */}
              <div className="flex flex-col gap-3">
                <label htmlFor="budget" className="text-sm text-gray-400">
                  Budget estimé
                </label>
                <input
                  id="budget"
                  type="text"
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  placeholder="2000 €"
                  inputMode="numeric"
                  className="bg-black/40 border border-white/10 rounded-2xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>

              {/* DEADLINE */}
              <div className="md:col-span-2 flex flex-col gap-3">
                <label htmlFor="deadline" className="text-sm text-gray-400">
                  Date de livraison souhaitée
                </label>
                <input
                  id="deadline"
                  type="date"
                  name="deadline"
                  value={form.deadline}
                  onChange={handleChange}
                  required
                  min={todayISO}
                  className="bg-black/40 border border-white/10 rounded-2xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>
            </div>

            {/* TEXTAREA */}
            <div className="mt-10 flex flex-col gap-3">
              <label htmlFor="project" className="text-sm text-gray-400">
                Votre projet
              </label>
              <textarea
                id="project"
                name="project"
                value={form.project}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Objectif, fonctionnalités, contraintes, délais..."
                className="bg-black/40 border border-white/10 rounded-3xl px-6 py-5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition resize-none"
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={loading}
              className="mt-12 w-full rounded-3xl px-6 py-4 font-medium text-white bg-blue-600 hover:bg-blue-500 transition-all duration-300 disabled:opacity-60 shadow-lg"
            >
              {loading ? "Envoi en cours..." : "Envoyer la demande"}
            </button>

            {/* STATUS */}
            {status.msg && (
              <div
                className={`mt-6 text-sm ${
                  status.type === "success" ? "text-green-400" : "text-red-400"
                }`}
              >
                {status.msg}
              </div>
            )}
          </form>
        </div>
      </motion.div>
      <SuccessModal open={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}

/* Petit composant input (optionnel mais propre) */
function Input({ label, name, type = "text", ...props }) {
  return (
    <div className="flex flex-col gap-3">
      <label className="text-sm text-gray-400">{label}</label>
      <input
        name={name}
        type={type}
        className="bg-black/40 border border-white/10 rounded-2xl px-4 py-3 text-white"
        {...props}
      />
    </div>
  );
}
