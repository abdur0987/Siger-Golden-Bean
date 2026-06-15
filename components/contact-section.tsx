"use client";

import { Mail, MapPin, MessageCircle } from "lucide-react";
import { CtaLink } from "@/components/cta-link";
import { SectionHeading } from "@/components/section-heading";
import { contact, mailtoUrl, whatsappUrl } from "@/data/contact";
import { useLanguageContent } from "@/components/language-provider";

export function ContactSection() {
  const { content } = useLanguageContent();
  const contactContent = content.contact;
  const form = contactContent.form;

  return (
    <section id="contact" className="bg-cream-100 py-20 md:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.88fr_1.12fr]">
        <div>
          <SectionHeading
            eyebrow={contactContent.eyebrow}
            title={contactContent.title}
            description={contactContent.description}
          />
          <div className="mt-8 grid gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring flex items-center gap-3 rounded-md border border-coffee-900/10 bg-white p-4 transition hover:border-gold-500"
            >
              <MessageCircle className="h-5 w-5 text-gold-500" aria-hidden="true" />
              <span>
                <span className="block text-sm font-bold text-coffee-950">WhatsApp</span>
                <span className="block text-sm text-ink/70">{contact.whatsappDisplay}</span>
              </span>
            </a>
            <a
              href={mailtoUrl}
              className="focus-ring flex items-center gap-3 rounded-md border border-coffee-900/10 bg-white p-4 transition hover:border-gold-500"
            >
              <Mail className="h-5 w-5 text-gold-500" aria-hidden="true" />
              <span>
                <span className="block text-sm font-bold text-coffee-950">Email</span>
                <span className="block text-sm text-ink/70">{contact.email}</span>
              </span>
            </a>
            <div className="flex items-center gap-3 rounded-md border border-coffee-900/10 bg-white p-4">
              <MapPin className="h-5 w-5 text-gold-500" aria-hidden="true" />
              <span>
                <span className="block text-sm font-bold text-coffee-950">{contactContent.locationLabel}</span>
                <span className="block text-sm text-ink/70">{contact.location}</span>
              </span>
            </div>
          </div>
        </div>

        <form
          action={mailtoUrl}
          method="post"
          encType="text/plain"
          className="rounded-md border border-coffee-900/10 bg-white p-5 shadow-[0_12px_35px_rgba(42,23,17,0.06)] md:p-6"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold text-coffee-950">
              {form.name}
              <input
                name="name"
                required
                className="focus-ring min-h-11 rounded-md border border-coffee-900/12 bg-cream-50 px-3 text-sm font-normal text-ink"
                placeholder={form.namePlaceholder}
              />
            </label>
            <label className="grid gap-2 text-sm font-bold text-coffee-950">
              {form.company}
              <input
                name="company"
                className="focus-ring min-h-11 rounded-md border border-coffee-900/12 bg-cream-50 px-3 text-sm font-normal text-ink"
                placeholder={form.companyPlaceholder}
              />
            </label>
            <label className="grid gap-2 text-sm font-bold text-coffee-950">
              {form.country}
              <input
                name="country"
                required
                className="focus-ring min-h-11 rounded-md border border-coffee-900/12 bg-cream-50 px-3 text-sm font-normal text-ink"
                placeholder={form.countryPlaceholder}
              />
            </label>
            <label className="grid gap-2 text-sm font-bold text-coffee-950">
              {form.productInterest}
              <select
                name="product-interest"
                className="focus-ring min-h-11 rounded-md border border-coffee-900/12 bg-cream-50 px-3 text-sm font-normal text-ink"
                defaultValue=""
              >
                <option value="" disabled>
                  {form.selectProduct}
                </option>
                {contactContent.productInterests.map((interest) => (
                  <option key={interest}>{interest}</option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-bold text-coffee-950">
              {form.quantity}
              <input
                name="quantity-estimate"
                className="focus-ring min-h-11 rounded-md border border-coffee-900/12 bg-cream-50 px-3 text-sm font-normal text-ink"
                placeholder={form.quantityPlaceholder}
              />
            </label>
            <label className="grid gap-2 text-sm font-bold text-coffee-950">
              {form.buyerContact}
              <input
                name="buyer-contact"
                required
                className="focus-ring min-h-11 rounded-md border border-coffee-900/12 bg-cream-50 px-3 text-sm font-normal text-ink"
                placeholder={form.buyerContactPlaceholder}
              />
            </label>
          </div>
          <label className="mt-4 grid gap-2 text-sm font-bold text-coffee-950">
            {form.message}
            <textarea
              name="message"
              rows={5}
              className="focus-ring rounded-md border border-coffee-900/12 bg-cream-50 px-3 py-3 text-sm font-normal text-ink"
              placeholder={form.messagePlaceholder}
            />
          </label>
          <div className="mt-5 flex flex-wrap gap-3">
            <button
              type="submit"
              className="focus-ring inline-flex min-h-11 items-center justify-center rounded-md border border-gold-500 bg-gold-500 px-5 py-3 text-sm font-bold text-white transition hover:border-coffee-900 hover:bg-coffee-900"
            >
              {form.send}
            </button>
            <CtaLink href={whatsappUrl} target="_blank" rel="noreferrer" variant="ghost">
              {form.chat}
            </CtaLink>
          </div>
        </form>
      </div>
    </section>
  );
}
