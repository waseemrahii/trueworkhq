import Link from "next/link"

export default function PrivacyPage() {
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
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>

        <div className="bg-white rounded-lg shadow-sm border p-8 space-y-8">
          <div>
            <p className="text-slate-600 mb-6">
              <strong>Last updated:</strong> January 1, 2025
            </p>
            <p className="text-slate-700 leading-relaxed">
              At TrueWorkHQ, we are committed to protecting your privacy and ensuring the security of your personal
              information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our
              platform.
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">Personal Information</h3>
                <ul className="list-disc list-inside text-slate-700 space-y-1">
                  <li>Name, email address, and contact information</li>
                  <li>Professional details (job title, company, department)</li>
                  <li>Account credentials and profile information</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">Content and Reviews</h3>
                <ul className="list-disc list-inside text-slate-700 space-y-1">
                  <li>Reviews, comments, and other user-generated content</li>
                  <li>Proof documents uploaded for verification (kept private)</li>
                  <li>Questions and answers in community discussions</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">Technical Information</h3>
                <ul className="list-disc list-inside text-slate-700 space-y-1">
                  <li>IP address, browser type, and device information</li>
                  <li>Usage patterns and interaction data</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">How We Use Your Information</h2>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li>Provide and improve our platform services</li>
              <li>Verify the authenticity of reviews and content</li>
              <li>Enable community features and user interactions</li>
              <li>Send important updates and notifications</li>
              <li>Ensure platform security and prevent abuse</li>
              <li>Comply with legal obligations and requests</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Proof Document Privacy</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-slate-700 leading-relaxed">
                <strong>Your proof documents are completely private.</strong> Only our moderation team can access these
                files for verification purposes. They are never shared publicly, with employers, or with other users. We
                use enterprise-grade encryption and secure storage to protect these sensitive documents.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Anonymous Reviews</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              When you post anonymously, your identity is hidden from public view. However, we maintain a secure record
              of your identity for the following purposes:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-1">
              <li>Verification and authenticity checks</li>
              <li>Preventing spam and abuse</li>
              <li>Legal compliance when required</li>
              <li>Platform security and integrity</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Information Sharing</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We do not sell your personal information. We may share information in these limited circumstances:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-1">
              <li>With your explicit consent</li>
              <li>To comply with legal obligations or court orders</li>
              <li>To protect our rights, safety, or property</li>
              <li>With service providers who assist our operations (under strict confidentiality)</li>
              <li>In case of business transfer or merger (with notice to users)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Data Security</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We implement industry-standard security measures to protect your information:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-1">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security audits and monitoring</li>
              <li>Access controls and authentication systems</li>
              <li>Secure cloud infrastructure and backups</li>
              <li>Employee training on data protection</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Your Rights</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-1">
              <li>
                <strong>Access:</strong> Request a copy of your personal data
              </li>
              <li>
                <strong>Correction:</strong> Update or correct inaccurate information
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your account and data
              </li>
              <li>
                <strong>Portability:</strong> Export your data in a readable format
              </li>
              <li>
                <strong>Objection:</strong> Object to certain processing activities
              </li>
              <li>
                <strong>Restriction:</strong> Limit how we process your data
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">International Data Transfers</h2>
            <p className="text-slate-700 leading-relaxed">
              As we serve users across South Asia and may use international service providers, your data may be
              transferred to and processed in countries outside your home country. We ensure appropriate safeguards are
              in place to protect your information during such transfers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Children's Privacy</h2>
            <p className="text-slate-700 leading-relaxed">
              Our platform is not intended for users under 18 years of age. We do not knowingly collect personal
              information from children. If we become aware that we have collected information from a child, we will
              take steps to delete such information promptly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Changes to This Policy</h2>
            <p className="text-slate-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting
              the new policy on our platform and updating the "Last updated" date. Your continued use of our services
              after such changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Contact Us</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-slate-50 rounded-lg p-4">
              <p className="text-slate-700">
                <strong>Email:</strong> privacy@trueworkhq.com
                <br />
                <strong>Address:</strong> TrueWorkHQ Privacy Team
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
