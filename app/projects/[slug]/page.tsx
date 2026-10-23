import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, getProjects } from "@/lib/projects";
import { SiteHeader } from "@/components/site-header";
import { ProjectGallery } from "@/components/project-gallery";

export function generateStaticParams() { return getProjects().map(({ slug }) => ({ slug })); }
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const p = getProject(slug); if (!p) notFound(); return <main className="min-h-screen bg-sky"><SiteHeader /><section className="px-5 pb-16 pt-32"><div className="container"><Link href="/projects" className="text-sm font-bold text-royal">← Back to all projects</Link><div className="mt-7 grid gap-7 lg:grid-cols-[1.5fr_.65fr]"><ProjectGallery projects={[p]} /><article className="card self-start p-7 md:p-9"><p className="eyebrow">{p.category}</p><h1 className="display mt-4 text-4xl font-extrabold leading-tight">{p.title}</h1><p className="mt-5 leading-7 text-navy/70">{p.description}</p><p className="mt-6 rounded-xl bg-sky p-4 text-sm font-semibold text-royal">{p.status}</p><Link href="/#contact" className="btn btn-gold mt-8 w-full">Ask about a similar project →</Link></article></div></div></section></main> }
