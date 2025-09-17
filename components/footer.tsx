// components/Footer.js
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode} from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn,FaYoutube } from 'react-icons/fa';
import {
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineCalendar,
} from 'react-icons/hi';
import {footerSections} from "../constents/index"
import Button from './buttons/button';

export default function Footer() {


//   {
//     title: 'Quick Links',
//     links: [
//       { label: 'Case Studies', href: '#' },
//       { label: 'Careers', href: '#' },
//       { label: 'Client Feedback', href: '#' },
//       { label: 'Life At Xpert Prime', href: '#' },
//     ],
//   },
//   {
//     title: 'Services',
//     links: [
//       { label: 'CRM Integration', href: '#' },
//       { label: 'Digital Marketing', href: '#' },
//       { label: 'Staff Augmentation', href: '#' },
//       { label: 'Web Application', href: '#' },
//     ],
//   },
//   {
//     title:"Legal",
//     links:[
//       {label:"Privacy Policy",href:"#"},
//       {label:"Terms of Use",href:"#"},
//     ]
//   },
//   {
//     title:"Company",
//     links:[
//       {label:"About Us",href:"#"},
//       {label:"Contact Us",href:"#"},
//       {label:"Blogs",href:"#"},
//     ]
//   }
//   // Add more sections like "Legal", "Company", etc.
// ];
 type SocialLink = {
  href: string;
  icon: ReactNode;
};
const socialLinks: SocialLink[]= [
  {
    href: 'https://facebook.com',
    icon: <FaFacebookF />,
  },
  {
    href: 'https://instagram.com',
    icon: <FaInstagram />,
  },
  {
    href: 'https://linkedin.com',
    icon: <FaLinkedinIn />,
  },
  {
    href: 'https://youtube.com',
    icon: <FaYoutube />,
  },
];

  return (
    <footer className="bg-black px-4 bg-no-repeat bg-right text-white sm:px-6 md:px-8 lg:px-10 xl:px-7 pt-0 pb-2" style={{ backgroundImage: "url('/footer-x-logo.svg')" }}>
      <div className="flex flex-wrap justify-between gap-4 py-[74px] ">
        {footerSections.map((data,index)=>(
        <div key={index} className="min-w-[120px]">
          <h4 className="font-bold text-[24px] mb-4">{data.title}</h4>
          <ul className="space-y-2">
            {data.links.map((links,index)=>(
            <li key={index}><Link href={links.href} className="hover:text-[#f29d29] transition-colors duration-200">{links.label}</Link></li>
            ))}
          </ul>
        </div>
        ))}


        <div className="flex flex-col gap-6 min-w-[150px] w-[400px]">
          <div className="flex items-start gap-2 hover:text-secondry-color transition-colors duration-200">
            <HiOutlineLocationMarker className="mt-1 text-xl hover:text-[#f29d29] transition-colors duration-200" />
            <p>Ground Floor 43 L Block, Abdul Haq Road, Johar Town, Lahore.</p>
          </div>
          {/* Contact Details + Zoho Partner Logo */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 w-full">
            {/* Left: Email & Phone */}
            <div className="space-y-5">
              <div className="flex items-center gap-2 hover:text-[#f29d28] transition-colors duration-200">
                <HiOutlineMail className="text-xl" />
                <a href="mailto:info@xpertprime.com" >info@xpertprime.com</a>
              </div>
              <div className="flex items-center gap-2 hover:text-[#f29d28] transition-colors duration-200">
                <HiOutlinePhone className="text-xl" />
                <a href="tel:+924237870548">(042) 37870548</a>
              </div>
            </div>

            {/* Right: Zoho Partner Logo */}
            <div className="w-[150px] lg:mt-0 mt-4">
              <img
                src="/zoho-partner.svg"
                alt="Zoho Partner"
                className="w-full object-contain"
              />
            </div>
          </div>


          <div className="flex items-center gap-2">
            <HiOutlineCalendar className="text-xl" />
            <Button variant="primary" text="BOOK A MEETING"/>
            {/* <PrimaryButton variant="primary" text="BOOK A MEETING"/> */}
          </div>
        </div>
      </div>


      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 text-[16px] border-t-2 border-[#f29d29] py-6 text-center md:text-left">
  
  {/* Logo - Hide on small screens */}
  <div className="hidden md:flex items-center gap-3">
    <Image src="/logo.png" alt="Xpert Prime Logo" width={55} height={65} />
    <p>
      Copyright © 2025 <span className="text-orange-400">Xpert Prime</span>. All Rights Reserved.
    </p>
  </div>

  {/* Social Icons - Centered on mobile */}
  <div className="flex justify-center gap-4 w-full md:w-auto">
    {socialLinks.map((platform, index) => (
      <a
        key={index}
        href={platform.href}
        className="group relative w-10 h-10 border-2 border-white rounded-full bg-transparent hover:bg-[#f29b28] overflow-hidden flex items-center justify-center transition-all duration-300"
      >
        <span className="absolute inset-0 flex items-center justify-center text-white transition-opacity duration-300 group-hover:opacity-0">
          {platform.icon}
        </span>
        <span className="absolute inset-0 flex items-center justify-center text-white icon-animate-in">
          {platform.icon}
        </span>
      </a>
    ))}
  </div>

  {/* Copyright text - Only show on small screens */}
  <div className="md:hidden">
    <p>
      Copyright © 2025 <span className="text-orange-400">Xpert Prime</span>. All Rights Reserved.
    </p>
  </div>
</div>   
    </footer>
  );
}


