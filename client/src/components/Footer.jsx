import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  const footerLinks = [
    {
      title: "Company",
      links: ["About Us", "Careers", "Blog", "Contact"],
    },
    {
      title: "Support",
      links: ["Help Center", "Terms of Service", "Legal", "Privacy Policy"],
    },
    {
      title: "Follow Us",
      links: ["Facebook", "Twitter", "Instagram", "LinkedIn"],
    },
  ];

  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 bg-gray-50 border-t border-gray-200 mt-16">
      <div className="flex flex-col md:flex-row justify-between gap-10 py-10 text-gray-600">
        
        {/* Logo + Description */}
        <div className="max-w-[350px]">
          <img src={assets.logo} alt="logo" className="w-32 sm:w-44" />
          <p className="mt-4 text-sm leading-6">
            QuickBlog is your space to share knowledge, read stories, and
            explore ideas. Join us and start your blogging journey today.
          </p>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap gap-10 md:gap-20">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-gray-900 mb-3">{section.title}</h3>
              <ul className="space-y-2 text-sm">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-primary transition">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} QuickBlog. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
