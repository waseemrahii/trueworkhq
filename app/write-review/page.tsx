"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Star, Upload, Eye, EyeOff, Shield } from "lucide-react"
import Link from "next/link"
import { Logo } from "@/components/logo"

export default function WriteReviewPage() {
  const [rating, setRating] = useState(0)
  const [isAnonymous, setIsAnonymous] = useState(false)
  const [proofFiles, setProofFiles] = useState<File[]>([])

  const handleStarClick = (starRating: number) => {
    setRating(starRating)
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setProofFiles(Array.from(e.target.files))
    }
  }

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
              <Link href="/community" className="text-slate-600 hover:text-blue-600 transition-colors">
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
                <Link href="/signup">Join Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Write a Review</h1>
          <p className="text-slate-600">Share your workplace experience to help others make informed decisions</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Company Review</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <form className="space-y-6">
              {/* Company Selection */}
              <div>
                <Label htmlFor="company">Company *</Label>
                <Select>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Search and select company" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="techcorp">TechCorp Pakistan</SelectItem>
                    <SelectItem value="infosys">InfoSys India</SelectItem>
                    <SelectItem value="datasoft">DataSoft Bangladesh</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Overall Rating */}
              <div>
                <Label>Overall Rating *</Label>
                <div className="flex items-center gap-2 mt-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleStarClick(star)}
                      className="focus:outline-none"
                    >
                      <Star
                        className={`w-8 h-8 ${
                          star <= rating ? "text-yellow-400 fill-current" : "text-slate-300"
                        } hover:text-yellow-400 transition-colors`}
                      />
                    </button>
                  ))}
                  <span className="ml-2 text-slate-600">
                    {rating > 0 && (
                      <>
                        {rating} star{rating !== 1 ? "s" : ""}
                      </>
                    )}
                  </span>
                </div>
              </div>

              {/* Review Title */}
              <div>
                <Label htmlFor="title">Review Title *</Label>
                <Input id="title" placeholder="Summarize your experience in one line" className="mt-2" />
              </div>

              {/* Review Content */}
              <div>
                <Label htmlFor="content">Your Review *</Label>
                <Textarea
                  id="content"
                  placeholder="Share your detailed experience working at this company. Include information about work culture, management, growth opportunities, work-life balance, etc."
                  className="mt-2 min-h-[150px]"
                />
              </div>

              {/* Employment Details */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="position">Your Position</Label>
                  <Input id="position" placeholder="e.g., Software Engineer" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="department">Department</Label>
                  <Select>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="engineering">Engineering</SelectItem>
                      <SelectItem value="product">Product</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="sales">Sales</SelectItem>
                      <SelectItem value="hr">Human Resources</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="operations">Operations</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="duration">How long did you work there?</Label>
                  <Select>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Work duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="less-than-3-months">Less than 3 months</SelectItem>
                      <SelectItem value="3-6-months">3-6 months</SelectItem>
                      <SelectItem value="6-12-months">6-12 months</SelectItem>
                      <SelectItem value="1-2-years">1-2 years</SelectItem>
                      <SelectItem value="2-5-years">2-5 years</SelectItem>
                      <SelectItem value="5-plus-years">5+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="employment-type">Employment Type</Label>
                  <Select>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-time">Full-time</SelectItem>
                      <SelectItem value="part-time">Part-time</SelectItem>
                      <SelectItem value="contract">Contract</SelectItem>
                      <SelectItem value="internship">Internship</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Proof Upload */}
              <div>
                <Label>Upload Proof (Optional)</Label>
                <div className="mt-2 border-2 border-dashed border-slate-300 rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                  <p className="text-sm text-slate-600 mb-2">
                    Upload documents to verify your employment (offer letter, ID card, etc.)
                  </p>
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="proof-upload"
                  />
                  <Button variant="outline" asChild>
                    <label htmlFor="proof-upload" className="cursor-pointer">
                      Choose Files
                    </label>
                  </Button>
                </div>
                {proofFiles.length > 0 && (
                  <div className="mt-2 space-y-1">
                    {proofFiles.map((file, index) => (
                      <div key={index} className="text-sm text-slate-600 flex items-center gap-2">
                        <Shield className="w-4 h-4 text-green-600" />
                        {file.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Anonymous Option */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Checkbox id="anonymous" checked={isAnonymous} onCheckedChange={setIsAnonymous} />
                  <Label htmlFor="anonymous" className="flex items-center gap-2 font-medium">
                    {isAnonymous ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    Post anonymously
                  </Label>
                </div>
                <p className="text-sm text-slate-600">
                  Your name and profile will be hidden from public view, but your review will still be verified.
                </p>
              </div>

              {/* Submit Button */}
              <div className="flex gap-4">
                <Button className="flex-1">Submit Review</Button>
                <Button variant="outline">Save Draft</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
