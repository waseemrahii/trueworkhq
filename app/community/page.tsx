"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  MessageSquare,
  ThumbsUp,
  Users,
  Search,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Eye,
  EyeOff,
} from "lucide-react"
import Link from "next/link"
import { Logo } from "@/components/logo"

const discussionTopics = [
  {
    id: 1,
    title: "How to document salary delays for legal action?",
    content:
      "My company has been delaying salaries for 2 months. What kind of documentation should I maintain to build a strong legal case?",
    author: "Anonymous Employee",
    authorImage: "/placeholder.svg?height=40&width=40",
    isAnonymous: true,
    category: "Legal Advice",
    replies: 23,
    upvotes: 45,
    timeAgo: "2 hours ago",
    tags: ["salary-delay", "legal-advice", "documentation"],
    isHot: true,
  },
  {
    id: 2,
    title: "Successfully got 3 months pending salary after reporting",
    content:
      "I reported my company's salary delays on TrueWorkHQ and also contacted legal aid. Within 2 weeks, they cleared all pending amounts. Here's what worked...",
    author: "Software Engineer",
    authorImage: "/placeholder.svg?height=40&width=40",
    isAnonymous: false,
    category: "Success Story",
    replies: 18,
    upvotes: 67,
    timeAgo: "1 day ago",
    tags: ["success-story", "salary-delay", "legal-action"],
    isHot: true,
  },
  {
    id: 3,
    title: "Dealing with workplace harassment - need support",
    content:
      "Facing inappropriate behavior from manager. Feeling scared to report internally. Has anyone dealt with similar situation? What are my options?",
    author: "Anonymous",
    authorImage: "/placeholder.svg?height=40&width=40",
    isAnonymous: true,
    category: "Support Needed",
    replies: 31,
    upvotes: 89,
    timeAgo: "3 hours ago",
    tags: ["harassment", "support", "manager-issues"],
    isHot: true,
  },
  {
    id: 4,
    title: "Labor law rights in Pakistan - comprehensive guide",
    content:
      "Compiled a detailed guide on employee rights under Pakistani labor law. Covers salary, overtime, harassment, termination, and more.",
    author: "Legal Advisor",
    authorImage: "/placeholder.svg?height=40&width=40",
    isAnonymous: false,
    category: "Educational",
    replies: 12,
    upvotes: 156,
    timeAgo: "2 days ago",
    tags: ["labor-law", "pakistan", "employee-rights"],
    isHot: false,
  },
  {
    id: 5,
    title: "How to find good legal aid organizations?",
    content:
      "Looking for reliable legal aid organizations in Karachi that handle workplace disputes. Any recommendations?",
    author: "Marketing Executive",
    authorImage: "/placeholder.svg?height=40&width=40",
    isAnonymous: false,
    category: "Resource Request",
    replies: 8,
    upvotes: 23,
    timeAgo: "1 week ago",
    tags: ["legal-aid", "karachi", "recommendations"],
    isHot: false,
  },
]

const trendingTags = [
  { name: "salary-delay", count: 234, trend: "up" },
  { name: "harassment", count: 156, trend: "up" },
  { name: "legal-advice", count: 189, trend: "stable" },
  { name: "success-story", count: 67, trend: "up" },
  { name: "unpaid-overtime", count: 98, trend: "up" },
  { name: "wrongful-termination", count: 45, trend: "down" },
]

