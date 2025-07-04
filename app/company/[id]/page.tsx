"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Star,
  MapPin,
  Users,
  Globe,
  CheckCircle,
  Building2,
  Calendar,
  DollarSign,
  TrendingUp,
  Filter,
  Search,
  Phone,
  Mail,
  Linkedin,
  Target,
  Heart,
} from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Logo } from "@/components/logo"
import { EnhancedReviewCard } from "@/components/enhanced-review-card"
import { MobileNav } from "@/components/mobile-nav"

// Enhanced mock data with all companies
const companyData = {
  "1": {
    id: 1,
    name: "TechCorp Pakistan",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=100&fit=crop&crop=center",
    coverImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=200&fit=crop",
    industry: "Technology",
    location: "Karachi, Pakistan",
    website: "https://techcorp.pk",
    phone: "+92-21-1234-5678",
    email: "careers@techcorp.pk",
    linkedin: "https://linkedin.com/company/techcorp-pk",
    employeeCount: "1000-5000",
    founded: "2015",
    verified: true,
    description:
      "TechCorp Pakistan is a leading software development company specializing in fintech solutions, mobile applications, and enterprise software. We serve clients across South Asia and the Middle East with cutting-edge technology solutions.",
    rating: 4.2,
    reviewCount: 156,
    totalIssues: 23,
    resolvedIssues: 18,
    ratings: {
      workLifeBalance: 4.1,
      culture: 4.3,
      careerGrowth: 3.9,
      compensation: 3.8,
      management: 4.0,
    },
    salaryRanges: {
      "Software Engineer": "PKR 80,000 - 150,000",
      "Senior Developer": "PKR 120,000 - 200,000",
      "Team Lead": "PKR 180,000 - 280,000",
      "Product Manager": "PKR 150,000 - 250,000",
    },
    benefits: [
      "Health Insurance",
      "Flexible Working Hours",
      "Remote Work Options",
      "Professional Development",
      "Annual Bonus",
      "Paid Time Off",
      "Learning Budget",
      "Team Events",
    ],
    companyValues: ["Innovation First", "Work-Life Balance", "Continuous Learning", "Diversity & Inclusion"],
    officeLocations: ["Karachi - Head Office", "Lahore - Development Center", "Islamabad - Sales Office"],
    recentNews: [
      {
        title: "TechCorp Expands to Bangladesh Market",
        date: "2024-01-15",
        summary: "Company announces new office in Dhaka",
      },
      {
        title: "Best Employer Award 2023",
        date: "2023-12-10",
        summary: "Recognized for employee satisfaction",
      },
    ],
  },
  "2": {
    id: 2,
    name: "InfoSys India",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop&crop=center",
    coverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=200&fit=crop",
    industry: "IT Services",
    location: "Bangalore, India",
    website: "https://infosys.com",
    phone: "+91-80-2852-0261",
    email: "careers@infosys.com",
    linkedin: "https://linkedin.com/company/infosys",
    employeeCount: "10000+",
    founded: "1981",
    verified: true,
    description:
      "Infosys is a global leader in next-generation digital services and consulting. We enable clients in more than 50 countries to navigate their digital transformation.",
    rating: 3.8,
    reviewCount: 892,
    totalIssues: 45,
    resolvedIssues: 28,
    ratings: {
      workLifeBalance: 3.5,
      culture: 4.0,
      careerGrowth: 4.2,
      compensation: 3.6,
      management: 3.8,
    },
    salaryRanges: {
      "Software Engineer": "INR 4,00,000 - 8,00,000",
      "Senior Developer": "INR 8,00,000 - 15,00,000",
      "Team Lead": "INR 12,00,000 - 20,00,000",
      "Project Manager": "INR 15,00,000 - 25,00,000",
    },
    benefits: [
      "Health Insurance",
      "Provident Fund",
      "Training Programs",
      "Cafeteria",
      "Transport",
      "Life Insurance",
      "Flexible Hours",
      "Career Development",
    ],
    companyValues: ["Client Value", "Leadership by Example", "Integrity and Transparency", "Fairness"],
    officeLocations: ["Bangalore - Headquarters", "Pune - Development Center", "Chennai - Operations"],
    recentNews: [
      {
        title: "Infosys Announces AI Innovation Hub",
        date: "2024-01-20",
        summary: "New center of excellence for artificial intelligence",
      },
    ],
  },
  "3": {
    id: 3,
    name: "DataSoft Bangladesh",
    logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=100&h=100&fit=crop&crop=center",
    coverImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=200&fit=crop",
    industry: "Software",
    location: "Dhaka, Bangladesh",
    website: "https://datasoft.com.bd",
    phone: "+880-2-9611-677",
    email: "careers@datasoft.com.bd",
    linkedin: "https://linkedin.com/company/datasoft-bd",
    employeeCount: "500-1000",
    founded: "2010",
    verified: false,
    description:
      "DataSoft is a leading software development company in Bangladesh, providing innovative solutions for local and international clients with focus on quality and customer satisfaction.",
    rating: 4.1,
    reviewCount: 67,
    totalIssues: 12,
    resolvedIssues: 10,
    ratings: {
      workLifeBalance: 4.2,
      culture: 4.0,
      careerGrowth: 3.8,
      compensation: 4.0,
      management: 4.1,
    },
    salaryRanges: {
      "Software Engineer": "BDT 30,000 - 60,000",
      "Senior Developer": "BDT 50,000 - 80,000",
      "Team Lead": "BDT 70,000 - 1,00,000",
      "Project Manager": "BDT 80,000 - 1,20,000",
    },
    benefits: [
      "Health Insurance",
      "Flexible Hours",
      "Team Events",
      "Skill Development",
      "Performance Bonus",
      "Lunch Allowance",
      "Festival Bonus",
      "Training Programs",
    ],
    companyValues: ["Quality First", "Team Collaboration", "Innovation", "Customer Focus"],
    officeLocations: ["Dhaka - Main Office", "Chittagong - Branch Office"],
    recentNews: [
      {
        title: "DataSoft Wins Best IT Company Award",
        date: "2024-01-10",
        summary: "Recognized for outstanding contribution to IT sector",
      },
    ],
  },
}

