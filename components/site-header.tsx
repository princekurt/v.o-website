"use client";
import Image from "next/image";
import { useState } from "react";
import { site } from "@/app/content";

const links = [ ["Solutions", "#solutions"], ["How it works", "#how-it-works"], ["Projects", "#projects"], ["Contact", "#contact"] ];
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3"><nav className="container flex items-center justify-between rounded-2xl border border-white/25 bg-white/85 px-3 py-2 shadow-lg shadow-navy/5 backdrop-blur-xl md:px-5">
    <a href="#top" className="flex min-w-0 items-center gap-2" aria-label="V.O Electrical Lights Trading home"><Image src="/logo.jpg" alt="V.O Electrical Lights Trading" width={46} height={46} priority className="rounded-full" /><span className="display hidden max-w-[205px] text-sm font-extrabold leading-tight text-navy sm:block">V.O Electrical<br/><span className="font-medium text-royal">Lights Trading</span></span></a>
    <div className="hidden items-center gap-6 lg:flex">{links.map(([label, href]) => <a key={href} href={href} className="text-sm font-semibold text-navy/75 transition hover:text-royal">{label}</a>)}</div>
    <div className="flex items-center gap-2"><a href="#contact" className="btn btn-gold hidden py-2.5 sm:inline-flex">Get a solar quote</a><button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-xl bg-sky text-navy lg:hidden"><span className="text-xl">{open ? "×" : "☰"}</span></button></div>
  </nav>{open && <div className="container mt-2 rounded-2xl border border-navy/10 bg-white p-4 shadow-xl lg:hidden">{links.map(([label, href]) => <a onClick={() => setOpen(false)} key={href} href={href} className="block border-b border-navy/5 py-3 font-semibold text-navy last:border-0">{label}</a>)}<a href="#contact" onClick={() => setOpen(false)} className="btn btn-gold mt-3 w-full">Get a solar quote</a></div>}</header>;
}
