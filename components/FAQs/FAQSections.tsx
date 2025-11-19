type BulletItem = string | { text: string; children: string[] };
type InfoCard = { title: string; bullets: string[] };

type FaqItem = {
  question: string;
  answer?: string;
  steps?: string[];
  bullets?: BulletItem[];
  paragraphs?: string[];
  cards?: InfoCard[];
  callout?: {
    text: string;
    type: "info" | "warning";
  };
};

type FaqCategory = {
  id: string;
  title: string;
  description: string;
  items: FaqItem[];
};

const categories: FaqCategory[] = [
  {
    id: "apply",
    title: "How to Apply",
    description: "Information for how to apply and related topics.",
    items: [
      {
        question: "What is an NBI Clearance, and why is it important to renew it?",
        paragraphs: [
          "An NBI Clearance is a nationwide record check issued by the National Bureau of Investigation.",
        ],
        bullets: [
          "Required for job applications, local or overseas employment, and visa processing",
          "Recognized as a valid identification document for many government and private transactions",
          "Needs to be renewed to keep your record updated and avoid processing delays",
        ],
      },
      {
        question: "What are the requirements for renewing my NBI Clearance?",
        answer: "You will need:",
        bullets: [
          "Your old or expired NBI Clearance.",
          {
            text: "Choose any two of the following valid IDs (original copies in good condition):",
            children: ["PhilSys ID (National ID)", "Passport", "Driver's License", "UMID / GSIS ID", "Postal ID"],
          },
        ],
      },
    ],
  },
  {
    id: "new",
    title: "New NBI Clearance",
    description: "Information for new NBI clearance and related topics.",
    items: [
      {
        question: "How do I apply for a new NBI Clearance?",
        answer: "To apply for a new clearance:",
        steps: [
          "Visit the NBI Clearance website and create an account.",
          "Fill out the online application form with your personal information.",
          "Select your preferred NBI branch for the biometric capture.",
          "Pay the processing fee of ₱130 plus ₱25 system fee.",
          "Visit the branch on your scheduled appointment with valid IDs.",
          "Complete the biometric capture (photo, fingerprints) at the branch.",
          "Receive your NBI Clearance on the same day, unless there's a 'hit'.",
        ],
      },
    ],
  },
  {
    id: "renewal",
    title: "Renewal Process",
    description: "Information for renewals and related topics.",
    items: [
      {
        question: "What are the options for renewing an NBI Clearance?",
        answer: "You can choose between:",
        cards: [
          {
            title: "1. Quick Renewal (Online)",
            bullets: [
              "Entire process is completed online.",
              "Valid only for clearances issued from October 16, 2016 onwards.",
              "Total cost: ₱510 (₱350 renewal fee + ₱160 delivery fee).",
              "No personal appearance required; clearance is delivered to your address.",
            ],
          },
          {
            title: "2. Regular Renewal (In-Person)",
            bullets: [
              "Requires setting an appointment and visiting an NBI office.",
              "Total cost: ₱160 (₱130 processing fee + ₱30 system fee).",
              "Same-day issuance possible if no record-checking is needed.",
            ],
          },
        ],
      },
      {
        question: "How do I renew my NBI Clearance online?",
        answer: "To utilize Quick Renewal:",
        steps: [
          "Visit the NBI Clearance website.",
          "Provide your old NBI number, personal details, and address.",
          "Pay the renewal and delivery fees online through available payment channels.",
          "Await delivery of your renewed clearance.",
        ],
      },
      {
        question: "How do I renew my NBI Clearance in person?",
        answer: "For Regular Renewal:",
        steps: [
          "Create or sign into an account on the NBI Clearance website.",
          "Set an appointment at your preferred NBI branch.",
          "Pay the renewal fee using the available payment channels.",
          "Visit the branch on your scheduled date with the required documents.",
          "Complete the biometric and photo capture process and wait for your clearance issuance.",
        ],
      },
      {
        question: "What happens if I lose my old NBI Clearance or NBI number?",
        paragraphs: [
          "If you can no longer locate your previous clearance or reference number, the system treats you as a new applicant.",
        ],
        callout: {
          text: "Please bring at least two valid IDs when applying for a new clearance.",
          type: "warning",
        },
      },
    ],
  },
  {
    id: "international",
    title: "International Services",
    description: "Information for international services and related topics.",
    items: [
      {
        question: "What if I am abroad and need to renew my NBI Clearance?",
        steps: [
          "Complete required documents, including a photocopy of your passport and a recent 2x2 photo.",
          "Send the documents to an authorized representative in the Philippines or directly mail them to the NBI main office.",
          "Await delivery of the renewed clearance, which may take up to two months.",
        ],
      },
      {
        question: "Can foreigners renew their NBI Clearance in the Philippines?",
        steps: [
          "Submit your old NBI Clearance, passport, and Alien Certificate of Registration (ACR I-Card).",
          "Set an appointment at the NBI main office or a regional branch.",
          "Complete the biometrics and other required processes.",
        ],
      },
    ],
  },
  {
    id: "ids",
    title: "ID Requirements",
    description: "Information for ID requirements and related topics.",
    items: [
      {
        question: "What valid IDs are accepted for NBI Clearance application?",
        answer: "At least two of the following IDs are accepted (must be original copies in good condition):",
        bullets: [
          "Philippine Passport",
          "Driver's License",
          "GSIS ID/UMID",
          "PRC ID",
          "School ID (for students)",
          "PhilHealth ID",
          "Voter's Certification with photo",
          "PhilSys ID (National ID)",
          "SSS ID/UMID",
          "Company ID (for employed applicants)",
          "Pag-IBIG ID",
          "Barangay Certification with photo",
        ],
      },
    ],
  },
  {
    id: "fees",
    title: "Fees and Payment",
    description: "Information for fees and payment and related topics.",
    items: [
      {
        question: "How much does it cost to get an NBI Clearance?",
        answer: "Fees vary by service:",
        bullets: [
          "New Application: ₱155 (₱130 processing fee + ₱25 system fee)",
          "Quick Renewal (Online): ₱510 (₱350 renewal fee + ₱160 delivery fee)",
          "Regular Renewal (In-Person): ₱160 (₱130 processing fee + ₱30 system fee)",
        ],
      },
      {
        question: "What payment methods are accepted?",
        bullets: ["GCash", "PayMaya", "QR PH", "Over-the-counter Bayad Centers and partner banks"],
      },
    ],
  },
  {
    id: "help",
    title: "Help and Assistance",
    description: "Information for help and assistance and related topics.",
    items: [
      {
        question: "Who should I contact for additional inquiries or updates on my clearance status?",
        paragraphs: ["For inquiries or to check the status of your clearance, reach out through the NBI hotline:"],
        callout: {
          text: "8524-1277 or 8523-8231 local 5509 (Office hours: Monday to Friday, 8:00 AM - 5:00 PM)",
          type: "info",
        },
      },
      {
        question: 'What is a "hit" and what happens if I have one?',
        bullets: [
          'A "hit" means your name matches someone with a record in the NBI database.',
          "NBI verifies the match to ensure you are not the person with the record.",
          "Verification usually takes 1-2 weeks, depending on the case complexity.",
          "You will be notified when to return for the release of your clearance.",
        ],
      },
    ],
  },
];

