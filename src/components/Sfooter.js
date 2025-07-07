import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
import logo from "./img/slogo.png";

function Footer() {
  const iconsTab = [
    { icon: <FaFacebookF /> },
    { icon: <RiTwitterXFill /> },
    { icon: <FaInstagram /> },
    { icon: <FaLinkedinIn /> },
    { icon: <AiFillYoutube /> },
  ];

  const services = [
    "Solar PV installation",
    "Heating Systems", 
    "Electrical Installation",
    "CCTV Installation",
    "Air Conditioning"
  ];

  const otherServices = [
    { name: "Efficient Electrical upgrades", bold: true },
    { name: "TroubleShoting", bold: false },
    { name: "Lighting", bold: true },
    { name: "Electrical Repairs", bold: false },
    { name: "Decorations", bold: true }
  ];

  return (
    <>
      <footer 
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #223b52 0%, #712B35 100%)',
        }}
      >
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-white rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full blur-xl"></div>
        </div>

        {/* Subtle Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #dcdcdc 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }}
        />

        <div className="container mx-auto py-16 px-4 relative z-10">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
            
            {/* Logo & Company Info */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div className="bg-white p-4 rounded-lg inline-block w-fit">
                <img
                  src={logo}
                  alt="footer_logo"
                  className="w-[14rem] h-auto"
                />
              </div>
              
              <p className="text-[16px] font-medium text-gray-200 leading-relaxed max-w-lg">
                Just as we illuminate spaces with cutting-edge electrical and solar solutions, 
                let us light the way to a healthier and fitter you. 
                <span className="text-white font-semibold block mt-2">
                  Torchbearers – Lighting the path to a brighter, safer, and healthier future.
                </span>
              </p>
              
              {/* Social Media Icons */}
              <div className="flex gap-4 justify-start">
                {iconsTab.map(({ icon }, index) => {
                  return (
                    <div
                      key={index}
                      className="text-2xl p-3 rounded-full transition-all duration-300 cursor-pointer group"
                      style={{ 
                        backgroundColor: '#dcdcdc',
                        color: '#712B35'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#489820';
                        e.target.style.color = 'white';
                        e.target.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#dcdcdc';
                        e.target.style.color = '#712B35';
                        e.target.style.transform = 'translateY(0)';
                      }}
                    >
                      {icon}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Services Section */}
            <div className="flex flex-col gap-6">
              <div className="relative">
                <h3 className="text-[22px] font-bold text-white mb-4">
                  Our Services
                </h3>
                <div 
                  className="absolute -bottom-2 left-0 w-16 h-1 rounded-full"
                  style={{ backgroundColor: '#489820' }}
                />
              </div>

              <div className="flex flex-col gap-3">
                {services.map((service, index) => (
                  <p 
                    key={index}
                    className="text-[16px] text-gray-200 font-medium cursor-pointer transition-all duration-300 hover:text-white hover:font-semibold hover:translate-x-2 relative group"
                  >
                    <span className="absolute left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-4 -translate-x-6" 
                          style={{ backgroundColor: '#489820' }} />
                    {service}
                  </p>
                ))}
              </div>
            </div>

            {/* Other Services Section */}
            <div className="flex flex-col gap-6">
              <div className="relative">
                <h3 className="text-[22px] font-bold text-white mb-4">
                  Others
                </h3>
                <div 
                  className="absolute -bottom-2 left-0 w-12 h-1 rounded-full"
                  style={{ backgroundColor: '#489820' }}
                />
              </div>

              <div className="flex flex-col gap-3">
                {otherServices.map((service, index) => (
                  <p 
                    key={index}
                    className={`text-[16px] text-gray-200 transition-all duration-300 hover:text-white ${
                      service.bold ? 'font-bold' : 'font-medium'
                    }`}
                  >
                    {service.name}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-16 pt-8 border-t border-gray-600 border-opacity-30">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-[14px] text-gray-300 text-center md:text-left">
                © {new Date().getFullYear()} Torchbearers Technologies. All rights reserved.
              </p>
              <div className="flex gap-6 text-[14px] text-gray-300">
                <span className="hover:text-white cursor-pointer transition-colors duration-300">
                  Privacy Policy
                </span>
                <span className="hover:text-white cursor-pointer transition-colors duration-300">
                  Terms of Service
                </span>
                <span className="hover:text-white cursor-pointer transition-colors duration-300">
                  Contact Us
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Accent Line */}
        <div 
          className="absolute bottom-0 left-0 w-full h-1"
          style={{
            background: 'linear-gradient(90deg, transparent, #489820, transparent)'
          }}
        />
      </footer>
    </>
  );
}

export default Footer;