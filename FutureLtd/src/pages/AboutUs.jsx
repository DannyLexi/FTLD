import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-[#F1F4FF] text-[#1E2424] min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#3A8FFF] mb-12">
          Welcome to Future Professionals Ltd
        </h1>

        {/* Introduction */}
        <section className="bg-white p-8 rounded-2xl shadow-md mb-16 border-l-4 border-[#92FFBF] space-y-5 leading-relaxed text-lg">
          <p>
            For over 9 years, we’ve built a reputation for excellence by connecting exceptional talent
            with leading companies across London and surrounding areas.
          </p>
          <p>
            As a recruitment-only firm, we’re known for quality, integrity, and delivering results that matter.
          </p>
          <p>
            Headquartered in Romford, Essex, our reach continues to grow thanks to our deep industry knowledge
            and innovative approach.
          </p>
          <p>
            We now offer temporary and contractual recruitment alongside our permanent services—ensuring
            flexible, customized solutions for both clients and candidates.
          </p>
          <p>
            At our core, we’re passionate about connecting the right people with the right opportunities.
          </p>
        </section>

        {/* Services */}
        <h2 className="text-3xl font-semibold text-[#3A8FFF] mb-6 border-b-2 border-black pb-2">
          Our Services
        </h2>

        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-[#3A8FFF]">
            <h3 className="text-xl font-bold mb-4">Permanent Recruitment</h3>
            <ul className="list-disc pl-6 space-y-2 text-base">
              <li><strong>Recruitment Consultants:</strong> Leading roles in London’s dynamic hiring space.</li>
              <li><strong>Leadership & Management:</strong> Executive positions to lead and innovate.</li>
              <li><strong>Finance & Accounting:</strong> Strategic placements for financial growth.</li>
              <li><strong>Administration & Compliance:</strong> Key roles for operational excellence.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-[#3A8FFF]">
            <h3 className="text-xl font-bold mb-4">Temporary Recruitment</h3>
            <ul className="list-disc pl-6 space-y-2 text-base">
              <li><strong>Construction:</strong> Short-term and project-based hiring.</li>
              <li><strong>Hospitality:</strong> Agile roles in fast-paced environments.</li>
              <li><strong>Education:</strong> Supportive roles across academic institutions.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm md:col-span-2 border-t-4 border-[#3A8FFF]">
            <h3 className="text-xl font-bold mb-4">Contractual Recruitment</h3>
            <ul className="list-disc pl-6 space-y-2 text-base">
              <li><strong>Specialised Expertise:</strong> High-level consultants for critical projects.</li>
              <li><strong>Flexibility & Growth:</strong> Adaptable workforce solutions.</li>
              <li><strong>Diverse Industries:</strong> Including IT, Finance, and Construction.</li>
            </ul>
          </div>
        </section>

        {/* Meet Our Team */}
        <h2 className="text-3xl font-semibold text-[#3A8FFF] mb-6 border-b-2 border-black pb-2">
          Meet Our Team
        </h2>
        <p className="bg-white p-6 rounded-xl shadow-md mb-16 text-base leading-relaxed border-l-4 border-[#92FFBF]">
          Our experienced consultants combine industry expertise with a people-first mindset. We deliver tailored recruitment solutions across Construction, Finance, Hospitality, Education, Healthcare, Legal, and beyond—covering everything from entry-level to executive roles.
        </p>

        {/* Values */}
        <h2 className="text-3xl font-semibold text-[#3A8FFF] mb-6 border-b-2 border-black pb-2">
          Our Values
        </h2>
        <ul className="bg-white p-6 rounded-xl shadow-md mb-16 list-disc pl-6 space-y-3 text-base border-l-4 border-[#92FFBF]">
          <li><strong>Tailored Solutions:</strong> Recruitment strategies built around you.</li>
          <li><strong>Confidentiality & Trust:</strong> Integrity and discretion in every engagement.</li>
          <li><strong>Excellence Across Sectors:</strong> Precision and depth across all services.</li>
        </ul>

        {/* Working With Us */}
        <h2 className="text-3xl font-semibold text-[#3A8FFF] mb-6 border-b-2 border-black pb-2">
          Working With Us
        </h2>
        <ul className="bg-white p-6 rounded-xl shadow-md mb-4 list-disc pl-6 space-y-3 text-base border-l-4 border-[#92FFBF]">
          <li><strong>Collaborative Approach:</strong> We invest time in understanding your needs.</li>
          <li><strong>Efficiency & Quality:</strong> We deliver carefully matched, high-impact candidates.</li>
          <li><strong>24/7 Commitment:</strong> Always available to support your goals.</li>
          <li><strong>Nationwide Expertise:</strong> We recruit across the UK, from junior to senior levels.</li>
          <li><strong>No Obligation:</strong> You only pay once the placement is successful.</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
