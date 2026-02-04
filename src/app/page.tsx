"use client";

import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How We Work", href: "#how-we-work" },
  { label: "Value", href: "#advantages" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    title: "Trade & Commercial Support",
    description:
      "Import and export facilitation, buyer and supplier introductions, and commercial documentation support.",
    bullets: [
      "Import and export facilitation",
      "Buyer and supplier introductions",
      "Trade coordination and follow-up",
      "Commercial documentation support",
    ],
    image: "/freight-broker-services.jpg",
  },
  {
    title: "Logistics & Supply Chain Coordination",
    description:
      "Freight and shipment coordination, logistics partner sourcing, and supply chain communication support.",
    bullets: [
      "Freight and shipment coordination",
      "Logistics partner sourcing",
      "Route and mode planning",
      "Supply chain communication support",
    ],
    image: "/transport_sourcing.webp",
  },
  {
    title: "Business & Market Facilitation",
    description:
      "B2B relationship building, market access support, and partner identification for smoother operations.",
    bullets: [
      "B2B relationship building",
      "Market access support",
      "Partner identification",
      "Operational coordination",
    ],
    image: "/customs_support.jpg",
  },
  {
    title: "Process & Compliance Support",
    description:
      "Coordination with licensed service providers, documentation alignment, and procedural guidance.",
    bullets: [
      "Coordination with licensed service providers",
      "Documentation alignment",
      "Procedural guidance",
      "Risk reduction support",
    ],
    image: "/Depot_&_Shipping_Line_Coordination.jpg",
  },
];

const operatingModel = [
  {
    title: "Flexible & Project-Based",
    description:
      "Services tailored to client needs and delivered through collaboration with licensed logistics operators, clearing agents, and transporters.",
  },
  {
    title: "Coordination & Visibility",
    description:
      "We simplify coordination, improve visibility across workflows, and support informed decision-making—without acting as transporter or clearing agent.",
  },
  {
    title: "Relationship-Driven",
    description:
      "We connect businesses with suitable partners, guide processes, and facilitate smooth execution across trade and logistics.",
  },
];

const industries = [
  "Agriculture & agro-processing",
  "Manufacturing & industrial inputs",
  "FMCG & general merchandise",
  "Construction & infrastructure materials",
  "Packaging, chemicals & consumer goods",
];

const advantages = [
  "Single coordination point for complex business activities",
  "Access to a broad network of partners",
  "Reduced operational friction and delays",
  "Clear communication and follow-up",
  "Scalable support as business needs grow",
];

const compliance = [
  "Works with licensed logistics operators and clearing agents",
  "Neutral coordinator—not a transporter or product owner",
  "Focused on facilitation and risk reduction support",
];

