'use client'
import { useState } from 'react';

interface ContentSection {
  title: string;
  description: string;
  link?: string;
}

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState<'skills' | 'projects' | 'education'>('skills');

  const skillsContent: ContentSection[] = [
    {
      title: 'User Experience Design - UI / UX',
      description: '1 year of UI/UX experience, crafting intuitive and responsive designs with a user-centered approach.',
    },
    {
      title: 'Web & User Interface Design - Development',
      description: '1 year of website design experience, creating engaging and user-friendly websites that drive results.',
    },
    {
      title: 'Interaction Design - Animation',
      description: 'Proficient in animation design, bringing interfaces to life with motion graphics and interactive elements.',
    },
  ];

  const projectsContent: ContentSection[] = [
    {
      title: 'Make Online Learning Website',
      description: 'Click below to view the website.',
      link: 'https://starlearning.netlify.app/',
    },
    {
      title: 'More projects in progress',
      description: 'After completing several projects, I am excited to share more!',
    },
  ];

  const educationContent: ContentSection[] = [
    {
      title: 'Bachelor of Science in Medical Science',
      description: 'Shaheed Benazir Bhutto University',
    },
    {
      title: 'Learn GEN-AI',
      description: "Governor's Initiative for Artificial Intelligence (Currently Enrolled)",
    },
    {
      title: 'Learn New Technologies',
      description: 'Eager to continuously learn and master new technologies and tools.',
    },
  ];

  const contentMap: Record<string, ContentSection[]> = {
    skills: skillsContent,
    projects: projectsContent,
    education: educationContent,
  };

  return (
    <section id="about" className="about py-12 px-6 bg-gray-50 text-gray-800">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* About Image */}
        <div className="about-img flex-1 relative mx-auto md:mx-0 md:mr-4 w-full max-w-xs lg:max-w-sm">
          <div className="animate-frame absolute inset-0 border-2 border-transparent rounded-xl bg-gradient-to-r from-blue-500 via-pink-500 to-purple-600 p-1 animate-pulse"></div>
          <img src="Suleman.jpg" alt="Portfolio Image" className="w-full h-auto rounded-lg shadow-lg relative z-10" />
        </div>

        {/* About Content */}
        <div className="about-content flex-1 text-center md:text-left space-y-6">
          <h2 className="text-4xl font-bold text-blue-600">About Me</h2>
          <h3 className="text-lg font-medium text-gray-700">1 Year's Experience in Frontend Development</h3>
          <p className="text-gray-700 leading-relaxed">
            With 1 year of experience in frontend development, I've honed my skills in crafting responsive, user-friendly, and high-performance web applications that delight users. I've successfully built and deployed numerous projects, showcasing my expertise in creating seamless and engaging digital experiences.
          </p>

          {/* Tab Buttons */}
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            {['skills', 'projects', 'education'].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 rounded-md transition-all duration-300 ${activeTab === tab ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600 hover:bg-blue-500 hover:text-white'}`}
                onClick={() => setActiveTab(tab as 'skills' | 'projects' | 'education')}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Display Content Based on Active Tab */}
          <div className="mt-4 space-y-4">
            {contentMap[activeTab].map((item, index) => (
              <div key={index} className="text-left">
                <p className="text-lg font-semibold text-blue-600">{item.title}</p>
                <p className="text-gray-600">{item.description}</p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 mt-2 inline-block hover:text-blue-600"
                  >
                    Click here to view
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* CV Download Button */}
          <div className="mt-6">
            <a
              href="resumeme.html"
              target="_blank"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-md transition-all duration-300 hover:bg-blue-700"
            >
              Download CV <i className="bx bx-download"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
