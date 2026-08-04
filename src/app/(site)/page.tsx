'use client';

import { useMemo, useState } from 'react';

const paletteOptions = [
  { name: 'Midnight Green', accent: '#86d028', accentSoft: '#a7e651', glow: 'rgba(134, 208, 40, 0.35)', surface: '#0b191e', surfaceAlt: '#12262e', text: '#f3f5f6' },
  { name: 'Slate Blue', accent: '#38bdf8', accentSoft: '#7dd3fc', glow: 'rgba(56, 189, 248, 0.32)', surface: '#0f172a', surfaceAlt: '#16263f', text: '#e2e8f0' },
  { name: 'Copper', accent: '#d9774d', accentSoft: '#f3bd90', glow: 'rgba(217, 119, 77, 0.28)', surface: '#121212', surfaceAlt: '#1f1b18', text: '#f4efe8' },
  { name: 'Violet', accent: '#8b5cf6', accentSoft: '#b794f4', glow: 'rgba(139, 92, 246, 0.28)', surface: '#0b0b14', surfaceAlt: '#171827', text: '#f5f3ff' },
  { name: 'Teal Silver', accent: '#2dd4bf', accentSoft: '#7dd3d0', glow: 'rgba(45, 212, 191, 0.28)', surface: '#111827', surfaceAlt: '#1f2937', text: '#f8fafc' },
];

const experienceBullets = [
  'Mission-critical scheduling and logistics coordination for high-volume operations',
  'Operational data analysis, reporting, and process improvement across workstreams',
  'Compliance-first documentation and training oversight in regulated environments',
  'Cross-functional communication between crews, leadership, maintenance, and support teams',
];

const skills = [
  'ARMS',
  'GTIMS',
  'Excel',
  'Power BI',
  'Scheduling Systems',
  'Database Ops',
  'Reporting',
  'Process Design',
  'Resource Planning',
  'Operational Analysis',
];

const projects = [
  {
    title: 'Flight Ops Scheduling System',
    summary: 'Reworked scheduling logic and coordination routines to support a large crew roster while improving on-time departures and reducing conflict resolution time.',
    outcome: '15% scheduling efficiency gain',
  },
  {
    title: 'Training Compliance Audit',
    summary: 'Audited training records and created cleaner tracking procedures that reduced documentation errors and improved inspection readiness.',
    outcome: '30% fewer documentation errors',
  },
  {
    title: 'Resource Allocation Model',
    summary: 'Managed aviation support inventory and personnel planning to reduce waste, protect mission readiness, and streamline resource usage.',
    outcome: 'Millions in annual savings',
  },
];

