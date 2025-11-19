const evolutionParagraphs = [
  "During World War II, operations were suspended following the surrender of the Commonwealth Government to the occupying Japanese forces. After liberation in 1945, the Division of Investigation (DI) was reorganized with the help of the United States Army Counterintelligence Corps.",
  "On June 19, 1947, Republic Act No. 157 renamed the DI to the Bureau of Investigation. Shortly after, Executive Order No. 94 amended R.A. 157 to adopt the official name National Bureau of Investigation (NBI).",
  "The NBI mirrors the FBI's best practices, adapting them to the Philippine setting in order to solve major and high-profile cases that require sophisticated investigative techniques.",
];

export default function EvolutionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
            <img
              src="https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=900&q=60"
              alt="NBI operations"
              className="w-full h-[380px] object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-yellow-400 text-gray-900 rounded-2xl px-8 py-6 shadow-xl">
            <p className="text-5xl font-black leading-none mb-1">88</p>
            <p className="text-sm uppercase tracking-wider font-semibold">Years of Service</p>
            <p className="text-xs text-gray-800">(Since 1936)</p>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-[#0B1F3F] uppercase tracking-wider mb-2">Evolution Through The Years</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#003B7A] mb-6">A Tradition of Excellence</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            {evolutionParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
