import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Users, MessageSquare, Star, CheckCircle, Building2, Globe, TrendingUp } from "lucide-react"
import Link from "next/link"
import { SearchBar } from "@/components/search-bar"
import { FeaturedCompanies } from "@/components/featured-companies"
import { RecentReports } from "@/components/recent-reviews"
import { Logo } from "@/components/logo"
import { MobileNav } from "@/components/mobile-nav"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white overflow-x-hidden">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 sm:py-4 max-w-7xl">
          <div className="flex items-center justify-between">
            <Logo />
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/companies" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
                Companies
              </Link>
              <Link href="/report-issue" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
                Report Issues
              </Link>
              <Link href="/community" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
                Community
              </Link>
              <Link href="/support" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
                Support & Legal Aid
              </Link>
            </nav>
            <div className="hidden md:flex items-center space-x-3">
              <Button variant="ghost" className="hover:bg-slate-100" asChild>
                <Link href="/login">Sign In</Link>
              </Button>
              <Button
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                asChild
              >
                <Link href="/signup">Join Now</Link>
              </Button>
            </div>
            <MobileNav />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="container mx-auto text-center max-w-6xl">
          <Badge className="mb-4 sm:mb-6 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border-blue-200 px-4 py-2 text-sm font-medium">
            🌟 Honest voices. Real workplaces.
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
            Fight workplace{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">injustice</span>{" "}
            with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              transparency
            </span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-6 sm:mb-8 leading-relaxed max-w-4xl mx-auto">
            Report salary delays, harassment, and workplace abuse anonymously. Hold companies accountable through public
            transparency. Get support from legal aid and community resources across Pakistan, India, and Bangladesh.
          </p>
          <div className="max-w-2xl mx-auto mb-6 sm:mb-8">
            <SearchBar />
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
              <Shield className="w-4 h-4 text-green-600" />
              <span className="font-medium">Anonymous Reporting</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
              <CheckCircle className="w-4 h-4 text-blue-600" />
              <span className="font-medium">Verified Issues</span>
            </div>
            <div className="flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-full">
              <Users className="w-4 h-4 text-purple-600" />
              <span className="font-medium">Legal Support Network</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-white border-y">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-red-50 to-red-100">
              <div className="text-2xl sm:text-3xl font-bold text-red-600 mb-2">1,200+</div>
              <div className="text-sm sm:text-base text-slate-700 font-medium">Salary Issues Reported</div>
            </div>
            <div className="p-4 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100">
              <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-2">850+</div>
              <div className="text-sm sm:text-base text-slate-700 font-medium">Harassment Cases</div>
            </div>
            <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">2,500+</div>
              <div className="text-sm sm:text-base text-slate-700 font-medium">Companies Monitored</div>
            </div>
            <div className="p-4 rounded-2xl bg-gradient-to-br from-green-50 to-green-100">
              <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">150+</div>
              <div className="text-sm sm:text-base text-slate-700 font-medium">Issues Resolved</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Everything you need to make informed decisions
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
              Our platform provides comprehensive workplace insights with verified information and community support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-blue-100 hover:scale-105">
              <CardHeader className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg sm:text-xl text-slate-900">Verified Reviews</CardTitle>
                <CardDescription className="text-sm sm:text-base text-slate-700">
                  Upload proof documents to get verified badges and build trust in the community.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-green-50 to-green-100 hover:scale-105">
              <CardHeader className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg sm:text-xl text-slate-900">Anonymous Options</CardTitle>
                <CardDescription className="text-sm sm:text-base text-slate-700">
                  Share your experiences safely with full anonymity while maintaining verification.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-purple-100 hover:scale-105">
              <CardHeader className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg sm:text-xl text-slate-900">Q&A Community</CardTitle>
                <CardDescription className="text-sm sm:text-base text-slate-700">
                  Ask questions and get answers from current and former employees about workplace culture.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-orange-50 to-orange-100 hover:scale-105">
              <CardHeader className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg sm:text-xl text-slate-900">Positive Stories</CardTitle>
                <CardDescription className="text-sm sm:text-base text-slate-700">
                  Read inspiring success stories and positive experiences from employees.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-red-50 to-red-100 hover:scale-105">
              <CardHeader className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg sm:text-xl text-slate-900">Company Pages</CardTitle>
                <CardDescription className="text-sm sm:text-base text-slate-700">
                  Comprehensive company profiles with reviews, ratings, and employer responses.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-teal-50 to-teal-100 hover:scale-105">
              <CardHeader className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg sm:text-xl text-slate-900">Salary Insights</CardTitle>
                <CardDescription className="text-sm sm:text-base text-slate-700">
                  Get real salary data and payment issue reports with verified documentation.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Companies */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Featured Companies</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Explore verified reviews and workplace insights from top companies across South Asia. These companies have
              active employee discussions and transparent workplace information.
            </p>
          </div>
          <FeaturedCompanies />
        </div>
      </section>

      {/* Recent Reports */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Recent Workplace Issues</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Latest verified reports from employees fighting workplace injustice and sharing their experiences
            </p>
          </div>
          <RecentReports />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10 max-w-4xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Ready to share your workplace truth?</h2>
          <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Join thousands of professionals making workplaces more transparent and accountable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto bg-white text-blue-600 hover:bg-blue-50"
              asChild
            >
              <Link href="/write-review">Write a Review</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent w-full sm:w-auto"
              asChild
            >
              <Link href="/companies">Browse Companies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="sm:col-span-2 md:col-span-1">
              <Logo variant="dark" />
              <p className="text-slate-400 mb-4 text-sm sm:text-base">
                Honest voices. Real workplaces. Making career decisions transparent across South Asia.
              </p>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Globe className="w-4 h-4" />
                Pakistan • India • Bangladesh
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <Link href="/companies" className="hover:text-white transition-colors">
                    Companies
                  </Link>
                </li>
                <li>
                  <Link href="/reviews" className="hover:text-white transition-colors">
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link href="/qa" className="hover:text-white transition-colors">
                    Q&A
                  </Link>
                </li>
                <li>
                  <Link href="/stories" className="hover:text-white transition-colors">
                    Stories
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <Link href="/help" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/guidelines" className="hover:text-white transition-colors">
                    Community Guidelines
                  </Link>
                </li>
                <li>
                  <Link href="/verification" className="hover:text-white transition-colors">
                    Verification Process
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/disclaimer" className="hover:text-white transition-colors">
                    Disclaimer
                  </Link>
                </li>
                <li>
                  <Link href="/takedown" className="hover:text-white transition-colors">
                    Takedown Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-slate-400 text-sm">
            <p>
              &copy; 2025 TrueWorkHQ. All rights reserved. Reviews are personal opinions and do not guarantee accuracy.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
