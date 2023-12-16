import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { BiLogoPinterestAlt } from "react-icons/bi";
import logo from "./img/slogo.png";

function Footer() {
  const iconsTab = [
    { icon: <FaFacebookF /> },
    { icon: <AiOutlineTwitter /> },
    { icon: <AiFillYoutube /> },
    { icon: <BiLogoPinterestAlt /> },
  ];
  return (
    <>
      <footer className="bg-white">
        <div className="container mx-auto  py-[10rem]">
          {/* footer div all */}
          <div className="flex justify-between flex-col md:flex-row  items-center md:items-start  md:gap-[5rem] text-left">
            {/* logo side */}
            <div className="flex flex-col w-1/2 md:p-0 py-4 gap-8">
              <img
                src={logo}
                alt="footer_logo"
                className="w-[18rem]"
              />
              <p className="text-[15px] font-medium text-[#646464]">
              Just as we illuminate spaces with cutting-edge electrical and solar solutions, 
              let us light the way to a healthier and fitter you. -Torchbearers – 
              Lighting the path to a brighter, safer, and healthier future.
              </p>
              {/* socials */}
              <div className="flex gap-7 text-[18px] text-[#646464] justify-center md:justify-start">
                {iconsTab.map(({ icon }, index) => {
                  return (
                    <div
                      key={index}
                      className="text-2xl bg-[#efefef] p-2 rounded-full hover:bg-[#ff0366] hover:text-white"
                      style={{ transition: "all 0.3s" }}
                    >
                      {icon}
                    </div>
                  );
                })}
              </div>
              <p className="text-[16px] font-medium text-[#646464]">
                Privacy Policy | © {new Date().getFullYear()} Torchbearers <br />{" "}
                Torchbearers{" "}
                <p>
                 Technologies
                </p>
              </p>
            </div>

            {/* middle div */}
            <div className="flex flex-col gap-8 relative">
              <p className="text-[22px] font-bold footer-main ">Our Services</p>

              <span className="top-[33px] absolute w-[8rem] h-[4px] bg-[#6e364c]"></span>

              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Solar PV installation
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Heating Systems
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Electrical Installation
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                CCTV Installation
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Air Conditioning
              </p>
            </div>

            {/* right div */}
            <div className="flex flex-col gap-8 relative">
              <p className="text-[22px] font-bold footer-main my-8 md:my-0">Others</p>

              <span className="top-[33px] absolute w-[5rem] h-[4px] bg-[#6e364c] my-8 md:my-0"></span>

              <p className="text-[16px]  text-[#646464] font-bold">
                efficient Electrical upgrades
              </p>
              <p className="text-[16px] text-[#646464] font-medium">
                TroubleShoting
              </p>
              <p className="text-[16px] text-[#646464] font-bold">Lighting</p>
              <p className="text-[16px] text-[#646464] font-medium">
                Electrical Repairs
              </p>
              <p className="text-[16px] text-[#646464] font-bold ">
                Decorations
              </p>
            </div>

            {/* middle div */}
            <span></span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;