export default function CommunityPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  const filteredDiscussions = discussionTopics.filter((topic) => {
    const matchesSearch =
      topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.content.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTab =
      activeTab === "all" ||
      (activeTab === "hot" && topic.isHot) ||
      (activeTab === "support" && topic.category === "Support Needed") ||
      (activeTab === "success" && topic.category === "Success Story")
    return matchesSearch && matchesTab
  })

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Logo />
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/companies" className="text-slate-600 hover:text-blue-600 transition-colors">
                Companies
              </Link>
              <Link href="/report-issue" className="text-slate-600 hover:text-blue-600 transition-colors">
                Report Issues
              </Link>
              <Link href="/community" className="text-blue-600 font-medium">
                Community
              </Link>
              <Link href="/support" className="text-slate-600 hover:text-blue-600 transition-colors">
                Support & Legal Aid
              </Link>
            </nav>
            <div className="flex items-center space-x-3">
              <Button variant="ghost" asChild>
                <Link href="/login">Sign In</Link>
              </Button>
              <Button asChild>
                <Link href="/report-issue">Report Issue</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Community Discussions</h1>
          <p className="text-slate-600">
            Connect with fellow employees, share experiences, get advice, and support each other in fighting workplace
            injustice.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            {/* Search and Filters */}
            <div className="mb-6">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <Input
                  placeholder="Search discussions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="all">All Discussions</TabsTrigger>
                  <TabsTrigger value="hot">🔥 Hot Topics</TabsTrigger>
                  <TabsTrigger value="support">Need Support</TabsTrigger>
                  <TabsTrigger value="success">Success Stories</TabsTrigger>
                </TabsList>

                <TabsContent value={activeTab} className="mt-6">
                  <div className="space-y-4">
                    {filteredDiscussions.map((topic) => (
                      <Card key={topic.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <Avatar>
                              <AvatarFallback className="bg-slate-100">
                                {topic.isAnonymous ? "?" : topic.author.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <h3 className="font-semibold text-slate-900 hover:text-blue-600 cursor-pointer">
                                  {topic.title}
                                </h3>
                                {topic.isHot && (
                                  <Badge className="bg-red-100 text-red-800 border-red-200">🔥 Hot</Badge>
                                )}
                                <Badge variant="outline" className="text-xs">
                                  {topic.category}
                                </Badge>
                              </div>
                              <p className="text-slate-700 mb-3 line-clamp-2">{topic.content}</p>
                              <div className="flex items-center gap-4 mb-3">
                                <div className="flex items-center gap-1">
                                  {topic.isAnonymous ? (
                                    <EyeOff className="w-4 h-4 text-slate-400" />
                                  ) : (
                                    <Eye className="w-4 h-4 text-slate-400" />
                                  )}
                                  <span className="text-sm text-slate-600">{topic.author}</span>
                                </div>
                                <span className="text-sm text-slate-500">{topic.timeAgo}</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="flex gap-2">
                                  {topic.tags.map((tag) => (
                                    <Badge key={tag} variant="secondary" className="text-xs">
                                      #{tag}
                                    </Badge>
                                  ))}
                                </div>
                                <div className="flex items-center gap-4">
                                  <div className="flex items-center gap-1 text-sm text-slate-500">
                                    <ThumbsUp className="w-4 h-4" />
                                    {topic.upvotes}
                                  </div>
                                  <div className="flex items-center gap-1 text-sm text-slate-500">
                                    <MessageSquare className="w-4 h-4" />
                                    {topic.replies}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Start Discussion */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                  Start Discussion
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-4">
                  Share your experience, ask for advice, or help others in similar situations.
                </p>
                <Button className="w-full">New Discussion</Button>
              </CardContent>
            </Card>

            {/* Trending Tags */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  Trending Topics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {trendingTags.map((tag) => (
                    <div key={tag.name} className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        #{tag.name}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <span className="text-xs text-slate-500">{tag.count}</span>
                        {tag.trend === "up" && <TrendingUp className="w-3 h-3 text-green-600" />}
                        {tag.trend === "down" && <TrendingUp className="w-3 h-3 text-red-600 rotate-180" />}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Community Guidelines */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-600" />
                  Community Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Be Supportive</p>
                    <p className="text-slate-600">Help others facing workplace issues</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Stay Anonymous</p>
                    <p className="text-slate-600">Protect your identity when needed</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Share Resources</p>
                    <p className="text-slate-600">Help others find legal aid and support</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-600 mt-0.5" />
                  <div>
                    <p className="font-medium">No Personal Attacks</p>
                    <p className="text-slate-600">Keep discussions professional</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardContent className="p-4 space-y-3">
                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <Link href="/report-issue">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Report New Issue
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <Link href="/support">
                    <Users className="w-4 h-4 mr-2" />
                    Get Legal Support
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
