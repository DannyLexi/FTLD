import {
  FaMapMarkerAlt,
  FaClock,
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-4 text-sm" style={{ backgroundColor: '#1D2424' }}>
      <div className="container mx-auto px-4 text-gray-300">
        <div className="flex flex-wrap gap-6 mb-6">
          {/* Logo Section */}
          <div className="flex-1 min-w-[160px]">
            <img
              src="https://s3-alpha-sig.figma.com/img/5e7d/0eea/88ac55de5a59a62de8969baf901d0335?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HZ0jSBwObo4pGkECKxTnkRaMkFo9u~W8JISwuEuZg6pJkvNMLkU1TC7Cl~MYD~UxP9q0xEvzTVJXUD7~yijJmMeU2k6Yb0XJOpO2LxvVhm9srKWJM6d4pAGD9sRN4ri0ZQs18K~XphWs06dqI4NVCDzG4aq70zoQSe6QepBRe9bOW5SCXaEM0VkCwxEDJvxW-Kd4DwuS44JIXqkEOWcZb2gryCp3jiu5OwLnlx~yrfGVY4TRGVBt-cMsEhSd637lakYe5mV9VhfMa5zlrXFOBIcNyybDXY47kqIDvBw4YkhvqpI5zk058-goRnxVeubSNBJY4YQXRe782K0ch4dYMA__"
              alt="Future Professionals Logo"
              className="h-10 mb-2"
            />
            <h3 className="text-base font-semibold text-white">FUTURE PROFESSIONALS</h3>
          </div>

          {/* Contact Section */}
          <div className="flex-1 min-w-[160px]">
            <h4 className="text-base mb-2 font-medium text-white">Get in Touch</h4>
            <ul>
              <li className="flex items-start mb-2 gap-2">
                <FaMapMarkerAlt className="text-secondary-color mt-0.5" />
                <span>2-37 Queens Court, Eastern Road, Romford, Essex RM1 3NH</span>
              </li>
              <li className="flex items-start mb-2 gap-2">
                <FaClock className="text-secondary-color mt-0.5" />
                <span>MON - FRI: 09:00am - 05:00pm</span>
              </li>
              <li className="flex items-start mb-2 gap-2">
                <FaPhone className="text-secondary-color mt-0.5" />
                <span>020 3815 8492</span>
              </li>
              <li className="flex items-start mb-2 gap-2">
                <FaEnvelope className="text-secondary-color mt-0.5" />
                <span>info@futureprofessionalsltd.co.uk</span>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="flex-1 min-w-[160px]">
            <h4 className="text-base mb-2 font-medium text-white">Quick Links</h4>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-secondary-color">Home</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-secondary-color">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-secondary-color">Our Services</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-secondary-color">Job Board</a>
              </li>
            </ul>
          </div>

          {/* Social Section */}
          <div className="flex-1 min-w-[160px]">
            <h4 className="text-base mb-2 font-medium text-white">Connect With Us</h4>
            <div className="flex flex-wrap gap-3">
              <a href="#" className="flex items-center gap-1 hover:text-secondary-color">
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
              <a href="#" className="flex items-center gap-1 hover:text-secondary-color">
                <FaFacebook />
                <span>Facebook</span>
              </a>
              <a href="#" className="flex items-center gap-1 hover:text-secondary-color">
                <FaInstagram />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center pt-3 border-t border-gray-700 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Future Professionals Ltd. All rights reserved.</p>
          <p>Registered in England & Wales.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
