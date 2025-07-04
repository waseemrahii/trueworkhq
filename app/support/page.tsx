"use client"
import { Button } from "@/components/ui/button"
import { Phone, Shield, Heart, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { Logo } from "@/components/logo"

const legalAidOrganizations = [
  {
    name: "Pakistan Legal Aid Foundation",
    country: "Pakistan",
    phone: "+92-21-1234-5678",
    email: "help@plaf.org.pk",
    website: "https://plaf.org.pk",
    services: ["Free Legal Consultation", "Labor Law Assistance", "Court Representation"],
    availability: "24/7 Helpline",
  },
  {
    name: "India Legal Services Authority",
    country: "India",
    phone: "+91-11-2345-6789",
    email: "support@nalsa.gov.in",
    website: "https://nalsa.gov.in",
    services: ["Workplace Rights", "Legal Aid", "Mediation Services"],
    availability: "Mon-Fri 9AM-6PM",
  },
  {
    name: "Bangladesh Legal Aid Services",
    country: "Bangladesh",
    phone: "+880-2-987-6543",
    email: "info@blast.org.bd",
    website: "https://blast.org.bd",
    services: ["Employment Law", "Human Rights", "Legal Representation"],
    availability: "Mon-Sat 8AM-8PM",
  },
]

const mentalHealthResources = [
  {
    name: "Workplace Wellness Pakistan",
    phone: "+92-300-1234567",
    email: "support@workplacewellness.pk",
    services: ["Stress Counseling", "Trauma Support", "Career Guidance"],
  },
  {
    name: "Mind India - Workplace Support",
    phone: "+91-98765-43210",
    email: "help@mindindia.org",
    services: ["Mental Health Counseling", "Workplace Harassment Support"],
  },
  {
    name: "Mental Health Bangladesh",
    phone: "+880-1712-345678",
    email: "contact@mhbd.org",
    services: ["Crisis Intervention", "Therapy Sessions", "Support Groups"],
  },
]

const emergencyContacts = [
  {
    country: "Pakistan",
    emergency: "15",
    police: "15",
    womenHelpline: "1091",
  },
  {
    country: "India",
    emergency: "112",
    police: "100",
    womenHelpline: "181",
  },
  {
    country: "Bangladesh",
    emergency: "999",
    police: "999",
    womenHelpline: "109",
  },
]

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Logo />
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/companies" className="text-slate-600 hover:text-blue-600 transition-colors">Companies</Link>
              <Link href="/report-issue" className="text-slate-600 hover:text-blue-600 transition-colors">Report Issues</Link>
              <Link href="/community" className="text-slate-600 hover:text-blue-600 transition-colors">Community</Link>
              <Link href="/support" className="text-blue-600 font-medium">Support & Legal Aid</Link>
            </nav>
            <div className="flex items-center space-x-3">
              <Button variant="ghost" asChild>
                <Link href="/login">Sign In</Link>
              </Button>
              <Button asChild>
                <Link href="/signup">Join Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Support & Legal Aid</h1>
          <p className="text-slate-600">Get immediate help, legal assistance, and mental health support for workplace issues</p>
        </div>

        {/* Emergency Alert */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-red-600 mt-0.5" />
            <div>
              <h2 className="font-bold text-red-900 mb-2">Need Immediate Help?</h2>
              <p className="text-red-700 mb-4">
                If you're facing immediate danger, threats, or urgent workplace harassment, contact emergency services immediately.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {emergencyContacts.map((contact) => (
                  <div key={contact.country} className="bg-white rounded-lg p-4 border border-red-200">
                    <h3 className="font-semibold text-red-900 mb-2">{contact.country}</h3>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center gap-2"><Phone className="w-3 h-3" /><span>Emergency: {contact.emergency}</span></div>
                      <div className="flex items-center gap-2"><Shield className="w-3 h-3" /><span>Police: {contact.police}</span></div>
                      <div className="flex items-center gap-2"><Heart className="w-3 h-3" /><span>Women Helpline: {contact.womenHelpline}</span></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Legal Aid Organizations */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="w-5 h-5 text-blue-600" />
            <h2 className="text-xl font-semibold text-slate-900">Legal Aid Organizations</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {legalAidOrganizations.map((org) => (
              <div key={org.name} className="bg-white border border-slate-200 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-1">{org.name}</h3>
                <p className="text-slate-600 text-sm mb-2">{org.country} • {org.availability}</p>
                <p className="text-sm text-slate-700 mb-1">📞 {org.phone}</p>
                <p className="text-sm text-slate-700 mb-1">✉️ {org.email}</p>
                <a href={org.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm hover:underline mb-2 block">{org.website}</a>
                <ul className="list-disc list-inside text-slate-600 text-sm">
                  {org.services.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Mental Health Resources */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Heart className="w-5 h-5 text-pink-600" />
            <h2 className="text-xl font-semibold text-slate-900">Mental Health Resources</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {mentalHealthResources.map((resource) => (
              <div key={resource.name} className="bg-white border border-slate-200 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-1">{resource.name}</h3>
                <p className="text-sm text-slate-700 mb-1">📞 {resource.phone}</p>
                <p className="text-sm text-slate-700 mb-2">✉️ {resource.email}</p>
                <ul className="list-disc list-inside text-slate-600 text-sm">
                  {resource.services.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
