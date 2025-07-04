"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  CheckCircle,
  Eye,
  EyeOff,
  ThumbsUp,
  MessageSquare,
  Flag,
  Shield,
  Star,
  Send,
  MoreHorizontal,
} from "lucide-react"
import Link from "next/link"

interface Comment {
  id: number
  author: string
  authorImage: string
  content: string
  timeAgo: string
  isAnonymous: boolean
  likes: number
}

interface ReviewCardProps {
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
  }
  showCompanyName?: boolean
}

export function ReviewCard({ review, showCompanyName = false }: ReviewCardProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(review.supportCount)
  const [showComments, setShowComments] = useState(false)
  const [newComment, setNewComment] = useState("")
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: "HR Professional",
      authorImage: "/placeholder.svg?height=32&width=32",
      content: "Thank you for sharing this. Have you tried contacting the labor department?",
      timeAgo: "2 hours ago",
      isAnonymous: false,
      likes: 3,
    },
    {
      id: 2,
      author: "Anonymous",
      authorImage: "/placeholder.svg?height=32&width=32",
      content: "I'm facing similar issues at my company. This gives me courage to speak up.",
      timeAgo: "1 day ago",
      isAnonymous: true,
      likes: 8,
    },
  ])

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1)
  }

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment: Comment = {
        id: comments.length + 1,
        author: "You",
        authorImage: "/placeholder.svg?height=32&width=32",
        content: newComment,
        timeAgo: "Just now",
        isAnonymous: false,
        likes: 0,
      }
      setComments([...comments, comment])
      setNewComment("")
    }
  }

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

  return (
    <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500">
      <CardContent className="p-6">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <Avatar className="w-12 h-12">
            <img
              src={review.isAnonymous ? "/placeholder.svg?height=48&width=48" : review.authorImage}
              alt={review.isAnonymous ? "Anonymous user" : review.author}
              className="w-full h-full object-cover"
            />
            <AvatarFallback>{review.isAnonymous ? "?" : review.author.charAt(0)}</AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <div className="flex items-center gap-1">
                {review.isAnonymous ? (
                  <EyeOff className="w-4 h-4 text-slate-400" />
                ) : (
                  <Eye className="w-4 h-4 text-slate-400" />
                )}
                <span className="font-semibold text-slate-900">{review.author}</span>
              </div>
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

            <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
              <span>{review.department}</span>
              {review.employmentType && (
                <>
                  <span>•</span>
                  <span>{review.employmentType}</span>
                </>
              )}
              {review.workDuration && (
                <>
                  <span>•</span>
                  <span>{review.workDuration}</span>
                </>
              )}
              <span>•</span>
              <span>{review.timeAgo}</span>
            </div>

            {showCompanyName && review.companyName && (
              <Link
                href={`/company/${review.companyId}`}
                className="text-blue-600 hover:text-blue-800 font-medium text-sm mb-2 inline-block"
              >
                {review.companyName} • {review.location}
              </Link>
            )}
          </div>

          <div className="flex items-center gap-2">
            {review.rating && (
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < review.rating! ? "text-yellow-400 fill-current" : "text-slate-300"}`}
                  />
                ))}
              </div>
            )}
            <Button variant="ghost" size="sm">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Issue Type and Severity */}
        {review.issueType && (
          <div className="flex items-center gap-2 mb-3">
            <Badge className={getSeverityColor(review.severity)}>{review.issueType}</Badge>
            {review.severity && <Badge className={getSeverityColor(review.severity)}>{review.severity}</Badge>}
            {review.status && <Badge className={getStatusColor(review.status)}>{review.status}</Badge>}
          </div>
        )}

        {/* Content */}
        <div className="mb-4">
          <h3 className="font-semibold text-slate-900 mb-2 text-lg">{review.title}</h3>
          <p className="text-slate-700 leading-relaxed">{review.content}</p>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLike}
              className={`hover:bg-blue-50 ${isLiked ? "text-blue-600 bg-blue-50" : "text-slate-600"}`}
            >
              <ThumbsUp className={`w-4 h-4 mr-2 ${isLiked ? "fill-current" : ""}`} />
              Support ({likeCount})
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowComments(!showComments)}
              className="hover:bg-green-50 text-slate-600"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Comment ({comments.length})
            </Button>
            <Button variant="ghost" size="sm" className="hover:bg-red-50 text-slate-600">
              <Flag className="w-4 h-4 mr-2" />
              Report
            </Button>
          </div>
        </div>

        {/* Comments Section */}
        {showComments && (
          <div className="mt-6 pt-4 border-t space-y-4">
            {/* Add Comment */}
            <div className="flex gap-3">
              <Avatar className="w-8 h-8">
                <AvatarFallback>Y</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <Textarea
                  placeholder="Add a supportive comment..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="min-h-[80px] resize-none"
                />
                <div className="flex justify-end mt-2">
                  <Button size="sm" onClick={handleAddComment} disabled={!newComment.trim()}>
                    <Send className="w-4 h-4 mr-2" />
                    Comment
                  </Button>
                </div>
              </div>
            </div>

            {/* Comments List */}
            <div className="space-y-4">
              {comments.map((comment) => (
                <div key={comment.id} className="flex gap-3">
                  <Avatar className="w-8 h-8">
                    <img
                      src={comment.authorImage || "/placeholder.svg"}
                      alt={comment.author}
                      className="w-full h-full object-cover"
                    />
                    <AvatarFallback>{comment.isAnonymous ? "?" : comment.author.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="bg-slate-50 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-sm text-slate-900">{comment.author}</span>
                        <span className="text-xs text-slate-500">{comment.timeAgo}</span>
                      </div>
                      <p className="text-sm text-slate-700">{comment.content}</p>
                    </div>
                    <div className="flex items-center gap-4 mt-2">
                      <Button variant="ghost" size="sm" className="text-xs h-6 px-2">
                        <ThumbsUp className="w-3 h-3 mr-1" />
                        {comment.likes}
                      </Button>
                      <Button variant="ghost" size="sm" className="text-xs h-6 px-2">
                        Reply
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
