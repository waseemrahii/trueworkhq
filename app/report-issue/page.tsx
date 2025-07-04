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
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Upload,
  Eye,
  EyeOff,
  Shield,
  AlertTriangle,
  Phone,
  Mail,
  Building2,
  Search,
  Plus,
  CheckCircle,
  Clock,
} from "lucide-react"
import Link from "next/link"
import { Logo } from "@/components/logo"

const existingCompanies = [
  { id: 1, name: "TechCorp Pakistan", location: "Karachi, Pakistan", verified: true },
  { id: 2, name: "InfoSys India", location: "Bangalore, India", verified: true },
  { id: 3, name: "DataSoft Bangladesh", location: "Dhaka, Bangladesh", verified: false },
  { id: 4, name: "FinanceHub Pakistan", location: "Lahore, Pakistan", verified: true },
  { id: 5, name: "MediaTech India", location: "Mumbai, India", verified: false },
]

export default function ReportIssuePage() {
  const [isAnonymous, setIsAnonymous] = useState(true)
  const [issueType, setIssueType] = useState("")
  const [proofFiles, setProofFiles] = useState<File[]>([])
  const [selectedCompany, setSelectedCompany] = useState("")
  const [showAddCompany, setShowAddCompany] = useState(false)
  const [companySearchQuery, setCompanySearchQuery] = useState("")
  const [newCompanyData, setNewCompanyData] = useState({
    name: "",
    industry: "",
    location: "",
    size: "",
    website: "",
    linkedin: "",
    description: "",
  })

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setProofFiles(Array.from(e.target.files))
    }
  }

  const filteredCompanies = existingCompanies.filter(
    (company) =>
      company.name.toLowerCase().includes(companySearchQuery.toLowerCase()) ||
      company.location.toLowerCase().includes(companySearchQuery.toLowerCase()),
  )

  const issueTypes = [
    { value: "salary-delay", label: "Salary Delay/Non-payment", severity: "High", color: "text-red-600" },
    { value: "harassment", label: "Workplace Harassment", severity: "Critical", color: "text-red-700" },
    { value: "discrimination", label: "Discrimination", severity: "Critical", color: "text-red-700" },
    { value: "unpaid-overtime", label: "Unpaid Overtime", severity: "Medium", color: "text-orange-600" },
    { value: "unsafe-conditions", label: "Unsafe Working Conditions", severity: "High", color: "text-red-600" },
    { value: "contract-violation", label: "Contract Violations", severity: "Medium", color: "text-orange-600" },
    { value: "wrongful-termination", label: "Wrongful Termination", severity: "High", color: "text-red-600" },
    { value: "benefits-denial", label: "Benefits Denial", severity: "Medium", color: "text-orange-600" },
  ]

  const handleNewCompanySubmit = () => {
    // Here you would typically submit the new company data to your backend
    console.log("New company data:", newCompanyData)
    // Show success message and reset form
    alert("New company submitted for verification! You can now report issues for this company.")
    setShowAddCompany(false)
    setSelectedCompany("new-company-pending")
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
              <Link href="/report-issue" className="text-blue-600 font-medium">
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

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Report Workplace Issue</h1>
          <p className="text-slate-600">
            Your voice matters. Report workplace injustice anonymously and help others avoid similar situations.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Tabs defaultValue="report" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="report">Report Issue</TabsTrigger>
                <TabsTrigger value="add-company">Add New Company</TabsTrigger>
              </TabsList>

              <TabsContent value="report">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-red-600" />
                      Report Your Issue
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Emergency Notice */}
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                        <div>
                          <h3 className="font-medium text-red-900 mb-1">Need Immediate Help?</h3>
                          <p className="text-sm text-red-700 mb-2">
                            If you're facing immediate danger or threats, contact emergency services or legal aid
                            immediately.
                          </p>
                          <div className="flex gap-4 text-sm">
                            <div className="flex items-center gap-1">
                              <Phone className="w-3 h-3" />
                              <span>Emergency: 15</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Mail className="w-3 h-3" />
                              <span>Legal Aid: support@trueworkhq.com</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <form className="space-y-6">
                      {/* Company Selection */}
                      <div>
                        <Label htmlFor="company">Company *</Label>
                        <div className="mt-2 space-y-3">
                          {/* Search for existing companies */}
                          <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                            <Input
                              placeholder="Search for your company..."
                              value={companySearchQuery}
                              onChange={(e) => setCompanySearchQuery(e.target.value)}
                              className="pl-10"
                            />
                          </div>

                          {/* Company Results */}
                          {companySearchQuery && (
                            <div className="border rounded-lg max-h-48 overflow-y-auto">
                              {filteredCompanies.length > 0 ? (
                                filteredCompanies.map((company) => (
                                  <div
                                    key={company.id}
                                    className={`p-3 border-b last:border-b-0 cursor-pointer hover:bg-slate-50 ${
                                      selectedCompany === company.id.toString() ? "bg-blue-50 border-blue-200" : ""
                                    }`}
                                    onClick={() => {
                                      setSelectedCompany(company.id.toString())
                                      setCompanySearchQuery(company.name)
                                    }}
                                  >
                                    <div className="flex items-center justify-between">
                                      <div>
                                        <div className="font-medium text-slate-900">{company.name}</div>
                                        <div className="text-sm text-slate-500">{company.location}</div>
                                      </div>
                                      {company.verified && (
                                        <Badge className="bg-green-50 text-green-700 border-green-200">
                                          <CheckCircle className="w-3 h-3 mr-1" />
                                          Verified
                                        </Badge>
                                      )}
                                    </div>
                                  </div>
                                ))
                              ) : (
                                <div className="p-4 text-center">
                                  <Building2 className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                                  <p className="text-slate-500 mb-3">Company not found</p>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => setShowAddCompany(true)}
                                    className="bg-transparent"
                                  >
                                    <Plus className="w-4 h-4 mr-2" />
                                    Add New Company
                                  </Button>
                                </div>
                              )}
                            </div>
                          )}

                          {/* Quick Add Company Button */}
                          <Button
                            type="button"
                            variant="outline"
                            className="w-full bg-transparent border-dashed border-2 border-slate-300 hover:border-blue-400 hover:bg-blue-50"
                            onClick={() => setShowAddCompany(true)}
                          >
                            <Plus className="w-4 h-4 mr-2" />
                            Can't find your company? Add it here
                          </Button>
                        </div>
                      </div>

                      {/* Rest of the form continues... */}
                      {selectedCompany && (
                        <>
                          {/* Issue Type */}
                          <div>
                            <Label>Type of Issue *</Label>
                            <Select value={issueType} onValueChange={setIssueType}>
                              <SelectTrigger className="mt-2">
                                <SelectValue placeholder="Select the type of workplace issue" />
                              </SelectTrigger>
                              <SelectContent>
                                {issueTypes.map((type) => (
                                  <SelectItem key={type.value} value={type.value}>
                                    <div className="flex items-center justify-between w-full">
                                      <span>{type.label}</span>
                                      <Badge
                                        className={`ml-2 text-xs ${
                                          type.severity === "Critical"
                                            ? "bg-red-100 text-red-800"
                                            : type.severity === "High"
                                              ? "bg-orange-100 text-orange-800"
                                              : "bg-yellow-100 text-yellow-800"
                                        }`}
                                      >
                                        {type.severity}
                                      </Badge>
                                    </div>
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>

                          {/* Issue Title */}
                          <div>
                            <Label htmlFor="title">Issue Summary *</Label>
                            <Input id="title" placeholder="Brief summary of your workplace issue" className="mt-2" />
                          </div>

                          {/* Detailed Description */}
                          <div>
                            <Label htmlFor="description">Detailed Description *</Label>
                            <Textarea
                              id="description"
                              placeholder="Provide detailed information about the issue. Include dates, specific incidents, and how it's affecting you. The more details you provide, the better we can help."
                              className="mt-2 min-h-[150px]"
                            />
                            <p className="text-sm text-slate-500 mt-1">
                              Minimum 100 characters. Be specific and factual.
                            </p>
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
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="duration">How long have you worked there?</Label>
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
                              <Label htmlFor="status">Current Employment Status</Label>
                              <Select>
                                <SelectTrigger className="mt-2">
                                  <SelectValue placeholder="Select status" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="current-employee">Current Employee</SelectItem>
                                  <SelectItem value="recently-left">Recently Left (within 6 months)</SelectItem>
                                  <SelectItem value="terminated">Terminated/Fired</SelectItem>
                                  <SelectItem value="resigned">Resigned due to issues</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          {/* Proof Upload */}
                          <div>
                            <Label>Upload Evidence (Highly Recommended)</Label>
                            <div className="mt-2 border-2 border-dashed border-slate-300 rounded-lg p-6 text-center">
                              <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                              <p className="text-sm text-slate-600 mb-2">
                                Upload documents to support your report (contracts, emails, screenshots, bank
                                statements, etc.)
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
                            <p className="text-xs text-slate-500 mt-2">
                              Evidence strengthens your report and helps us verify the issue. All files are kept
                              completely private and secure.
                            </p>
                          </div>

                          {/* Anonymous Reporting */}
                          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <div className="flex items-center space-x-2 mb-2">
                              <Checkbox id="anonymous" checked={isAnonymous} onCheckedChange={setIsAnonymous} />
                              <Label htmlFor="anonymous" className="flex items-center gap-2 font-medium">
                                {isAnonymous ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                Report anonymously (Recommended)
                              </Label>
                            </div>
                            <p className="text-sm text-slate-600">
                              Your identity will be completely hidden from public view and the company. We keep your
                              information secure for verification purposes only.
                            </p>
                          </div>

                          {/* Contact for Follow-up */}
                          <div>
                            <Label htmlFor="contact">Contact Information (Optional)</Label>
                            <Input
                              id="contact"
                              type="email"
                              placeholder="Email for follow-up and support (kept private)"
                              className="mt-2"
                            />
                            <p className="text-sm text-slate-500 mt-1">
                              We may contact you to provide legal aid, support resources, or updates on your case.
                            </p>
                          </div>

                          {/* Submit Buttons */}
                          <div className="flex gap-4">
                            <Button className="flex-1 bg-red-600 hover:bg-red-700">Submit Report</Button>
                            <Button variant="outline">Save Draft</Button>
                          </div>
                        </>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="add-company">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-blue-600" />
                      Add New Company
                    </CardTitle>
                    <p className="text-slate-600">
                      Can't find your company? Add it to our database so you and others can report issues and share
                      reviews.
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Verification Process Info */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h3 className="font-medium text-blue-900 mb-2 flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Company Verification Process
                      </h3>
                      <div className="text-sm text-blue-800 space-y-2">
                        <p>
                          • <strong>Step 1:</strong> Submit company details below
                        </p>
                        <p>
                          • <strong>Step 2:</strong> Our team verifies the company information (24-48 hours)
                        </p>
                        <p>
                          • <strong>Step 3:</strong> Company gets added to our database
                        </p>
                        <p>
                          • <strong>Step 4:</strong> You can then report issues and write reviews
                        </p>
                      </div>
                    </div>

                    <form className="space-y-6">
                      {/* Basic Company Info */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="company-name">Company Name *</Label>
                          <Input
                            id="company-name"
                            placeholder="e.g., ABC Technologies"
                            value={newCompanyData.name}
                            onChange={(e) => setNewCompanyData({ ...newCompanyData, name: e.target.value })}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="company-industry">Industry *</Label>
                          <Select
                            value={newCompanyData.industry}
                            onValueChange={(value) => setNewCompanyData({ ...newCompanyData, industry: value })}
                          >
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Select industry" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="technology">Technology</SelectItem>
                              <SelectItem value="finance">Finance</SelectItem>
                              <SelectItem value="healthcare">Healthcare</SelectItem>
                              <SelectItem value="education">Education</SelectItem>
                              <SelectItem value="manufacturing">Manufacturing</SelectItem>
                              <SelectItem value="retail">Retail</SelectItem>
                              <SelectItem value="consulting">Consulting</SelectItem>
                              <SelectItem value="media">Media & Entertainment</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="company-location">Location *</Label>
                          <Input
                            id="company-location"
                            placeholder="City, Country"
                            value={newCompanyData.location}
                            onChange={(e) => setNewCompanyData({ ...newCompanyData, location: e.target.value })}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="company-size">Company Size *</Label>
                          <Select
                            value={newCompanyData.size}
                            onValueChange={(value) => setNewCompanyData({ ...newCompanyData, size: value })}
                          >
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Select size" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1-10">1-10 employees</SelectItem>
                              <SelectItem value="11-50">11-50 employees</SelectItem>
                              <SelectItem value="51-200">51-200 employees</SelectItem>
                              <SelectItem value="201-500">201-500 employees</SelectItem>
                              <SelectItem value="501-1000">501-1000 employees</SelectItem>
                              <SelectItem value="1000+">1000+ employees</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* Optional Details */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="company-website">Company Website</Label>
                          <Input
                            id="company-website"
                            placeholder="https://company.com"
                            value={newCompanyData.website}
                            onChange={(e) => setNewCompanyData({ ...newCompanyData, website: e.target.value })}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="company-linkedin">LinkedIn Profile</Label>
                          <Input
                            id="company-linkedin"
                            placeholder="https://linkedin.com/company/..."
                            value={newCompanyData.linkedin}
                            onChange={(e) => setNewCompanyData({ ...newCompanyData, linkedin: e.target.value })}
                            className="mt-1"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="company-description">Company Description</Label>
                        <Textarea
                          id="company-description"
                          placeholder="Brief description of what the company does..."
                          value={newCompanyData.description}
                          onChange={(e) => setNewCompanyData({ ...newCompanyData, description: e.target.value })}
                          className="mt-1"
                        />
                      </div>

                      {/* Verification Documents */}
                      <div>
                        <Label>Company Verification Documents (Optional but Recommended)</Label>
                        <div className="mt-2 border-2 border-dashed border-slate-300 rounded-lg p-6 text-center">
                          <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                          <p className="text-sm text-slate-600 mb-2">
                            Upload documents to verify company existence (business registration, website screenshots,
                            etc.)
                          </p>
                          <input
                            type="file"
                            multiple
                            accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                            className="hidden"
                            id="company-proof-upload"
                          />
                          <Button variant="outline" asChild>
                            <label htmlFor="company-proof-upload" className="cursor-pointer">
                              Choose Files
                            </label>
                          </Button>
                        </div>
                        <p className="text-xs text-slate-500 mt-2">
                          Providing verification documents helps us approve your company faster and builds trust.
                        </p>
                      </div>

                      {/* Submit Button */}
                      <div className="flex gap-4">
                        <Button
                          type="button"
                          onClick={handleNewCompanySubmit}
                          className="flex-1 bg-blue-600 hover:bg-blue-700"
                        >
                          Submit for Verification
                        </Button>
                        <Button variant="outline" type="button">
                          Save Draft
                        </Button>
                      </div>
                    </form>

                    {/* What happens next */}
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h3 className="font-medium text-green-900 mb-2">What happens next?</h3>
                      <div className="text-sm text-green-800 space-y-1">
                        <p>✅ We'll review your company submission within 24-48 hours</p>
                        <p>✅ You'll receive an email notification once approved</p>
                        <p>✅ The company will be added to our database</p>
                        <p>✅ You can then report issues and write reviews</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Support Resources */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <Shield className="w-5 h-5" />
                  Immediate Support
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div>
                  <h4 className="font-medium text-slate-900 mb-1">Legal Aid Helpline</h4>
                  <p className="text-slate-600 mb-1">Free legal consultation for workplace issues</p>
                  <p className="text-blue-600 font-medium">+92-XXX-XXXX-XXX</p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 mb-1">Mental Health Support</h4>
                  <p className="text-slate-600 mb-1">Counseling for workplace stress and trauma</p>
                  <p className="text-blue-600 font-medium">support@mentalhealth.pk</p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 mb-1">Labor Rights NGO</h4>
                  <p className="text-slate-600 mb-1">Workers' rights advocacy and support</p>
                  <p className="text-blue-600 font-medium">help@laborights.org</p>
                </div>
              </CardContent>
            </Card>

            {/* Company Verification Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  Company Verification
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>
                  <h4 className="font-medium text-slate-900">Why verify companies?</h4>
                  <p className="text-slate-600">
                    We verify companies to ensure authentic reports and prevent fake submissions.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900">Verification process:</h4>
                  <ul className="text-slate-600 space-y-1">
                    <li>• Business registration check</li>
                    <li>• Website and online presence verification</li>
                    <li>• Cross-reference with official databases</li>
                    <li>• Manual review by our team</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900">Timeline:</h4>
                  <p className="text-slate-600">Most companies are verified within 24-48 hours.</p>
                </div>
              </CardContent>
            </Card>

            {/* Privacy & Security */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start gap-2 mb-2">
                  <Shield className="w-4 h-4 text-green-600 mt-0.5" />
                  <h4 className="font-medium text-slate-900">Your Privacy is Protected</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  All reports are encrypted and stored securely. Anonymous reports cannot be traced back to you. We
                  never share personal information with employers or third parties without your explicit consent.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
