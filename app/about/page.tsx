import TimelineItem from '../../components/TimelineItem'

export default function About() {
  return (
    <main id="about-content" aria-label="About" className="py-20">
      <a href="#about-content" className="sr-only focus:not-sr-only focus:shadow-md focus:bg-white focus:text-sky-600 p-2 rounded">Skip to About content</a>
      <header>
        <h1 className="text-3xl font-bold">About</h1>
        <p className="mt-2 text-slate-700 max-w-3xl">A motivated Data Analyst with a background in Sociology with IT and hands-on skills in data cleaning, analysis and visualization. Experienced in managing records, compiling reports and supporting data-driven decision making in community-based environments. I am eager to apply my analytical skills and learn industry tools.</p>
      </header>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Timeline</h2>

        <div className="mt-6 relative pl-8">
          {/* vertical line */}
          <div className="absolute left-3 top-0 bottom-0 w-px bg-slate-200" />

          <TimelineItem date="November 2020 — December 2024" title="Bachelor of Arts, Sociology with IT" location="Maseno University — Kisumu, Kenya" variant="education" />

          <TimelineItem date="2016 — 2019" title="Secondary education — Ngara Girls High School" location="Nairobi, Kenya" variant="education" />

          <TimelineItem date="October 2025 — present" title="Certificate in Data Analysis and Visualization" location="Africa Digital Media Institute (ADMI) — Nairobi, Kenya" variant="certificate" />

          <TimelineItem date="September 2024 — Current — Nairobi, Kenya" title="Community Volunteer — VORP EA" location="Nairobi, Kenya" variant="experience">
            <ul className="list-disc list-inside mt-2">
              <li>Participated in community outreach programs, distributing resources and mentoring teenagers.</li>
              <li>Collected and organized outreach data, created documentation and impact reports.</li>
              <li>Supported registration, record keeping and program administration.</li>
            </ul>
            <div className="mt-2"><a className="text-sky-600 underline" href="https://vorp-ea.org/" target="_blank" rel="noreferrer">VORP EA — organization site</a></div>
          </TimelineItem>

          <TimelineItem date="May 2023 — August 2023 — Nairobi, Kenya" title="Volunteer (Industrial attachment) — St. John's Community Centre" location="Nairobi, Kenya" variant="experience">
            <ul className="list-disc list-inside mt-2">
              <li>Assisted in record keeping, data entry and management for beneficiary records.</li>
              <li>Organized and digitized case files to improve accessibility and accuracy.</li>
              <li>Supported awareness campaigns and monitoring & evaluation documentation.</li>
            </ul>
            <div className="mt-2"><a className="text-sky-600 underline" href="https://www.wvi.org/kenya/usaid-tumikia-mtoto-project" target="_blank" rel="noreferrer">Tumikia Mtoto — project page</a></div>
          </TimelineItem>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <ul className="mt-2 list-disc list-inside text-slate-600 max-w-3xl">
          <li>Communication and teamwork</li>
          <li>Adaptability</li>
          <li>Problem solving and documentation</li>
          <li>Analytical skills — Excel, Power BI, SQL (Supabase)</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Languages</h2>
        <p className="mt-2 text-slate-600 max-w-3xl">English, Swahili</p>

        <h2 className="text-2xl font-semibold mt-6">Resume</h2>
        <p className="mt-2 text-slate-600">Download the full CV: <a className="text-sky-600 underline" href="/resume.pdf">Resume (PDF)</a></p>
      </section>

    </main>
  )
}
