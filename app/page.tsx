import Link from 'next/link'
import Avatar from '../components/Avatar'
import TechBadge from '../components/TechBadge'

export default function Home() {
  return (
    <main className="py-20">
      <header className="flex items-center gap-6">
        <Avatar src="/images/headshot.jpg" alt="Nicole Rozzie — headshot" thumbClassName="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full border-2 border-slate-100 shadow-sm" />
        <div className="flex-1">
          <h1 className="text-4xl sm:text-5xl font-extrabold">Nicole Rozzie</h1>
          <p className="text-lg text-slate-700 max-w-3xl">A motivated Data Analyst with a background in Sociology with IT and hands on skills in data cleaning, analysis and visualization. Experienced in managing records, compiling reports and supporting data driven decision making in community based environments. I am eager to apply my analytical skills and learn industry tools.</p>

          <div className="flex items-center gap-4 mt-4">
            <div className="flex gap-3">
              <Link href="/about" className="rounded-md bg-slate-900 text-white px-4 py-2">About</Link>
              <Link href="/projects" className="rounded-md border border-slate-200 px-4 py-2">Projects</Link>
            </div>

          
          </div>
        </div>
      </header>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Featured projects</h2>
        <p className="text-slate-600 mt-2">A few highlights — case studies coming soon.</p>
        <div className="grid sm:grid-cols-2 gap-6 mt-6">
          <article className="p-4 border rounded-lg shadow-sm">
            <h3 className="font-medium">Secure Event Ticketing System</h3>
            <div className="mt-2 flex items-center gap-2">
              <TechBadge>Supabase</TechBadge>
              <TechBadge>PostgreSQL</TechBadge>
              <TechBadge>RLS / SQL</TechBadge>
            </div>
            <p className="text-slate-600 text-sm mt-2">Upgraded event ticketing with Supabase Auth, Admin roles and Row-Level Security to enforce least privilege and protect user data.</p>
            <div className="mt-3 flex items-center gap-4">
              <a className="text-sky-600 underline" href="/projects/secure-event-ticketing">View project</a>
              <a className="text-slate-600 underline" href="https://github.com/rozzienicole8/data-fundamentals-final-project" target="_blank" rel="noreferrer">Repository</a>
            </div>
          </article>

          <article className="p-4 border rounded-lg shadow-sm">
            <h3 className="font-medium">Event Ticketing System</h3>
            <div className="mt-2 flex items-center gap-2">
              <TechBadge>Supabase</TechBadge>
              <TechBadge>PostgreSQL</TechBadge>
              <TechBadge>SQL</TechBadge>
            </div>
            <p className="text-slate-600 text-sm mt-2">Database-driven Supabase/PostgreSQL app for browsing events, registering users, purchasing tickets and tracking payments; includes SQL schema, ERD and data dictionary.</p>
            <p className="mt-3"><a className="text-sky-600 underline" href="https://github.com/rozzienicole8/Data-Tools-final-project" target="_blank" rel="noreferrer">View repository — Data-Tools-final-project</a></p>
          </article>

          <article className="p-4 border rounded-lg shadow-sm">
            <h3 className="font-medium">Community Outreach & Records Management — VORP EA</h3>
            <div className="mt-2 flex items-center gap-2">
              <TechBadge>Community</TechBadge>
              <TechBadge>Records</TechBadge>
            </div>
            <p className="text-slate-600 text-sm mt-2">Participated in outreach, collected and managed program data, produced documentation and reports summarizing program impacts, and supported direct mentorship activities for teenagers.</p>
            <p className="mt-3"><a className="text-sky-600 underline" href="https://vorp-ea.org/" target="_blank" rel="noreferrer">Learn more — VORP EA</a></p>
          </article>

          <article className="p-4 border rounded-lg shadow-sm">
            <h3 className="font-medium">Industrial Attachment — St. John's (Tumikia Mtoto)</h3>
            <div className="mt-2 flex items-center gap-2">
              <TechBadge>Outreach</TechBadge>
              <TechBadge>Data</TechBadge>
            </div>
            <p className="text-slate-600 text-sm mt-2">Assisted in record keeping, data entry and management for beneficiary records; organized and digitized case files; contributed to awareness campaigns and monitoring documentation.</p>
            <p className="mt-3"><a className="text-sky-600 underline" href="https://www.wvi.org/kenya/usaid-tumikia-mtoto-project" target="_blank" rel="noreferrer">Learn more — Tumikia Mtoto</a></p>
          </article>
        </div>
      </section>
    </main>
  )
}
