"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Coffee,
  FileCheck2,
  MapPinned,
  MessageCircle,
  PackageCheck,
  Play,
  Quote,
  Scale
} from "lucide-react";
import { CtaLink } from "@/components/cta-link";
import { useLanguageContent } from "@/components/language-provider";
import { mailtoUrl, whatsappUrl } from "@/data/contact";
import type { Language } from "@/data/site-content";
import type { OriginProfile } from "@/data/origin-profiles";

type OriginDetailPageProps = {
  profile: OriginProfile;
};

const labels: Record<
  Language,
  {
    specifications: string;
    everyDetail: string;
    tastingNotes: string;
    sample: string;
    documents: string;
    gallery: string;
    video: string;
    story: string;
    quote: string;
    preview: string;
    originFilm: string;
    brewingGuide: string;
    score: string;
    strength: string;
    slideshowLead: string;
    mapTitle: string;
    mapHint: string;
  }
> = {
  en: {
    specifications: "01 - Specifications",
    everyDetail: "Every detail, accounted for.",
    tastingNotes: "Tasting notes",
    sample: "Sample & packaging",
    documents: "Documents",
    gallery: "02 - Gallery",
    video: "Preview",
    story: "03 - Story",
    quote: "We do not only ship coffee. We carry the place where the taste began.",
    preview: "Origin video preview",
    originFilm: "Process film slot",
    brewingGuide: "Buyer use",
    score: "Score",
    strength: "Strength",
    slideshowLead: "A moving visual preview of origin, sample, sorting, roasting, packaging, and shipment readiness.",
    mapTitle: "Lampung geographic map",
    mapHint: "Orientation map showing where the origin sits inside Lampung."
  },
  id: {
    specifications: "01 - Spesifikasi",
    everyDetail: "Setiap detail, dibuat jelas.",
    tastingNotes: "Catatan rasa",
    sample: "Sample & packaging",
    documents: "Dokumen",
    gallery: "02 - Galeri",
    video: "Preview",
    story: "03 - Cerita",
    quote: "Kami tidak hanya mengirim kopi. Kami membawa tempat di mana rasa itu bermula.",
    preview: "Preview video origin",
    originFilm: "Slot film proses",
    brewingGuide: "Penggunaan buyer",
    score: "Skor",
    strength: "Karakter",
    slideshowLead: "Preview visual bergerak tentang origin, sampel, sortasi, roasting, packaging, dan kesiapan shipment.",
    mapTitle: "Peta geografis Lampung",
    mapHint: "Peta orientasi untuk melihat posisi origin di wilayah Lampung."
  },
  ar: {
    specifications: "01 - المواصفات",
    everyDetail: "كل تفصيل محسوب.",
    tastingNotes: "ملاحظات الطعم",
    sample: "العينات والتغليف",
    documents: "الوثائق",
    gallery: "02 - المعرض",
    video: "معاينة",
    story: "03 - الحكاية",
    quote: "نحن لا نشحن القهوة فقط. نحن نحمل المكان الذي بدأ منه الطعم.",
    preview: "معاينة فيديو المنشأ",
    originFilm: "مساحة فيلم العملية",
    brewingGuide: "استخدام المشتري",
    score: "النتيجة",
    strength: "القوة",
    slideshowLead: "معاينة مرئية متحركة للمنشأ والعينات والفرز والتحميص والتغليف وجاهزية الشحن.",
    mapTitle: "خريطة لامبونغ الجغرافية",
    mapHint: "خريطة توجيهية توضّح موقع المنشأ داخل لامبونغ."
  }
};