export default function HomePage() {
  const [selectedPalette, setSelectedPalette] = useState(paletteOptions[0]);

  const themeStyle = useMemo(
    () => ({
      '--brand': selectedPalette.accent,
      '--brand-soft': selectedPalette.accentSoft,
      '--brand-glow': selectedPalette.glow,
      '--surface': selectedPalette.surface,
      '--surface-alt': selectedPalette.surfaceAlt,
      '--text-main': selectedPalette.text,
    }) as React.CSSProperties,
    [selectedPalette],
  );

  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--surface)] text-[var(--text-main)]" style={themeStyle}>
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <video autoPlay muted loop playsInline className="h-full w-full scale-105 object-cover opacity-75" src="https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/hero-bg-glass-ball-1_5mb.mp4" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 45%, rgba(134, 208, 40, 0.06) 0%, rgba(11, 25, 30, 0.3) 45%, rgba(7, 20, 25, 0.88) 85%, rgba(3, 8, 10, 0.96) 100%), linear-gradient(to bottom, rgba(5, 12, 15, 0.82) 0%, transparent 22%, transparent 75%, rgba(4, 10, 12, 0.95) 100%), linear-gradient(to right, rgba(5, 12, 15, 0.75) 0%, transparent 28%, transparent 72%, rgba(5, 12, 15, 0.75) 100%)' }} />
      </div>

      <header className="relative z-20 w-full border-b border-white/10 bg-transparent backdrop-blur-md">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 sm:px-8 lg:px-12">
          <div className="flex items-center gap-4">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 shadow-[0_0_25px_var(--brand-glow)]">
              <span className="h-3.5 w-3.5 rounded-full bg-[var(--brand)] shadow-[0_0_18px_var(--brand-glow)]" />
            </div>
            <div>
              <div className="text-sm font-black tracking-[0.28em] text-white">EDWARD</div>
              <div className="text-[9px] font-semibold tracking-[0.3em] text-white/60 uppercase">Operations Systems</div>
            </div>
          </div>

          <nav className="hidden items-center gap-10 text-xs font-semibold uppercase tracking-[0.24em] text-white/75 md:flex">
            <a href="#about" className="transition hover:text-white">Profile</a>
            <a href="#strengths" className="transition hover:text-white">Strengths</a>
            <a href="#projects" className="transition hover:text-white">Projects</a>
          </nav>

          <a href="mailto:er2876478@gmail.com" className="rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.24em] text-white transition hover:border-[var(--brand)] hover:text-[var(--brand)]">Contact</a>
        </div>
      </header>

      <section className="relative z-10 mx-auto grid min-h-[calc(100vh-88px)] max-w-[1440px] items-center gap-12 px-6 pb-16 pt-16 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-12 lg:pb-12">
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-[var(--brand)]">
            <span className="h-[2px] w-8 rounded-full bg-[var(--brand)]" />
            Operations. Systems. Reliability.
          </div>

          <h1 className="max-w-2xl text-5xl font-black leading-[0.96] tracking-[-0.06em] text-white sm:text-6xl xl:text-[80px]">
            Building resilient operations
            <span className="mt-2 block text-4xl italic tracking-[-0.04em] text-[var(--brand)] sm:text-5xl xl:text-[78px]" style={{ textShadow: `0 0 20px ${selectedPalette.glow}` }}>
              through better systems.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base text-white/75 sm:text-lg">
            I help high-pressure operations run cleanly, predictably, and mission-ready by combining scheduling, data, compliance, and workflow design into systems people can trust.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#projects" className="inline-flex items-center gap-3 rounded-full bg-[var(--brand)] px-7 py-4 text-xs font-extrabold uppercase tracking-[0.22em] text-[#0b191e] shadow-[0_18px_35px_rgba(0,0,0,0.25)] transition hover:brightness-110">View work</a>
            <a href="mailto:er2876478@gmail.com" className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-white transition hover:border-white/35 hover:bg-white/10">Get in touch</a>
          </div>
        </div>

        <div className="flex flex-col items-center gap-5 lg:items-end">
          <div className="w-full max-w-sm space-y-4 rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-[0_24px_60px_rgba(0,0,0,0.25)]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--brand)]/15 text-[var(--brand)]">◎</div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--brand)]">Impact</div>
                  <div className="text-3xl font-black text-white">106</div>
                </div>
              </div>
            </div>
            <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--brand)]">Aircrew members supported</div>
          </div>

          <div className="w-full max-w-sm space-y-4 rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-[0_24px_60px_rgba(0,0,0,0.25)]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--brand)]/15 text-[var(--brand)]">◌</div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--brand)]">Efficiency</div>
                  <div className="text-3xl font-black text-white">15%</div>
                </div>
              </div>
            </div>
            <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--brand)]">Scheduling improvement</div>
          </div>
        </div>
      </section>

      <section id="about" className="relative z-10 mx-auto max-w-[1200px] px-6 pb-16 sm:px-8 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[30px] border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
            <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-[var(--brand)]">Profile</div>
            <h2 className="text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl">Mission-minded operator with a systems mindset.</h2>
            <p className="mt-5 text-base leading-8 text-white/75">
              I’ve spent the last four years optimizing operations in high-pressure environments, managing aircraft crew logistics, training records, scheduling, and regulatory compliance. My work blends operational discipline with practical process design, data visibility, and team coordination.
            </p>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-[var(--surface-alt)] p-7">
            <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-[var(--brand)]">Core focus</div>
            <ul className="space-y-3 text-sm text-white/75">
              {experienceBullets.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--brand)] shadow-[0_0_20px_var(--brand-glow)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="strengths" className="relative z-10 mx-auto max-w-[1200px] px-6 pb-16 sm:px-8 lg:px-12">
        <div className="mb-6 text-[11px] font-bold uppercase tracking-[0.28em] text-[var(--brand)]">Tooling & skills</div>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/80">{skill}</span>
          ))}
        </div>
      </section>

      <section id="projects" className="relative z-10 mx-auto max-w-[1200px] px-6 pb-20 sm:px-8 lg:px-12">
        <div className="mb-6 text-[11px] font-bold uppercase tracking-[0.28em] text-[var(--brand)]">Selected work</div>
        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-[var(--brand)]/40 hover:bg-white/7">
              <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--brand)]">Case study</div>
              <h3 className="text-2xl font-black tracking-[-0.05em] text-white">{project.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/70">{project.summary}</p>
              <div className="mt-6 border-t border-white/10 pt-4 text-sm font-semibold text-[var(--brand)]">{project.outcome}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-[1200px] px-6 pb-20 sm:px-8 lg:px-12">
        <div className="rounded-[30px] border border-white/10 bg-[var(--surface-alt)] p-7 backdrop-blur-xl">
          <div className="mb-6 text-[11px] font-bold uppercase tracking-[0.28em] text-[var(--brand)]">Design options</div>
          <div className="flex flex-wrap gap-3">
            {paletteOptions.map((palette) => (
              <button
                key={palette.name}
                type="button"
                onClick={() => setSelectedPalette(palette)}
                className={`flex items-center gap-3 rounded-full border px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition ${
                  selectedPalette.name === palette.name ? 'border-white/40 bg-white/10 text-white' : 'border-white/10 bg-white/5 text-white/70 hover:border-white/25 hover:text-white'
                }`}
              >
                <span className="h-4 w-4 rounded-full border border-white/20" style={{ backgroundColor: palette.accent }} />
                {palette.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 bg-black/10 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-6 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.26em] text-[var(--brand)]">Ready to work</div>
            <div className="mt-2 text-2xl font-black tracking-[-0.05em] text-white">Let’s build what keeps operations moving.</div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:er2876478@gmail.com" className="rounded-full bg-[var(--brand)] px-6 py-3 text-xs font-extrabold uppercase tracking-[0.22em] text-[#0b191e]">Email me</a>
            <a href="tel:+18454533794" className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs font-extrabold uppercase tracking-[0.22em] text-white">845-453-3794</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
