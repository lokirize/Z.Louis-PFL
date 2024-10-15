import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Youtube, Globe } from 'lucide-react';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + offsetHeight - 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="font-sans bg-gray-100 text-gray-800">
      {/* Header and navigation */}
      <header className="fixed w-full bg-white shadow-md z-50">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <a href="#home" className="text-2xl font-bold text-blue-600">Zomahoun Louis-Marie</a>
            <div className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`hover:text-blue-600 transition-colors ${
                    activeSection === item.id ? 'text-blue-600 font-semibold' : ''
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <button className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-40">
          <div className="flex flex-col items-center justify-center h-full">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-white text-2xl my-4 hover:text-blue-400 transition-colors"
                onClick={toggleMenu}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}

      <main>
        {/* Home section */}
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-red-500 text-white">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Zomahoun Louis-Marie</h1>
            <p className="text-xl md:text-2xl mb-8">Web Developer & Customer Support Specialist</p>
            <a href="#contact" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition-colors">
              Get in Touch
            </a>
          </div>
        </section>

        {/* About section */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg mb-6">
                I'm a passionate Web Developer and Customer Support Specialist with experience in WordPress, Shopify, and various web technologies. Born on August 15, 2006, I'm a 18-year-old Beninese national with a drive for creating efficient, user-friendly web solutions and providing exceptional customer support.
              </p>
              <p className="text-lg mb-6">
                Currently pursuing my GED Diploma (expected in 2025), I'm dedicated to continuous learning and staying up-to-date with the latest industry trends. My goal is to contribute to innovative projects that make a positive impact on people's lives through technology.
              </p>
            </div>
          </div>
        </section>

        {/* Experience section */}
        <section id="experience" className="py-20 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Professional Experience</h2>
            <div className="space-y-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Web Developer & Customer Support Specialist</h3>
                <p className="text-gray-600 mb-2">Vertim Coders | August 2023 - Present</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Lead technical support for Neon Channel Product Customizer (NCPC) and All Signs Options (ASO) plugins on WordPress and Shopify.</li>
                  <li>Authored comprehensive technical documentation for NCPC and ASO plugins.</li>
                  <li>Created tutorial videos for plugin usage.</li>
                  <li>Managed customer support and social media presence.</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Internship (Developer Role)</h3>
                <p className="text-gray-600 mb-2">Vertim Coders | August 2023 - December 2023</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Developed front-end elements for projects in WordPress environments.</li>
                  <li>Assisted senior developers with testing and debugging of plugins.</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Website Owner & Developer</h3>
                <p className="text-gray-600 mb-2">FFF- ................... | February 2023 - Present</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Created and manage multiple WordPress and Shopify websites.</li>
                  <li>Developed skills in affiliate marketing and SEO optimization.</li>
                  <li>Handle everything from design to content management for 7 websites.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skills section */}
        <section id="skills" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                'HTML', 'CSS', 'JavaScript', 'WordPress', 'Shopify', 'Wix',
                'Visual Studio Code', 'GitHub', 'Adobe Premiere', 'CapCut',
                'VLLO', 'Adobe Express', 'Canva', 'Documentation Writing',
                'Customer Support', 'Social Media Management', 'Logo Design',
                'Banner Design'
              ].map((skill) => (
                <div key={skill} className="bg-gray-100 rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow">
                  <p className="font-semibold">{skill}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-center">Upcoming Skills</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {['Python', 'Node', 'React', 'PostgreSQL', 'Web3', 'DApps'].map((skill) => (
                  <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects section */}
        <section id="projects" className="py-20 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">WordPress Websites</h3>
                  <p className="text-gray-600 mb-4">Created and manage multiple WordPress websites, including:</p>
                  <ul className="list-disc list-inside mb-4">
                    <li><a href="https://mangaanimetimes.online/" className="text-blue-600 hover:text-blue-800">Manga Anime Times</a></li>
                    <li><a href="https://thefuturefortuneforgers.com/" className="text-blue-600 hover:text-blue-800">The Future Fortune Forgers</a></li>
                  </ul>
                  <a href="#" className="text-blue-600 hover:text-blue-800 inline-flex items-center">
                    View More <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Shopify Stores</h3>
                  <p className="text-gray-600 mb-4">Developed and manage two Shopify-based e-commerce stores.</p>
                  <a href="#" className="text-blue-600 hover:text-blue-800 inline-flex items-center">
                    View Stores <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">YouTube Channel</h3>
                  <p className="text-gray-600 mb-4">Created and managed a YouTube channel, growing it from 1,000 to over 5,000 subscribers.</p>
                  <a href="#" className="text-blue-600 hover:text-blue-800 inline-flex items-center">
                    View Channel <Youtube size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact section */}
        <section id="contact" className="py-20 bg-gradient-to-br from-blue-500 to-red-500 text-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
            <div className="max-w-lg mx-auto">
              <form className="space-y-4">
                <input type="text" placeholder="Name" className="w-full px-4 py-2 rounded-md text-gray-800" required />
                <input type="email" placeholder="Email" className="w-full px-4 py-2 rounded-md text-gray-800" required />
                <textarea placeholder="Message" rows={4} className="w-full px-4 py-2 rounded-md text-gray-800" required></textarea>
                <button type="submit" className="w-full bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-blue-100 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2024 Zomahoun Louis-Marie. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="https://github.com/yourgithubusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors"><Github size={24} /></a>
              <a href="https://linkedin.com/in/yourlinkedinusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors"><Linkedin size={24} /></a>
              <a href="mailto:zomahoun.louismarie18@gmail.com" className="hover:text-blue-400 transition-colors"><Mail size={24} /></a>
              <a href="https://peachpuff-moose-239188.hostingersite.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors"><Globe size={24} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;