const values = [
  "Trust",
  "Coordination",
  "Transparency",
  "Partnership",
  "Sustainability",
];

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50 text-slate-900">
      <header className="relative overflow-hidden bg-white">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-b from-[#c42025]/10 via-transparent to-white" />
        <div className="mx-auto max-w-6xl px-4 pb-12 pt-6 sm:px-6 sm:pb-16 sm:pt-8">
          <nav className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 shadow-sm backdrop-blur sm:rounded-full sm:px-5">
            <a href="#" className="flex min-w-0 items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#c42025] text-white font-semibold">
                GL
              </span>
              <div className="min-w-0 leading-tight">
                <p className="truncate text-xs uppercase tracking-[0.2em] text-slate-500">
                  Gateway Logistics
                </p>
                <p className="truncate text-sm font-semibold text-slate-900 sm:max-w-[200px]">
                  B2B Trade, Logistics & Business Facilitation
                </p>
              </div>
            </a>
            <div className="hidden items-center gap-2 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  className="rounded-full px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-[#c42025]/10 hover:text-[#c42025]"
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <a
                className="hidden rounded-full bg-[#c42025] px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:shadow-lg md:inline-flex"
                href="#contact"
              >
                Contact
              </a>
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 md:hidden"
                onClick={() => setMobileNavOpen((o) => !o)}
                aria-expanded={mobileNavOpen}
                aria-label="Toggle menu"
              >
                <span className="sr-only">Menu</span>
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {mobileNavOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </nav>

          {mobileNavOpen && (
            <div className="mt-4 flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg md:hidden">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-[#c42025]/10 hover:text-[#c42025]"
                  onClick={() => setMobileNavOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="rounded-xl bg-[#c42025] px-4 py-3 text-center text-sm font-semibold text-white"
                onClick={() => setMobileNavOpen(false)}
              >
                Contact
              </a>
            </div>
          )}

          <div className="mt-10 grid gap-10 lg:mt-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c42025]">
                Gateway Logistics
              </p>
              <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                B2B Trade, Logistics & Business Facilitation
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Ethiopia-based B2B business facilitation and brokerage. We work with
                importers, exporters, manufacturers, and distributors as a neutral
                coordinator—linking you with suitable partners, guiding processes,
                and enabling efficient trade and logistics operations.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  className="inline-flex items-center gap-2 rounded-full bg-[#c42025] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:shadow-xl"
                  href="#services"
                >
                  Explore services
                  <span aria-hidden>↓</span>
                </a>
                <a
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-[#c42025] hover:text-[#c42025]"
                  href="#contact"
                >
                  Request a quote
                </a>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
                {values.map((value) => (
                  <div
                    key={value}
                    className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-center text-sm font-semibold text-slate-800 shadow-sm sm:rounded-2xl sm:px-4 sm:py-3"
                  >
                    {value}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-16 w-16 rounded-2xl bg-[#c42025]/15 sm:-left-6 sm:-top-6 sm:h-20 sm:w-20 sm:rounded-3xl" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border-2 border-slate-200 shadow-xl sm:rounded-[28px] lg:aspect-[3/2] lg:rounded-[32px] lg:border-4 lg:border-slate-300">
                <Image
                  src="https://images.unsplash.com/photo-1509475826633-fed577a2c71b?auto=format&fit=crop&w=1600&q=80"
                  alt="Gateway Logistics — trade and logistics"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-16 px-4 py-14 sm:px-6 sm:space-y-20 sm:py-16 md:py-20 lg:py-24">
        <section
          id="services"
          className="scroll-mt-20 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200/60 sm:p-8 md:p-10"
        >
          <div className="mb-8 flex flex-col gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c42025]">
              Our Services
            </p>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">
              Core areas of support for trade and logistics.
            </h2>
            <p className="max-w-3xl text-base text-slate-600 sm:text-lg">
              We support organizations engaged in trade, logistics, and cross-border
              commercial activities—simplifying coordination, improving communication,
              and enabling efficient business operations.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:gap-6 xl:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.title}
                className="group flex min-h-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg"
              >
                <div className="h-1.5 shrink-0 bg-[#c42025]" />
                <div className="relative h-40 shrink-0 overflow-hidden sm:h-44">
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    priority={service.title === "Trade & Commercial Support"}
                  />
                </div>
                <div className="flex min-h-0 flex-1 flex-col gap-3 p-4 sm:p-5">
                  <h3 className="text-lg font-semibold leading-snug text-slate-900 sm:text-xl">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600 line-clamp-3">
                    {service.description}
                  </p>
                  <ul className="mt-auto space-y-1.5 text-sm text-slate-700">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#c42025]" />
                        <span className="break-words">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="how-we-work"
          className="scroll-mt-20 grid gap-6 lg:grid-cols-2 lg:gap-8"
        >
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200/60 sm:p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c42025]">
              Operating Model
            </p>
            <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">
              Flexible, project-based, relationship-driven.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              We collaborate with licensed logistics operators, clearing agents,
              transporters, suppliers, and buyers. Our role is to simplify coordination,
              improve visibility, and support informed decision-making.
            </p>
            <div className="mt-6 space-y-4 sm:mt-8">
              {operatingModel.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50/50 p-4 sm:p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#c42025]/10 text-[#c42025] sm:h-12 sm:w-12">
                    <span className="text-lg font-bold">•</span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
            <div
              id="advantages"
              className="scroll-mt-20 flex flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200/60 sm:p-8"
            >
              <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">
                Value to Clients
              </h3>
              <ul className="mt-4 flex-1 space-y-2.5 text-sm leading-relaxed text-slate-700">
                {advantages.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#c42025]" />
                    <span className="break-words">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-5 sm:gap-6">
              <div className="rounded-3xl bg-[#c42025] p-6 text-white shadow-lg sm:p-8">
                <h3 className="text-lg font-semibold sm:text-xl">
                  Sectors & Activities Covered
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {industries.map((industry) => (
                    <span
                      key={industry}
                      className="inline-block rounded-full bg-white/15 px-3 py-1.5 text-sm font-medium"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200/60 sm:p-8">
                <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">
                  How We Operate
                </h3>
                <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-slate-700">
                  {compliance.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#c42025]" />
                      <span className="break-words">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="scroll-mt-20 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200/60 sm:p-8 md:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
            <div className="min-w-0 max-w-3xl space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c42025]">
                Vision & Mission
              </p>
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">
                A trusted gateway for trade, logistics, and commercial networks.
              </h2>
              <div className="space-y-3 text-base text-slate-600 sm:text-lg">
                <p>
                  <strong className="text-slate-800">Vision:</strong> To be a trusted gateway for businesses operating
                  across trade, logistics, and commercial networks.
                </p>
                <p>
                  <strong className="text-slate-800">Mission:</strong> To support businesses by facilitating connections,
                  coordination, and practical solutions that enable smooth and sustainable trade.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 shrink-0 gap-3 sm:grid-cols-3 sm:gap-4">
              {values.map((value) => (
                <div
                  key={value}
                  className="rounded-xl border border-[#c42025]/20 bg-[#c42025]/5 px-3 py-3 text-center text-sm font-semibold text-[#c42025] sm:rounded-2xl sm:px-4 sm:py-4"
                >
                  {value}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="scroll-mt-20 overflow-hidden rounded-3xl bg-[#c42025] text-white shadow-xl"
        >
          <div className="grid min-h-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="flex flex-col justify-center space-y-6 px-6 py-10 sm:px-8 sm:py-12 md:px-10">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/90">
                Contact Us
              </p>
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                Get in touch with us.
              </h2>
              <form
                className="space-y-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border-0 bg-white/95 px-4 py-3 text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-white/50"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border-0 bg-white/95 px-4 py-3 text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-white/50"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full resize-y rounded-xl border-0 bg-white/95 px-4 py-3 text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-white/50 min-h-[100px]"
                />
                <button
                  type="submit"
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#c42025] shadow-lg transition hover:bg-white/95"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="relative min-h-[240px] sm:min-h-[320px] lg:min-h-[400px]">
              <Image
                src="/360_F_289332658_UfLIT4XkakIiathb53ErZWfPsGX1GFpb.jpg"
                alt="Warehouse and logistics"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#c42025]/40 via-transparent to-transparent lg:from-[#c42025]/20" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
