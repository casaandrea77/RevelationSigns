"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/animations/variants/fade-up";
import { Footer } from "@/components/layout/Footer";

const CONTACT_EMAIL = "revelationsigns@tuta.com";

const requestOptions = [
  "Free digital gift",
  "Physical gift by post",
  "Bible studies",
  "Bible question",
  "Prayer request",
  "General message",
] as const;

const fieldClass = "mt-2 min-h-13 w-full border border-[#1a1814]/20 bg-white/55 px-4 py-3 font-sans text-base text-[#1a1814] outline-none transition-colors placeholder:text-[#766f64] focus:border-[#9a722a]";

export function ContactPageContent() {
  const [requestType, setRequestType] = useState<string>(requestOptions[0]);
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = `RevelationSigns request: ${requestType}`;
    const lines = [
      `Name: ${form.get("name") || ""}`,
      `Email: ${form.get("email") || ""}`,
      `Country/Region: ${form.get("region") || ""}`,
      `Request: ${requestType}`,
      `Preferred contact: ${form.get("contactMethod") || "Email"}`,
      requestType === "Physical gift by post" ? `Postal address: ${form.get("postalAddress") || ""}` : "",
      "",
      "Message:",
      String(form.get("message") || ""),
    ].filter(Boolean);

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
    setStatus("Your email application should now open with the request prepared. Review it, then press Send.");
  }

  return (
    <main className="overflow-hidden bg-[#06101a] text-foreground">
      <section className="relative px-6 pb-20 pt-40 sm:px-10 lg:px-12 lg:pb-28 lg:pt-48" aria-labelledby="contact-title">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_20%,rgba(196,163,90,0.12),transparent_48%)]" />
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="relative mx-auto max-w-[1200px]">
          <motion.p variants={fadeUp} className="font-sans text-xs tracking-[0.35em] uppercase text-accent">We&apos;re Here to Help</motion.p>
          <motion.h1 id="contact-title" variants={fadeUp} className="mt-5 max-w-4xl font-serif text-[clamp(4rem,8vw,7rem)] font-medium leading-[0.88] tracking-[-0.025em]">Contact RevelationSigns</motion.h1>
          <motion.p variants={fadeUp} className="mt-7 max-w-2xl font-sans text-base leading-[1.85] text-foreground/80 sm:text-lg">Request a free resource, begin Bible studies, ask a biblical question, or share a prayer request. Your message will be addressed to our private Tuta mailbox.</motion.p>
        </motion.div>
      </section>

      <section className="bg-[#f4efe6] px-6 py-20 text-[#1a1814] sm:px-10 lg:px-12 lg:py-28" aria-labelledby="request-heading">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div><p className="font-sans text-xs tracking-[0.35em] uppercase text-[#8a6728]">Personal Support</p><h2 id="request-heading" className="mt-5 font-serif text-[clamp(3rem,5vw,4.8rem)] font-medium leading-none">How can we help?</h2><p className="mt-7 font-sans text-base leading-[1.85] text-[#5c564d]">Choose what you are interested in and tell us a little about your request. We will respond by email whenever possible.</p><div className="mt-9 border-t border-[#1a1814]/15 pt-7"><p className="font-sans text-xs tracking-[0.22em] text-[#8a6728] uppercase">Direct email</p><Link href={`mailto:${CONTACT_EMAIL}`} className="mt-3 block break-all font-serif text-2xl underline decoration-[#8a6728]/40 underline-offset-4">{CONTACT_EMAIL}</Link></div><div className="mt-8 border border-[#8a6728]/25 bg-[#eee7da] p-6"><p className="font-sans text-sm leading-[1.7] text-[#5c564d]"><strong className="text-[#1a1814]">Privacy:</strong> This version does not store your details on the website. Pressing the button prepares a message in your own email application for you to review and send.</p></div></div>

          <form onSubmit={handleSubmit} className="border border-[#1a1814]/15 bg-white/35 p-6 sm:p-9">
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="font-sans text-sm font-medium">Name<input name="name" required autoComplete="name" className={fieldClass} placeholder="Your name" /></label>
              <label className="font-sans text-sm font-medium">Email<input name="email" type="email" required autoComplete="email" className={fieldClass} placeholder="you@example.com" /></label>
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <label className="font-sans text-sm font-medium">Country or region<input name="region" autoComplete="country-name" className={fieldClass} placeholder="Your country or region" /></label>
              <label className="font-sans text-sm font-medium">How can we help?<select name="requestType" value={requestType} onChange={(event) => setRequestType(event.target.value)} className={fieldClass}>{requestOptions.map((option) => <option key={option}>{option}</option>)}</select></label>
            </div>
            {requestType === "Physical gift by post" ? <label className="mt-6 block font-sans text-sm font-medium">Postal address<textarea name="postalAddress" required rows={3} autoComplete="street-address" className={fieldClass} placeholder="Your complete postal address" /></label> : null}
            <label className="mt-6 block font-sans text-sm font-medium">Preferred contact<select name="contactMethod" className={fieldClass}><option>Email</option><option>Telephone</option><option>Online meeting</option><option>In person, if available locally</option></select></label>
            <label className="mt-6 block font-sans text-sm font-medium">Your message<textarea name="message" required rows={7} className={fieldClass} placeholder="Tell us how we can help..." /></label>
            <label className="mt-6 flex items-start gap-3 font-sans text-sm leading-relaxed text-[#5c564d]"><input type="checkbox" required className="mt-1 h-4 w-4 accent-[#9a722a]" /><span>I understand that this opens my email application and that I must press Send to complete the request.</span></label>
            <button type="submit" className="mt-8 inline-flex min-h-14 w-full items-center justify-center bg-[#1a1814] px-8 font-sans text-xs font-semibold tracking-[0.2em] text-[#f4efe6] uppercase transition-colors hover:bg-[#2a2720] sm:w-auto">Prepare My Request</button>
            {status ? <p role="status" className="mt-5 border-l-2 border-[#9a722a] pl-4 font-sans text-sm leading-relaxed text-[#5c564d]">{status}</p> : null}
          </form>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-12 lg:py-24" aria-labelledby="help-options"><div className="mx-auto max-w-[1100px]"><h2 id="help-options" className="text-center font-serif text-[clamp(3rem,5vw,4.8rem)] font-light">Ways we can help</h2><div className="mt-12 grid gap-px overflow-hidden border border-accent/20 bg-accent/20 md:grid-cols-3">{[["Free Resources","Request a digital book, study guide, or information about available physical gifts."],["Bible Studies","Begin with Daniel 2 or ask for help choosing a study suited to your questions."],["Prayer & Questions","Share a prayer request or ask a sincere question about Scripture."]].map(([title,text]) => <article key={title} className="bg-[#06101a] p-8 text-center"><h3 className="font-serif text-3xl font-light">{title}</h3><p className="mt-4 font-sans text-base leading-[1.75] text-muted">{text}</p></article>)}</div></div></section>
      <Footer />
    </main>
  );
}
