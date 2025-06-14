"use client";

import React from "react";
import Header from "@/components/layout/header";
import CategoryNav from "@/components/layout/category-nav";
import Link from "next/link";

export default function Privacy() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header viewOnly />
      <CategoryNav />

      <div className="container px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last Updated: June 14, 2025</p>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6">
              <div className="prose max-w-none">
                <p>
                  At Cart Royal, we are committed to protecting your privacy and
                  ensuring the security of your personal information. This
                  Privacy Policy explains how we collect, use, disclose, and
                  safeguard your information when you use our website, mobile
                  application, and services (collectively, the "Platform").
                </p>
                <p className="mt-4">
                  Please read this Privacy Policy carefully. By accessing or
                  using our Platform, you acknowledge that you have read,
                  understood, and agree to be bound by all the terms outlined in
                  this policy.
                </p>

                <h2
                  className="text-xl font-semibold mt-8 mb-4"
                  id="information"
                >
                  1. Information We Collect
                </h2>
                <p>
                  We collect several types of information from and about users
                  of our Platform:
                </p>

                <h3 className="text-lg font-medium mt-6 mb-3">
                  1.1 Personal Information
                </h3>
                <p>
                  Personal information is data that can be used to identify you
                  individually. This may include:
                </p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>
                    Contact information (name, email address, phone number,
                    delivery address)
                  </li>
                  <li>Account credentials (username, password)</li>
                  <li>
                    Payment information (credit card details, billing address)
                  </li>
                  <li>Demographic information (age, gender, location)</li>
                  <li>
                    Identity verification information (when required for certain
                    transactions)
                  </li>
                </ul>

                <h3 className="text-lg font-medium mt-6 mb-3">
                  1.2 Non-Personal Information
                </h3>
                <p>
                  We also collect non-personal information that does not
                  directly identify you:
                </p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>
                    Device information (device type, operating system, browser
                    type)
                  </li>
                  <li>
                    Usage data (pages visited, time spent on pages, click
                    patterns)
                  </li>
                  <li>IP address and general location information</li>
                  <li>Cookies and similar tracking technologies</li>
                  <li>Aggregated or anonymized data for analytics</li>
                </ul>

                <h2 className="text-xl font-semibold mt-8 mb-4" id="collection">
                  2. How We Collect Information
                </h2>
                <p>We collect information through various methods:</p>

                <h3 className="text-lg font-medium mt-6 mb-3">
                  2.1 Direct Collection
                </h3>
                <p>Information you provide directly when you:</p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>Create an account or profile</li>
                  <li>Make a purchase or place an order</li>
                  <li>Complete forms or surveys</li>
                  <li>Communicate with our customer service</li>
                  <li>Post reviews or comments</li>
                  <li>Participate in promotions or contests</li>
                </ul>

                <h3 className="text-lg font-medium mt-6 mb-3">
                  2.2 Automated Collection
                </h3>
                <p>
                  Information collected automatically when you use our Platform:
                </p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>Cookies and similar tracking technologies</li>
                  <li>Log files and usage data</li>
                  <li>Device information</li>
                  <li>Location data (with your permission)</li>
                </ul>

                <h3 className="text-lg font-medium mt-6 mb-3">
                  2.3 Third-Party Sources
                </h3>
                <p>We may receive information about you from third parties:</p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>Social media platforms when you connect your account</li>
                  <li>Payment processors for transaction information</li>
                  <li>Analytics providers</li>
                  <li>Marketing partners</li>
                </ul>

                <h2 className="text-xl font-semibold mt-8 mb-4" id="use">
                  3. How We Use Your Information
                </h2>
                <p>We use the information we collect for various purposes:</p>

                <h3 className="text-lg font-medium mt-6 mb-3">
                  3.1 Provide and Improve Services
                </h3>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>Process and fulfill your orders</li>
                  <li>Manage your account and provide customer support</li>
                  <li>Personalize your shopping experience</li>
                  <li>Improve our Platform, products, and services</li>
                  <li>Develop new features and offerings</li>
                </ul>

                <h3 className="text-lg font-medium mt-6 mb-3">
                  3.2 Communication
                </h3>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>
                    Send transactional emails (order confirmations, shipping
                    updates)
                  </li>
                  <li>Respond to your inquiries and requests</li>
                  <li>Send promotional communications (with your consent)</li>
                  <li>Notify you about changes to our policies or services</li>
                </ul>

                <h3 className="text-lg font-medium mt-6 mb-3">
                  3.3 Security and Protection
                </h3>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>Verify your identity and prevent fraud</li>
                  <li>Monitor and protect against unauthorized access</li>
                  <li>Enforce our terms and conditions</li>
                  <li>Resolve disputes and troubleshoot problems</li>
                </ul>

                <h3 className="text-lg font-medium mt-6 mb-3">
                  3.4 Analytics and Research
                </h3>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>Analyze usage patterns and trends</li>
                  <li>Measure the effectiveness of our marketing campaigns</li>
                  <li>
                    Conduct research and surveys to improve user experience
                  </li>
                  <li>Generate aggregated or anonymized insights</li>
                </ul>

                <h2 className="text-xl font-semibold mt-8 mb-4" id="sharing">
                  4. How We Share Your Information
                </h2>
                <p>
                  We may share your information with the following categories of
                  recipients:
                </p>

                <h3 className="text-lg font-medium mt-6 mb-3">
                  4.1 Service Providers
                </h3>
                <p>
                  We share information with third-party service providers who
                  perform services on our behalf:
                </p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>Payment processors</li>
                  <li>Shipping and logistics companies</li>
                  <li>Customer support services</li>
                  <li>Cloud storage providers</li>
                  <li>Marketing and advertising partners</li>
                  <li>Analytics providers</li>
                </ul>
                <p>
                  These service providers are contractually obligated to use
                  your information only as directed by us and for the purpose of
                  providing their services.
                </p>

                <h3 className="text-lg font-medium mt-6 mb-3">
                  4.2 Sellers on Our Platform
                </h3>
                <p>
                  When you make a purchase from a third-party seller on our
                  Platform, we share necessary information to facilitate the
                  transaction:
                </p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>Name and contact information for delivery</li>
                  <li>Order details and preferences</li>
                </ul>

                <h3 className="text-lg font-medium mt-6 mb-3">
                  4.3 Business Transfers
                </h3>
                <p>
                  If Cart Royal is involved in a merger, acquisition, or sale of
                  all or a portion of its assets, your information may be
                  transferred as part of that transaction. We will notify you
                  via email and/or a prominent notice on our Platform of any
                  change in ownership or uses of your information.
                </p>

                <h3 className="text-lg font-medium mt-6 mb-3">
                  4.4 Legal Requirements
                </h3>
                <p>
                  We may disclose your information if required to do so by law
                  or in response to valid requests by public authorities (e.g.,
                  court order, government request). We may also disclose your
                  information to:
                </p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>Enforce our terms and conditions</li>
                  <li>Protect and defend our rights or property</li>
                  <li>Prevent or investigate possible wrongdoing</li>
                  <li>Protect the personal safety of users or the public</li>
                </ul>

                <h2 className="text-xl font-semibold mt-8 mb-4" id="cookies">
                  5. Cookies and Tracking Technologies
                </h2>
                <p>
                  We use cookies and similar tracking technologies to collect
                  and store information about your interactions with our
                  Platform.
                </p>

                <h3 className="text-lg font-medium mt-6 mb-3">
                  5.1 Types of Cookies We Use
                </h3>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>
                    <strong>Essential cookies:</strong> Required for the
                    Platform to function properly
                  </li>
                  <li>
                    <strong>Functional cookies:</strong> Remember your
                    preferences and settings
                  </li>
                  <li>
                    <strong>Analytical cookies:</strong> Help us understand how
                    users interact with our Platform
                  </li>
                  <li>
                    <strong>Advertising cookies:</strong> Used to deliver
                    relevant advertisements and track campaign performance
                  </li>
                </ul>

                <h3 className="text-lg font-medium mt-6 mb-3">
                  5.2 Your Cookie Choices
                </h3>
                <p>
                  You can manage your cookie preferences through your browser
                  settings. Most browsers allow you to block or delete cookies.
                  However, if you block essential cookies, you may not be able
                  to access certain features of our Platform.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-4" id="security">
                  6. Data Security
                </h2>
                <p>
                  We implement appropriate technical and organizational measures
                  to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction. These measures
                  include:
                </p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>Encryption of sensitive data</li>
                  <li>Secure socket layer (SSL) technology</li>
                  <li>Regular security assessments</li>
                  <li>Access controls and authentication procedures</li>
                  <li>Employee training on data protection</li>
                </ul>
                <p>
                  While we strive to protect your personal information, no
                  method of transmission over the Internet or electronic storage
                  is 100% secure. We cannot guarantee absolute security of your
                  data.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-4" id="retention">
                  7. Data Retention
                </h2>
                <p>
                  We retain your personal information for as long as necessary
                  to fulfill the purposes outlined in this Privacy Policy,
                  unless a longer retention period is required or permitted by
                  law. The criteria used to determine our retention periods
                  include:
                </p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>
                    The length of time we have an ongoing relationship with you
                  </li>
                  <li>Legal obligations to which we are subject</li>
                  <li>
                    Whether retention is advisable in light of our legal
                    position (e.g., statutes of limitations, litigation, or
                    regulatory investigations)
                  </li>
                </ul>

                <h2 className="text-xl font-semibold mt-8 mb-4" id="children">
                  8. Children's Privacy
                </h2>
                <p>
                  Our Platform is not intended for children under 13 years of
                  age. We do not knowingly collect personal information from
                  children under 13. If you are a parent or guardian and believe
                  that your child has provided us with personal information,
                  please contact us immediately. If we become aware that we have
                  collected personal information from children without
                  verification of parental consent, we will take steps to remove
                  that information from our servers.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-4" id="rights">
                  9. Your Privacy Rights
                </h2>
                <p>
                  Depending on your location, you may have certain rights
                  regarding your personal information:
                </p>

                <h3 className="text-lg font-medium mt-6 mb-3">
                  9.1 Access and Information
                </h3>
                <p>
                  You have the right to request information about the personal
                  data we hold about you and how it is processed.
                </p>

                <h3 className="text-lg font-medium mt-6 mb-3">
                  9.2 Correction
                </h3>
                <p>
                  You have the right to request correction of inaccurate or
                  incomplete personal information.
                </p>

                <h3 className="text-lg font-medium mt-6 mb-3">9.3 Deletion</h3>
                <p>
                  You have the right to request deletion of your personal
                  information in certain circumstances, such as when the
                  information is no longer necessary for the purposes for which
                  it was collected.
                </p>

                <h3 className="text-lg font-medium mt-6 mb-3">
                  9.4 Restriction of Processing
                </h3>
                <p>
                  You have the right to request restriction of processing of
                  your personal information in certain circumstances.
                </p>

                <h3 className="text-lg font-medium mt-6 mb-3">
                  9.5 Data Portability
                </h3>
                <p>
                  You have the right to receive your personal information in a
                  structured, commonly used, and machine-readable format.
                </p>

                <h3 className="text-lg font-medium mt-6 mb-3">9.6 Objection</h3>
                <p>
                  You have the right to object to processing of your personal
                  information in certain circumstances.
                </p>

                <h3 className="text-lg font-medium mt-6 mb-3">
                  9.7 Withdraw Consent
                </h3>
                <p>
                  Where we rely on your consent to process your personal
                  information, you have the right to withdraw your consent at
                  any time.
                </p>

                <p className="mt-4">
                  To exercise any of these rights, please contact us using the
                  information provided in the "Contact Us" section below. We may
                  need to verify your identity before responding to your
                  request.
                </p>

                <h2
                  className="text-xl font-semibold mt-8 mb-4"
                  id="international"
                >
                  10. International Data Transfers
                </h2>
                <p>
                  Cart Royal is based in Nigeria, and your information may be
                  processed and stored in Nigeria and other countries where our
                  service providers maintain facilities. These countries may
                  have different data protection laws than your country of
                  residence.
                </p>
                <p className="mt-4">
                  When we transfer your information to other countries, we will
                  protect that information as described in this Privacy Policy
                  and in accordance with applicable law. We use appropriate
                  safeguards, such as standard contractual clauses, to ensure
                  that your personal information receives an adequate level of
                  protection.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-4" id="changes">
                  11. Changes to This Privacy Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time to reflect
                  changes in our practices or for other operational, legal, or
                  regulatory reasons. The updated policy will be posted on this
                  page with a revised "Last Updated" date.
                </p>
                <p className="mt-4">
                  We encourage you to review this Privacy Policy periodically to
                  stay informed about how we are protecting your information.
                  Your continued use of our Platform after any changes to this
                  Privacy Policy constitutes your acceptance of the changes.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-4" id="contact">
                  12. Contact Us
                </h2>
                <p>
                  If you have any questions, concerns, or requests regarding
                  this Privacy Policy or our data practices, please contact us
                  at:
                </p>
                <p className="mt-2">
                  Cart Royal Privacy Team
                  <br />
                  Email: privacy@cartroyal.com
                  <br />
                  Phone: +234 123 456 7890
                  <br />
                  Address: 123 Commerce Street, Lagos, Nigeria
                </p>
                <p className="mt-4">
                  We will respond to your inquiry as soon as possible and within
                  the timeframe required by applicable law.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-4" id="compliance">
                  13. Regulatory Compliance
                </h2>
                <p>
                  Cart Royal is committed to complying with applicable data
                  protection laws, including:
                </p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>Nigeria Data Protection Regulation (NDPR)</li>
                  <li>
                    General Data Protection Regulation (GDPR) for users in the
                    European Economic Area
                  </li>
                  <li>
                    California Consumer Privacy Act (CCPA) for California
                    residents
                  </li>
                  <li>Other applicable regional and national privacy laws</li>
                </ul>
                <p>
                  If you are located in a jurisdiction with specific data
                  protection requirements, additional terms may apply to how we
                  process your personal information.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row justify-between items-center">
            <div className="mb-4 sm:mb-0">
              <Link href="/terms" className="text-primary hover:underline">
                Terms and Conditions
              </Link>
            </div>
            <div className="text-sm text-gray-600">
              © 2025 Cart Royal. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