export function OriginDetailPage({ profile }: OriginDetailPageProps) {
  const { language } = useLanguageContent();
  const copy = profile.content[language];
  const ui = labels[language];
  const primaryArea = getPrimaryArea(copy.profile, copy.subtitle);

  return (
    <div className="bg-cream-50 text-coffee-950">
      <section id="origin-detail" className="border-b border-coffee-900/10 bg-cream-50">
        <div className="section-shell grid gap-8 pb-16 pt-10 md:pt-14 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className="pt-6 md:pt-12">
            <Link
              href="/#origins"
              className="focus-ring inline-flex items-center gap-2 rounded-md text-sm font-bold text-coffee-900 transition hover:text-gold-500"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              {copy.backLabel}
            </Link>
            <p className="mt-10 text-xs font-black uppercase tracking-[0.18em] text-gold-500">
              {profile.accent}
            </p>
            <h1 className="mt-5 max-w-2xl font-serif text-5xl font-bold leading-[0.96] text-coffee-950 md:text-7xl">
              {copy.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-ink/80 md:text-xl md:leading-9">
              {copy.intro}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <CtaLink href={whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                {copy.ctaPrimary}
              </CtaLink>
              <CtaLink href={mailtoUrl} variant="ghost">
                <Quote className="h-4 w-4" aria-hidden="true" />
                {copy.ctaSecondary}
              </CtaLink>
            </div>

            <div className="mt-10 grid grid-cols-3 border-y border-coffee-900/15 py-5">
              {copy.profile.slice(0, 3).map(([label, value]) => (
                <div key={label} className="pr-3">
                  <p className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-gold-500">
                    {label}
                  </p>
                  <p className="mt-2 text-sm font-bold leading-5 text-coffee-950">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <CinematicVideoCard
            title={copy.title}
            eyebrow={ui.preview}
            note={copy.videoNote}
            image={profile.heroImage}
            videoSrc={profile.videoSrc}
            variant="hero"
          />
        </div>
      </section>

      <section className="bg-cream-50 py-14 md:py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.46fr_0.54fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-gold-500">
              {ui.specifications}
            </p>
            <h2 className="mt-4 max-w-sm font-serif text-4xl font-bold leading-tight text-coffee-950 md:text-5xl">
              {ui.everyDetail}
            </h2>
            <p className="mt-5 text-sm leading-7 text-ink/70">{copy.subtitle}</p>
            <OriginMapCard
              title={primaryArea.label}
              areas={primaryArea.areas}
              originName={copy.title}
              slug={profile.slug}
              mapTitle={ui.mapTitle}
              mapHint={ui.mapHint}
            />
          </div>

          <div className="grid gap-8">
            <div className="grid gap-x-8 gap-y-4 border-t border-coffee-900/15 pt-5 md:grid-cols-2">
              {copy.profile.map(([label, value]) => (
                <SpecRow key={label} label={label} value={value} />
              ))}
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-coffee-900/55">
                {ui.tastingNotes}
              </p>
              <div className="mt-5 grid gap-3">
                {copy.taste.map((taste, index) => (
                  <TasteBar
                    key={taste}
                    label={taste}
                    value={Math.max(62, 88 - index * 6)}
                  />
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <EditorialPanel
                icon={<PackageCheck className="h-5 w-5" aria-hidden="true" />}
                title={ui.sample}
                items={copy.sample}
              />
              <EditorialPanel
                icon={<FileCheck2 className="h-5 w-5" aria-hidden="true" />}
                title={ui.documents}
                items={copy.documents}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-coffee-900/14 bg-cream-100 py-14 md:py-20">
        <div className="section-shell">
          <div className="grid gap-6 lg:grid-cols-[0.34fr_0.66fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-gold-500">
                {ui.gallery}
              </p>
              <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-coffee-950 md:text-5xl">
                {copy.galleryTitle}
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-ink/70 lg:justify-self-end">
              {copy.videoNote}
            </p>
          </div>

          <div className="mt-9 grid gap-3 md:grid-cols-[0.92fr_1.08fr]">
            <figure className="overflow-hidden rounded-sm border border-coffee-900/10 bg-white">
              <div className="relative aspect-[4/5]">
                <Image
                  src={profile.galleryImages[0] ?? profile.heroImage}
                  alt={copy.galleryCaptions[0] ?? copy.galleryTitle}
                  fill
                  sizes="(min-width: 1024px) 36vw, 92vw"
                  className="object-cover"
                />
              </div>
            </figure>
            <div className="grid gap-3 sm:grid-cols-2">
              {[profile.galleryImages[1], profile.galleryImages[2], profile.heroImage, profile.galleryImages[0]]
                .filter(Boolean)
                .map((image, index) => (
                  <figure
                    key={`${image}-${index}`}
                    className="overflow-hidden rounded-sm border border-coffee-900/10 bg-white"
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={image}
                        alt={copy.galleryCaptions[index + 1] ?? copy.galleryTitle}
                        fill
                        sizes="(min-width: 1024px) 28vw, 92vw"
                        className="object-cover"
                      />
                    </div>
                  </figure>
                ))}
            </div>
          </div>
        </div>
      </section>

      <OriginSlideshowBreak
        title={copy.title}
        ui={ui}
        images={[
          profile.galleryImages[1] ?? profile.heroImage,
          profile.galleryImages[2] ?? profile.heroImage,
          profile.heroImage,
          "/images/gallery/sample-pack.webp",
          "/images/gallery/shipment-preparation.webp"
        ]}
      />

      <section id="coffee-stories" className="bg-cream-50 py-16 md:py-24">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.36fr_0.64fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-gold-500">
              {ui.story}
            </p>
            <h2 className="mt-4 max-w-sm font-serif text-4xl font-bold leading-tight text-coffee-950 md:text-5xl">
              {copy.storiesTitle}
            </h2>
          </div>
          <div>
            <p className="text-lg font-semibold leading-9 text-ink/80">{copy.storiesIntro}</p>
            <blockquote className="mt-8 border-l-2 border-gold-500 py-2 pl-6 font-serif text-2xl font-bold italic leading-9 text-coffee-950">
              {ui.quote}
            </blockquote>
            <div className="mt-9 grid gap-6">
              {copy.stories.map((story) => (
                <p key={story} className="text-base leading-8 text-ink/75">
                  {story}
                </p>
              ))}
            </div>
            <div className="mt-12 grid gap-4 border-t border-coffee-900/15 pt-6 sm:grid-cols-4">
              <MiniStat icon={<Coffee className="h-4 w-4" />} label={ui.score} value="88.5" />
              <MiniStat icon={<Scale className="h-4 w-4" />} label={ui.strength} value={copy.taste[0] ?? profile.accent} />
              <MiniStat label={ui.brewingGuide} value={copy.profile[4]?.[1] ?? copy.title} />
              <MiniStat label={copy.quotationTitle} value={copy.ctaSecondary} />
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <CtaLink href={whatsappUrl} target="_blank" rel="noreferrer">
                {copy.ctaPrimary}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </CtaLink>
              <CtaLink href={mailtoUrl} variant="ghost">
                {copy.ctaSecondary}
              </CtaLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function CinematicVideoCard({
  title,
  eyebrow,
  note,
  image,
  videoSrc,
  variant = "normal"
}: {
  title: string;
  eyebrow: string;
  note: string;
  image: string;
  videoSrc?: string;
  variant?: "hero" | "normal";
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-sm bg-coffee-950 shadow-[0_26px_90px_rgba(42,23,17,0.18)] ${
        variant === "hero" ? "min-h-[420px] lg:min-h-[590px]" : "min-h-[420px]"
      }`}
    >
      <VideoOrImage
        title={title}
        image={image}
        videoSrc={videoSrc}
        priority={variant === "hero"}
        className="blur-[1.5px]"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(218,183,105,0.18),transparent_30%),linear-gradient(180deg,rgba(42,23,17,0.1),rgba(42,23,17,0.74))]" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-cream-50 via-cream-50/80 to-transparent" />
      <div className="absolute left-5 top-5 rounded-sm bg-coffee-950/60 px-3 py-2 text-[0.65rem] font-black uppercase tracking-[0.16em] text-cream-50 backdrop-blur">
        {eyebrow}
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-white/20 text-white shadow-[0_16px_40px_rgba(0,0,0,0.24)] backdrop-blur">
          <Play className="ml-1 h-7 w-7 fill-current" aria-hidden="true" />
        </div>
      </div>
      <div className="absolute inset-x-5 bottom-5">
        <p className="max-w-md text-sm font-semibold leading-6 text-coffee-950">{note}</p>
      </div>
    </div>
  );
}

function OriginSlideshowBreak({
  title,
  ui,
  images
}: {
  title: string;
  ui: (typeof labels)[Language];
  images: string[];
}) {
  const slides = useMemo(() => Array.from(new Set(images.filter(Boolean))), [images]);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 3600);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  return (
    <section data-nav-theme="dark" className="relative min-h-[560px] overflow-hidden bg-coffee-950 text-cream-50">
      {slides.map((image, index) => (
        <Image
          key={image}
          src={image}
          alt={`${title} slide ${index + 1}`}
          fill
          sizes="100vw"
          className={`scale-105 object-cover transition-opacity duration-1000 ${
            index === activeSlide ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,56,41,0.64),rgba(42,23,17,0.62)_44%,rgba(42,23,17,0.24)),linear-gradient(180deg,rgba(0,0,0,0.18),rgba(0,0,0,0.58))]" />
        <div className="section-shell relative min-h-[560px]">
          <div className="absolute left-0 top-16 hidden h-56 flex-col items-center gap-4 md:flex">
            {slides.slice(0, 5).map((item, index) => (
              <span
                key={item}
                className={`h-4 w-4 rounded-full border border-white/65 ${
                  index === activeSlide ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>

          <div className="flex min-h-[560px] max-w-4xl flex-col justify-end pb-16 pt-28 md:pl-14">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-gold-300">
              {ui.originFilm}
            </p>
            <h2 className="mt-5 font-serif text-5xl font-bold leading-[0.95] text-white md:text-7xl">
              {title}
            </h2>
            <div className="mt-8 h-px w-full max-w-3xl bg-white/35" />
            <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-cream-50/90">
              {ui.slideshowLead}
            </p>
          </div>
        </div>
    </section>
  );
}

function VideoOrImage({
  title,
  image,
  videoSrc,
  priority = false,
  className = ""
}: {
  title: string;
  image: string;
  videoSrc?: string;
  priority?: boolean;
  className?: string;
}) {
  if (videoSrc) {
    return (
      <video
        className={`absolute inset-0 h-full w-full scale-105 object-cover ${className}`}
        autoPlay
        loop
        muted
        playsInline
        poster={image}
        aria-label={title}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    );
  }

  return (
    <Image
      src={image}
      alt={title}
      fill
      priority={priority}
      sizes="(min-width: 1024px) 50vw, 92vw"
      className={`scale-105 object-cover ${className}`}
    />
  );
}

const originMapPins: Record<string, Array<{ name: string; x: number; y: number }>> = {
  "west-lampung": [
    { name: "Liwa", x: 29, y: 44 },
    { name: "Sekincau", x: 36, y: 40 },
    { name: "Belalau", x: 31, y: 52 },
    { name: "Sumber Jaya", x: 41, y: 47 },
    { name: "Way Tenong", x: 38, y: 55 },
    { name: "Air Hitam", x: 45, y: 52 },
    { name: "Batu Brak", x: 27, y: 49 },
    { name: "Suoh", x: 33, y: 61 }
  ],
  "krui-west-coast": [
    { name: "Pesisir Tengah", x: 19, y: 54 },
    { name: "Pesisir Selatan", x: 24, y: 64 },
    { name: "Pesisir Utara", x: 18, y: 44 },
    { name: "Karya Penggawa", x: 22, y: 50 },
    { name: "Bengkunat", x: 30, y: 71 }
  ],
  tanggamus: [
    { name: "Ulubelu", x: 46, y: 71 },
    { name: "Pulau Panggung", x: 51, y: 76 },
    { name: "Air Naningan", x: 42, y: 76 },
    { name: "Sumberejo", x: 54, y: 81 },
    { name: "Gisting", x: 58, y: 84 },
    { name: "Kota Agung", x: 47, y: 88 }
  ],
  "way-kanan": [
    { name: "Banjit", x: 50, y: 31 },
    { name: "Kasui", x: 47, y: 36 },
    { name: "Rebang Tangkas", x: 55, y: 39 },
    { name: "Baradatu", x: 58, y: 34 }
  ],
  "north-lampung": [
    { name: "Bukit Kemuning", x: 61, y: 40 },
    { name: "Abung Tinggi", x: 67, y: 44 },
    { name: "Tanjung Raja", x: 70, y: 48 },
    { name: "Kotabumi", x: 64, y: 51 }
  ],
  "supporting-origins": [
    { name: "Lampung Tengah", x: 70, y: 62 },
    { name: "Pesawaran", x: 66, y: 84 },
    { name: "Pringsewu", x: 59, y: 79 },
    { name: "Pagar Alam", x: 18, y: 24 },
    { name: "Aceh Gayo", x: 12, y: 14 }
  ]
};

const defaultMapPins = [
  { name: "Lampung Barat", x: 34, y: 52 },
  { name: "Tanggamus", x: 50, y: 78 },
  { name: "Lampung Utara", x: 64, y: 46 },
  { name: "Bandar Lampung", x: 76, y: 88 }
];

const originRegionStyles: Record<string, { path: string }> = {
  "west-lampung": {
    path: "M163 365C146 330 168 292 202 277C235 263 270 276 287 307C303 337 295 382 262 399C226 418 181 399 163 365Z"
  },
  "krui-west-coast": {
    path: "M118 425C104 387 130 336 162 310C182 293 194 317 182 348C165 390 154 437 190 481C158 469 131 454 118 425Z"
  },
  tanggamus: {
    path: "M276 454C302 412 355 395 410 407C454 417 472 451 445 486C415 525 345 523 300 495C279 482 268 470 276 454Z"
  },
  "way-kanan": {
    path: "M281 214C316 185 364 187 398 217C429 244 418 286 381 304C343 322 289 311 266 276C252 254 260 232 281 214Z"
  },
  "north-lampung": {
    path: "M339 285C365 255 417 254 454 278C489 301 490 342 458 367C421 395 358 382 331 345C315 323 318 306 339 285Z"
  },
  "supporting-origins": {
    path: "M176 321C223 252 341 214 431 278C493 323 492 429 425 483C357 538 235 504 174 444C141 412 142 371 176 321Z"
  }
};

function getPrimaryArea(profile: Array<[string, string]>, subtitle: string) {
  const primary = profile.find(([label, value]) => {
    const normalizedLabel = label.toLowerCase();
    const normalizedValue = value.toLowerCase();

    return (
      (normalizedLabel.includes("area") ||
        normalizedLabel.includes("primary") ||
        label.includes("المناطق")) &&
      !normalizedValue.includes("network") &&
      !normalizedValue.includes("jaringan") &&
      !normalizedValue.includes("options") &&
      !normalizedValue.includes("opsi") &&
      !value.includes("شبكة") &&
      !value.includes("خيارات")
    );
  });

  const [label, value] = primary ?? ["Area utama", subtitle];
  const areas = value
    .split(/,|،/)
    .map((area) => area.trim())
    .filter(Boolean)
    .slice(0, 8);

  return {
    label,
    areas: areas.length > 0 ? areas : [subtitle]
  };
}

function OriginMapCard({
  title,
  areas,
  originName,
  slug,
  mapTitle,
  mapHint
}: {
  title: string;
  areas: string[];
  originName: string;
  slug: string;
  mapTitle: string;
  mapHint: string;
}) {
  const configuredPins = originMapPins[slug] ?? defaultMapPins;
  const pins = areas.map((area, index) => {
    const configuredPin = configuredPins.find((pin) =>
      area.toLowerCase().includes(pin.name.toLowerCase()) ||
      pin.name.toLowerCase().includes(area.toLowerCase())
    );

    return configuredPin ?? { ...configuredPins[index % configuredPins.length], name: area };
  });
  const focusRegion = originRegionStyles[slug] ?? originRegionStyles["supporting-origins"];

  return (
    <div
      data-origin-map="true"
      className="mt-9 overflow-hidden rounded-sm border border-coffee-900/10 bg-cream-100 shadow-[0_22px_65px_rgba(42,23,17,0.08)] lg:min-h-[650px]"
    >
      <div className="flex items-center justify-between gap-4 border-b border-coffee-900/10 px-5 py-4">
        <div>
          <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-gold-500">
            {mapTitle}
          </p>
          <p className="mt-1 text-sm font-bold text-coffee-950">{originName}</p>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-coffee-950 text-gold-300">
          <MapPinned className="h-5 w-5" aria-hidden="true" />
        </div>
      </div>

      <div className="relative min-h-[560px] overflow-hidden bg-[#b9d9cf] lg:min-h-[590px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_72%,rgba(104,169,187,0.72),transparent_28%),linear-gradient(135deg,rgba(178,221,202,0.98),rgba(198,229,208,0.78)_48%,rgba(111,185,207,0.74)_49%,rgba(111,185,207,0.95))]" />
        <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(42,23,17,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(42,23,17,0.08)_1px,transparent_1px)] [background-size:34px_34px]" />
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 620 560"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M36 0H407C382 50 377 98 396 139C415 179 463 197 503 231C551 273 562 331 541 381C520 430 460 442 410 472C359 503 321 548 260 558H36V0Z"
            fill="#b9dfc8"
          />
          <path
            d="M19 458C77 417 103 377 112 323C120 271 83 235 101 180C119 123 174 99 235 88C304 75 358 103 409 143C459 182 525 204 562 263C598 319 586 402 548 453C510 505 438 518 369 527C288 538 206 522 140 499C86 480 54 468 19 458Z"
            fill="#a8dabb"
            stroke="#6b8f82"
            strokeWidth="2"
          />
          <path
            d="M155 420C130 376 153 317 197 293C236 272 261 239 302 223C344 206 384 224 416 252C459 289 482 338 468 392C455 446 411 481 362 502C309 524 250 511 205 486C184 474 169 447 155 420Z"
            fill="#d9ead7"
            stroke="#4d7365"
            strokeWidth="3"
          />
          <path
            d={focusRegion.path}
            fill="#d7b763"
            fillOpacity="0.26"
            stroke="#b88a2e"
            strokeWidth="2"
            strokeDasharray="6 7"
          />
          <path
            d="M195 309C243 339 277 379 288 484M303 226C319 300 365 345 456 390M172 421C239 402 316 399 455 362"
            stroke="#6b8f82"
            strokeOpacity="0.38"
            strokeWidth="2"
            strokeDasharray="8 10"
          />
          <text x="440" y="278" className="fill-origin-700 text-[24px] font-black uppercase tracking-widest">
            LAMPUNG
          </text>
          <text x="64" y="111" className="fill-origin-700/70 text-[17px] font-black uppercase tracking-widest">
            SUMATRA SELATAN
          </text>
          <text x="110" y="454" className="fill-coffee-950 text-[16px] font-bold">
            Krui
          </text>
          <text x="185" y="340" className="fill-coffee-950 text-[16px] font-bold">
            Liwa
          </text>
          <text x="347" y="299" className="fill-coffee-950 text-[16px] font-bold">
            Kotabumi
          </text>
          <text x="409" y="473" className="fill-coffee-950 text-[16px] font-bold">
            Bandar Lampung
          </text>
          <text x="456" y="514" className="fill-coffee-950 text-[14px] font-bold">
            Teluk Lampung
          </text>
          <text x="18" y="523" className="fill-white text-[15px] font-black uppercase tracking-widest">
            Samudra Hindia
          </text>
          <text x="509" y="427" className="fill-white text-[14px] font-black uppercase tracking-widest">
            Laut Jawa
          </text>
        </svg>

        <div className="absolute left-5 top-5 rounded-sm border border-coffee-900/10 bg-cream-50/92 px-3 py-2 shadow-[0_12px_24px_rgba(42,23,17,0.1)] backdrop-blur">
          <p className="text-[0.6rem] font-black uppercase tracking-[0.16em] text-gold-500">
            {title}
          </p>
          <p className="mt-1 max-w-[14rem] text-xs font-semibold leading-5 text-coffee-950/75">
            {mapHint}
          </p>
        </div>

        {pins.map((pin, index) => (
          <div
            key={`${pin.name}-${index}`}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
          >
            <div className="relative">
              <span className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/25" />
              <span className="relative block h-4 w-4 rounded-full border-2 border-cream-50 bg-gold-500 shadow-[0_0_0_4px_rgba(42,23,17,0.24)]" />
              <span
                className={`absolute top-1/2 w-max max-w-[10.5rem] -translate-y-1/2 rounded-sm border border-coffee-900/10 bg-cream-50/95 px-2.5 py-1 text-[0.68rem] font-black uppercase tracking-[0.08em] text-coffee-950 shadow-[0_10px_24px_rgba(42,23,17,0.12)] backdrop-blur ${
                  pin.x > 58 ? "right-5" : "left-5"
                }`}
              >
                {pin.name}
              </span>
            </div>
          </div>
        ))}

        <div className="absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-coffee-950 text-sm font-black text-white shadow-[0_12px_28px_rgba(0,0,0,0.2)]">
          N
        </div>
        <div className="absolute bottom-6 right-5 rounded-sm bg-cream-50/92 px-3 py-2 text-[0.62rem] font-black uppercase tracking-[0.14em] text-coffee-950 shadow-[0_12px_24px_rgba(42,23,17,0.1)]">
          {mapTitle}
        </div>
      </div>
    </div>
  );
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[0.36fr_0.64fr] gap-4 border-b border-coffee-900/10 pb-4">
      <p className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-coffee-900/50">
        {label}
      </p>
      <p className="text-sm font-bold leading-6 text-coffee-950">{value}</p>
    </div>
  );
}

function TasteBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="grid items-center gap-3 sm:grid-cols-[0.24fr_0.66fr_0.1fr]">
      <p className="text-xs font-bold text-coffee-950">{label}</p>
      <div className="h-px bg-coffee-900/15">
        <div className="h-px bg-gold-500" style={{ width: `${value}%` }} />
      </div>
      <p className="text-right text-xs font-bold text-coffee-900/60">{value}</p>
    </div>
  );
}

function EditorialPanel({
  icon,
  title,
  items
}: {
  icon: ReactNode;
  title: string;
  items: Array<[string, string]>;
}) {
  return (
    <article className="border border-coffee-900/10 bg-cream-100 p-5">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-coffee-950 text-gold-300">
          {icon}
        </span>
        <h3 className="font-serif text-2xl font-bold text-coffee-950">{title}</h3>
      </div>
      <div className="mt-5 grid gap-4">
        {items.map(([label, value]) => (
          <div key={label}>
            <p className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-gold-500">
              {label}
            </p>
            <p className="mt-1 text-sm leading-6 text-ink/75">{value}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

function MiniStat({
  icon,
  label,
  value
}: {
  icon?: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 text-[0.68rem] font-black uppercase tracking-[0.16em] text-gold-500">
        {icon}
        {label}
      </div>
      <p className="mt-2 text-sm font-bold leading-6 text-coffee-950">{value}</p>
    </div>
  );
}
