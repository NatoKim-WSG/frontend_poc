export default function IntroSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#003B7A] inline-block relative pb-4">
          NBI Branches Nationwide
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-red-600"></span>
        </h2>
        <p className="text-lg text-gray-600 mt-6">
          We have offices across the Philippines to serve you better. Browse the list below to find the branch closest
          to you and contact them directly for inquiries or biometrics scheduling.
        </p>
      </div>
    </section>
  );
}
