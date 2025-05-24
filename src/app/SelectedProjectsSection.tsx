import React from "react";

export default function SelectedProjectsSection() {
  return (
    <section
      className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-950 rounded-3xl p-8 border border-gray-800/60 shadow-xl transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl"
      aria-label="Selected Projects"
    >
      <h3 className="text-2xl font-bold text-gray-100 mb-4 tracking-wider uppercase flex items-center gap-2">
        <span className="inline-block w-6 h-6 bg-yellow-700/80 rounded-full"></span>
        Selected Projects
      </h3>
      <ul className="space-y-6 text-gray-300 text-lg">
        <li className="flex items-start gap-3">
          <span className="mt-2 inline-block w-3 h-3 rounded-full bg-gray-600 flex-shrink-0"></span>
          <div>
            <div className="font-semibold text-gray-100 mb-1">Cloud-Native Insurance Platform</div>
            <div>
              Helped architect and build a fully AWS-native API platform enabling real-time processing for a major US insurance company. This solution is projected to save $42M over the next 4 years through automation and operational efficiencies.
            </div>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-2 inline-block w-3 h-3 rounded-full bg-gray-600 flex-shrink-0"></span>
          <div>
            <div className="font-semibold text-gray-100 mb-1">AI-Powered Pull Request Assistant</div>
            <div>
              Developed a tool that automatically generates pull requests for developers by analyzing code change files from GitHub and integrating context from Jira tickets via the Atlassian API. This solution saves significant developer time and accelerates delivery by supporting agile principles of releasing smaller, more frequent changes.
            </div>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-2 inline-block w-3 h-3 rounded-full bg-gray-600 flex-shrink-0"></span>
          <div>
            <div className="font-semibold text-gray-100 mb-1">CI/CD Modernization</div>
            <div>
              Led a overhaul of our development infrastructure, migrating all repositories to a new AWS account and establishing modern team norms. Directed the transition from legacy CI/CD pipelines to GitHub Actions, resulting in a 35% reduction in deployment times and 50% lower maintenance overhead.
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}