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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className="bg-stone-50 text-slate-900">
      <header className="relative overflow-hidden bg-white">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-b from-[#c42025]/10 via-transparent to-white" />
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 pb-16 pt-8">
          <nav className="flex items-center justify-between rounded-full border border-slate-200 bg-white/80 px-5 py-3 shadow-lg backdrop-blur">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#c42025] text-white font-semibold">
                GL
              </span>
              <div className="leading-tight">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  Gateway Logistics
                </p>
                <p className="text-sm font-semibold text-slate-900">
                  B2B Trade, Logistics & Business Facilitation
                </p>
              </div>
            </div>
            <div className="hidden items-center gap-4 md:flex">
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
            <a
              className="hidden rounded-full bg-[#c42025] px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl md:inline-flex"
              href="#contact"
            >
              Contact
            </a>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c42025]">
                Gateway Logistics
              </p>
              <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
                B2B Trade, Logistics & Business Facilitation
              </h1>
              <p className="max-w-2xl text-lg text-slate-600">
                Ethiopia-based B2B business facilitation and brokerage. We work with
                importers, exporters, manufacturers, and distributors as a neutral
                coordinator—linking you with suitable partners, guiding processes,
                and enabling efficient trade and logistics operations.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  className="inline-flex items-center gap-2 rounded-full bg-[#c42025] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
                  href="#services"
                >
                  Explore services
                  <span aria-hidden>↓</span>
                </a>
                <a
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-[#c42025] hover:text-[#c42025]"
                  href="#contact"
                >
                  Request a quote
                </a>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {values.map((value) => (
                  <div
                    key={value}
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm"
                  >
                    {value}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-6 -top-6 h-20 w-20 rounded-3xl bg-[#c42025]/15" />
              <div className="absolute -right-6 -bottom-6 h-20 w-20 rounded-full bg-[#c42025]/10 blur-lg" />
              <div className="relative overflow-hidden rounded-[32px] border-4 border-black shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1509475826633-fed577a2c71b?auto=format&fit=crop&w=1600&q=80"
                  alt="Gateway Logistics truck"
                  width={1400}
                  height={900}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-20 px-6 py-16 md:py-20 lg:py-24">
        <section
          id="services"
          className="space-y-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5 md:p-10"
        >
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c42025]">
              Our Services
            </p>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Core areas of support for trade and logistics.
            </h2>
            <p className="max-w-3xl text-lg text-slate-600">
              We support organizations engaged in trade, logistics, and cross-border
              commercial activities—simplifying coordination, improving communication,
              and enabling efficient business operations.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="h-2 bg-[#c42025]" />
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 300px"
                    priority={service.title === "Trade & Commercial Support"}
                  />
                </div>
                <div className="space-y-4 p-5">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-[#c42025]" />
                        <span>{bullet}</span>
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
          className="grid gap-8 lg:grid-cols-2 scroll-mt-24"
        >
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c42025]">
              Operating Model
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Flexible, project-based, relationship-driven.
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              We collaborate with licensed logistics operators, clearing agents,
              transporters, suppliers, and buyers. Our role is to simplify coordination,
              improve visibility, and support informed decision-making.
            </p>
            <div className="mt-8 space-y-4">
              {operatingModel.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-xl bg-[#c42025]/10 text-lg font-semibold text-[#c42025]">
                    •
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
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
          <div className="grid gap-6 md:grid-cols-2">
            <div
              id="advantages"
              className="h-full rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5 scroll-mt-24"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                Value to Clients
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700">
                {advantages.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-[#c42025]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <div className="rounded-3xl bg-[#c42025] p-8 text-white shadow-lg">
                <h3 className="text-xl font-semibold">Sectors & Activities Covered</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {industries.map((industry) => (
                    <span
                      key={industry}
                      className="rounded-full bg-white/10 px-3 py-1 text-sm font-medium"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5">
                <h3 className="text-xl font-semibold text-slate-900">
                  How We Operate
                </h3>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700">
                  {compliance.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-[#c42025]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5 md:p-10 scroll-mt-24">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c42025]">
                Vision & Mission
              </p>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                A trusted gateway for trade, logistics, and commercial networks.
              </h2>
              <p className="text-lg text-slate-600">
                <strong>Vision:</strong> To be a trusted gateway for businesses operating
                across trade, logistics, and commercial networks.{" "}
                <strong>Mission:</strong> To support businesses by facilitating connections,
                coordination, and practical solutions that enable smooth and sustainable trade.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {values.map((value) => (
                <div
                  key={value}
                  className="rounded-2xl border border-[#c42025]/20 bg-[#c42025]/5 px-4 py-3 text-center text-sm font-semibold text-[#c42025]"
                >
                  {value}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="overflow-hidden rounded-3xl bg-[#c42025] text-white shadow-xl"
        >
          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6 px-8 py-12 sm:px-12">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/85">
                Contact Us
              </p>
              <h2 className="text-4xl font-bold leading-tight">
                Get in touch with us.
              </h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-2xl bg-white p-4 text-slate-900 placeholder-slate-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-2xl bg-white p-4 text-slate-900 placeholder-slate-500"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-2xl bg-white p-4 text-slate-900 placeholder-slate-500"
                />
                <button
                  type="submit"
                  className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#c42025] shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-[#c42025] via-transparent to-transparent" />
              <Image
                src="/360_F_289332658_UfLIT4XkakIiathb53ErZWfPsGX1GFpb.jpg"
                alt="Warehouse operations"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
