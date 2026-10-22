"use client";

import { useState } from "react";
import { Mail, Send, Check, Copy, ExternalLink, AlertCircle, Info } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [activationNotice, setActivationNotice] = useState(false);
  const [copied, setCopied] = useState(false);
  const [mailClientNotice, setMailClientNotice] = useState(false);

  const myEmail = "jusufskopljak2605@gmail.com";

  // Build clean, URL-safe mailto link
  const generateMailtoUrl = () => {
    const subject = encodeURIComponent(formData.subject || "Upit sa portfolija");
    const bodyContent = `Pozdrav Jusuf,

Ime i Prezime: ${formData.name || "Nije navedeno"}
Email: ${formData.email || "Nije navedeno"}

Poruka:
${formData.message || "(Ovdje unesite vašu poruku)"}
`;
    return `mailto:${myEmail}?subject=${subject}&body=${encodeURIComponent(bodyContent)}`;
  };

  const mailtoUrl = generateMailtoUrl();

  // Robust function to launch user's email client
  const handleOpenEmailClient = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setMailClientNotice(true);
    setTimeout(() => setMailClientNotice(false), 5000);

    // Direct window location trigger
    try {
      window.location.href = mailtoUrl;
    } catch {
      window.open(mailtoUrl, "_self");
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(myEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    setActivationNotice(false);

    try {
      // Step 1: Send to /api/contact route
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success) {
        setStatus("success");
        if (data.needsActivation) {
          setActivationNotice(true);
        }
        return;
      }

      // Step 2: Direct fallback to FormSubmit AJAX endpoint if API route is not available
      const directResponse = await fetch(`https://formsubmit.co/ajax/${myEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject || `Nova poruka od: ${formData.name}`,
          message: formData.message,
        }),
      });

      const directData = await directResponse.json().catch(() => ({}));

      if (directResponse.ok || directData.success === "true" || directData.message?.includes("Activation")) {
        setStatus("success");
        if (directData.message?.includes("Activation")) {
          setActivationNotice(true);
        }
      } else {
        throw new Error(directData.message || "Slanje nije uspjelo.");
      }
    } catch (err: any) {
      console.warn("Greška prilikom slanja:", err);
      setStatus("error");
      setErrorMessage(
        "Automatsko slanje nije uspjelo. Kliknite na 'Otvori u svom email klijentu' ispod kako biste poslali poruku direktno."
      );
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
      {/* Left Column: Direct Contact Info */}
      <div className="md:col-span-5 space-y-4">
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 space-y-4">
          <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider text-[#9cb589]">
            <span className="w-2 h-2 rounded-full bg-[#526643]" />
            <span>Direktan Kontakt</span>
          </div>

          <h3 className="text-xl font-bold text-white">
            Pošaljite mi poruku ili upit
          </h3>

          <p className="text-zinc-400 text-sm leading-relaxed font-light">
            Otvoren sam za saradnju, praksu, razvoj softverskih projekata i mrežna rješenja. Popunite formu ili me kontaktirajte direktno putem emaila.
          </p>

          <div className="pt-2">
            <div className="p-3 bg-zinc-950/80 rounded-xl border border-zinc-800/80 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 min-w-0">
                <Mail size={16} className="text-[#8ea47c] shrink-0" />
                <span className="text-xs text-zinc-300 font-mono truncate">
                  {myEmail}
                </span>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="shrink-0 p-1.5 rounded-md bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors text-xs flex items-center gap-1 font-sans"
                title="Kopiraj email adresu"
              >
                {copied ? (
                  <>
                    <Check size={13} className="text-emerald-400" />
                    <span className="text-emerald-400 text-[11px]">Kopirano!</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} />
                    <span className="text-[11px]">Kopiraj</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Location & Availability Box - STRICTLY ZENICA */}
        <div className="p-5 bg-zinc-900/40 border border-zinc-800/60 rounded-2xl space-y-2.5">
          <div className="text-xs font-mono uppercase tracking-wider text-[#9cb589]">
            Dostupnost & Lokacija
          </div>
          <p className="text-sm font-semibold text-white">
            📍 Zenica, Bosna i Hercegovina
          </p>
          <div className="text-xs text-zinc-400">
            Obično odgovaram u roku od 24 sata.
          </div>
        </div>
      </div>

      {/* Right Column: Contact Form */}
      <div className="md:col-span-7 bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 md:p-8">
        {status === "success" ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#3a492f]/40 border border-[#526643] text-[#c5d6b4] flex items-center justify-center mx-auto">
              <Check size={28} />
            </div>
            <h4 className="text-2xl font-bold text-white">
              Poruka je uspješno poslana!
            </h4>
            <p className="text-sm text-zinc-400 max-w-sm mx-auto leading-relaxed">
              Hvala vam na javljanju. Odgovorit ću na vaš email u najkraćem mogućem roku.
            </p>

            {activationNotice && (
              <div className="p-4 bg-zinc-950/90 border border-[#526643] rounded-xl text-left text-xs text-zinc-300 space-y-2 max-w-md mx-auto">
                <div className="flex items-center gap-2 font-semibold text-[#c5d6b4]">
                  <Info size={15} />
                  <span>Aktivacija prijemnog sandučića</span>
                </div>
                <p className="leading-relaxed">
                  Poslan je jednokratni aktivacijski email na <strong className="text-white">{myEmail}</strong>. Otvorite vaš Gmail i kliknite na <em>&quot;Activate Form&quot;</em> kako bi sve buduće poruke stizale direktno u vaš inbox.
                </p>
              </div>
            )}

            <div className="pt-3 flex flex-wrap justify-center gap-3">
              <a
                href={mailtoUrl}
                onClick={handleOpenEmailClient}
                className="inline-flex items-center gap-2 text-xs font-medium px-4 py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-colors border border-zinc-700"
              >
                <ExternalLink size={13} />
                <span>Otvori u svom email programu</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  setStatus("idle");
                  setFormData({ name: "", email: "", subject: "", message: "" });
                }}
                className="text-xs text-zinc-400 hover:text-white px-4 py-2.5"
              >
                Pošalji još jednu poruku
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  Vaše Ime i Prezime <span className="text-[#8ea47c]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="npr. Marko Marković"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#526643] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  Vaša Email Adresa <span className="text-[#8ea47c]">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="vas.email@domen.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#526643] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                Naslov / Svrha poruke
              </label>
              <input
                type="text"
                placeholder="npr. Ponuda za projekat / Pitanje / Saradnja"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#526643] transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                Poruka <span className="text-[#8ea47c]">*</span>
              </label>
              <textarea
                required
                rows={4}
                placeholder="Ovdje napišite vašu poruku ili detalje projekta..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#526643] transition-colors resize-none"
              />
            </div>

            {status === "error" && (
              <div className="p-3.5 bg-red-950/50 border border-red-800/80 rounded-xl text-xs text-red-200 flex items-start gap-2.5">
                <AlertCircle size={16} className="text-red-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div>{errorMessage}</div>
                  <a
                    href={mailtoUrl}
                    onClick={handleOpenEmailClient}
                    className="text-xs font-semibold text-emerald-300 hover:underline flex items-center gap-1 pt-1"
                  >
                    <span>Otvori u svom email programu</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            )}

            {mailClientNotice && (
              <div className="p-3 bg-zinc-950 border border-[#526643] rounded-xl text-xs text-[#d3e3c6] flex items-center justify-between gap-2">
                <span>Pokrećem vaš zadani email klijent...</span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-2 py-1 bg-zinc-800 rounded text-[11px] text-white shrink-0"
                >
                  {copied ? "Kopirano!" : "Kopiraj Email"}
                </button>
              </div>
            )}

            <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center gap-2 bg-[#3a492f] hover:bg-[#4a5c3d] text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition-all disabled:opacity-50 shadow-md shadow-black/30 cursor-pointer"
              >
                <Send size={14} />
                <span>{status === "loading" ? "Slanje..." : "Pošalji Poruku"}</span>
              </button>

              {/* Working "Otvori u svom email klijentu" Action Link/Button */}
              <a
                href={mailtoUrl}
                onClick={handleOpenEmailClient}
                className="text-xs text-zinc-400 hover:text-zinc-200 inline-flex items-center gap-1.5 transition-colors cursor-pointer p-1"
                title="Otvara direktno vaš zadani mail program sa unesenim podacima"
              >
                <ExternalLink size={13} className="text-[#8ea47c]" />
                <span className="underline decoration-zinc-700 underline-offset-4 hover:decoration-zinc-400">
                  Otvori u svom email klijentu
                </span>
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
