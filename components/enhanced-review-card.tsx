"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  CheckCircle,
  Eye,
  EyeOff,
  Shield,
  Star,
  MoreHorizontal,
  MapPin,
  Calendar,
  Briefcase,
  Clock,
} from "lucide-react"
import Link from "next/link"
import { ReviewInteraction } from "./review-interaction"

interface EnhancedReviewCardProps {
  review: {
    id: number
    rating?: number
    issueType?: string
    severity?: string
    title: string
    content: string
    author: string
    authorImage: string
    department: string
    isAnonymous: boolean
    isVerified: boolean
    timeAgo: string
    supportCount: number
    employmentType?: string
    workDuration?: string
    status?: string
    proofUploaded?: boolean
    companyName?: string
    companyId?: number
    location?: string
    pros?: string[]
    cons?: string[]
    advice?: string
    salaryInfo?: {
      range: string
      currency: string
      benefits: string[]
    }
  }
  showCompanyName?: boolean
}

export function EnhancedReviewCard({ review, showCompanyName = false }: EnhancedReviewCardProps) {
  const [showFullContent, setShowFullContent] = useState(false)

  const getSeverityColor = (severity?: string) => {
    switch (severity) {
      case "Critical":
        return "bg-red-100 text-red-800 border-red-200"
      case "High":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "Medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      default:
        return "bg-slate-100 text-slate-800 border-slate-200"
    }
  }

  const getStatusColor = (status?: string) => {
    switch (status) {
      case "Legal Aid Provided":
        return "bg-green-100 text-green-800 border-green-200"
      case "Under Investigation":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "Community Support":
        return "bg-purple-100 text-purple-800 border-purple-200"
      default:
        return "bg-slate-100 text-slate-800 border-slate-200"
    }
  }

  const truncatedContent = review.content.length > 200 ? review.content.substring(0, 200) + "..." : review.content

  return (
    <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500">
      <CardContent className="p-3 sm:p-4 md:p-6">
        {/* Header */}
        <div className="flex gap-3 mb-4">
          <Avatar className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
            <img
              src={
                review.isAnonymous
                  ? `https://ui-avatars.com/api/?name=Anonymous&size=48&background=6b7280&color=ffffff`
                  : `https://ui-avatars.com/api/?name=${encodeURIComponent(review.author)}&size=48&background=3b82f6&color=ffffff`
              }
              alt={review.isAnonymous ? "Anonymous user" : review.author}
              className="w-full h-full object-cover"
            />
            <AvatarFallback>{review.isAnonymous ? "?" : review.author.charAt(0)}</AvatarFallback>
          </Avatar>

          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
              <div className="flex items-center gap-2">
                {review.isAnonymous ? (
                  <EyeOff className="w-4 h-4 text-slate-400" />
                ) : (
                  <Eye className="w-4 h-4 text-slate-400" />
                )}
                <span className="font-semibold text-slate-900 text-sm sm:text-base">{review.author}</span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {review.isVerified && (
                  <Badge variant="secondary" className="text-xs bg-green-50 text-green-700 border-green-200">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Verified
                  </Badge>
                )}
                {review.proofUploaded && (
                  <Badge variant="secondary" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                    <Shield className="w-3 h-3 mr-1" />
                    Proof
                  </Badge>
                )}
              </div>
            </div>

            {/* Employment Info */}
            <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-xs sm:text-sm text-slate-500 mb-2">
              <div className="flex items-center gap-1">
                <Briefcase className="w-3 h-3" />
                <span>{review.department}</span>
              </div>
              {review.employmentType && (
                <>
                  <span className="hidden sm:inline">•</span>
                  <span>{review.employmentType}</span>
                </>
              )}
              {review.workDuration && (
                <>
                  <span className="hidden sm:inline">•</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{review.workDuration}</span>
                  </div>
                </>
              )}
              <span className="hidden sm:inline">•</span>
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>{review.timeAgo}</span>
              </div>
            </div>

            {showCompanyName && review.companyName && (
              <Link
                href={`/company/${review.companyId}`}
                className="text-blue-600 hover:text-blue-800 font-medium text-sm mb-2 inline-flex items-center gap-1"
              >
                <MapPin className="w-3 h-3" />
                {review.companyName} • {review.location}
              </Link>
            )}
          </div>

          <div className="flex flex-col items-end gap-2">
            {review.rating && (
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 sm:w-4 sm:h-4 ${i < review.rating! ? "text-yellow-400 fill-current" : "text-slate-300"}`}
                  />
                ))}
              </div>
            )}
            <Button variant="ghost" size="sm" className="p-1">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Issue Type and Severity */}
        {review.issueType && (
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge className={getSeverityColor(review.severity)}>{review.issueType}</Badge>
            {review.severity && <Badge className={getSeverityColor(review.severity)}>{review.severity}</Badge>}
            {review.status && <Badge className={getStatusColor(review.status)}>{review.status}</Badge>}
          </div>
        )}

        {/* Content */}
        <div className="mb-4">
          <h3 className="font-semibold text-slate-900 mb-3 text-base sm:text-lg leading-tight">{review.title}</h3>
          <div className="prose prose-sm max-w-none">
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
              {showFullContent ? review.content : truncatedContent}
            </p>
            {review.content.length > 200 && (
              <button
                onClick={() => setShowFullContent(!showFullContent)}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-2"
              >
                {showFullContent ? "Show less" : "Read more"}
              </button>
            )}
          </div>
        </div>

        {/* Pros and Cons */}
        {(review.pros || review.cons) && (
          <div className="grid gap-3 sm:grid-cols-2 mb-4">
            {review.pros && review.pros.length > 0 && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <h4 className="font-medium text-green-800 mb-2 text-sm">👍 Pros</h4>
                <ul className="space-y-1">
                  {review.pros.map((pro, index) => (
                    <li key={index} className="text-sm text-green-700">
                      • {pro}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {review.cons && review.cons.length > 0 && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <h4 className="font-medium text-red-800 mb-2 text-sm">👎 Cons</h4>
                <ul className="space-y-1">
                  {review.cons.map((con, index) => (
                    <li key={index} className="text-sm text-red-700">
                      • {con}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Salary Information */}
        {review.salaryInfo && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
            <h4 className="font-medium text-blue-800 mb-2 text-sm">💰 Salary & Benefits</h4>
            <div className="text-sm text-blue-700">
              <p className="font-medium">
                {review.salaryInfo.range} {review.salaryInfo.currency}
              </p>
              {review.salaryInfo.benefits.length > 0 && (
                <div className="mt-2">
                  <span className="font-medium">Benefits: </span>
                  {review.salaryInfo.benefits.join(", ")}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Advice */}
        {review.advice && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
            <h4 className="font-medium text-yellow-800 mb-2 text-sm">💡 Advice to Management</h4>
            <p className="text-sm text-yellow-700">{review.advice}</p>
          </div>
        )}

        {/* Review Interactions */}
        <ReviewInteraction
          reviewId={review.id}
          initialLikes={review.supportCount}
          initialDislikes={Math.floor(review.supportCount * 0.1)}
          initialComments={[
            {
              id: 1,
              author: "HR Professional",
              authorImage: "https://ui-avatars.com/api/?name=HR+Professional&size=32&background=10b981&color=ffffff",
              content: "Thank you for sharing this feedback. We take all concerns seriously.",
              timeAgo: "2 hours ago",
              isAnonymous: false,
              likes: 3,
              dislikes: 0,
              replies: [],
              isLiked: false,
              isDisliked: false,
            },
            {
              id: 2,
              author: "Anonymous Employee",
              authorImage: "https://ui-avatars.com/api/?name=Anonymous&size=32&background=6b7280&color=ffffff",
              content: "I'm facing similar issues. Thanks for speaking up!",
              timeAgo: "1 day ago",
              isAnonymous: true,
              likes: 8,
              dislikes: 1,
              replies: [
                {
                  id: 1,
                  author: "Support Team",
                  authorImage: "https://ui-avatars.com/api/?name=Support+Team&size=32&background=3b82f6&color=ffffff",
                  content: "Please reach out to us directly for assistance.",
                  timeAgo: "1 day ago",
                  isAnonymous: false,
                  likes: 2,
                  dislikes: 0,
                  isLiked: false,
                  isDisliked: false,
                },
              ],
              isLiked: false,
              isDisliked: false,
            },
          ]}
        />
      </CardContent>
    </Card>
  )
}
