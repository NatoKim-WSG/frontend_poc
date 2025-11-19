const steps = [
  {
    title: "Create or Log In",
    description: "Register as a new applicant or continue an existing application using your email and password.",
    icon: "fa-user-check",
  },
  {
    title: "Complete Details",
    description: "Fill out your personal information and choose the branch and schedule for your biometrics.",
    icon: "fa-clipboard-list",
  },
  {
    title: "Pay & Attend",
    description: "Pay the processing fee using available channels and appear at the branch on your scheduled date.",
    icon: "fa-money-check-dollar",
  },
];

export default function StepsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold text-[#003B7A] mb-2">How It Works</h2>
        <p className="text-gray-600 mb-10">Follow these three steps to complete your NBI Clearance application.</p>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={step.title} className="bg-[#F5F8FD] rounded-3xl p-8 border border-gray-100 shadow">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#0B2C5A] text-white flex items-center justify-center mb-4 text-xl font-semibold">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold text-[#0B2C5A] mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
