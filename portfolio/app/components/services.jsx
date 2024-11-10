// components/Services.tsx

import React from 'react';
import { FaCode, FaMobileAlt, FaCloud, FaBrain, FaLock, FaDatabase } from 'react-icons/fa';

const services = [
  {
    id: 1,
    icon: <FaCode className="text-4xl text-indigo-600 mb-4" />,
    title: 'Web Development',
    description: 'We provide modern web development services using technologies like React, Next.js, Vue.js, and Tailwind CSS to create fast, scalable, and user-friendly websites.',
  },
  {
    id: 2,
    icon: <FaMobileAlt className="text-4xl text-green-600 mb-4" />,
    title: 'Mobile App Development',
    description: 'Our mobile app development team specializes in creating high-performance apps using technologies like React Native, Flutter, and Kotlin for both Android and iOS.',
  },
  {
    id: 3,
    icon: <FaCloud className="text-4xl text-blue-600 mb-4" />,
    title: 'Cloud Solutions',
    description: 'We offer cloud computing solutions with AWS, Azure, and Google Cloud to scale your infrastructure, improve security, and enhance collaboration across teams.',
  },
  {
    id: 4,
    icon: <FaBrain className="text-4xl text-yellow-600 mb-4" />,
    title: 'AI & Machine Learning',
    description: 'We leverage AI and machine learning to build intelligent systems that can automate tasks, predict trends, and improve decision-making with technologies like TensorFlow, PyTorch, and OpenAI.',
  },
  {
    id: 5,
    icon: <FaLock className="text-4xl text-red-600 mb-4" />,
    title: 'Cybersecurity',
    description: 'We provide cybersecurity solutions to safeguard your data and applications with technologies like encryption, multi-factor authentication, and secure cloud architectures.',
  },
  {
    id: 6,
    icon: <FaDatabase className="text-4xl text-purple-600 mb-4" />,
    title: 'Big Data Analytics',
    description: 'We help businesses harness the power of big data using tools like Apache Hadoop, Spark, and data visualization platforms to drive actionable insights and business growth.',
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 text-center">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
