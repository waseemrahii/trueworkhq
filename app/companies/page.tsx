"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Building2, Plus } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Logo } from "@/components/logo"
import { CompanyCard } from "@/components/company-card"
import { MobileNav } from "@/components/mobile-nav"

const companies = [
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
  {
    id: 4,
    name: "FinanceHub Pakistan",
    logo: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=60&h=60&fit=crop&crop=center",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=120&fit=crop",
    industry: "Financial Services",
    location: "Lahore, Pakistan",
    rating: 3.9,
    reviewCount: 234,
    employeeCount: "1000-5000",
    verified: true,
    description: "Digital banking and financial technology solutions",
    founded: "2018",
    website: "https://financehub.pk",
    totalIssues: 18,
    resolvedIssues: 12,
    recentActivity: "3 days ago",
    salaryRange: "PKR 70,000 - 180,000",
    workCulture: "Fast-paced fintech environment",
    benefits: ["Health Insurance", "Stock Options", "Performance Bonus", "Gym Membership"],
  },
  {
    id: 5,
    name: "MediaTech India",
    logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=60&h=60&fit=crop&crop=center",
    coverImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=120&fit=crop",
    industry: "Media & Entertainment",
    location: "Mumbai, India",
    rating: 4.0,
    reviewCount: 123,
    employeeCount: "500-1000",
    verified: false,
    description: "Digital media and content creation platform",
    founded: "2016",
    website: "https://mediatech.in",
    totalIssues: 8,
    resolvedIssues: 6,
    recentActivity: "5 days ago",
    salaryRange: "INR 3,50,000 - 9,00,000",
    workCulture: "Creative and dynamic work environment",
    benefits: ["Health Insurance", "Creative Freedom", "Flexible Hours", "Team Outings"],
  },
  {
    id: 6,
    name: "GreenEnergy Bangladesh",
    logo: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=60&h=60&fit=crop&crop=center",
    coverImage: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=120&fit=crop",
    industry: "Renewable Energy",
    location: "Chittagong, Bangladesh",
    rating: 4.3,
    reviewCount: 45,
    employeeCount: "100-500",
    verified: true,
    description: "Sustainable energy solutions and solar power systems",
    founded: "2019",
    website: "https://greenenergy.com.bd",
    totalIssues: 3,
    resolvedIssues: 3,
    recentActivity: "2 weeks ago",
    salaryRange: "BDT 25,000 - 60,000",
    workCulture: "Mission-driven and environmentally conscious",
    benefits: ["Health Insurance", "Environmental Impact", "Learning Opportunities", "Team Building"],
  },
]

