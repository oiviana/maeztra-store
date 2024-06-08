import { ImFacebook2 } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaCcVisa } from "react-icons/fa6";
import { FaCcMastercard } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import VtexIcon from "../../icons/VtexIcon";
import LogoFooter from "../../icons/LogoFooter";
import FooterMenu from "../../sections/Menu/FooterMenu";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col">
      <FooterMenu/>
      <div className="bg-primary-gray w-full">
        <div className="max-w-[100rem] mx-auto px-2 py-6 gap-7 lg:gap-0 h-[233px] lg:h-[85px] text-primary-white flex flex-col  lg:flex-row lg:justify-between items-center">
          <div className="flex gap-4">
            <ImFacebook2 size={32} />
            <FaLinkedinIn size={32} />
            <FaInstagram size={32} />
            <FaYoutube size={32} />
          </div>

          <div className="flex gap-5">
            <FaCcVisa size={32} />
            <FaCcMastercard size={32} />
            <FaCcVisa size={32} />
            <FaCcMastercard size={32} />
          </div>

          <div className="flex gap-5">
            <div className="flex flex-col gap-1">
              <p className="text-[10px]">powered by</p>

              <VtexIcon />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[10px]">Developed by</p>
              <LogoFooter />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
