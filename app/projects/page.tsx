import TechBadge from '../../components/TechBadge'
import ProjectCard from '../../components/ProjectCard'

export default function Projects() {
  return (
    <main className="py-20">
      <h1 className="text-3xl font-bold">Projects</h1>

      <ul className="mt-8 space-y-4">
        <ProjectCard
          title="Secure Event Ticketing System — Data Fundamentals"
          badges={<>
            <TechBadge>Supabase</TechBadge>
            <TechBadge>PostgreSQL</TechBadge>
            <TechBadge>RLS / SQL</TechBadge>
          </>}
        >
          <p>An upgraded Event Ticketing system that integrates Supabase Auth, Admin Roles, and Row Level Security (RLS) to ensure robust database protection and controlled data access. Built with Supabase (PostgreSQL) to manage users, events, tickets, and payments while enforcing role-based access control and the Least Privilege Principle.</p>
          <div className="mt-3 text-slate-700 text-sm">
            <strong>Key features</strong>
            <ul className="list-disc list-inside mt-1">
              <li>Supabase Auth for secure user registration and login</li>
              <li>Admin and user roles with RBAC and RLS policies to restrict access to user-owned records</li>
              <li>Structured database schema for events, tickets, payments, and attendance</li>
              <li>Admin-only SQL functions for event management and attendance statistics</li>
            </ul>
            <p className="mt-2 flex gap-4">
              <a className="text-sky-600 underline" href="/projects/secure-event-ticketing">View project</a>
              <a className="text-sky-600 underline" href="https://github.com/rozzienicole8/data-fundamentals-final-project" target="_blank" rel="noreferrer">View on GitHub</a>
            </p>
          </div>
        </ProjectCard>

        <ProjectCard
          title="Event Ticketing System — Data Tools"
          badges={<>
            <TechBadge>Supabase</TechBadge>
            <TechBadge>PostgreSQL</TechBadge>
            <TechBadge>SQL</TechBadge>
          </>}
        >
          <p>A database-driven web application built with Supabase (PostgreSQL) enabling users to browse events, register, purchase tickets, and manage attendance in real time. The project includes SQL-based schema and documentation (schema.sql, data_dictionary.md, erd.md) designed for easy deployment to Supabase.</p>
          <div className="mt-3 text-slate-700 text-sm">
            <strong>Highlights</strong>
            <ul className="list-disc list-inside mt-1">
              <li>User management with unique registration (email & phone)</li>
              <li>Event creation and organizer tools</li>
              <li>Ticketing with payment tracking and attendance management</li>
              <li>SQL-first approach: schema, data dictionary, and ERD included for easy Supabase deployment</li>
            </ul>
            <p className="mt-2"><a className="text-sky-600 underline" href="https://github.com/rozzienicole8/Data-Tools-final-project" target="_blank" rel="noreferrer">View on GitHub — Data-Tools-final-project</a></p>
          </div>
        </ProjectCard>

        <ProjectCard
          title="Community Outreach & Records Management — VORP EA"
          badges={<>
            <TechBadge>Community</TechBadge>
            <TechBadge>Records</TechBadge>
          </>}
        >
          <p>As a Community Volunteer (Sept 2024 — present) participated in outreach, collected and managed program data, produced documentation and reports summarizing program impacts, and supported direct mentorship activities for teenagers.</p>
          <div className="mt-3 text-slate-700 text-sm">
            <strong>About VORP EA</strong>
            <p className="mt-1">VORP EA (Voice of Reconciliation and Pacification in Eastern Africa) is a community-driven organization that promotes peace, justice, and sustainable development across Eastern Africa. Programs focus on improving health and well-being, enhancing education and skills development, promoting equity and inclusion, and strengthening community resilience and livelihoods. Using a rights-based and participatory approach, VORP EA works with local stakeholders and governments to empower communities, address social inequalities, and build inclusive, resilient systems — transforming communities one pillar at a time.</p>
            <p className="mt-2"><a className="text-sky-600 underline" href="https://vorp-ea.org/" target="_blank" rel="noreferrer">Learn more — VORP EA</a></p>
          </div>
        </ProjectCard>

        <ProjectCard
          title="Industrial Attachment — St. John's Community Centre (Tumikia Mtoto)"
          badges={<>
            <TechBadge>Outreach</TechBadge>
            <TechBadge>Data</TechBadge>
          </>}
        >
          <p>During the May–Aug 2023 attachment, supported beneficiary record keeping and data entry, organized and digitized case files, assisted with awareness campaigns, and contributed to monitoring and evaluation documentation.</p>
          <div className="mt-3 text-slate-700 text-sm">
            <strong>About the Tumikia Mtoto project</strong>
            <p className="mt-1">Tumikia Mtoto is a USAID-funded initiative implemented by Catholic Relief Services (CRS) and local partners in Kenya to improve the well-being of orphans and vulnerable children (OVC) and their families. Running from 2021 to 2027, the project operates across several counties in western Kenya and focuses on ensuring children are healthy, safe, stable, and in school. It strengthens access to HIV prevention, care, and treatment services, promotes child protection, supports education, and enhances household economic stability through livelihood programs. By working closely with communities, government agencies and local organizations, Tumikia Mtoto aims to build sustainable systems that reduce children’s vulnerability and help them thrive in safe and supportive environments.</p>
            <p className="mt-2"><a className="text-sky-600 underline" href="https://www.wvi.org/kenya/usaid-tumikia-mtoto-project" target="_blank" rel="noreferrer">Learn more — Tumikia Mtoto (WVI)</a></p>
          </div>
        </ProjectCard>
      </ul>
    </main>
  )
}
