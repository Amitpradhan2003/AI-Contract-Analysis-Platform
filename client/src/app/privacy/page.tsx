// app/privacy-policy/page.tsx

import Image from "next/image";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#f2f1f1] min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl p-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-black mb-4"> {/* Set the h1 color to black */}
            Privacy Policy
          </h1>
        </div>

        <section className="space-y-8 text-gray-700 leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold text-black mb-2"> {/* Set the h2 color to black */}
              1. Introduction
            </h2>
            <p>
              Welcome to <span className="font-semibold text-primary">Contract Analysis</span>! 
              We respect your privacy and are committed to protecting your personal information. 
              This Privacy Policy explains how we collect, use, and safeguard your data when you use our platform.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-black mb-2"> {/* Set the h2 color to black */}
              2. Information We Collect
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Personal Information (e.g., Name, Email Address, Payment Details)</li>
              <li>Contract data uploaded for analysis</li>
              <li>Technical data such as IP address, browser type, and device information</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-black mb-2"> {/* Set the h2 color to black */}
              3. How We Use Your Information
            </h2>
            <p>
              We use your information to deliver our services, communicate with you, improve our platform, and ensure legal compliance. 
              Aggregated data may be used for analytics purposes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-black mb-2"> {/* Set the h2 color to black */}
              4. Data Protection and Security
            </h2>
            <p>
              We implement strict security measures to protect your information from unauthorized access, alteration, disclosure, or destruction.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-black mb-2"> {/* Set the h2 color to black */}
              5. Sharing Your Information
            </h2>
            <p>
              We do not sell, rent, or trade your personal information. 
              Information may be shared with trusted service providers under confidentiality agreements.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-black mb-2"> {/* Set the h2 color to black */}
              6. Your Rights and Choices
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Access, update, or delete your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Request data portability</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-black mb-2"> {/* Set the h2 color to black */}
              7. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy as needed. 
              Changes will be posted on this page with an updated effective date.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-black mb-2"> {/* Set the h2 color to black */}
              8. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy or how we handle your data, please contact us at: <br />
              <a href="mailto:support@contractanalysis.com" className="text-primary font-semibold hover:underline">
                support@contractanalysis.com
              </a>
            </p>
          </div>
        </section>

        <div className="text-center mt-16">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Contract Analysis. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
