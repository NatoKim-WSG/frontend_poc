const historyParagraphs = [
  "From its humble beginnings in 1936 as the Division of Investigation under the Department of Justice, the National Bureau of Investigation (NBI) has evolved into the country's premier investigative agency.",
  "The NBI was modeled after the United States' Federal Bureau of Investigation (FBI) to professionalize the detection and prosecution of crimes in the Philippines.",
  "Today, the Bureau continues to pursue justice with integrity, competence, and service to the Filipino people.",
];

export default function HistorySection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#003B7A] inline-block relative pb-4">
          Our History
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-red-600"></span>
        </h2>
        <p className="text-lg text-gray-600 mt-6">
          From its humble beginnings to becoming the Philippines' premier investigative agency.
        </p>

        <div className="mt-10 space-y-6 text-gray-700 leading-relaxed">
          {historyParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
