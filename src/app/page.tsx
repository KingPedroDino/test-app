"use client";
import SelectedProjectsSection from "./SelectedProjectsSection";

export default function Home() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto] bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 font-sans relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-20">
        <div className="absolute w-[600px] h-[600px] bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-full blur-[180px] top-[-200px] left-[-250px]"></div>
        <div className="absolute w-[400px] h-[400px] bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-full blur-[120px] bottom-[-100px] right-[-100px]"></div>
      </div>

      <header className="w-full flex justify-center py-10 border-b border-gray-800 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800/60 backdrop-blur z-10 relative">
        <div className="flex flex-col items-center gap-3">
          <div className="w-24 h-24 flex items-center justify-center rounded-full border-4 border-gray-800 shadow-xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 text-4xl font-black text-gray-300 select-none">
            PA
          </div>
          <h1 className="text-4xl font-extrabold text-gray-200 tracking-tight drop-shadow-xl text-center uppercase">
            Peter Agnew
          </h1>
          <h2 className="text-xl text-gray-400 font-semibold tracking-wide shadow-md uppercase">
            Senior Software Engineer | Specializing in AWS &amp; TypeScript
          </h2>
        </div>
      </header>

      <main className="flex justify-center row-start-2 z-10 relative px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full mx-auto py-14 sm:px-0">
          {/* Professional Summary - spans both columns */}
          <section className="md:col-span-2 max-w-2xl w-full mx-auto text-center pb-2">
            <p className="text-2xl text-gray-200 font-semibold mb-2">
              Senior Software Engineer with 5+ years of experience driving backend and cloud transformations. Delivers robust, production-grade solutions, mentors teams, and leads technical initiatives that enable business growth.
            </p>
            {/* Seeking New Opportunities moved here, styled to fit in */}
            <section className="w-full max-w-xl mx-auto mt-5 mb-2 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950/80 rounded-2xl p-6 border border-yellow-700/30 shadow-md flex flex-col items-center">
              <h2 className="text-xl font-bold text-yellow-300 mb-2 flex items-center gap-2 uppercase tracking-wide">
                <span className="inline-block w-5 h-5 bg-yellow-700/60 rounded-full mr-2"></span>
                Seeking New Opportunities
              </h2>
              <p className="text-gray-200 text-base mb-0 font-medium text-center">
                I’m open to roles where I can leverage my backend, cloud, DevOps, or full-stack experience, especially those involving modern AI and CI/CD.<br/>
                If you’re interested in collaborating or have an opportunity, let’s connect.
              </p>
              <div className="flex gap-3 flex-wrap mt-4">
                <a
                  className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-yellow-700/80 hover:bg-yellow-600 text-gray-100 font-bold shadow-sm hover:scale-105 transition-all duration-200 tracking-wide uppercase text-sm"
                  href="mailto:peter.agnew@email.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact Me
                </a>
                <a
                  className="inline-flex items-center justify-center px-5 py-2 rounded-full border-2 border-yellow-700 text-yellow-200 font-bold bg-transparent hover:bg-yellow-800 hover:scale-105 transition-all duration-200 tracking-wide uppercase text-sm"
                  href="https://www.linkedin.com/in/your-linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="inline-flex items-center justify-center px-5 py-2 rounded-full border-2 border-yellow-700 text-yellow-200 font-bold bg-transparent hover:bg-yellow-800 hover:scale-105 transition-all duration-200 tracking-wide uppercase text-sm"
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

          {/* Key Achievements */}
          <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950/90 shadow-2xl rounded-3xl p-8 border border-gray-700 backdrop-blur-xl flex flex-col justify-between">
            <h3 className="text-2xl font-bold text-gray-100 mb-4 tracking-wide uppercase">Key Achievements</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-3 text-lg">
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
          <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950/90 shadow-2xl rounded-3xl p-8 border border-gray-700 backdrop-blur-xl flex flex-col justify-between">
            <h2 className="text-2xl font-bold text-gray-200 mb-5 flex items-center gap-2 tracking-wide uppercase">
              <span className="inline-block w-7 h-7 bg-gradient-to-br from-gray-800 to-gray-700 rounded-full mr-2"></span>
              About Me
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed font-medium">
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
          <section className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-950 rounded-3xl p-8 border border-gray-800 shadow-xl transition-all duration-500 hover:scale-[1.01]">
            <h2 className="text-2xl font-bold text-gray-200 mb-4 tracking-wide uppercase">
              <span className="inline-block w-6 h-6 bg-gradient-to-br from-gray-800 to-gray-700 rounded-full mr-2"></span>
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
              <div>
                <div className="font-semibold text-gray-100 mb-2">Cloud & DevOps</div>
                <ul className="list-disc list-inside text-gray-300 space-y-3 text-lg">
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
                <ul className="list-disc list-inside text-gray-300 space-y-3 text-lg">
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
          animation: spin-slow 14s linear infinite;
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