const enhancedReviews = [
  {
    id: 1,
    rating: 2,
    issueType: "Salary Delay",
    severity: "High",
    title: "3 months salary pending - Management making false promises",
    content:
      "I've been working here for 2 years and this is the worst situation I've faced. My salary has been pending for 3 months. Every time I ask HR, they say 'company is facing cash flow issues' or 'next week for sure'. I have uploaded my offer letter and bank statements as proof. This is affecting my family's basic needs. Other colleagues are also facing the same but afraid to speak up. The work environment was good initially but financial management seems to be a major issue.",
    author: "Software Engineer",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    department: "Engineering",
    isAnonymous: false,
    isVerified: true,
    timeAgo: "2 days ago",
    supportCount: 23,
    employmentType: "Full-time",
    workDuration: "2 years",
    status: "Under Investigation",
    proofUploaded: true,
    pros: ["Good technical team", "Learning opportunities", "Flexible hours"],
    cons: ["Salary delays", "Poor financial management", "Lack of transparency"],
    advice: "Please ensure timely salary payments and be transparent about company finances",
    salaryInfo: {
      range: "PKR 85,000",
      currency: "per month",
      benefits: ["Health insurance", "Annual bonus (when paid)"],
    },
  },
  {
    id: 2,
    rating: 1,
    issueType: "Harassment",
    severity: "Critical",
    title: "Manager harassment and inappropriate behavior",
    content:
      "My direct manager has been making inappropriate comments about female employees and creating a hostile work environment. When I tried to report to HR, they said 'these things happen in corporate world'. I have screenshots of WhatsApp messages and email conversations as evidence. This is affecting my mental health and I'm considering leaving despite needing this job. The company needs to take harassment seriously and train their management properly.",
    author: "Anonymous Employee",
    authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
    department: "Product Management",
    isAnonymous: true,
    isVerified: true,
    timeAgo: "1 week ago",
    supportCount: 45,
    employmentType: "Full-time",
    workDuration: "1 year",
    status: "Legal Aid Provided",
    proofUploaded: true,
    pros: ["Good product vision", "Competitive salary"],
    cons: ["Harassment issues", "Poor HR response", "Toxic management"],
    advice: "Implement proper harassment policies and train managers on professional behavior",
    salaryInfo: {
      range: "PKR 120,000",
      currency: "per month",
      benefits: ["Health insurance", "Performance bonus"],
    },
  },
  {
    id: 3,
    rating: 4,
    title: "Great place to learn and grow",
    content:
      "I've been working at TechCorp for 18 months and overall it's been a positive experience. The technical challenges are interesting, the team is supportive, and there are good opportunities for career growth. Management is generally responsive to feedback and the work-life balance is reasonable. The company culture promotes learning and innovation.",
    author: "Senior Developer",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    department: "Engineering",
    isAnonymous: false,
    isVerified: true,
    timeAgo: "3 days ago",
    supportCount: 12,
    employmentType: "Full-time",
    workDuration: "18 months",
    proofUploaded: true,
    pros: ["Great learning environment", "Supportive team", "Good work-life balance", "Career growth opportunities"],
    cons: ["Occasional deadline pressure", "Limited remote work", "Office space could be better"],
    advice: "Continue investing in employee development and consider more flexible work arrangements",
    salaryInfo: {
      range: "PKR 140,000",
      currency: "per month",
      benefits: ["Health insurance", "Learning budget", "Annual bonus", "Flexible hours"],
    },
  },
]

