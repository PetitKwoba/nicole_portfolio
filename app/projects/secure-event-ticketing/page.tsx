import Link from 'next/link'
import TechBadge from '../../../components/TechBadge'

export default function SecureEventTicketing() {
  return (
    <main className="py-20">
      <h1 className="text-3xl font-bold">Secure Event Ticketing System</h1>

      <div className="mt-4 text-slate-700 max-w-3xl">
        <div className="mt-2 flex items-center gap-2">
          <TechBadge>Supabase</TechBadge>
          <TechBadge>PostgreSQL</TechBadge>
          <TechBadge>RLS</TechBadge>
          <TechBadge>Auth</TechBadge>
        </div>

        <p className="mt-4">This project is an upgraded version of an event ticketing application focused on secure database access and role-based control. It uses Supabase (PostgreSQL) with Supabase Auth for authentication, Row Level Security (RLS) to ensure users can only access their own records, and admin-only SQL functions for higher-privilege operations.</p>

        <h2 className="text-xl font-semibold mt-6">Features</h2>
        <ul className="list-disc list-inside mt-2 text-slate-600">
          <li>Secure user registration & login via Supabase Auth</li>
          <li>Role-Based Access Control (users vs admins) with RLS policies</li>
          <li>Events, tickets, payments, and attendance with structured schema</li>
          <li>Admin-only SQL functions (delete events, attendance stats)</li>
          <li>Least Privilege enforcement so users only see their own data</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">Repository</h2>
        <p className="mt-2"><a className="text-sky-600 underline" href="https://github.com/rozzienicole8/data-fundamentals-final-project" target="_blank" rel="noreferrer">View on GitHub — data-fundamentals-final-project</a></p>

        <div className="mt-8">
          <Link href="/projects" className="text-slate-700 underline">← Back to projects</Link>
        </div>
      </div>
    </main>
  )
}
