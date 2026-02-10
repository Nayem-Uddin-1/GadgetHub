import React from 'react';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaXTwitter, 
  FaTiktok, 
  FaYoutube,
  FaPaperPlane,
  FaCcVisa,
  FaCcMastercard,
  FaCcDiscover,
  FaCcStripe,
  FaCcPaypal
} from 'react-icons/fa6';
import Container from '../Container/Container';

const Footer = () => {
  const sections = [
    {
      title: "About Us",
      links: ["About Us", "Blog", "FAQ", "Privacy Policy", "Terms & Conditions"]
    },
    {
      title: "My Account",
      links: ["Login", "Order History", "Affiliates", "Newsletter", "Gift Certificate", "Returns"]
    },
    {
      title: "Customer Service",
      links: ["Contact Us", "Store Locations", "Our Brands", "Site Map", "Delivery Information", "Unlimited Links"]
    }
  ];

  const socialIcons = [
    <FaFacebookF />, <FaInstagram />, <FaXTwitter />, <FaTiktok />, <FaYoutube />
  ];

  return (
    <footer className="bg-[#1a1c1e] text-gray-400 py-12  font-sans">
      <Container className="">
        
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-8 mb-10">
          <h2 className="text-3xl font-bold text-white tracking-tighter mb-6 md:mb-0">JOURNAL</h2>
          <div className="flex gap-3">
            {socialIcons.map((icon, index) => (
              <a key={index} href="#" className="bg-gray-800 p-2.5 rounded-full hover:bg-gray-700 transition-colors text-white text-sm">
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Links & Newsletter Grid */}
        <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
          {sections.map((section, idx) => (
            <div key={idx}>
              <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">{section.title}</h4>
              <ul className="space-y-3 text-sm">
                {section.links.map((link, i) => (
                  <li key={i}><a href="#" className="hover:text-white transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Section */}
          <div className=' px-5 md:px-0  '>
            <h4 className="text-white text-center md:text-start font-bold mb-6 uppercase text-sm tracking-wider">Newsletter</h4>
            <p className="text-sm mb-6 leading-relaxed">
              Stay up to date with news and promotions by signing up for our newsletter
            </p>
            <div className="relative mb-4">
              <input 
                type="email" 
                placeholder="Enter email" 
                className="w-full bg-white text-black py-3 px-4 rounded-sm focus:outline-none"
              />
              <button className="absolute right-1 top-1 bottom-1 bg-[#2c2e30] text-white px-4 rounded-sm hover:bg-black transition-colors">
                <FaPaperPlane size={14} />
              </button>
            </div>
            <label className="flex items-start gap-2 text-xs cursor-pointer">
              <input type="checkbox" className="mt-1 accent-blue-500" />
              <span>I have read and agree to the <a href="#" className="underline border-b border-dotted border-gray-500">Privacy Policy</a></span>
            </label>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3 text-xs">
            <div className="bg-blue-600 p-1.5 rounded-full text-white">J</div>
            <p>Copyright © 2024, Nayem Uddin, All Rights Reserved</p>
          </div>
          <div className="flex gap-4 text-3xl opacity-60">
            <FaCcVisa />
            <FaCcMastercard />
            <FaCcDiscover />
            <FaCcPaypal />
            <FaCcStripe />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;