const policySections = [
  {
    title: "1. Information We Collect",
    description:
      "We collect personal information that you provide directly to us—such as your name, contact details, date of birth, and identification information—when you register for an account or apply for an NBI Clearance. We also gather data about how you use our services, including transaction history and appointment information.",
  },
  {
    title: "2. How We Use Your Information",
    bullets: [
      "Process your clearance application and provide our services",
      "Communicate with you about your account and appointments",
      "Maintain and improve our systems and service delivery",
      "Comply with legal obligations and government regulations",
      "Detect and prevent fraudulent activities or security breaches",
    ],
  },
  {
    title: "3. Information Sharing",
    description: "We may share your personal information with:",
    bullets: [
      "Government agencies for background verification purposes",
      "Service providers who assist us in delivering our services",
      "Law enforcement agencies when required by law or court order",
    ],
    note: "We will never sell or rent your personal information to third parties for marketing purposes.",
  },
  {
    title: "4. Data Security",
    description:
      "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, accidental loss, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    title: "5. Your Rights",
    bullets: [
      "Access and review your personal information",
      "Request correction of inaccurate or incomplete data",
      "Request deletion of your information, subject to legal retention obligations",
      "Object to certain processing activities",
      "Withdraw consent where processing is based on consent",
    ],
  },
  {
    title: "6. Cookies and Tracking Technologies",
    description:
      "We use cookies and similar technologies to enhance your experience on our website, analyze usage patterns, and improve our services. You can control cookie settings through your browser, though disabling certain cookies may limit your ability to use some features.",
  },
  {
    title: "7. Changes to This Policy",
    description:
      "We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of significant updates by posting the revised policy on our website and through other appropriate channels.",
  },
  {
    title: "8. Contact Information",
    description:
      "If you have questions or concerns about this Privacy Policy or our data practices, please contact our Data Protection Officer:",
    contact: {
      organization: "National Bureau of Investigation",
      address: "Diosdado Macapagal Boulevard, Filinvest Cyberzone Bay City, Pasay, Philippines",
      email: "privacy@nbi.gov.ph",
      phone: "(02) 8525-9406",
    },
  },
];

export default function PolicyContent() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-6 space-y-10">
        {policySections.map((section) => (
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
            {section.note && <p className="text-gray-600 italic">{section.note}</p>}
            {section.contact && (
              <div className="bg-[#F5F8FD] border border-gray-100 rounded-2xl p-6 text-gray-700">
                <p className="font-semibold">{section.contact.organization}</p>
                <p>{section.contact.address}</p>
                <p className="mt-2">
                  Email: <a href={`mailto:${section.contact.email}`} className="text-[#0B2C5A] font-medium">{section.contact.email}</a>
                </p>
                <p>Phone: {section.contact.phone}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
