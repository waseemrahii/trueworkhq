import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-bold text-slate-900">TrueWorkHQ</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms of Service</h1>

        <div className="bg-white rounded-lg shadow-sm border p-8 space-y-8">
          <div>
            <p className="text-slate-600 mb-6">
              <strong>Last updated:</strong> January 1, 2025
            </p>
            <p className="text-slate-700 leading-relaxed">
              Welcome to TrueWorkHQ. These Terms of Service ("Terms") govern your use of our platform and services. By
              accessing or using TrueWorkHQ, you agree to be bound by these Terms.
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Platform Purpose</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              TrueWorkHQ is a professional platform that enables employees and job seekers to:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-1">
              <li>Share honest, verified reviews about companies and workplaces</li>
              <li>Report workplace issues including salary problems and cultural concerns</li>
              <li>Ask and answer questions about workplace experiences</li>
              <li>Share positive stories and career achievements</li>
              <li>Access transparent workplace information for informed career decisions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. User Responsibilities</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">Honest and Accurate Content</h3>
                <ul className="list-disc list-inside text-slate-700 space-y-1">
                  <li>Provide truthful and accurate information in your reviews and posts</li>
                  <li>Base your reviews on personal, first-hand experiences</li>
                  <li>Avoid posting false, misleading, or defamatory content</li>
                  <li>Update information if circumstances change significantly</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">Professional Conduct</h3>
                <ul className="list-disc list-inside text-slate-700 space-y-1">
                  <li>Maintain a professional and respectful tone</li>
                  <li>Avoid personal attacks, harassment, or discriminatory language</li>
                  <li>Focus on workplace experiences rather than personal grievances</li>
                  <li>Respect the privacy and confidentiality of others</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. Content Guidelines</h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
              <p className="text-slate-700">
                <strong>Important:</strong> All reviews and content represent personal opinions and experiences of
                individual users. TrueWorkHQ does not verify the accuracy of all claims and does not guarantee the
                truthfulness of user-generated content.
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">Prohibited Content</h3>
                <ul className="list-disc list-inside text-slate-700 space-y-1">
                  <li>False or deliberately misleading information</li>
                  <li>Confidential or proprietary company information</li>
                  <li>Personal information of individuals (names, contact details, etc.)</li>
                  <li>Hate speech, harassment, or discriminatory content</li>
                  <li>Spam, promotional content, or irrelevant material</li>
                  <li>Content that violates intellectual property rights</li>
                  <li>Illegal activities or content that violates local laws</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Verification Process</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Our verification system helps build trust and credibility:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-1">
              <li>Users may upload proof documents to verify their employment and experiences</li>
              <li>Verified reviews receive a "Verified" badge to indicate authenticity</li>
              <li>Proof documents are kept strictly confidential and used only for verification</li>
              <li>Verification does not guarantee legal accuracy but indicates supporting evidence</li>
              <li>We reserve the right to remove unverified or suspicious content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Employer Rights and Responses</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">Company Page Claims</h3>
                <ul className="list-disc list-inside text-slate-700 space-y-1">
                  <li>Employers can claim their company pages by verifying their official status</li>
                  <li>Verified employers can respond to reviews with official statements</li>
                  <li>Employer responses are clearly marked as "Official Response"</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">Content Removal Requests</h3>
                <ul className="list-disc list-inside text-slate-700 space-y-1">
                  <li>Employers may request removal of content they believe is false or defamatory</li>
                  <li>Requests must include substantial evidence supporting their claims</li>
                  <li>We will review all requests fairly and make decisions based on available evidence</li>
                  <li>Users will be notified of removal requests and given opportunity to respond</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Legal Disclaimers</h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="space-y-3">
                <p className="text-slate-700">
                  <strong>Content Disclaimer:</strong> Reviews and content on TrueWorkHQ represent personal opinions and
                  allegations by individual users. They are not verified facts and should not be considered as
                  definitive statements about companies or individuals.
                </p>
                <p className="text-slate-700">
                  <strong>No Liability:</strong> TrueWorkHQ is not responsible for the accuracy, completeness, or
                  consequences of user-generated content. Users access and use information at their own risk.
                </p>
                <p className="text-slate-700">
                  <strong>Legal Compliance:</strong> We cooperate with legal authorities and may disclose user
                  information when required by law or to protect our rights and safety.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Account Management</h2>
            <ul className="list-disc list-inside text-slate-700 space-y-1">
              <li>You are responsible for maintaining the security of your account</li>
              <li>One account per person; multiple accounts may be suspended</li>
              <li>We may suspend or terminate accounts that violate these Terms</li>
              <li>You may delete your account at any time through your profile settings</li>
              <li>Some content may remain visible after account deletion for platform integrity</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">8. Intellectual Property</h2>
            <ul className="list-disc list-inside text-slate-700 space-y-1">
              <li>You retain ownership of content you create and post</li>
              <li>By posting content, you grant us a license to display and distribute it on our platform</li>
              <li>TrueWorkHQ's branding, design, and technology are our intellectual property</li>
              <li>Respect the intellectual property rights of others</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">9. Privacy and Data Protection</h2>
            <p className="text-slate-700 leading-relaxed">
              Your privacy is important to us. Please review our{" "}
              <Link href="/privacy" className="text-blue-600 hover:underline">
                Privacy Policy
              </Link>{" "}
              to understand how we collect, use, and protect your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">10. Limitation of Liability</h2>
            <p className="text-slate-700 leading-relaxed">
              To the maximum extent permitted by law, TrueWorkHQ and its affiliates shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages arising from your use of our platform.
              Our total liability shall not exceed the amount you paid us in the past 12 months.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">11. Governing Law</h2>
            <p className="text-slate-700 leading-relaxed">
              These Terms are governed by the laws of [Your Jurisdiction]. Any disputes will be resolved through binding
              arbitration or in the courts of [Your Jurisdiction].
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">12. Changes to Terms</h2>
            <p className="text-slate-700 leading-relaxed">
              We may update these Terms from time to time. We will notify users of material changes and provide a
              reasonable notice period. Continued use of our platform after changes constitutes acceptance of the
              updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Contact Information</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              If you have questions about these Terms or need to report violations, please contact us:
            </p>
            <div className="bg-slate-50 rounded-lg p-4">
              <p className="text-slate-700">
                <strong>Email:</strong> legal@trueworkhq.com
                <br />
                <strong>Support:</strong> support@trueworkhq.com
                <br />
                <strong>Address:</strong> TrueWorkHQ Legal Team
                <br />
                [Your Business Address]
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
