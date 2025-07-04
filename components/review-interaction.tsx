"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  Share2,
  Flag,
  Send,
  Heart,
  MoreHorizontal,
  Eye,
  EyeOff,
} from "lucide-react"

interface Reply {
  id: number
  author: string
  authorImage: string
  content: string
  timeAgo: string
  isAnonymous: boolean
  likes: number
  dislikes: number
  isLiked: boolean
  isDisliked: boolean
}

interface Comment {
  id: number
  author: string
  authorImage: string
  content: string
  timeAgo: string
  isAnonymous: boolean
  likes: number
  dislikes: number
  replies: Reply[]
  isLiked: boolean
  isDisliked: boolean
}

interface ReviewInteractionProps {
  reviewId: number
  initialLikes: number
  initialDislikes: number
  initialComments: Comment[]
}

export function ReviewInteraction({
  reviewId,
  initialLikes,
  initialDislikes,
  initialComments,
}: ReviewInteractionProps) {
  const [likes, setLikes] = useState(initialLikes)
  const [dislikes, setDislikes] = useState(initialDislikes)
  const [isLiked, setIsLiked] = useState(false)
  const [isDisliked, setIsDisliked] = useState(false)
  const [showComments, setShowComments] = useState(false)
  const [comments, setComments] = useState<Comment[]>(initialComments)
  const [newComment, setNewComment] = useState("")
  const [replyingTo, setReplyingTo] = useState<number | null>(null)
  const [newReply, setNewReply] = useState("")

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1)
      setIsLiked(false)
    } else {
      setLikes(likes + 1)
      setIsLiked(true)
      if (isDisliked) {
        setDislikes(dislikes - 1)
        setIsDisliked(false)
      }
    }
  }

  const handleDislike = () => {
    if (isDisliked) {
      setDislikes(dislikes - 1)
      setIsDisliked(false)
    } else {
      setDislikes(dislikes + 1)
      setIsDisliked(true)
      if (isLiked) {
        setLikes(likes - 1)
        setIsLiked(false)
      }
    }
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
        dislikes: 0,
        replies: [],
        isLiked: false,
        isDisliked: false,
      }
      setComments([...comments, comment])
      setNewComment("")
    }
  }

  const handleAddReply = (commentId: number) => {
    if (newReply.trim()) {
      const reply: Reply = {
        id: Date.now(),
        author: "You",
        authorImage: "/placeholder.svg?height=32&width=32",
        content: newReply,
        timeAgo: "Just now",
        isAnonymous: false,
        likes: 0,
        dislikes: 0,
        isLiked: false,
        isDisliked: false,
      }

      setComments(
        comments.map((comment) =>
          comment.id === commentId ? { ...comment, replies: [...comment.replies, reply] } : comment,
        ),
      )
      setNewReply("")
      setReplyingTo(null)
    }
  }

  const handleCommentLike = (commentId: number) => {
    setComments(
      comments.map((comment) =>
        comment.id === commentId
          ? {
              ...comment,
              likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
              dislikes: comment.isDisliked ? comment.dislikes - 1 : comment.dislikes,
              isLiked: !comment.isLiked,
              isDisliked: false,
            }
          : comment,
      ),
    )
  }

  const handleCommentDislike = (commentId: number) => {
    setComments(
      comments.map((comment) =>
        comment.id === commentId
          ? {
              ...comment,
              dislikes: comment.isDisliked ? comment.dislikes - 1 : comment.dislikes + 1,
              likes: comment.isLiked ? comment.likes - 1 : comment.likes,
              isDisliked: !comment.isDisliked,
              isLiked: false,
            }
          : comment,
      ),
    )
  }

  return (
    <div className="space-y-4">
      {/* Main Actions */}
      <div className="flex items-center justify-between pt-4 border-t">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLike}
            className={`hover:bg-green-50 ${isLiked ? "text-green-600 bg-green-50" : "text-slate-600"}`}
          >
            <ThumbsUp className={`w-4 h-4 mr-2 ${isLiked ? "fill-current" : ""}`} />
            {likes}
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={handleDislike}
            className={`hover:bg-red-50 ${isDisliked ? "text-red-600 bg-red-50" : "text-slate-600"}`}
          >
            <ThumbsDown className={`w-4 h-4 mr-2 ${isDisliked ? "fill-current" : ""}`} />
            {dislikes}
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowComments(!showComments)}
            className="hover:bg-blue-50 text-slate-600"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            {comments.length} Comments
          </Button>

          <Button variant="ghost" size="sm" className="hover:bg-purple-50 text-slate-600">
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hover:bg-orange-50 text-slate-600">
            <Heart className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="hover:bg-red-50 text-slate-600">
            <Flag className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Comments Section */}
      {showComments && (
        <div className="space-y-4 pl-4 border-l-2 border-slate-100">
          {/* Add Comment */}
          <div className="flex gap-3">
            <Avatar className="w-8 h-8">
              <AvatarFallback>Y</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <Textarea
                placeholder="Add a thoughtful comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="min-h-[80px] resize-none"
              />
              <div className="flex justify-between items-center mt-2">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Eye className="w-3 h-3" />
                  <span>Public comment</span>
                </div>
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
              <div key={comment.id} className="space-y-3">
                <div className="flex gap-3">
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
                        <div className="flex items-center gap-1">
                          {comment.isAnonymous ? (
                            <EyeOff className="w-3 h-3 text-slate-400" />
                          ) : (
                            <Eye className="w-3 h-3 text-slate-400" />
                          )}
                          <span className="font-medium text-sm text-slate-900">{comment.author}</span>
                        </div>
                        <span className="text-xs text-slate-500">{comment.timeAgo}</span>
                      </div>
                      <p className="text-sm text-slate-700">{comment.content}</p>
                    </div>

                    {/* Comment Actions */}
                    <div className="flex items-center gap-4 mt-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-xs h-6 px-2"
                        onClick={() => handleCommentLike(comment.id)}
                      >
                        <ThumbsUp className={`w-3 h-3 mr-1 ${comment.isLiked ? "fill-current text-green-600" : ""}`} />
                        {comment.likes}
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-xs h-6 px-2"
                        onClick={() => handleCommentDislike(comment.id)}
                      >
                        <ThumbsDown
                          className={`w-3 h-3 mr-1 ${comment.isDisliked ? "fill-current text-red-600" : ""}`}
                        />
                        {comment.dislikes}
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-xs h-6 px-2"
                        onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                      >
                        Reply
                      </Button>
                    </div>

                    {/* Reply Input */}
                    {replyingTo === comment.id && (
                      <div className="flex gap-2 mt-3">
                        <Avatar className="w-6 h-6">
                          <AvatarFallback className="text-xs">Y</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <Textarea
                            placeholder="Write a reply..."
                            value={newReply}
                            onChange={(e) => setNewReply(e.target.value)}
                            className="min-h-[60px] resize-none text-sm"
                          />
                          <div className="flex justify-end gap-2 mt-2">
                            <Button variant="ghost" size="sm" onClick={() => setReplyingTo(null)}>
                              Cancel
                            </Button>
                            <Button size="sm" onClick={() => handleAddReply(comment.id)} disabled={!newReply.trim()}>
                              Reply
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Replies */}
                    {comment.replies.length > 0 && (
                      <div className="ml-4 mt-3 space-y-3 border-l-2 border-slate-100 pl-3">
                        {comment.replies.map((reply) => (
                          <div key={reply.id} className="flex gap-2">
                            <Avatar className="w-6 h-6">
                              <img
                                src={reply.authorImage || "/placeholder.svg"}
                                alt={reply.author}
                                className="w-full h-full object-cover"
                              />
                              <AvatarFallback className="text-xs">
                                {reply.isAnonymous ? "?" : reply.author.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="bg-white border rounded-lg p-2">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="font-medium text-xs text-slate-900">{reply.author}</span>
                                  <span className="text-xs text-slate-500">{reply.timeAgo}</span>
                                </div>
                                <p className="text-xs text-slate-700">{reply.content}</p>
                              </div>
                              <div className="flex items-center gap-3 mt-1">
                                <Button variant="ghost" size="sm" className="text-xs h-5 px-1">
                                  <ThumbsUp className="w-2 h-2 mr-1" />
                                  {reply.likes}
                                </Button>
                                <Button variant="ghost" size="sm" className="text-xs h-5 px-1">
                                  <ThumbsDown className="w-2 h-2 mr-1" />
                                  {reply.dislikes}
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
