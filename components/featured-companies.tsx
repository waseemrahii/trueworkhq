import { CompanyCard } from "@/components/company-card"

const featuredCompanies = [
  {
    id: 1,
    name: "TechCorp Pakistan",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=60&h=60&fit=crop&crop=center",
    coverImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=120&fit=crop",
    industry: "Technology",
    location: "Karachi, Pakistan",
    rating: 4.2,
    reviewCount: 156,
    employeeCount: "1000-5000",
    verified: true,
    description: "Leading software development company specializing in fintech solutions",
    founded: "2015",
    website: "https://techcorp.pk",
    totalIssues: 23,
    resolvedIssues: 18,
    recentActivity: "2 days ago",
    salaryRange: "PKR 80,000 - 200,000",
    workCulture: "Innovation-focused with flexible hours",
    benefits: ["Health Insurance", "Remote Work", "Learning Budget", "Annual Bonus"],
  },
  {
    id: 2,
    name: "InfoSys India",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=60&h=60&fit=crop&crop=center",
    coverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=120&fit=crop",
    industry: "IT Services",
    location: "Bangalore, India",
    rating: 3.8,
    reviewCount: 892,
    employeeCount: "10000+",
    verified: true,
    description: "Global IT consulting and services company",
    founded: "1981",
    website: "https://infosys.com",
    totalIssues: 45,
    resolvedIssues: 28,
    recentActivity: "1 day ago",
    salaryRange: "INR 4,00,000 - 12,00,000",
    workCulture: "Corporate environment with growth opportunities",
    benefits: ["Health Insurance", "Provident Fund", "Training Programs", "Cafeteria"],
  },
  {
    id: 3,
    name: "DataSoft Bangladesh",
    logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=60&h=60&fit=crop&crop=center",
    coverImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=120&fit=crop",
    industry: "Software",
    location: "Dhaka, Bangladesh",
    rating: 4.1,
    reviewCount: 67,
    employeeCount: "500-1000",
    verified: false,
    description: "Software solutions provider for local and international clients",
    founded: "2010",
    website: "https://datasoft.com.bd",
    totalIssues: 12,
    resolvedIssues: 10,
    recentActivity: "1 week ago",
    salaryRange: "BDT 30,000 - 80,000",
    workCulture: "Collaborative and learning-oriented",
    benefits: ["Health Insurance", "Flexible Hours", "Team Events", "Skill Development"],
  },
]

export function FeaturedCompanies() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {featuredCompanies.map((company) => (
        <CompanyCard key={company.id} company={company} />
      ))}
    </div>
  )
}
