"use client";
import SelectedProjectsSection from "./SelectedProjectsSection";

const careerTimeline = [
  {
    year: "2020",
    label: "Graduated University",
    icon: "🎓",
    summary: "Completed BEng in Software Engineering with First Class Honours.",
    location: "Belfast, Northern Ireland",
    university: "UUJ",
  },
  {
    year: "2020",
    label: "Associate Software Engineer",
    icon: "🐣",
    summary: "Joined as a graduate. Worked on core API integrations and learned best practices in modern DevOps and agile teams.",
    location: "Belfast, Northern Ireland",
    company: "LibertyIT",
  },
  {
    year: "2021",
    label: "Software Engineer",
    icon: "🚀",
    summary: "Led a small team delivering cloud migration projects using AWS and Node.js. Championed CI/CD automation and mentored new team members.",
    location: "Belfast, Northern Ireland",
    company: "LibertyIT",
  },
  {
    year: "2023",
    label: "Senior Software Engineer",
    icon: "🦄",
    summary: "Promoted to Senior Engineer. Trusted with leading architecture design, introducing AI-driven features, and guiding engineering initiatives across teams.",
    location: "Belfast, Northern Ireland",
    company: "LibertyIT",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto] bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 font-sans relative overflow-hidden">
      {/* Subtle animated background accent */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-20">
        <div className="absolute w-[600px] h-[600px] bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-full blur-[180px] top-[-200px] left-[-250px] animate-spin-slow"></div>
        <div className="absolute w-[400px] h-[400px] bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-full blur-[120px] bottom-[-100px] right-[-100px]"></div>
        <svg className="absolute right-10 top-16 w-32 h-32 opacity-10" fill="none" viewBox="0 0 160 160">
          <circle cx="80" cy="80" r="78" stroke="#facc15" strokeWidth="4" strokeDasharray="12 12" />
        </svg>
      </div>

      <header className="w-full flex justify-center py-10 border-b border-gray-800 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800/60 backdrop-blur z-10 relative">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-4xl font-extrabold text-gray-200 tracking-tight drop-shadow-xl text-center uppercase">
            Peter Agnew
          </h1>
          <h2 className="text-xl text-gray-400 font-semibold tracking-wide shadow-md uppercase flex items-center gap-2">
            Senior Software Engineer | AWS | Node &amp; TypeScript <span>✨</span>
          </h2>
        </div>
      </header>

      <main className="flex justify-center row-start-2 z-10 relative px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl w-full mx-auto py-14 sm:px-0">
          {/* Professional Summary - spans both columns */}
          <section className="md:col-span-2 max-w-2xl w-full mx-auto text-center pb-2">
            <p className="text-2xl text-gray-200 font-semibold mb-2 leading-relaxed max-w-2xl mx-auto">
              Senior Software Engineer with 5+ years of experience driving backend and cloud transformations. Delivers robust, production-grade solutions, mentors teams, and leads technical initiatives that enable business growth.
            </p>
            {/* Seeking New Opportunities moved here, styled to fit in */}
            <section className="w-full max-w-xl mx-auto mt-8 mb-2 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950/80 rounded-2xl p-6 border border-yellow-600/20 shadow transition-all duration-300 flex flex-col items-center">
              <h2 className="text-xl font-bold text-yellow-300 mb-2 flex items-center gap-2 uppercase tracking-wider">
                <span className="inline-block w-5 h-5 bg-yellow-700/80 rounded-full mr-2"></span>
                Seeking New Opportunities
              </h2>
              <p className="text-gray-200 text-base mb-0 font-medium text-center leading-relaxed">
                I’m open to roles where I can leverage my backend, cloud, DevOps, or full-stack experience, especially those involving modern AI and CI/CD.<br/>
                If you’re interested in collaborating or have an opportunity, let’s connect.
              </p>
              <div className="flex gap-3 flex-wrap mt-4">
                <a
                  className="inline-flex items-center justify-center px-5 py-2 rounded-full border border-yellow-700 bg-gray-800 text-gray-300 font-semibold text-base tracking-wide shadow transition-all duration-200 hover:bg-yellow-700/30 hover:text-yellow-100 hover:scale-105"
                  href="mailto:peter.agnew@email.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact Me
                </a>
                <a
                  className="inline-flex items-center justify-center px-5 py-2 rounded-full border border-yellow-700 bg-gray-800 text-gray-300 font-semibold text-base tracking-wide shadow transition-all duration-200 hover:bg-yellow-700/30 hover:text-yellow-100 hover:scale-105"
                  href="https://www.linkedin.com/in/peter-agnew-b607a1174/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="inline-flex items-center justify-center px-5 py-2 rounded-full border border-yellow-700 bg-gray-800 text-gray-300 font-semibold text-base tracking-wide shadow transition-all duration-200 hover:bg-yellow-700/30 hover:text-yellow-100 hover:scale-105"
                  href="/PeterAgnew_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  Download Resume
                </a>
              </div>
            </section>
          </section>

          {/* Condensed Horizontal Timeline */}
          <section className="md:col-span-2 w-full mx-auto my-8">
            {/* Timeline bar */}
            <div className="relative flex items-center justify-between w-full px-4 py-8">
              <div className="absolute h-1 bg-yellow-900/40 top-1/2 left-0 right-0 z-0 rounded"></div>
              {careerTimeline.map((item) => (
                <div
                  key={item.label}
                  className="group flex flex-col items-center z-10 w-1/5 min-w-[68px]"
                >
                  {/* Timeline dot with icon */}
                  <div className="relative flex flex-col items-center">
                    <div
                      className="w-10 h-10 bg-yellow-700/80 rounded-full border-4 border-gray-900 flex items-center justify-center text-2xl shadow-lg cursor-pointer transition-transform group-hover:scale-110"
                      tabIndex={0}
                    >
                      {item.icon}
                    </div>
                    {/* Hover card/tooltip */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-12 hidden group-hover:block group-focus:block bg-gray-900 text-gray-200 text-sm rounded-lg shadow-lg border border-yellow-700 w-64 p-4 z-20 transition-all duration-200 animate-fadeIn">
                      <div className="font-semibold text-yellow-200 mb-1 flex items-center gap-1">{item.label}</div>
                      <div className="text-xs text-gray-400 mb-1">{item.year}</div>
                      {/* Show company or university and location if present */}
                      {item.company && (
                        <div className="text-xs text-blue-400 mb-1 font-semibold">
                          <span className="mr-1">🏢</span>
                          {item.company}
                        </div>
                      )}
                      {item.university && (
                        <div className="text-xs text-green-400 mb-1 font-semibold">
                          <span className="mr-1">🎓</span>
                          {item.university}
                        </div>
                      )}
                      {item.location && (
                        <div className="text-xs text-gray-400 mb-2 flex items-center">
                          <span className="mr-1">📍</span>{item.location}
                        </div>
                      )}
                      <div className="text-gray-300">{item.summary}</div>
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-gray-400 font-semibold">{item.year}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Key Achievements */}
          <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950/90 rounded-3xl p-10 md:p-10 border border-gray-700/60 shadow-xl transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl flex flex-col justify-between space-y-1">
            <h3 className="text-2xl font-bold text-gray-100 mb-4 tracking-wider uppercase flex items-center gap-2">
              <span className="inline-block w-6 h-6 bg-yellow-700/80 rounded-full"></span>
              Key Achievements
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-3 text-lg marker:text-yellow-700/80">
              <li>
                <span className="font-medium text-gray-100">Led migration to GitHub Actions:</span> Replaced legacy CI/CD (Bamboo/Jenkins), cutting build times by 35% and increasing deployment reliability.
              </li>
              <li>
                <span className="font-medium text-gray-100">OpenAI-powered products:</span> Designed, built, and shipped AI-driven apps adopted by thousands of users.
              </li>
              <li>
                <span className="font-medium text-gray-100">Mentorship & Team Enablement:</span> Regularly mentor junior engineers and onboard new hires, resulting in multiple promotions within the team.
              </li>
              <li>
                <span className="font-medium text-gray-100">Technical Leadership:</span> Trusted to spearhead cross-team projects and collaborate directly with product leadership.
              </li>
            </ul>
          </section>

          {/* About Me */}
          <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950/90 rounded-3xl p-10 md:p-10 border border-gray-700/60 shadow-xl transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl flex flex-col justify-between space-y-1">
            <h2 className="text-2xl font-bold text-gray-200 mb-5 flex items-center gap-2 tracking-wider uppercase">
              <span className="inline-block w-7 h-7 bg-yellow-700/80 rounded-full mr-2"></span>
              About Me
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed font-medium max-w-2xl mx-auto text-left">
              I thrive on new challenges and aim to drive impactful change in every role. My passion is automation, code quality, and building tools that empower technical teams.<br /><br />
              My core stack: <span className="font-bold text-gray-100">AWS</span>,{" "}
              <span className="font-bold text-gray-100">TypeScript</span>,{" "}
              <span className="font-bold text-gray-100">Node.js</span>.<br /><br />
              I’ve delivered production apps using OpenAI, integrating modern AI features into business products.
              Currently, I’m leading our transition to <span className="font-bold text-gray-100">GitHub Actions</span> for CI/CD, modernizing away from Bamboo and Jenkins.
              I’m also developing my skills in <span className="font-bold text-gray-100">React</span> and full-stack engineering.
            </p>
          </section>

          {/* Technical Skills */}
          <section className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-950 rounded-3xl p-10 md:p-10 border border-gray-800/60 shadow-xl transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl flex flex-col justify-between space-y-1">
            <h2 className="text-2xl font-bold text-gray-200 mb-4 tracking-wider uppercase flex items-center gap-2">
              <span className="inline-block w-6 h-6 bg-yellow-700/80 rounded-full mr-2"></span>
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
              <div>
                <div className="font-semibold text-gray-100 mb-2">Cloud & DevOps</div>
                <ul className="list-disc list-inside text-gray-300 space-y-3 text-lg marker:text-yellow-700/80">
                  <li>
                    <span className="font-bold">AWS (EC2, Lambda, S3):</span> Deep experience designing, deploying, and scaling cloud infrastructure for robust and secure applications.
                  </li>
                  <li>
                    <span className="font-bold">CI/CD – GitHub Actions:</span> Automated build, test, and deployment pipelines to accelerate delivery and improve software quality.
                  </li>
                  <li>
                    <span className="font-bold">Infrastructure as Code (IaC):</span> Manage and provision resources reliably using tools like CloudFormation and Terraform.
                  </li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-gray-100 mb-2">Software Engineering</div>
                <ul className="list-disc list-inside text-gray-300 space-y-3 text-lg marker:text-yellow-700/80">
                  <li>
                    <span className="font-bold">TypeScript &amp; Node.js:</span> Build maintainable, high-performance backend systems and APIs with modern JavaScript tooling.
                  </li>
                  <li>
                    <span className="font-bold">React:</span> Develop engaging, responsive user interfaces with a focus on usability and performance.
                  </li>
                  <li>
                    <span className="font-bold">Testing & Agile Practices:</span> Champion test-driven development and agile methodologies to ensure code quality and rapid iteration.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Selected Projects */}
          <SelectedProjectsSection />
        </div>
      </main>

      <footer className="w-full flex justify-center py-6 border-t border-gray-800 bg-gradient-to-br from-gray-900 to-gray-950 backdrop-blur mt-10 text-gray-400 text-sm font-medium z-10 relative uppercase tracking-widest">
        &copy; {new Date().getFullYear()} Peter Agnew &mdash; Built with Next.js & Tailwind CSS
      </footer>
      {/* Custom keyframes for slow spin and fade-in */}
      <style jsx global>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
        .animate-spin-slow {
          animation: spin-slow 24s linear infinite;
        }
        @keyframes spin-slow-slight {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(24deg);}
        }
        .animate-spin-slow-slight {
          animation: spin-slow-slight 12s linear infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-12px);}
          to { opacity: 1; transform: none;}
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
      `}</style>
    </div>
  );
}