export default function CompaniesPage() {
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "")
  const [locationFilter, setLocationFilter] = useState(searchParams.get("location") || "")
  const [industryFilter, setIndustryFilter] = useState("")
  const [countryFilter, setCountryFilter] = useState("")
  const [ratingFilter, setRatingFilter] = useState("")
  const [filteredCompanies, setFilteredCompanies] = useState(companies)

  useEffect(() => {
    let filtered = companies

    if (searchQuery) {
      filtered = filtered.filter(
        (company) =>
          company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          company.description.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    if (locationFilter) {
      filtered = filtered.filter((company) => company.location.toLowerCase().includes(locationFilter.toLowerCase()))
    }

    if (industryFilter) {
      filtered = filtered.filter((company) => company.industry === industryFilter)
    }

    if (countryFilter) {
      filtered = filtered.filter((company) => company.location.toLowerCase().includes(countryFilter.toLowerCase()))
    }

    if (ratingFilter) {
      const minRating = Number.parseFloat(ratingFilter)
      filtered = filtered.filter((company) => company.rating >= minRating)
    }

    setFilteredCompanies(filtered)
  }, [searchQuery, locationFilter, industryFilter, countryFilter, ratingFilter])

  const industries = [...new Set(companies.map((c) => c.industry))]
  const countries = ["Pakistan", "India", "Bangladesh"]

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <Logo />
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/companies" className="text-blue-600 font-medium">
                Companies
              </Link>
              <Link href="/report-issue" className="text-slate-600 hover:text-blue-600 transition-colors">
                Report Issues
              </Link>
              <Link href="/community" className="text-slate-600 hover:text-blue-600 transition-colors">
                Community
              </Link>
              <Link href="/support" className="text-slate-600 hover:text-blue-600 transition-colors">
                Support & Legal Aid
              </Link>
            </nav>
            <div className="hidden md:flex items-center space-x-3">
              <Button variant="ghost" asChild>
                <Link href="/login">Sign In</Link>
              </Button>
              <Button asChild>
                <Link href="/write-review">Write Review</Link>
              </Button>
            </div>
            <MobileNav />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-4 sm:py-6 lg:py-8">
        {/* Header Section */}
        <div className="mb-6 lg:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Browse Companies</h1>
              <p className="text-slate-600">Discover workplace insights from companies across South Asia</p>
            </div>
            <Button
              asChild
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <Link href="/report-issue">
                <Plus className="w-4 h-4 mr-2" />
                Add New Company
              </Link>
            </Button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-6 lg:mb-8">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border space-y-4">
            {/* Main Search */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <Input
                    placeholder="Search companies..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12"
                  />
                </div>
                <div className="relative sm:w-64">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4 z-10" />
                  <Input
                    placeholder="Location..."
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                    className="pl-10 h-12"
                  />
                </div>
              </div>

              {/* Filter Options */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                <Select value={industryFilter} onValueChange={setIndustryFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Industries</SelectItem>
                    {industries.map((industry) => (
                      <SelectItem key={industry} value={industry}>
                        {industry}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={countryFilter} onValueChange={setCountryFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Countries</SelectItem>
                    {countries.map((country) => (
                      <SelectItem key={country} value={country}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={ratingFilter} onValueChange={setRatingFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Rating" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Ratings</SelectItem>
                    <SelectItem value="4">4+ Stars</SelectItem>
                    <SelectItem value="3">3+ Stars</SelectItem>
                    <SelectItem value="2">2+ Stars</SelectItem>
                  </SelectContent>
                </Select>

                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery("")
                    setLocationFilter("")
                    setIndustryFilter("")
                    setCountryFilter("")
                    setRatingFilter("")
                  }}
                  className="w-full"
                >
                  Clear All
                </Button>
              </div>
            </div>

            {/* Company Not Found Notice */}
            {searchQuery && filteredCompanies.length === 0 && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-blue-600" />
                  <div className="flex-1">
                    <h3 className="font-medium text-blue-900">Company not found?</h3>
                    <p className="text-sm text-blue-700">
                      Can't find the company you're looking for? Add it to our database so you and others can share
                      reviews.
                    </p>
                  </div>
                  <Button size="sm" asChild>
                    <Link href="/report-issue">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Company
                    </Link>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Results Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
          <p className="text-slate-600">
            Showing <span className="font-medium">{filteredCompanies.length}</span> companies
          </p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-600">Sort by:</span>
            <Select defaultValue="rating">
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="reviews">Most Reviews</SelectItem>
                <SelectItem value="recent">Recently Active</SelectItem>
                <SelectItem value="name">Company Name</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Companies Grid */}
        {filteredCompanies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredCompanies.map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Building2 className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-slate-900 mb-2">No companies found</h3>
            <p className="text-slate-500 mb-4">Try adjusting your search criteria or add a new company.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("")
                  setLocationFilter("")
                  setIndustryFilter("")
                  setCountryFilter("")
                  setRatingFilter("")
                }}
              >
                Clear All Filters
              </Button>
              <Button asChild>
                <Link href="/report-issue">
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Company
                </Link>
              </Button>
            </div>
          </div>
        )}

        {/* Load More */}
        {filteredCompanies.length > 0 && (
          <div className="text-center mt-8 sm:mt-12">
            <Button variant="outline" size="lg">
              Load More Companies
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
