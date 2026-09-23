'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEmailJs } from '@/hooks/useEmails.js';
import SuccessModal from '@/components/SuccessModal';

const initialState = {
  from_name: '',
  from_email: '',
  phone: '',
  budget: '',
  deadline: '',
  project: '',
  website: '',
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
        <div className="relative border border-slate-200 rounded-3xl p-12 shadow-xl overflow-hidden">
          {/* PHOTO DE FOND */}
          <div className="absolute inset-0">
            <Image
              src="/images/bg_process.jpg"
              alt=""
              fill
              sizes="800px"
              className="object-cover"
            />
          </div>

          {/* VOILE (opaque au centre pour le texte, transparent sur les bords) */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.9),rgba(239,246,255,0.8)_45%,rgba(239,246,255,0.5)_100%)]" />

          {/* STEP INDICATOR */}
          <div className="flex items-center gap-6 mb-12 relative z-10">
            <div
              className={`flex items-center gap-2 text-sm font-medium ${
                form.project ? 'text-blue-700' : 'text-slate-900'
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center border ${
                  form.project
                    ? 'bg-blue-700 border-blue-700 text-white'
                    : 'border-slate-300'
                }`}
              >
                1
              </div>
              Informations
            </div>

            <div className="flex-1 h-px bg-slate-200" />

            <div
              className={`flex items-center gap-2 text-sm font-medium ${
                form.project ? 'text-slate-900' : 'text-slate-400'
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center border ${
                  form.project ? 'border-slate-300' : 'border-slate-200'
                }`}
              >
                2
              </div>
              Projet
            </div>
          </div>

          {/* TITRE */}
          <div className="mb-10 relative z-10">
            <h2 className="text-3xl font-semibold text-slate-900 tracking-tight">
              Décrivez votre projet
            </h2>
            <p className="text-slate-500 text-sm mt-3">
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
                <label htmlFor="from_name" className="text-sm text-slate-500">
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
                  className="bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>

              {/* EMAIL */}
              <div className="flex flex-col gap-3">
                <label htmlFor="from_email" className="text-sm text-slate-500">
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
                  className="bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>

              {/* TELEPHONE */}
              <div className="flex flex-col gap-3">
                <label htmlFor="phone" className="text-sm text-slate-500">
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
                  className="bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>

              {/* BUDGET */}
              <div className="flex flex-col gap-3">
                <label htmlFor="budget" className="text-sm text-slate-500">
                  Budget estimé
                </label>
                <input
                  id="budget"
                  type="text"
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  placeholder="en €"
                  inputMode="numeric"
                  className="bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>

              {/* DEADLINE */}
              <div className="md:col-span-2 flex flex-col gap-3">
                <label htmlFor="deadline" className="text-sm text-slate-500">
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
                  className="bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>
            </div>

            {/* TEXTAREA */}
            <div className="mt-10 flex flex-col gap-3">
              <label htmlFor="project" className="text-sm text-slate-500">
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
                className="bg-slate-50 border border-slate-200 rounded-3xl px-6 py-5 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition resize-none"
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={loading}
              className="mt-12 w-full rounded-3xl px-6 py-4 font-medium text-white bg-orange-500 hover:bg-orange-600 transition-all duration-300 disabled:opacity-60 shadow-lg shadow-orange-500/20"
            >
              {loading ? 'Envoi en cours...' : 'Envoyer la demande'}
            </button>

            {/* STATUS */}
            {status.msg && (
              <div
                className={`mt-6 text-sm ${
                  status.type === 'success' ? 'text-green-600' : 'text-red-600'
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
