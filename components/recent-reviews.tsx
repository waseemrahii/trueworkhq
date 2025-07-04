import { EnhancedReviewCard } from "@/components/enhanced-review-card"

const recentReviews = [
  {
    id: 1,
    rating: 2,
    issueType: "Salary Delay",
    severity: "High",
    title: "3 months salary pending - Management making excuses",
    content:
      "I've been working here for 2 years and this is the worst situation I've faced. My salary has been pending for 3 months. Every time I ask HR, they say 'company is facing cash flow issues' or 'next week for sure'. I have uploaded my offer letter and bank statements as proof. This is affecting my family's basic needs. Other colleagues are also facing the same but afraid to speak up.",
    author: "Software Engineer",
    authorImage: "/placeholder.svg?height=40&width=40",
    department: "Engineering",
    isAnonymous: false,
    isVerified: true,
    timeAgo: "2 days ago",
    supportCount: 23,
    employmentType: "Full-time",
    workDuration: "2 years",
    status: "Under Investigation",
    proofUploaded: true,
    companyName: "TechCorp Pakistan",
    companyId: 1,
    location: "Karachi, Pakistan",
    pros: ["Good technical team", "Learning opportunities"],
    cons: ["Salary delays", "Poor financial management"],
    advice: "Please ensure timely salary payments",
    salaryInfo: {
      range: "PKR 85,000",
      currency: "per month",
      benefits: ["Health insurance", "Annual bonus"],
    },
  },
  {
    id: 2,
    rating: 1,
    issueType: "Harassment",
    severity: "Critical",
    title: "Manager harassment and inappropriate behavior",
    content:
      "My direct manager has been making inappropriate comments about female employees and creating a hostile work environment. When I tried to report to HR, they said 'these things happen in corporate world'. I have screenshots of WhatsApp messages and email conversations as evidence.",
    author: "Anonymous Employee",
    authorImage: "/placeholder.svg?height=40&width=40",
    department: "Product Management",
    isAnonymous: true,
    isVerified: true,
    timeAgo: "1 week ago",
    supportCount: 45,
    employmentType: "Full-time",
    workDuration: "1 year",
    status: "Legal Aid Provided",
    proofUploaded: true,
    companyName: "InfoSys India",
    companyId: 2,
    location: "Bangalore, India",
    pros: ["Good product vision", "Competitive salary"],
    cons: ["Harassment issues", "Poor HR response"],
    advice: "Implement proper harassment policies",
    salaryInfo: {
      range: "INR 8,00,000",
      currency: "per year",
      benefits: ["Health insurance", "Performance bonus"],
    },
  },
  {
    id: 3,
    rating: 4,
    title: "Great place to learn and grow",
    content:
      "I've been working at DataSoft for 18 months and overall it's been a positive experience. The technical challenges are interesting, the team is supportive, and there are good opportunities for career growth. Management is generally responsive to feedback.",
    author: "Senior Developer",
    authorImage: "/placeholder.svg?height=40&width=40",
    department: "Engineering",
    isAnonymous: false,
    isVerified: true,
    timeAgo: "3 days ago",
    supportCount: 12,
    employmentType: "Full-time",
    workDuration: "18 months",
    proofUploaded: true,
    companyName: "DataSoft Bangladesh",
    companyId: 3,
    location: "Dhaka, Bangladesh",
    pros: ["Great learning environment", "Supportive team", "Good work-life balance"],
    cons: ["Occasional deadline pressure", "Limited remote work"],
    advice: "Continue investing in employee development",
    salaryInfo: {
      range: "BDT 65,000",
      currency: "per month",
      benefits: ["Health insurance", "Learning budget", "Flexible hours"],
    },
  },
]

export function RecentReports() {
  return (
    <div className="space-y-6">
      {recentReviews.map((review) => (
        <EnhancedReviewCard key={review.id} review={review} showCompanyName={true} />
      ))}
    </div>
  )
}
