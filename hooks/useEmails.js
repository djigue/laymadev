/**
 * useEmailJs
 * ------------------------------------------------------------------
 * Hook personnalisé pour gérer l’envoi d’un formulaire via EmailJS.
 *
 * 🎯 Objectif :
 * - Centraliser la logique d’envoi
 * - Gérer validation, anti-spam et état UI
 * - Simplifier les composants de formulaire
 *
 * ✨ Fonctionnalités :
 * - Gestion contrôlée du state du formulaire
 * - Validation date (>= aujourd’hui)
 * - Validation téléphone
 * - Honeypot anti-bot
 * - Anti-spam timing (minimum delay)
 * - Gestion loading + status (success / error)
 * - Formatage date FR avant envoi
 *
 * @param {Object} initialState - État initial du formulaire
 */

"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export function useEmailJs(initialState, onSuccess) {
  const [form, setForm] = useState(initialState);
  const formLoadedAt = useRef(Date.now());
  const [status, setStatus] = useState({ type: "", msg: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const formatDeadlineFR = (iso) => {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) return iso;
    const [y, m, d] = iso.split("-");
    return `${d}/${m}/${y}`;
  };

  const isDeadlineValid = (iso) => {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) return false;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const dl = new Date(iso);
    dl.setHours(0, 0, 0, 0);

    return dl >= today;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.website?.trim() !== "") return;

    const MIN_DELAY = 2000;
    const elapsed = Date.now() - formLoadedAt.current;
    if (elapsed < MIN_DELAY) return;

    if (loading) return;
    setStatus({ type: "", msg: "" });

    if (!isDeadlineValid(form.deadline)) {
      setStatus({
        type: "error",
        msg: "La date doit être aujourd’hui ou plus tard.",
      });
      return;
    }

    const phoneOk = /^[0-9+\s().-]{6,}$/.test(form.phone?.trim() || "");
    if (!phoneOk) {
      setStatus({
        type: "error",
        msg: "Numéro invalide.",
      });
      return;
    }

    setLoading(true);

    const payload = {
      ...form,
      deadline: formatDeadlineFR(form.deadline),
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        payload,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setStatus({ type: "success", msg: "Message envoyé ✅" });
      setForm(initialState);
      console.log("EMAIL SUCCESS TRIGGER");
      if (onSuccess) onSuccess();
    } catch (err) {
      console.error(err);
      setStatus({ type: "error", msg: "Erreur lors de l’envoi." });
    } finally {
      setLoading(false);
    }
  };

  const todayISO = new Date(
    Date.now() - new Date().getTimezoneOffset() * 60000
  )
    .toISOString()
    .slice(0, 10);

  return {
    form,
    handleChange,
    handleSubmit,
    status,
    loading,
    todayISO,
    setForm,
  };
}