const positiveStories = [
  {
    id: 1,
    title: "Promoted to Team Lead in 18 months",
    content:
      "I joined as a junior developer and was promoted to team lead within 18 months. The company really values performance and provides clear growth paths. My manager was very supportive throughout the journey and provided mentorship.",
    author: "Team Lead",
    department: "Engineering",
    timeAgo: "3 days ago",
    isVerified: true,
  },
  {
    id: 2,
    title: "Company supported my AWS certification",
    content:
      "TechCorp paid for my AWS certification and gave me study time during work hours. This really helped advance my career and I'm grateful for the investment they made in me.",
    author: "DevOps Engineer",
    department: "Infrastructure",
    timeAgo: "1 week ago",
    isVerified: true,
  },
]

const qaItems = [
  {
    id: 1,
    question: "What's the interview process like?",
    answers: [
      {
        content:
          "3 rounds - HR screening, technical interview, and final round with team lead. Technical round focuses on problem-solving and system design. Overall process takes about 2 weeks.",
        author: "Software Engineer",
        timeAgo: "5 days ago",
        helpful: 7,
      },
    ],
    answerCount: 3,
  },
  {
    id: 2,
    question: "How is the work-life balance?",
    answers: [
      {
        content:
          "Generally good. Standard 9-6 hours with flexibility for remote work 2 days a week. Occasional overtime during project deadlines but it's usually compensated with time off.",
        author: "Anonymous",
        timeAgo: "1 week ago",
        helpful: 12,
      },
    ],
    answerCount: 5,
  },
]

