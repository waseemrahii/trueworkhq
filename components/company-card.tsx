import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Users, MapPin, CheckCircle, Globe, Calendar, TrendingUp, AlertTriangle } from "lucide-react"
import Link from "next/link"

interface CompanyCardProps {
  company: {
    id: number
    name: string
    logo: string
    coverImage?: string
    industry: string
    location: string
    rating: number
    reviewCount: number
    employeeCount: string
    verified: boolean
    description: string
    founded: string
    website: string
    totalIssues: number
    resolvedIssues: number
    recentActivity: string
    salaryRange?: string
    benefits?: string[]
    workCulture?: string
  }
}

export function CompanyCard({ company }: CompanyCardProps) {
  const issueResolutionRate =
    company.totalIssues > 0 ? Math.round((company.resolvedIssues / company.totalIssues) * 100) : 0

  return (
    <Link href={`/company/${company.id}`} className="block">
      <Card className="hover:shadow-2xl transition-all duration-300 cursor-pointer h-full overflow-hidden group border-0 bg-white shadow-lg hover:scale-[1.02]">
        {/* Cover Image */}
        <div className="relative h-24 sm:h-32 overflow-hidden">
          <img
            src={company.coverImage || "/placeholder.svg"}
            alt={`${company.name} cover`}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

          {/* Company Stats Overlay */}
          <div className="absolute top-3 right-3 flex flex-col gap-2">
            <Badge className="bg-white/95 text-slate-800 text-xs px-3 py-1 font-medium shadow-sm">
              {company.reviewCount} reviews
            </Badge>
            {company.verified && (
              <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs px-3 py-1 shadow-sm">
                <CheckCircle className="w-3 h-3 mr-1" />
                Verified
              </Badge>
            )}
          </div>
        </div>

        <CardContent className="p-4 sm:p-5 -mt-8 relative">
          <div className="flex items-start gap-4 mb-4">
            <div className="relative flex-shrink-0">
              <img
                src={company.logo || "/placeholder.svg"}
                alt={`${company.name} logo`}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl object-cover border-4 border-white shadow-lg bg-white"
              />
              {company.verified && (
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full border-3 border-white flex items-center justify-center shadow-sm">
                  <CheckCircle className="w-3 h-3 text-white" />
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0 mt-2">
              <h3 className="font-bold text-slate-900 text-base sm:text-lg mb-2 line-clamp-1">{company.name}</h3>
              <p className="text-sm text-slate-600 mb-3 line-clamp-2 leading-relaxed">{company.description}</p>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span className="truncate font-medium">{company.location}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {/* Rating and Industry */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="font-bold text-slate-900 text-sm">{company.rating}</span>
                </div>
                <span className="text-xs text-slate-500">({company.reviewCount} reviews)</span>
              </div>
              <Badge variant="secondary" className="text-xs px-3 py-1 bg-blue-50 text-blue-700 border-blue-200">
                {company.industry}
              </Badge>
            </div>

            {/* Company Details Grid */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="flex items-center gap-2 text-slate-600">
                <Users className="w-3 h-3 flex-shrink-0" />
                <span className="truncate font-medium">{company.employeeCount}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Calendar className="w-3 h-3 flex-shrink-0" />
                <span className="font-medium">Est. {company.founded}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Globe className="w-3 h-3 flex-shrink-0" />
                <span className="truncate font-medium">Website</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <TrendingUp className="w-3 h-3 flex-shrink-0" />
                <span className="font-medium">{issueResolutionRate}% resolved</span>
              </div>
            </div>

            {/* Salary Range */}
            {company.salaryRange && (
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-3">
                <div className="text-xs font-semibold text-green-800 mb-1">💰 Salary Range</div>
                <div className="text-sm font-bold text-green-900">{company.salaryRange}</div>
              </div>
            )}

            {/* Work Culture */}
            {company.workCulture && (
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-3">
                <div className="text-xs font-semibold text-blue-800 mb-1">🏢 Work Culture</div>
                <div className="text-xs text-blue-900 line-clamp-2 leading-relaxed">{company.workCulture}</div>
              </div>
            )}

            {/* Issues Status */}
            <div className="flex items-center justify-between pt-3 border-t border-slate-100">
              <div className="flex items-center gap-2 text-xs">
                <AlertTriangle className="w-3 h-3 text-red-500" />
                <span className="font-semibold text-red-600">{company.totalIssues}</span>
                <span className="text-slate-500 font-medium">issues</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <CheckCircle className="w-3 h-3 text-green-500" />
                <span className="font-semibold text-green-600">{company.resolvedIssues}</span>
                <span className="text-slate-500 font-medium">resolved</span>
              </div>
            </div>

            {/* Benefits Preview */}
            {company.benefits && company.benefits.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {company.benefits.slice(0, 2).map((benefit, index) => (
                  <Badge key={index} variant="outline" className="text-xs px-2 py-1 bg-slate-50 border-slate-200">
                    {benefit}
                  </Badge>
                ))}
                {company.benefits.length > 2 && (
                  <Badge variant="outline" className="text-xs px-2 py-1 bg-slate-50 border-slate-200">
                    +{company.benefits.length - 2} more
                  </Badge>
                )}
              </div>
            )}

            <div className="text-xs text-slate-400 font-medium">Last activity: {company.recentActivity}</div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