const calloutClasses = {
  info: "bg-blue-50 text-[#0B2C5A]",
  warning: "bg-red-50 text-red-700",
};

export default function FAQSections() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-[260px,1fr] gap-10">
        <aside className="space-y-6 md:sticky md:top-24 self-start">
          <div className="bg-[#F5F8FD] rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[#003B7A] mb-4">FAQ Categories</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              {categories.map((category) => (
                <li key={category.id}>
                  <a href={`#${category.id}`} className="flex items-center gap-2 hover:text-[#003B7A] transition-colors">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#003B7A]"></span>
                    {category.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#0B2C5A] text-white rounded-2xl p-6 shadow-lg">
            <p className="text-sm uppercase tracking-wider text-blue-200 mb-2">Need Immediate Help?</p>
            <h4 className="text-xl font-semibold mb-4">Our support team is available during office hours.</h4>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-[#0B2C5A] font-semibold px-4 py-2 rounded-full"
            >
              <i className="fas fa-phone"></i>
              Contact Support
            </a>
          </div>
        </aside>

        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category.id} id={category.id} className="scroll-mt-24">
              <h2 className="text-xl md:text-2xl font-bold text-[#003B7A] mb-2">{category.title}</h2>
              <p className="text-xs md:text-sm text-gray-600 mb-5">{category.description}</p>

              <div className="space-y-5">
                {category.items.map((item) => (
                  <div key={item.question} className="bg-white rounded-2xl border border-gray-100 shadow p-5">
                    <div className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#0B2C5A] text-white text-sm flex-shrink-0">
                        <i className="fas fa-question"></i>
                      </span>
                      <div className="flex-1">
                        <h3 className="text-base md:text-lg font-semibold text-[#0B2C5A] mb-2">{item.question}</h3>
                        {item.paragraphs &&
                          item.paragraphs.map((paragraph) => (
                            <p key={paragraph} className="text-gray-700 text-sm md:text-base mb-2 leading-relaxed">
                              {paragraph}
                            </p>
                          ))}
                        {item.answer && (
                          <p className="text-gray-700 text-sm md:text-base mb-3 leading-relaxed">{item.answer}</p>
                        )}

                        {item.cards && (
                          <div className="space-y-3 mt-3">
                            {item.cards.map((card) => (
                              <div
                                key={card.title}
                                className="bg-[#E9F2FF] border border-[#B8D4FF] rounded-xl p-3 text-sm text-gray-700"
                              >
                                <p className="font-semibold text-[#0B2C5A] mb-1">{card.title}</p>
                                <ul className="list-disc pl-6 space-y-1">
                                  {card.bullets.map((bullet) => (
                                    <li key={bullet}>{bullet}</li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}

                        {item.steps && (
                          <ol className="list-decimal pl-5 space-y-1.5 text-gray-700 text-sm">
                            {item.steps.map((step) => (
                              <li key={step}>{step}</li>
                            ))}
                          </ol>
                        )}

                        {item.bullets && (
                          <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
                            {item.bullets.map((bullet) =>
                              typeof bullet === "string" ? (
                                <li key={bullet}>{bullet}</li>
                              ) : (
                                <li key={bullet.text}>
                                  <p>{bullet.text}</p>
                                  <ul className="list-disc pl-5 mt-1 space-y-1 text-gray-600">
                                    {bullet.children.map((child) => (
                                      <li key={child}>{child}</li>
                                    ))}
                                  </ul>
                                </li>
                              ),
                            )}
                          </ul>
                        )}

                        {item.callout && (
                          <div className={`mt-4 p-4 rounded-2xl text-sm ${calloutClasses[item.callout.type]}`}>
                            {item.callout.text}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
