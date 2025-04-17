import React from "react";
import { Link } from "react-router-dom";
import { Briefcase, Users, Building2 } from "lucide-react";
import {
  FaArrowRight,
  FaBriefcase,
  FaClock,
  FaFileContract,
  FaHeartbeat,
  FaChartLine,
  FaGraduationCap,
  FaGavel,
  FaConciergeBell,
  FaIndustry,
  FaHardHat,
  FaMapMarkerAlt,
} from "react-icons/fa";

// Dummy job data
const jobsData = [
  {
    title: "Senior Frontend Developer",
    location: "Accra, Ghana",
    type: "Full-time",
    salary: "$5,000/mo",
  },
  {
    title: "Marketing Specialist",
    location: "Remote",
    type: "Part-time",
    salary: "$2,000/mo",
  },
  {
    title: "UX Designer",
    location: "Kumasi, Ghana",
    type: "Contract",
    salary: "$3,500/mo",
  },
];

const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#f8fafc] py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Connecting <span className="text-blue-700 underline">Talents</span> with{" "}
              <span className="text-blue-700 underline">Opportunity</span>
            </h1>
            <p className="text-gray-600 text-lg">
              We help professionals and businesses thrive through tailored recruitment
              solutions across London and beyond.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link to="/for-employers">
                <button className="bg-green-500 text-white px-5 py-2 rounded-full hover:bg-green-600 transition">
                  I'm Hiring
                </button>
              </Link>
              <Link to="/for-jobseekers">
                <button className="border border-gray-700 text-gray-800 px-5 py-2 rounded-full hover:bg-gray-100 transition">
                  Find a Job
                </button>
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 pt-6 justify-center lg:justify-start">
              <div>
                <p className="text-xl font-semibold text-gray-900">20+</p>
                <p className="text-sm text-gray-600">Years Combined Expertise</p>
              </div>
              <div>
                <p className="text-xl font-semibold text-gray-900">1000+</p>
                <p className="text-sm text-gray-600">Successful Placements</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="h-3 w-3 bg-green-500 rounded-full inline-block" />
                <p className="text-sm text-gray-600">Available 24/7</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
            <img
              src="https://s3-alpha-sig.figma.com/img/8a37/427e/5d259d7068d84abaa26a904e59e04749?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=En1Fw81DrGF5rDmXDbOABVsiPxfrlpDj4n2fG8FFLUEGcHM92n5~uDkXWdbc7qhSIgGkJmg4K7ACaRsdF9UerDgZQuOuIxjkkZXuiTLrfymPu4pvqOmA3C0yqV3Mmw5yiTEQOgqCSeyRmdMS5HDbHtyA9dp5qGBppyzbzGumWTyVRA8dJ9kcJtcPZmVPHz4mltgc0dgj1QtvXbwhtNZkzyq5WP7rUw0vGDUFGlXl-7UQlNn3N9PGMCklg2xFSNXtVGQdm1BzrMaIh35BGsIR6vxODgKwANejS02D~6EGOefWOvZyDYfqLmlAPq9C7K2Fc7sEfFpmybVncfbSFJsiIw__"
              alt="Recruitment professionals"
              className="max-w-full h-auto bg-transparent"
            />
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-[#111827] py-16 text-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <img
              src="https://s3-alpha-sig.figma.com/img/8fe3/c2d2/e7065a15ec4e6f03d09b23bc86e63e8c?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=M0adtve3i-19TmhBQfvZh--SBn-f-QYkp5LhC4jaoXGHPjCri8P-hCK0dPBrIsRzCz3IO-B6XC96WRSCshYfcqWTAslXQaNyRsNMPYoQnZDsyGnsqI01msLDoIaFhRS2doVZ61tnNTQ3v5NaDOyIgXkd1dUKr-o1pQf8EeTLG6C~KkKQaj2G3RNmAp89RWdkVOLTZZnits9utO0kLfDnwDhr1-AmipMKhMhD~9HC~NGDqDjsZ09UWKPOkDioVhk7BRlma1e1FcBIjSIN7p0E~6qHrzhBeGUmveqEqh~CHDtsU9gd3YcQg~Ymy8ie9uZdyHI34l~Q1onhRp2uzpracg__"
              alt="Team collaboration"
              className="rounded-xl shadow-lg w-full max-w-md h-auto"
            />
          </div>
          <div className="lg:w-1/2 space-y-4 text-center lg:text-left">
            <p className="text-xs uppercase text-gray-400 font-medium">Our Story</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              A Trusted Partner in Recruitment
            </h2>
            <p className="text-gray-300 text-base">
              For over 9 years, Future Professionals Ltd has been a trusted partner in
              professional recruitment, building a reputation for excellence.
            </p>
            <div className="flex flex-wrap lg:flex-nowrap gap-4 justify-center lg:justify-start pt-4">
              <div className="flex items-center space-x-3 bg-[#1f2937] p-3 rounded-lg">
                <Users className="text-green-400" />
                <div>
                  <p className="text-lg font-semibold">380,000</p>
                  <p className="text-sm text-gray-400">Active Members</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-[#1f2937] p-3 rounded-lg">
                <Briefcase className="text-orange-400" />
                <div>
                  <p className="text-lg font-semibold">150+</p>
                  <p className="text-sm text-gray-400">Expert Agents</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-[#1f2937] p-3 rounded-lg">
                <Building2 className="text-blue-400" />
                <div>
                  <p className="text-lg font-semibold">27,000+</p>
                  <p className="text-sm text-gray-400">Companies Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 text-center bg-[#F1F4FF] text-[#1E2424]">
        <div className="max-w-6xl mx-auto px-6">
          <span className="inline-block font-semibold text-sm uppercase tracking-widest border-b-2 border-black pb-1 mb-4">
            OUR SERVICES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tailored Recruitment Solutions</h2>
          <p className="max-w-2xl mx-auto mb-12 text-base md:text-lg">
            Every company is different. Every professional is unique. That's why we offer
            tailored recruitment solutions to suit your needs however specific they may be.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <FaBriefcase />,
                title: "Permanent Recruitment",
                desc: "Top-tier talent for permanent positions.",
              },
              {
                icon: <FaClock />,
                title: "Temporary Recruitment",
                desc: "Skilled professionals for short-term roles.",
              },
              {
                icon: <FaFileContract />,
                title: "Contractual Recruitment",
                desc: "Specialized talent for project-based needs.",
              },
            ].map((service, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md p-6">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-500 text-white text-2xl">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-sm">{service.desc}</p>
              </div>
            ))}
          </div>

          {/* Industries */}
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: <FaHeartbeat />, label: "Healthcare" },
              { icon: <FaChartLine />, label: "Finance" },
              { icon: <FaGraduationCap />, label: "Education" },
              { icon: <FaGavel />, label: "Legal Services" },
              { icon: <FaConciergeBell />, label: "Hospitality" },
              { icon: <FaIndustry />, label: "Industrial" },
              { icon: <FaHardHat />, label: "Construction" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white shadow-md px-4 py-2 rounded-full text-sm"
              >
                <span className="text-blue-500">{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Jobs */}
      <section className="py-20 bg-[#F1F4FF] text-[#1E2424] text-center">
        <div className="max-w-6xl mx-auto px-6">
          <span className="inline-block font-semibold text-sm uppercase tracking-widest border-b-2 border-black pb-1 mb-4">
            LATEST ROLES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Fresh Opportunities</h2>
          <p className="max-w-2xl mx-auto mb-12 text-base md:text-lg">
            Updated regularly with the latest vacancies. Explore and apply today.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {jobsData.map((job, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold mb-2">{job.title}</h3>

                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <FaMapMarkerAlt className="text-blue-600" />
                    <span>{job.location}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-2 mb-4">
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                      {job.type}
                    </span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                      {job.salary}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between mt-4 gap-2">
                  <button className="w-1/2 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 rounded-lg text-sm font-medium">
                    Save
                  </button>
                 <Link
                    to="/job-details"
                    className="w-1/2 bg-green-100 hover:bg-green-200 text-green-700 py-2 rounded-lg text-sm font-medium text-center"
                  >
                  View Job
                </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
