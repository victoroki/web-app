import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import logo from "./img/slogo.png";

function Footer() {
  const iconsTab = [
    { icon: <FaFacebookF /> },
    { icon: <RiTwitterXFill /> },
    { icon: <FaInstagram /> },
    { icon: <FaLinkedinIn /> },
    { icon: <FaYoutube /> },
  ];

  const otherServices = [
    { name: "Efficient Electrical Upgrades", bold: true },
    { name: "Troubleshooting", bold: false },
    { name: "Electrical Design", bold: true },
    { name: "Electrical Repairs", bold: false },
    { name: "Decorations", bold: true },
    { name: "Solar System Design", bold: true },
  ];

  return (
    <footer
      className="relative overflow-hidden text-white"
      style={{
        background: "linear-gradient(135deg, #1b2f42 0%, #712B35 100%)",
      }}
    >
      {/* Soft Light Blobs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-20 w-44 h-44 bg-white/40 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-white/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-white/30 rounded-full blur-xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Subtle Dot Pattern */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">

          {/* Logo + About */}
          <div className="lg:col-span-2">
            <div className="bg-white p-4 rounded-xl inline-block shadow-lg">
              <img src={logo} alt="footer_logo" className="w-56 h-auto" />
            </div>

            <p className="text-gray-200 mt-6 leading-relaxed max-w-lg">
              We illuminate spaces with reliable electrical and solar solutions
              while keeping your safety and comfort first.
              <span className="block mt-2 font-semibold text-white">
                Torchbearers — Lighting the path to a brighter, safer future.
              </span>
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              {iconsTab.map(({ icon }, i) => (
                <div
                  key={i}
                  className="text-xl w-10 h-10 flex items-center justify-center rounded-full 
                  bg-white/20 backdrop-blur-md border border-white/30 text-white 
                  hover:bg-[#489820] hover:scale-110 hover:shadow-xl transition-all cursor-pointer"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* Other Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Other Services</h3>
            <div className="w-12 h-1 bg-[#489820] rounded-full mb-6"></div>

            <div className="flex flex-col gap-3">
              {otherServices.map((s, index) => (
                <p
                  key={index}
                  className={`text-gray-200 hover:text-white transition-all ${
                    s.bold ? "font-bold" : "font-medium"
                  }`}
                >
                  {s.name}
                </p>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="w-12 h-1 bg-[#489820] rounded-full mb-6"></div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-white mb-2">Phone Numbers</h4>
                <p className="text-gray-200">+254 743 076376</p>
                {/* <p className="text-gray-200">+254 789 173033</p> */}
              </div>
              
              <div>
                <h4 className="font-bold text-white mb-2">Email Addresses</h4>
                <p className="text-gray-200">info@torchbearer.co.ke</p>
                {/* <p className="text-gray-200">training@torchbearer.co.ke</p> */}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-300 text-center md:text-left">
            © {new Date().getFullYear()} Torchbearers Technologies. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-300">
            <span className="hover:text-white cursor-pointer transition">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition">Terms of Service</span>
            <span className="hover:text-white cursor-pointer transition">Contact Us</span>

            <a
              href="https://www.garikon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              Site made by Garikon
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div
        className="w-full h-1 absolute bottom-0 left-0"
        style={{
          background: "linear-gradient(90deg, transparent, #489820, transparent)",
        }}
      />
    </footer>
  );
}

export default Footer;
