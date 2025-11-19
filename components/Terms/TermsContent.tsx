const terms = [
  {
    title: "1. Introduction",
    description:
      "Welcome to the National Bureau of Investigation (NBI) Clearance Processing System. By accessing or using our website and services, you agree to be bound by these Terms of Service.",
  },
  {
    title: "2. Use of Services",
    description:
      "Our services are provided solely for processing NBI clearance applications and renewals. You agree to use the services only for their intended purposes and in compliance with all applicable laws and regulations.",
  },
  {
    title: "3. User Responsibilities",
    bullets: [
      "Provide accurate and complete information during registration and application processes",
      "Update your information as necessary to maintain its accuracy",
      "Comply with all appointment schedules and procedures",
      "Use the system in a manner that does not interfere with its functionality",
      "Refrain from any activity that could compromise system security or misuse the service",
    ],
  },
  {
    title: "4. Privacy Policy",
    description:
      "Our Privacy Policy explains how we collect, use, and protect your personal information. By using our services, you consent to the data practices described in the Privacy Policy.",
  },
  {
    title: "5. Limitation of Liability",
    description:
      "The NBI Clearance Processing System is provided on an \"as is\" and \"as available\" basis. We do not guarantee uninterrupted or error-free service and shall not be liable for indirect, incidental, special, consequential, or punitive damages resulting from your use of the system.",
  },
  {
    title: "6. Changes to Terms",
    description:
      "We reserve the right to modify these Terms at any time. We will provide notice of significant changes by posting the updated Terms on our website. Continued use of the services constitutes acceptance of the updated Terms.",
  },
  {
    title: "7. Governing Law",
    description:
      "These Terms shall be governed by and construed in accordance with the laws of the Republic of the Philippines, without regard to its conflict of law provisions.",
  },
  {
    title: "8. Contact Information",
    description:
      "If you have questions about these Terms, please contact the National Bureau of Investigation, Diosdado Macapagal Boulevard, Filinvest Cyberzone Bay City, Pasay, Philippines or email info@nbi.gov.ph.",
  },
];

export default function TermsContent() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-6 space-y-10">
        {terms.map((section) => (
          <div key={section.title} className="space-y-3">
            <h2 className="text-xl font-semibold text-[#0B2C5A]">{section.title}</h2>
            {section.description && <p className="text-gray-700 leading-relaxed">{section.description}</p>}
            {section.bullets && (
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                {section.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
