import {
  Lightbulb,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  ArrowRight,
  Phone,
  Mail,
} from 'lucide-react';
import { FaTwitter, FaTiktok } from 'react-icons/fa';
import logo from '../img/torchbearer-logo.png'


const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'EPRA Licensing', href: '#epra' },
    { name: 'Solar Design', href: '#solar' },
    { name: 'Electrical Design', href: '#electrical' },
    { name: 'Branding', href: '#branding' },
    { name: 'Contact', href: '#contact' }
  ];

  const trainingPrograms = [
    { name: 'EPRA License Classes', href: '#epra' },
    { name: 'Solar PV System Design', href: '#solar' },
    { name: 'AutoCAD Electrical', href: '#electrical' },
    { name: 'Professional Branding', href: '#branding' },
    { name: 'Career Development', href: '#' }
  ];

  return (
    <footer className="bg-[#dbceb8] text-[#99490c] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12  rounded-full flex items-center justify-center mr-3">
                <img src={logo} alt="logo" />
              </div>
              <h3 className="text-2xl font-bold">Torchbearer Institute</h3>
            </div>
            <p className="text-#99490c pb-4">
              Professional training and development for electrical engineering, renewable energy, and career advancement.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61572958352380" className=" p-2 rounded-full hover:bg-amber-600 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/company/torchbearer-institute-of-technologies" className=" p-2 rounded-full hover:bg-amber-600 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://www.tiktok.com/@torchbearersinstitute?_t=ZM-8y0qzId3szF&_r=1" className=" p-2 rounded-full hover:bg-amber-600 transition-colors">
                <FaTiktok className="w-5 h-6" />
              </a>
              <a href="https://x.com/TorchbearerIT?t=cE_m5tD0duaBL0_aSKQ0Bg&s=09" className=" p-2 rounded-full hover:bg-amber-600 transition-colors">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="https://www.youtube.com/@TORCHBEARERINSITTUTE" className=" p-2 rounded-full hover:bg-amber-600 transition-colors">
                <Youtube className="w-7 h-7" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-black hover:text-amber-500 transition-colors flex items-center"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 text-amber-500" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Training Programs</h3>
            <ul className="space-y-3">
              {trainingPrograms.map((program, index) => (
                <li key={index}>
                  <a
                    href={program.href}
                    className="text-black hover:text-amber-500 transition-colors flex items-center"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 text-amber-500" />
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              {/* <li className="flex items-start">
                <MapPin className="w-5 h-5 text-amber-500 mr-3 mt-1" />
                <span className="text-gray-400">Torchbearer Plaza, 5th Floor<br />Ngong Road, Nairobi, Kenya</span>
              </li> */}
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-amber-500 mr-3" />
                <span className="text-black">+254 789 173033</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-amber-500 mr-3" />
                <span className="text-black">training@torchbearer.co.ke</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-black mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Torchbearer Institute. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-black hover:text-amber-500 transition-colors">Privacy Policy</a>
            <a href="#" className="text-black hover:text-amber-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;