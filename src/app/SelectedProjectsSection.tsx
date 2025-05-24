import React from "react";

export default function SelectedProjectsSection() {
  return (
<section
  className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-950 rounded-3xl p-8 border border-gray-800 shadow-xl transition-all duration-500 hover:scale-[1.01]"
  aria-label="Selected Projects"
>
  <h3 className="text-2xl font-bold text-gray-100 mb-4 tracking-wide uppercase">
    <span className="inline-block w-6 h-6 bg-gradient-to-br from-gray-800 to-gray-700 rounded-full mr-2"></span>
    Selected Projects
  </h3>
  <ul className="space-y-3 text-gray-300 text-lg">
    <li>
      <div className="font-semibold text-gray-100 mb-1">Cloud-Native Insurance Platform</div>
      <div>
        Helped architect and build a fully AWS-native API platform enabling real-time processing for a major US insurance company. This solution is projected to save $42M over the next 4 years through automation and operational efficiencies.
      </div>
    </li>
    <li>
      <div className="font-semibold text-gray-100 mb-1">AI-Powered Pull Request Assistant</div>
      <div>
        Developed a tool that automatically generates pull requests for developers by analyzing code change files from GitHub and integrating context from Jira tickets via the Atlassian API. This solution saves significant developer time and accelerates delivery by supporting agile principles of releasing smaller, more frequent changes.
      </div>
    </li>
    <li>
      <div className="font-semibold text-gray-100 mb-1">CI/CD Modernization</div>
      <div>
      Led a overhaul of our development infrastructure, migrating all repositories to a new AWS account and establishing modern team norms. Directed the transition from legacy CI/CD pipelines to GitHub Actions, resulting in a 35% reduction in deployment times and 50% lower maintenance overhead.
      </div>
    </li>
  </ul>
</section>
  );
}