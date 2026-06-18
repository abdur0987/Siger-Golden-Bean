"use client";

import {
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Flame,
  MapPin,
  Package,
  SearchCheck,
  Send,
  Settings2,
  Truck,
  Users
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { useLanguageContent } from "@/components/language-provider";

const processIcons = [
  MapPin,
  Users,
  SearchCheck,
  ClipboardCheck,
  Flame,
  Settings2,
  Package,
  CheckCircle2,
  Send,
  FileText,
  Truck
];

export function ProcessSection() {
  const { content } = useLanguageContent();
  const process = content.process;

  return (
    <section id="process" className="bg-cream-100 py-20 md:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow={process.eyebrow}
          title={process.title}
          description={process.description}
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {process.steps.map(([title, description], index) => (
            <ProcessCard
              key={title}
              title={title}
              description={description}
              index={index}
            />
          ))}
        </div>

        <div className="mt-8 rounded-md border border-origin-700/15 bg-origin-900 p-5 text-cream-100">
          <div className="flex gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-300" aria-hidden="true" />
            <p className="text-sm leading-6">
              {process.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessCard({
  title,
  description,
  index
}: {
  title: string;
  description: string;
  index: number;
}) {
  const Icon = processIcons[index] ?? CheckCircle2;

  return (
    <article className="group rounded-md border border-coffee-900/10 bg-white p-5 shadow-[0_14px_36px_rgba(42,23,17,0.045)] transition hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-[0_20px_52px_rgba(42,23,17,0.09)]">
      <div className="flex items-start justify-between gap-5">
        <div className="text-origin-700 transition group-hover:text-gold-500">
          <Icon className="h-10 w-10" strokeWidth={1.8} aria-hidden="true" />
        </div>
        <span className="text-xs font-black uppercase tracking-[0.18em] text-gold-500">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className="mt-6 font-serif text-2xl font-bold leading-tight text-origin-700">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-6 text-ink/70">{description}</p>
    </article>
  );
}
