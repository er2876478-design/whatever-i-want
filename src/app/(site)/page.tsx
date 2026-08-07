'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MailIcon, MapPinIcon, Menu, PhoneIcon, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import { Inter, Plus_Jakarta_Sans, Instrument_Serif } from 'next/font/google';
import { ContactCard } from '@/components/ui/contact-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-plus-jakarta' });
const instrumentSerif = Instrument_Serif({ weight: '400', subsets: ['latin'], variable: '--font-instrument' });

export default function HomePage() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls({ enableWorker: false });
      hls.loadSource('https://stream.mux.com/tLkHO1qZoaaQOUeVWo8hEBeGQfySP02EPS02BmnNFyXys.m3u8');
      hls.attachMedia(video);
      return () => hls.destroy();
    }

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = 'https://stream.mux.com/tLkHO1qZoaaQOUeVWo8hEBeGQfySP02EPS02BmnNFyXys.m3u8';
    }
  }, []);

  return (
    <main className={`${inter.variable} ${plusJakarta.variable} ${instrumentSerif.variable} min-h-screen bg-[#070b0a] text-white`}>
      <section className="relative min-h-screen overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,_#070b0a_0%,_rgba(7,11,10,0.2)_45%,_rgba(7,11,10,0.75)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(7,11,10,0.45)_0%,_rgba(7,11,10,0.85)_100%)]" />

        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute left-[25%] top-0 h-full w-px bg-white/10" />
          <div className="absolute left-[50%] top-0 h-full w-px bg-white/10" />
          <div className="absolute left-[75%] top-0 h-full w-px bg-white/10" />
        </div>

        <div className="pointer-events-none absolute left-1/2 top-[-8rem] h-[26rem] w-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(94,210,156,0.35),_rgba(0,0,0,0))] blur-[120px]" />

        <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-8 lg:px-12">
          <a href="#" className="text-lg font-semibold tracking-[0.35em] text-white">Edward Rodriguez</a>

          <nav className="hidden items-center gap-8 text-[15px] font-medium text-white/80 md:flex">
            <a href="#projects" className="transition hover:text-[#5ed29c]">PROJECTS</a>
            <a href="#blog" className="transition hover:text-[#5ed29c]">BLOG</a>
            <a href="#about" className="transition hover:text-[#5ed29c]">ABOUT</a>
            <a href="#contact" className="transition hover:text-[#5ed29c]">CONTACT</a>
            <a href="/resume" className="transition hover:text-[#5ed29c]">RESUME</a>
          </nav>

          <button
            type="button"
            aria-label="Toggle menu"
            className="rounded-full border border-white/20 p-2 text-white md:hidden"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </header>

        {mobileMenuOpen && (
          <div className="absolute inset-0 z-20 bg-[#070b0a]/95 px-6 py-24 md:hidden">
            <div className="flex flex-col gap-6 text-xl font-semibold uppercase tracking-[0.28em] text-white">
              <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
              <a href="#blog" onClick={() => setMobileMenuOpen(false)}>Blog</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
              <Link href="/resume" onClick={() => setMobileMenuOpen(false)}>Resume</Link>
            </div>
          </div>
        )}

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-88px)] max-w-7xl flex-col justify-center px-6 pb-16 pt-16 sm:px-8 lg:px-12">
          <div className="pointer-events-none mb-8 flex h-[200px] w-[200px] translate-y-[-50px] items-center justify-center rounded-[28px] border border-white/10 bg-[rgba(255,255,255,0.01)] bg-blend-luminosity p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] backdrop-blur-[4px] before:absolute before:inset-0 before:rounded-[28px] before:p-[1.4px] before:content-[''] before:[background:linear-gradient(180deg,_rgba(255,255,255,0.95),_rgba(255,255,255,0.08))] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,_linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude]">
            <div className="relative h-36 w-36 overflow-hidden rounded-2xl border border-white/20 bg-white/5 shadow-[0_12px_30px_rgba(0,0,0,0.35)]">
              <Image
                src="/images/user/profile-photo.png"
                alt="Profile photo"
                fill
                className="object-cover"
                sizes="144px"
                priority
              />
            </div>
          </div>

          <div className="max-w-4xl">
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.3em] text-[#5ed29c]" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
              Career-Ready Curriculum
            </p>
            <h1 className="max-w-4xl text-[40px] font-black uppercase leading-[0.95] tracking-[-0.03em] text-white sm:text-[56px] lg:text-[72px]" style={{ fontFamily: 'var(--font-inter)' }}>
              LAUNCH YOUR<br />CODING CAREER<span className="text-[#5ed29c]">.</span>
            </h1>
            <p className="mt-6 max-w-[512px] text-[14px] leading-7 text-white/70" style={{ fontFamily: 'var(--font-inter)' }}>
              Master in-demand coding skills with structured lessons, hands-on projects, and mentorship designed to make you work-ready.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#projects" className="inline-flex items-center gap-3 rounded-full bg-[#5ed29c] px-6 py-3 text-[12px] font-bold uppercase tracking-[0.24em] text-[#070b0a] transition hover:brightness-110">
                Get Started <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" aria-labelledby="projects-heading" className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#5ed29c]" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
            Featured Project
          </p>
          <h2 id="projects-heading" className="mt-3 text-2xl font-black text-white sm:text-3xl">Projects</h2>

          <article aria-labelledby="beans-place-title" className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 id="beans-place-title" className="text-xl font-extrabold text-white">Beans Place</h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-white/75">
                  A modern web experience for a cafe brand focused on clear menu browsing,
                  inviting visuals, and smooth responsiveness across desktop and mobile.
                </p>
              </div>
              <a
                href="https://your-beans-project-url.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Beans Place live project website in a new tab"
                className="rounded-full border border-[#5ed29c]/40 bg-[#5ed29c]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#9cf0c8] transition hover:bg-[#5ed29c]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5ed29c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#070b0a]"
              >
                Live Project
              </a>
            </div>

            <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
              <span className="rounded-full border border-white/15 px-3 py-1">React</span>
              <span className="rounded-full border border-white/15 px-3 py-1">HTML</span>
              <span className="rounded-full border border-white/15 px-3 py-1">CSS</span>
            </div>
          </article>
        </div>
      </section>

      <section id="blog" className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#5ed29c]" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
            From The Blog
          </p>
          <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">My Developer Notes</h2>
          <p className="mt-4 text-base leading-8 text-white/75">
            Welcome to my digital notebook. I use this space to break down complex web development concepts, share solutions to tricky coding bugs, and document my journey as a developer. Communication is at the heart of everything I do, so my goal is to make technical topics simple, engaging, and easy to understand for everyone.
          </p>
        </div>
      </section>
      <section id="contact" className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="space-y-6 rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#5ed29c]" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
            Contact Me
          </p>
          <h2 className="text-2xl font-black text-white sm:text-3xl">Let's connect</h2>
<ContactCard
            title="Get in touch"
            description="If you have any questions regarding my work or would like to collaborate, please send a message. I do my best to respond within 1 business day."
            className="rounded-2xl border-white/15 bg-white/[0.03] text-white"
            formSectionClassName="border-white/10 bg-white/[0.04]"
            contactInfo={[
              {
                icon: MailIcon,
                label: 'Email',
                value: 'er2876478@gmail.com',
              },
              {
                icon: PhoneIcon,
                label: 'Phone',
                value: '(555) 123-4567',
              },
              {
                icon: MapPinIcon,
                label: 'Location',
                value: 'Remote / United States',
                className: 'md:col-span-2 lg:col-span-1',
              },
            ]}
          >
            <form className="w-full space-y-4" action="#" method="post">
              <div className="flex flex-col gap-2">
                <Label htmlFor="contact-name" className="text-white">Name</Label>
                <Input id="contact-name" type="text" placeholder="Your name" className="border-white/20 bg-[#0d1514] text-white" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="contact-email" className="text-white">Email</Label>
                <Input id="contact-email" type="email" placeholder="you@example.com" className="border-white/20 bg-[#0d1514] text-white" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="contact-phone" className="text-white">Phone</Label>
                <Input id="contact-phone" type="tel" placeholder="(555) 123-4567" className="border-white/20 bg-[#0d1514] text-white" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="contact-message" className="text-white">Message</Label>
                <Textarea id="contact-message" placeholder="How can I help?" className="border-white/20 bg-[#0d1514] text-white" />
              </div>
              <Button className="w-full bg-[#5ed29c] font-bold text-[#070b0a] hover:bg-[#75dcb0]" type="button">
                Submit
              </Button>
            </form>
          </ContactCard>
        </div>
      </section>
      <section id="about" className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <h2 className="text-2xl font-black text-white">About Me</h2>
          <p className="mt-4 text-base leading-8 text-white/75">
            I am a junior developer who loves bringing web designs to life using
            React, HTML, and CSS. While I enjoy the technical challenge of
            writing clean code, my biggest asset is my communication. I thrive
            on asking the right questions, listening to user needs, and
            collaborating with teams to build great things. I am currently
            looking for a remote position and am excited about the prospect of
            traveling to connect with my team and clients.
          </p>
        </div>
      </section>
    </main>
  );
}





