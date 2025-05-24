"use client";
import SelectedProjectsSection from "./SelectedProjectsSection";

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
          <h2 className="text-xl text-gray-400 font-semibold tracking-wide shadow-md uppercase">
            Senior Software Engineer | AWS | Node &amp; TypeScript
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
                  href="https://www.linkedin.com/in/your-linkedin"
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

          {/* Timeline Section */}
          <section className="md:col-span-2 max-w-3xl w-full mx-auto my-10">
            <h3 className="text-2xl font-bold mb-6 uppercase tracking-wider flex items-center gap-2 text-gray-200">
              <span className="inline-block w-6 h-6 bg-yellow-700/80 rounded-full"></span>
              Career Timeline
            </h3>
            <ol className="relative border-l-2 border-yellow-900/40 ml-4">
              <li className="mb-10 ml-6">
                <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-yellow-700/70 rounded-full ring-4 ring-gray-900">
                  <span className="w-3 h-3 bg-yellow-300 rounded-full block"></span>
                </span>
                <div className="pl-2">
                  <h4 className="font-semibold text-lg text-yellow-200">Graduated University</h4>
                  <span className="text-gray-400 text-sm">2017</span>
                  <p className="text-gray-400 mt-1">
                    Completed BSc in Computer Science with First Class Honours. Built a strong foundation in algorithms, data structures, and software engineering.
                  </p>
                </div>
              </li>
              <li className="mb-10 ml-6">
                <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-yellow-700/70 rounded-full ring-4 ring-gray-900">
                  <span className="w-3 h-3 bg-yellow-300 rounded-full block"></span>
                </span>
                <div className="pl-2">
                  <h4 className="font-semibold text-lg text-yellow-200">Junior Software Engineer, Acme Corp</h4>
                  <span className="text-gray-400 text-sm">2017 – 2019</span>
                  <p className="text-gray-400 mt-1">
                    Joined as a graduate developer. Worked on core API integrations and learned best practices in modern DevOps and agile teams.
                  </p>
                </div>
              </li>
              <li className="mb-10 ml-6">
                <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-yellow-700/70 rounded-full ring-4 ring-gray-900">
                  <span className="w-3 h-3 bg-yellow-300 rounded-full block"></span>
                </span>
                <div className="pl-2">
                  <h4 className="font-semibold text-lg text-yellow-200">Software Engineer, Beta Solutions</h4>
                  <span className="text-gray-400 text-sm">2019 – 2021</span>
                  <p className="text-gray-400 mt-1">
                    Led a small team delivering cloud migration projects using AWS and Node.js. Championed CI/CD automation and mentored new team members.
                  </p>
                </div>
              </li>
              <li className="ml-6">
                <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-yellow-700/70 rounded-full ring-4 ring-gray-900">
                  <span className="w-3 h-3 bg-yellow-300 rounded-full block"></span>
                </span>
                <div className="pl-2">
                  <h4 className="font-semibold text-lg text-yellow-200">Senior Software Engineer</h4>
                  <span className="text-gray-400 text-sm">2021 – Present</span>
                  <p className="text-gray-400 mt-1">
                    Promoted to Senior Engineer. Trusted with leading architecture design, introducing AI-driven features, and guiding engineering initiatives across teams.
                  </p>
                </div>
              </li>
            </ol>
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
          animation: fadeIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
      `}</style>
    </div>
  );
}