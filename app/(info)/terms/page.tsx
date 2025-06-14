"use client";

import React from "react";
import Header from "@/components/layout/header";
import CategoryNav from "@/components/layout/category-nav";
import Link from "next/link";

export default function Terms() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header viewOnly />
      <CategoryNav />

      <div className="container px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
          <p className="text-gray-600 mb-8">Last Updated: June 14, 2025</p>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6">
              <div className="prose max-w-none">
                <p>
                  Welcome to Cart Royal. These Terms and Conditions govern your
                  use of the Cart Royal website, mobile application, and
                  services (collectively, the "Platform"). Please read these
                  terms carefully before using our Platform.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-4" id="acceptance">
                  1. Acceptance of Terms
                </h2>
                <p>
                  By accessing or using the Cart Royal Platform, you agree to be
                  bound by these Terms and Conditions, our Privacy Policy, and
                  any other policies referenced herein. If you do not agree to
                  these terms, please do not use our Platform.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-4" id="account">
                  2. Account Registration and Security
                </h2>
                <p>
                  To access certain features of our Platform, you may need to
                  create an account. You are responsible for:
                </p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>
                    Providing accurate and complete information during
                    registration
                  </li>
                  <li>
                    Maintaining the confidentiality of your account credentials
                  </li>
                  <li>All activities that occur under your account</li>
                  <li>
                    Notifying us immediately of any unauthorized use of your
                    account
                  </li>
                </ul>
                <p>
                  We reserve the right to suspend or terminate accounts that
                  violate these Terms and Conditions or for any other reason at
                  our sole discretion.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-4" id="use">
                  3. Platform Use and Restrictions
                </h2>
                <p>
                  You agree to use the Cart Royal Platform only for lawful
                  purposes and in accordance with these Terms. You agree not to:
                </p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>
                    Use the Platform in any way that violates applicable laws or
                    regulations
                  </li>
                  <li>
                    Infringe upon the rights of others, including intellectual
                    property rights
                  </li>
                  <li>
                    Interfere with or disrupt the operation of the Platform
                  </li>
                  <li>
                    Attempt to gain unauthorized access to any part of the
                    Platform
                  </li>
                  <li>
                    Use the Platform to transmit harmful code, spam, or other
                    malicious content
                  </li>
                  <li>
                    Impersonate any person or entity or misrepresent your
                    affiliation
                  </li>
                  <li>Collect or harvest user data without consent</li>
                </ul>

                <h2 className="text-xl font-semibold mt-8 mb-4" id="products">
                  4. Products and Services
                </h2>
                <p>
                  Cart Royal is an e-commerce platform that connects buyers with
                  sellers. We strive to ensure that product descriptions,
                  images, and prices are accurate, but we do not guarantee the
                  accuracy of such information. The final contract for sale is
                  between you and the seller, not Cart Royal.
                </p>
                <p className="mt-4">
                  4.1 <strong>Product Availability</strong>: All products are
                  subject to availability. We reserve the right to limit
                  quantities or refuse orders at our discretion.
                </p>
                <p className="mt-4">
                  4.2 <strong>Pricing</strong>: Prices for products are subject
                  to change without notice. We are not responsible for
                  typographical or pricing errors.
                </p>
                <p className="mt-4">
                  4.3 <strong>Product Information</strong>: While we make
                  efforts to display product colors and images accurately, we
                  cannot guarantee that your device's display will accurately
                  reflect the actual product.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-4" id="orders">
                  5. Orders and Payments
                </h2>
                <p>
                  By placing an order, you are making an offer to purchase
                  products. We reserve the right to accept or decline your order
                  for any reason.
                </p>
                <p className="mt-4">
                  5.1 <strong>Payment Methods</strong>: We accept various
                  payment methods as indicated on the Platform. By providing
                  payment information, you represent that you are authorized to
                  use the payment method.
                </p>
                <p className="mt-4">
                  5.2 <strong>Order Confirmation</strong>: An order confirmation
                  does not constitute acceptance of your order. An order is
                  accepted when we send a shipping confirmation.
                </p>
                <p className="mt-4">
                  5.3 <strong>Cancellations</strong>: Orders may be cancelled
                  before shipping. Once shipped, our return policy applies.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-4" id="shipping">
                  6. Shipping and Delivery
                </h2>
                <p>
                  6.1 <strong>Delivery Times</strong>: Delivery times are
                  estimates and not guaranteed. We are not responsible for
                  delays due to customs, weather, or other factors beyond our
                  control.
                </p>
                <p className="mt-4">
                  6.2 <strong>Shipping Costs</strong>: Shipping costs are
                  calculated based on the delivery location, package weight, and
                  selected shipping method.
                </p>
                <p className="mt-4">
                  6.3 <strong>International Shipping</strong>: For international
                  orders, you are responsible for any customs duties, taxes, or
                  import fees.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-4" id="returns">
                  7. Returns and Refunds
                </h2>
                <p>
                  7.1 <strong>Return Policy</strong>: Products may be returned
                  within 30 days of delivery if they are unused, in original
                  packaging, and accompanied by proof of purchase.
                </p>
                <p className="mt-4">
                  7.2 <strong>Refund Process</strong>: Refunds will be issued to
                  the original payment method within 14 business days of
                  receiving the returned product.
                </p>
                <p className="mt-4">
                  7.3 <strong>Damaged or Defective Items</strong>: If you
                  receive a damaged or defective item, please contact our
                  customer service within 48 hours of delivery.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-4" id="giftcards">
                  8. Gift Cards
                </h2>
                <p>
                  8.1 <strong>Validity</strong>: Gift cards are valid for 12
                  months from the date of purchase unless otherwise stated.
                </p>
                <p className="mt-4">
                  8.2 <strong>Redemption</strong>: Gift cards can be redeemed on
                  the Platform for products and services.
                </p>
                <p className="mt-4">
                  8.3 <strong>Restrictions</strong>: Gift cards cannot be
                  redeemed for cash, resold, or transferred for value.
                </p>

                <h2
                  className="text-xl font-semibold mt-8 mb-4"
                  id="intellectual"
                >
                  9. Intellectual Property
                </h2>
                <p>
                  All content on the Cart Royal Platform, including text,
                  graphics, logos, images, and software, is the property of Cart
                  Royal or its content suppliers and is protected by copyright,
                  trademark, and other intellectual property laws.
                </p>
                <p className="mt-4">
                  You may not use, reproduce, distribute, or create derivative
                  works from this content without explicit permission from Cart
                  Royal or the respective rights holder.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-4" id="user">
                  10. User Content
                </h2>
                <p>
                  10.1 <strong>Ownership</strong>: You retain ownership of
                  content you submit to the Platform, such as reviews, comments,
                  and images.
                </p>
                <p className="mt-4">
                  10.2 <strong>License</strong>: By submitting content, you
                  grant Cart Royal a non-exclusive, royalty-free, worldwide
                  license to use, display, reproduce, and distribute your
                  content in connection with our services.
                </p>
                <p className="mt-4">
                  10.3 <strong>Prohibited Content</strong>: You agree not to
                  submit content that is illegal, offensive, defamatory, or
                  violates the rights of others.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-4" id="liability">
                  11. Limitation of Liability
                </h2>
                <p>
                  To the fullest extent permitted by law, Cart Royal shall not
                  be liable for any indirect, incidental, special,
                  consequential, or punitive damages arising out of or relating
                  to your use of the Platform.
                </p>
                <p className="mt-4">
                  Our total liability for any claims arising from these Terms
                  shall not exceed the amount paid by you for the product or
                  service that is the subject of the claim.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-4" id="warranty">
                  12. Disclaimer of Warranties
                </h2>
                <p>
                  The Platform and all products and services are provided "as
                  is" without warranty of any kind, either express or implied,
                  including but not limited to the implied warranties of
                  merchantability, fitness for a particular purpose, or
                  non-infringement.
                </p>

                <h2
                  className="text-xl font-semibold mt-8 mb-4"
                  id="indemnification"
                >
                  13. Indemnification
                </h2>
                <p>
                  You agree to indemnify, defend, and hold harmless Cart Royal
                  and its affiliates, officers, directors, employees, and agents
                  from any claims, liabilities, damages, losses, costs, or
                  expenses arising from your use of the Platform or violation of
                  these Terms.
                </p>

                <h2
                  className="text-xl font-semibold mt-8 mb-4"
                  id="termination"
                >
                  14. Termination
                </h2>
                <p>
                  We may terminate or suspend your access to the Platform
                  immediately, without prior notice or liability, for any
                  reason, including if you breach these Terms.
                </p>
                <p className="mt-4">
                  Upon termination, your right to use the Platform will
                  immediately cease. All provisions of these Terms which by
                  their nature should survive termination shall survive.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-4" id="governing">
                  15. Governing Law
                </h2>
                <p>
                  These Terms shall be governed by and construed in accordance
                  with the laws of the Federal Republic of Nigeria, without
                  regard to its conflict of law provisions.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-4" id="disputes">
                  16. Dispute Resolution
                </h2>
                <p>
                  Any disputes arising from these Terms or your use of the
                  Platform shall be resolved through binding arbitration in
                  Lagos, Nigeria, in accordance with the rules of the
                  Arbitration and Conciliation Act.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-4" id="changes">
                  17. Changes to Terms
                </h2>
                <p>
                  We reserve the right to modify these Terms at any time.
                  Changes will be effective immediately upon posting on the
                  Platform. Your continued use of the Platform after changes are
                  posted constitutes your acceptance of the modified Terms.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-4" id="contact">
                  18. Contact Information
                </h2>
                <p>
                  If you have any questions about these Terms, please contact us
                  at:
                </p>
                <p className="mt-2">
                  Cart Royal Customer Service
                  <br />
                  Email: legal@cartroyal.com
                  <br />
                  Phone: +234 123 456 7890
                  <br />
                  Address: 123 Commerce Street, Lagos, Nigeria
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row justify-between items-center">
            <div className="mb-4 sm:mb-0">
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
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
