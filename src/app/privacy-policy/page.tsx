// pages/privacy-policy.js
"use client";
import { useState, useEffect } from "react";

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll spy for table of contents
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");

      let currentActiveSection = "";
      sections.forEach((section) => {
        const htmlSection = section as HTMLElement; // <-- cast here
        const sectionTop = htmlSection.offsetTop;
        const sectionHeight = htmlSection.offsetHeight;
        if (
          window.scrollY >= sectionTop - 100 &&
          window.scrollY < sectionTop + sectionHeight - 100
        ) {
          currentActiveSection = htmlSection.getAttribute("id") || "";
        }
      });

      setActiveSection(currentActiveSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial active section

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle mobile table of contents
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Privacy policy sections data
  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "information-we-collect", title: "Information We Collect" },
    { id: "use-of-information", title: "Use of Your Information" },
    {
      id: "disclosure-of-information",
      title: "Disclosure of Your Information",
    },
    { id: "data-security", title: "Data Security" },
    { id: "data-retention", title: "Data Retention" },
    { id: "privacy-rights", title: "Your Privacy Rights" },
    { id: "cookies", title: "Cookies and Tracking Technologies" },
    { id: "childrens-privacy", title: "Children's Privacy" },
    { id: "third-party-links", title: "Third-Party Links" },
    { id: "international-data", title: "International Data Transfers" },
    { id: "changes", title: "Changes to Privacy Policy" },
    { id: "contact-us", title: "Contact Us" },
    { id: "data-protection-officer", title: "Data Protection Officer" },
    { id: "grievance-redressal", title: "Grievance Redressal" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Mobile Table of Contents */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-20 md:hidden">
          <div className="bg-white w-5/6 max-w-md h-full overflow-y-auto shadow-xl p-4">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-lg">Table of Contents</h3>
              <button onClick={toggleMobileMenu} className="text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <nav>
              <ul className="space-y-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className={`block py-2 px-3 rounded ${
                        activeSection === section.id
                          ? "bg-blue-100 text-blue-700"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}

      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-18">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Desktop Sidebar - Table of Contents */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-24 bg-white p-5 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-4 text-gray-800">
                Table of Contents
              </h3>
              <nav>
                <ul className="space-y-1">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className={`block py-1.5 px-3 rounded text-sm ${
                          activeSection === section.id
                            ? "bg-blue-100 text-blue-700 font-medium"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">
                  KAMWALAA - PRIVACY POLICY
                </h1>
                <p className="text-gray-500 mt-2">Last Updated: May 21, 2025</p>
              </div>

              {/* Introduction */}
              <section id="introduction" className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  1. INTRODUCTION
                </h2>
                <p className="text-gray-700 mb-4">
                  Kamwalaa Private Limited ("Kamwalaa", "we", "us", or "our") is
                  committed to protecting your privacy and ensuring the security
                  of your personal information. This Privacy Policy explains how
                  we collect, use, disclose, and safeguard your information when
                  you use our website (https://www.kamwalaa.com) and mobile
                  application (collectively, the "Platform").
                </p>
                <p className="text-gray-700">
                  By accessing or using our Platform, you consent to the
                  practices described in this Privacy Policy. If you do not
                  agree with the terms of this Privacy Policy, please do not
                  access or use our Platform.
                </p>
              </section>

              {/* Information We Collect */}
              <section id="information-we-collect" className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  2. INFORMATION WE COLLECT
                </h2>
                <p className="text-gray-700 mb-4">
                  We collect the following types of information:
                </p>

                <h3 className="text-xl font-medium text-gray-800 mb-3">
                  2.1 Personal Information
                </h3>

                <h4 className="text-lg font-medium text-gray-800 mb-2">
                  For Customers:
                </h4>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-1">
                  <li>
                    Contact information (name, email address, phone number,
                    residential address)
                  </li>
                  <li>Account login credentials</li>
                  <li>
                    Payment information (credit/debit card details, UPI IDs,
                    bank account information)
                  </li>
                  <li>Service booking history</li>
                  <li>Communication preferences</li>
                  <li>IP address and device information</li>
                  <li>Location data (with your permission)</li>
                  <li>Profile pictures (if uploaded)</li>
                </ul>

                <h4 className="text-lg font-medium text-gray-800 mb-2">
                  For Service Professionals:
                </h4>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-1">
                  <li>
                    Contact information (name, email address, phone number,
                    residential address)
                  </li>
                  <li>
                    Identity verification information (government ID proofs,
                    photographs)
                  </li>
                  <li>Professional qualifications and skills</li>
                  <li>Service history and performance metrics</li>
                  <li>Banking details for payment processing</li>
                  <li>Location data (with permission)</li>
                  <li>
                    Background verification information (where applicable)
                  </li>
                </ul>

                <h3 className="text-xl font-medium text-gray-800 mb-3">
                  2.2 Non-Personal Information
                </h3>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-1">
                  <li>Browser type and version</li>
                  <li>Operating system information</li>
                  <li>Access times and dates</li>
                  <li>Pages viewed on our Platform</li>
                  <li>Referring website addresses</li>
                  <li>Platform usage patterns</li>
                  <li>Device identifiers</li>
                </ul>

                <h3 className="text-xl font-medium text-gray-800 mb-3">
                  2.3 Information Collection Methods
                </h3>
                <p className="text-gray-700 mb-2">
                  We collect information through:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>
                    Direct submission when you create an account or book
                    services
                  </li>
                  <li>Automated technologies (cookies, web beacons, pixels)</li>
                  <li>
                    Third-party service providers (payment processors, analytics
                    providers)
                  </li>
                  <li>Communications with our customer service team</li>
                  <li>Service feedback and reviews</li>
                  <li>Location services (with your permission)</li>
                </ul>
              </section>

              {/* Use of Information */}
              <section id="use-of-information" className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  3. USE OF YOUR INFORMATION
                </h2>
                <p className="text-gray-700 mb-4">
                  We use your information for the following purposes:
                </p>

                <h3 className="text-xl font-medium text-gray-800 mb-3">
                  3.1 Service Provision
                </h3>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-1">
                  <li>Creating and managing your account</li>
                  <li>Processing service bookings and payments</li>
                  <li>
                    Connecting Customers with appropriate Service Professionals
                  </li>
                  <li>Sending booking confirmations and updates</li>
                  <li>Facilitating communication between parties</li>
                </ul>

                <h3 className="text-xl font-medium text-gray-800 mb-3">
                  3.2 Platform Improvement
                </h3>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-1">
                  <li>Analyzing usage patterns to enhance user experience</li>
                  <li>Troubleshooting technical issues</li>
                  <li>Developing new features and services</li>
                  <li>Conducting market research and analysis</li>
                </ul>

                <h3 className="text-xl font-medium text-gray-800 mb-3">
                  3.3 Communication
                </h3>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-1">
                  <li>Sending service-related notifications</li>
                  <li>Providing customer support</li>
                  <li>
                    Sending promotional offers and updates (with your consent)
                  </li>
                  <li>Conducting surveys and collecting feedback</li>
                </ul>

                <h3 className="text-xl font-medium text-gray-800 mb-3">
                  3.4 Security and Compliance
                </h3>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-1">
                  <li>Verifying user identity</li>
                  <li>Preventing fraud and unauthorized access</li>
                  <li>Complying with legal obligations</li>
                  <li>Enforcing our Terms and Conditions</li>
                  <li>Resolving disputes</li>
                </ul>

                <h3 className="text-xl font-medium text-gray-800 mb-3">
                  3.5 Personalization
                </h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Customizing your experience based on preferences</li>
                  <li>Recommending relevant services</li>
                  <li>Providing location-based service options</li>
                </ul>
              </section>

              {/* Disclosure of Information */}
              <section id="disclosure-of-information" className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  4. DISCLOSURE OF YOUR INFORMATION
                </h2>
                <p className="text-gray-700 mb-4">
                  We may share your information with:
                </p>

                <h3 className="text-xl font-medium text-gray-800 mb-3">
                  4.1 Service Professionals
                </h3>
                <p className="text-gray-700 mb-4">
                  When you book a service, we share relevant information with
                  the assigned Service Professional to facilitate service
                  delivery, including your name, contact details, service
                  location, and specific service requirements.
                </p>

                <h3 className="text-xl font-medium text-gray-800 mb-3">
                  4.2 Service Partners
                </h3>
                <p className="text-gray-700 mb-4">
                  We may share information with third-party service partners who
                  assist in providing specific services or products through our
                  Platform.
                </p>

                <h3 className="text-xl font-medium text-gray-800 mb-3">
                  4.3 Payment Processors
                </h3>
                <p className="text-gray-700 mb-4">
                  We share payment information with secure third-party payment
                  processors to complete transactions.
                </p>

                <h3 className="text-xl font-medium text-gray-800 mb-3">
                  4.4 Service Providers
                </h3>
                <p className="text-gray-700 mb-4">
                  We may engage trusted third parties to perform services on our
                  behalf, such as hosting, data analysis, customer service, and
                  marketing assistance.
                </p>

                <h3 className="text-xl font-medium text-gray-800 mb-3">
                  4.5 Legal Requirements
                </h3>
                <p className="text-gray-700 mb-4">
                  We may disclose your information if required to do so by law
                  or in response to valid requests by public authorities (e.g.,
                  court orders, government agencies).
                </p>

                <h3 className="text-xl font-medium text-gray-800 mb-3">
                  4.6 Business Transfers
                </h3>
                <p className="text-gray-700 mb-4">
                  If Kamwalaa is involved in a merger, acquisition, or sale of
                  all or a portion of its assets, your information may be
                  transferred as part of that transaction.
                </p>

                <h3 className="text-xl font-medium text-gray-800 mb-3">
                  4.7 With Your Consent
                </h3>
                <p className="text-gray-700">
                  We may share your information with other parties with your
                  explicit consent.
                </p>
              </section>

              {/* Data Security */}
              <section id="data-security" className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  5. DATA SECURITY
                </h2>
                <p className="text-gray-700 mb-4">
                  We implement appropriate technical and organizational measures
                  to protect your personal information from unauthorized access,
                  disclosure, alteration, and destruction, including:
                </p>

                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-1">
                  <li>Encryption of sensitive data in transit and at rest</li>
                  <li>Regular security assessments and penetration testing</li>
                  <li>Access controls and authentication procedures</li>
                  <li>Regular security training for our staff</li>
                  <li>Secure data storage practices</li>
                  <li>Monitoring systems for suspicious activities</li>
                </ul>

                <p className="text-gray-700">
                  However, no method of transmission over the internet or
                  electronic storage is 100% secure. While we strive to use
                  commercially acceptable means to protect your personal
                  information, we cannot guarantee its absolute security.
                </p>
              </section>

              {/* Data Retention */}
              <section id="data-retention" className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  6. DATA RETENTION
                </h2>
                <p className="text-gray-700 mb-4">
                  We retain your personal information for as long as necessary
                  to fulfill the purposes outlined in this Privacy Policy,
                  unless a longer retention period is required or permitted by
                  law. The criteria used to determine our retention periods
                  include:
                </p>

                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-1">
                  <li>
                    The length of time we have an ongoing relationship with you
                  </li>
                  <li>Our legal obligations</li>
                  <li>The application of relevant statutes of limitations</li>
                  <li>Resolution of disputes</li>
                  <li>Enforcement of our agreements</li>
                </ul>

                <p className="text-gray-700">
                  When we no longer need your personal information, we will
                  securely delete or anonymize it.
                </p>
              </section>

              {/* Privacy Rights */}
              <section id="privacy-rights" className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  7. YOUR PRIVACY RIGHTS
                </h2>
                <p className="text-gray-700 mb-4">
                  Depending on your location, you may have certain rights
                  regarding your personal information, including:
                </p>

                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  7.1 Access and Information
                </h3>
                <p className="text-gray-700 mb-3">
                  You have the right to request access to the personal
                  information we hold about you and receive information about
                  how we process it.
                </p>

                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  7.2 Correction
                </h3>
                <p className="text-gray-700 mb-3">
                  You have the right to request correction of inaccurate or
                  incomplete personal information.
                </p>

                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  7.3 Deletion
                </h3>
                <p className="text-gray-700 mb-3">
                  You have the right to request deletion of your personal
                  information under certain circumstances.
                </p>

                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  7.4 Restriction
                </h3>
                <p className="text-gray-700 mb-3">
                  You have the right to request restriction of processing of
                  your personal information under certain circumstances.
                </p>

                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  7.5 Data Portability
                </h3>
                <p className="text-gray-700 mb-3">
                  You have the right to receive your personal information in a
                  structured, commonly used, and machine-readable format.
                </p>

                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  7.6 Objection
                </h3>
                <p className="text-gray-700 mb-3">
                  You have the right to object to the processing of your
                  personal information based on legitimate interests or direct
                  marketing.
                </p>

                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  7.7 Consent Withdrawal
                </h3>
                <p className="text-gray-700 mb-3">
                  Where we rely on your consent to process your personal
                  information, you have the right to withdraw your consent at
                  any time.
                </p>

                <p className="text-gray-700">
                  To exercise any of these rights, please contact us using the
                  information provided in the "Contact Us" section below.
                </p>
              </section>

              {/* Cookies */}
              <section id="cookies" className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  8. COOKIES AND TRACKING TECHNOLOGIES
                </h2>

                <h3 className="text-xl font-medium text-gray-800 mb-3">
                  8.1 Cookies
                </h3>
                <p className="text-gray-700 mb-4">
                  We use cookies and similar tracking technologies to track
                  activity on our Platform and store certain information.
                  Cookies are files with a small amount of data that may include
                  an anonymous unique identifier.
                </p>

                <h3 className="text-xl font-medium text-gray-800 mb-3">
                  8.2 Types of Cookies We Use
                </h3>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-1">
                  <li>
                    <strong>Essential cookies</strong>: Required for the
                    operation of our Platform
                  </li>
                  <li>
                    <strong>Functional cookies</strong>: Enable personalized
                    features
                  </li>
                  <li>
                    <strong>Analytical cookies</strong>: Help us understand how
                    users interact with our Platform
                  </li>
                  <li>
                    <strong>Advertising cookies</strong>: Used to deliver
                    relevant advertisements
                  </li>
                </ul>

                <h3 className="text-xl font-medium text-gray-800 mb-3">
                  8.3 Cookie Control
                </h3>
                <p className="text-gray-700">
                  Most web browsers allow you to control cookies through their
                  settings preferences. However, if you limit the ability of
                  websites to set cookies, you may impact your overall user
                  experience.
                </p>
              </section>

              {/* Children's Privacy */}
              <section id="childrens-privacy" className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  9. CHILDREN'S PRIVACY
                </h2>
                <p className="text-gray-700">
                  Our Platform is not intended for children under the age of 18.
                  We do not knowingly collect personal information from children
                  under 18. If you are a parent or guardian and believe that
                  your child has provided us with personal information, please
                  contact us immediately. If we become aware that we have
                  collected personal information from children without
                  verification of parental consent, we will take steps to remove
                  that information from our servers.
                </p>
              </section>

              {/* Third-Party Links */}
              <section id="third-party-links" className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  10. THIRD-PARTY LINKS
                </h2>
                <p className="text-gray-700">
                  Our Platform may contain links to third-party websites and
                  services. We have no control over and assume no responsibility
                  for the content, privacy policies, or practices of any
                  third-party sites or services. We encourage you to review the
                  privacy policies of any third-party sites you visit.
                </p>
              </section>

              {/* International Data Transfers */}
              <section id="international-data" className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  11. INTERNATIONAL DATA TRANSFERS
                </h2>
                <p className="text-gray-700 mb-4">
                  Your information may be transferred to and processed in
                  countries other than the country in which you are a resident.
                  These countries may have data protection laws that are
                  different from the laws of your country.
                </p>
                <p className="text-gray-700">
                  We have implemented appropriate safeguards to ensure that your
                  personal information remains protected in accordance with this
                  Privacy Policy when transferred internationally. These
                  safeguards include data transfer agreements incorporating
                  standard data protection clauses.
                </p>
              </section>

              {/* Changes to Privacy Policy */}
              <section id="changes" className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  12. CHANGES TO THIS PRIVACY POLICY
                </h2>
                <p className="text-gray-700 mb-4">
                  We may update our Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  this page and updating the "Last Updated" date at the top of
                  this Privacy Policy.
                </p>
                <p className="text-gray-700">
                  You are advised to review this Privacy Policy periodically for
                  any changes. Changes to this Privacy Policy are effective when
                  they are posted on this page.
                </p>
              </section>

              {/* Contact Us */}
              <section id="contact-us" className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  13. CONTACT US
                </h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions, concerns, or requests regarding
                  this Privacy Policy or our privacy practices, please contact
                  us at:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-gray-800 font-medium mb-2">
                    Kamwalaa Private Limited
                  </p>
                  <ul className="text-gray-700 space-y-1">
                    <li>
                      Email:{" "}
                      <a
                        href="mailto:privacy@kamwalaa.com"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        privacy@kamwalaa.com
                      </a>
                    </li>
                    <li>Address: [Company Address]</li>
                    <li>Phone: [Company Phone Number]</li>
                  </ul>
                </div>
              </section>

              {/* Data Protection Officer */}
              <section id="data-protection-officer" className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  14. DATA PROTECTION OFFICER
                </h2>
                <p className="text-gray-700 mb-4">
                  We have appointed a Data Protection Officer who is responsible
                  for overseeing questions in relation to this Privacy Policy.
                  You can contact our Data Protection Officer at:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <ul className="text-gray-700">
                    <li>
                      Email:{" "}
                      <a
                        href="mailto:dpo@kamwalaa.com"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        dpo@kamwalaa.com
                      </a>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Grievance Redressal */}
              <section id="grievance-redressal" className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  15. GRIEVANCE REDRESSAL
                </h2>
                <p className="text-gray-700 mb-4">
                  If you have any grievances regarding the processing of your
                  personal information, you may contact our Grievance Officer:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <ul className="text-gray-700 space-y-1">
                    <li>Name: [Grievance Officer Name]</li>
                    <li>
                      Email:{" "}
                      <a
                        href="mailto:grievance@kamwalaa.com"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        grievance@kamwalaa.com
                      </a>
                    </li>
                    <li>Address: [Company Address]</li>
                  </ul>
                </div>
                <p className="text-gray-700 mt-4">
                  We will address your concerns and attempt to resolve any
                  privacy issues in a timely manner.
                </p>
              </section>

              {/* Acknowledgement */}
              <div className="mt-10 pt-6 border-t border-gray-200">
                <p className="text-gray-700 text-center">
                  By using the Kamwalaa Platform, you acknowledge that you have
                  read and understood this Privacy Policy and agree to the
                  collection, use, and disclosure of your information as
                  described herein.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
    </div>
  );
}