export default function CompanyPage() {
  const params = useParams()
  const companyId = params.id as string
  const company = companyData[companyId as keyof typeof companyData]
  const [activeTab, setActiveTab] = useState("overview")
  const [reviewFilter, setReviewFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  if (!company) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="text-center">
          <Building2 className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Company Not Found</h1>
          <p className="text-slate-600 mb-4">The company you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/companies">Browse Companies</Link>
          </Button>
        </div>
      </div>
    )
  }

  const filteredReviews = enhancedReviews.filter((review) => {
    const matchesFilter =
      reviewFilter === "all" ||
      (reviewFilter === "positive" && review.rating >= 4) ||
      (reviewFilter === "negative" && review.rating <= 2) ||
      (reviewFilter === "issues" && review.issueType)

    const matchesSearch =
      searchQuery === "" ||
      review.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.content.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesFilter && matchesSearch
  })

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <Logo />
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/companies" className="text-slate-600 hover:text-blue-600 transition-colors">
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
            <div className="hidden md:flex items-center space-x-2 sm:space-x-3">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/login">Sign In</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href={`/write-review?company=${company.id}`}>Write Review</Link>
              </Button>
            </div>
            <MobileNav />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-4 sm:py-6 lg:py-8 max-w-7xl">
        {/* Company Header */}
        <Card className="mb-4 sm:mb-6 lg:mb-8 overflow-hidden">
          {/* Cover Image */}
          <div className="relative h-24 sm:h-32 md:h-40 lg:h-48 bg-gradient-to-r from-blue-500 via-purple-600 to-green-500">
            <img
              src={company.coverImage || "/placeholder.svg"}
              alt={`${company.name} cover`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          <CardContent className="p-4 sm:p-6 -mt-8 sm:-mt-12 relative">
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <img
                  src={company.logo || "/placeholder.svg"}
                  alt={`${company.name} logo`}
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-xl object-cover border-4 border-white shadow-lg bg-white mx-auto sm:mx-0"
                />
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                    <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">{company.name}</h1>
                    {company.verified && (
                      <Badge className="bg-green-50 text-green-700 border-green-200 w-fit mx-auto sm:mx-0">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>
                  <p className="text-slate-600 mb-3 text-sm sm:text-base">{company.description}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <div className="flex items-center gap-1 justify-center sm:justify-start mb-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-xl font-bold text-slate-900">{company.rating}</span>
                    <span className="text-sm text-slate-600">({company.reviewCount} reviews)</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button className="w-full sm:w-auto" asChild>
                    <Link href={`/write-review?company=${company.id}`}>Write Review</Link>
                  </Button>
                  <Button variant="outline" className="w-full sm:w-auto bg-transparent" asChild>
                    <Link href={`/report-issue?company=${company.id}`}>Report Issue</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick Info Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-6 pt-4 border-t text-sm">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <span className="text-slate-600 truncate">{company.industry}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <span className="text-slate-600 truncate">{company.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <span className="text-slate-600">{company.employeeCount}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <span className="text-slate-600">Est. {company.founded}</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <a
                  href={company.website}
                  className="text-blue-600 hover:underline truncate"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website
                </a>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <span className="text-slate-600">
                  {Math.round((company.resolvedIssues / company.totalIssues) * 100)}% resolved
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4 sm:space-y-6">
          <div className="overflow-x-auto">
            <TabsList className="grid w-full grid-cols-3 sm:grid-cols-6 min-w-max sm:min-w-0">
              <TabsTrigger value="overview" className="text-xs sm:text-sm px-2 sm:px-4">
                Overview
              </TabsTrigger>
              <TabsTrigger value="reviews" className="text-xs sm:text-sm px-2 sm:px-4">
                Reviews ({enhancedReviews.length})
              </TabsTrigger>
              <TabsTrigger value="salaries" className="text-xs sm:text-sm px-2 sm:px-4">
                Salaries
              </TabsTrigger>
              <TabsTrigger value="stories" className="text-xs sm:text-sm px-2 sm:px-4">
                Stories ({positiveStories.length})
              </TabsTrigger>
              <TabsTrigger value="qa" className="text-xs sm:text-sm px-2 sm:px-4">
                Q&A ({qaItems.length})
              </TabsTrigger>
              <TabsTrigger value="about" className="text-xs sm:text-sm px-2 sm:px-4">
                About
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="overview" className="space-y-4 sm:space-y-6">
            {/* Rating Breakdown */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Rating Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                  {Object.entries(company.ratings).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">{value}</div>
                      <div className="text-xs sm:text-sm text-slate-600 capitalize mb-2">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </div>
                      <div className="flex justify-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < Math.floor(value) ? "text-yellow-400 fill-current" : "text-slate-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Company Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <Card>
                <CardContent className="p-3 sm:p-4 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-1">{company.reviewCount}</div>
                  <div className="text-xs sm:text-sm text-slate-600">Total Reviews</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-3 sm:p-4 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-red-600 mb-1">{company.totalIssues}</div>
                  <div className="text-xs sm:text-sm text-slate-600">Issues Reported</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-3 sm:p-4 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-green-600 mb-1">{company.resolvedIssues}</div>
                  <div className="text-xs sm:text-sm text-slate-600">Issues Resolved</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-3 sm:p-4 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-purple-600 mb-1">
                    {Math.round((company.resolvedIssues / company.totalIssues) * 100)}%
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600">Resolution Rate</div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Reviews Preview */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg sm:text-xl">Recent Reviews</CardTitle>
                <Button variant="outline" size="sm" onClick={() => setActiveTab("reviews")}>
                  View All
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {enhancedReviews.slice(0, 2).map((review) => (
                  <div key={review.id} className="border rounded-lg p-3 sm:p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 sm:w-4 sm:h-4 ${i < review.rating ? "text-yellow-400 fill-current" : "text-slate-300"}`}
                          />
                        ))}
                      </div>
                      <span className="text-xs sm:text-sm text-slate-500">{review.timeAgo}</span>
                    </div>
                    <h4 className="font-medium text-slate-900 mb-2 text-sm sm:text-base">{review.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-2">{review.content}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="space-y-4 sm:space-y-6">
            {/* Review Filters */}
            <Card>
              <CardContent className="p-3 sm:p-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <Input
                      placeholder="Search reviews..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select value={reviewFilter} onValueChange={setReviewFilter}>
                    <SelectTrigger className="w-full sm:w-48">
                      <SelectValue placeholder="Filter reviews" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Reviews</SelectItem>
                      <SelectItem value="positive">Positive (4-5 stars)</SelectItem>
                      <SelectItem value="negative">Negative (1-2 stars)</SelectItem>
                      <SelectItem value="issues">Issue Reports</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="icon" className="flex-shrink-0 bg-transparent">
                    <Filter className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Reviews List */}
            <div className="space-y-4 sm:space-y-6">
              {filteredReviews.map((review) => (
                <EnhancedReviewCard key={review.id} review={review} />
              ))}
            </div>

            {filteredReviews.length === 0 && (
              <Card>
                <CardContent className="p-6 sm:p-8 text-center">
                  <p className="text-slate-500 mb-4">No reviews found matching your criteria.</p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchQuery("")
                      setReviewFilter("all")
                    }}
                  >
                    Clear Filters
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="salaries" className="space-y-4 sm:space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <DollarSign className="w-5 h-5 text-green-600" />
                  Salary Ranges
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 sm:space-y-4">
                  {Object.entries(company.salaryRanges).map(([position, range]) => (
                    <div
                      key={position}
                      className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 bg-slate-50 rounded-lg gap-2"
                    >
                      <span className="font-medium text-slate-900 text-sm sm:text-base">{position}</span>
                      <span className="text-green-600 font-semibold text-sm sm:text-base">{range}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Benefits & Perks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
                  {company.benefits.map((benefit, index) => (
                    <Badge key={index} variant="secondary" className="justify-center p-2 text-xs sm:text-sm">
                      {benefit}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="stories" className="space-y-4 sm:space-y-6">
            {positiveStories.map((story) => (
              <Card key={story.id}>
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <Avatar className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
                      <AvatarFallback className="bg-green-100 text-green-700">{story.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                        <h3 className="font-semibold text-slate-900 text-sm sm:text-base">{story.title}</h3>
                        {story.isVerified && (
                          <Badge
                            variant="secondary"
                            className="text-xs bg-green-50 text-green-700 border-green-200 w-fit"
                          >
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Verified
                          </Badge>
                        )}
                      </div>
                      <p className="text-slate-700 mb-3 text-sm sm:text-base">{story.content}</p>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-slate-500">
                        <span>{story.author}</span>
                        <span className="hidden sm:inline">•</span>
                        <span>{story.department}</span>
                        <span className="hidden sm:inline">•</span>
                        <span>{story.timeAgo}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="qa" className="space-y-4 sm:space-y-6">
            {qaItems.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="font-semibold text-slate-900 mb-4 text-sm sm:text-base">{item.question}</h3>
                  <div className="space-y-4">
                    {item.answers.map((answer, index) => (
                      <div key={index} className="border-l-2 border-blue-100 pl-4">
                        <p className="text-slate-700 mb-2 text-sm sm:text-base">{answer.content}</p>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500">
                            <span>{answer.author}</span>
                            <span>•</span>
                            <span>{answer.timeAgo}</span>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Heart className="w-4 h-4 mr-1" />
                            {answer.helpful}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <Button variant="outline" size="sm">
                      View all {item.answerCount} answers
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="about" className="space-y-4 sm:space-y-6">
            {/* Company Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Company Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div>
                  <h4 className="font-medium text-slate-900 mb-2">About {company.name}</h4>
                  <p className="text-slate-700 text-sm sm:text-base">{company.description}</p>
                </div>

                <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
                  <div>
                    <h4 className="font-medium text-slate-900 mb-3">Contact Information</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-slate-400 flex-shrink-0" />
                        <span className="break-all">{company.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-slate-400 flex-shrink-0" />
                        <span className="break-all">{company.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-slate-400 flex-shrink-0" />
                        <a
                          href={company.website}
                          className="text-blue-600 hover:underline break-all"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {company.website}
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Linkedin className="w-4 h-4 text-slate-400 flex-shrink-0" />
                        <a
                          href={company.linkedin}
                          className="text-blue-600 hover:underline break-all"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          LinkedIn Profile
                        </a>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-slate-900 mb-3">Company Values</h4>
                    <div className="space-y-2">
                      {company.companyValues.map((value, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Target className="w-4 h-4 text-blue-600 flex-shrink-0" />
                          <span className="text-sm text-slate-700">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-slate-900 mb-3">Office Locations</h4>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {company.officeLocations.map((location, index) => (
                      <div key={index} className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg">
                        <MapPin className="w-4 h-4 text-slate-400 flex-shrink-0" />
                        <span className="text-sm text-slate-700">{location}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-slate-900 mb-3">Recent News</h4>
                  <div className="space-y-3">
                    {company.recentNews.map((news, index) => (
                      <div key={index} className="border-l-4 border-blue-500 pl-4">
                        <h5 className="font-medium text-slate-900 text-sm sm:text-base">{news.title}</h5>
                        <p className="text-sm text-slate-600 mb-1">{news.summary}</p>
                        <span className="text-xs text-slate-500">{news.date}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
