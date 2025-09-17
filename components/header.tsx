// components/Header.tsx
"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Services from "./services";
import Button from "./buttons/button";
import { HiMenu } from 'react-icons/hi';

export default function Header() {
  const [showServicesOverlay, setShowServicesOverlay] = useState(false);
 const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isActive = pathname === "/services";
    const handleMouseEnter = () => {
    if (!isActive) {
      clearTimeout(servicesTimeoutRef.current!);
      setShowServicesOverlay(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isActive) {
      servicesTimeoutRef.current = setTimeout(() => {
        setShowServicesOverlay(false);
      }, 200); // short delay to allow user to reach menu
    }
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blogs", href: "/blogs" },
    { name: "Careers", href: "/careers" },
    { name: "Company", href: "/company" },
  ];

  return (
    <>
      <header className="w-full bg-[#f29d29]/60 backdrop-blur-3xl md:bg-black text-white fixed top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-2 py-4 flex items-center justify-between">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={55}
              height={65}
              className="cursor-pointer"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 items-center justify-center space-x-7 text-[20px] font-medium">
            {navLinks.map((link, index) => {
              if (link.name === "Services") {
                return (
                  <div
                    key={index}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => {
                      setShowServicesOverlay(true);
                      router.push("/services");
                    }}
                    className={`cursor-pointer transition ${isActive && showServicesOverlay ? "text-[#f29d28]" : "hover:text-[#f29d28]"
                      }`}
                  >
                    {link.name} ▾
                  </div>
                  // <div
                  //   key={index}
                  //   onMouseEnter={() => { if (!isActive) setShowServicesOverlay(true) }}
                  //   onMouseLeave={()=>setShowServicesOverlay(false)}
                  //   onClick={() => {
                  //     if (!isActive) {
                  //       setShowServicesOverlay(true);
                  //       router.push('/services');
                  //     }
                  //   }}
                  //   className={`cursor-pointer transition hover:text-[#f29d28] ${isActive || showServicesOverlay ? 'text-[#f29d28]' : ''
                  //     }`}
                  // >
                  //   {link.name} ▾
                  // </div>
                );
              }

              return (
                <Link
                  key={index}
                  href={link.href}
                  className={`hover:text-[#f29d28] transition ${pathname === link.href ? "text-[#f29d28]" : ""
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:block">
            <Button variant="primary" text="TALK TO US" />
            {/* <PrimaryButton text="TALK TO US" /> */}
          </div>


             {/* Hamburger for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <span className="text-[14px] font-bold"><p className="border-b-3 border-b-white">MENU</p></span>
            ) : (
              <span className="text-lg font-bold"><HiMenu className="w-10 h-10" /></span>
            )}
          </button>
        </div>
        </div>
        {/* Mobile Menu */}
       {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#c17a20]/90 backdrop-blur text-white text-xl font-semibold px-6 py-8 space-y-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`block ${pathname === link.href
                ? 'text-black'
                : 'text-white hover:text-[#f29d28]'
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
      </header>

      {showServicesOverlay && !isActive && (
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="fixed top-0 left-0 w-full h-screen bg-white z-40 overflow-auto"
        >
          <div className="pt-[80px]">
            <Services />
          </div>
        </div>
      )}
      {/* Services Overlay */}
      {/* {showServicesOverlay && (
        <div
          onMouseLeave={() => setShowServicesOverlay(false)}
          className="fixed top-0 left-0 w-full h-screen bg-white z-40 overflow-auto"
        >
          <div className="pt-[80px]">
            <Services />
          </div>
        </div>
      )} */}
      
    </>
  );
}




// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { usePathname } from 'next/navigation';
// import Services from './services';
// import PrimaryButton from './buttons/primary_btn';
// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isServicesHovered, setIsServicesHovered] = useState(false);
//   const pathname = usePathname();

//   const isActive = (path: string) => pathname === path;

//   const navLinks = [
//     { name: 'Home', href: '/' },
//     { name: 'Services', href: '/services' },
//     { name: 'Case Studies', href: '/case-studies' },
//     { name: 'Blogs', href: '/blogs' },
//     { name: 'Careers', href: '/careers' },
//     { name: 'Company', href: '/company' },
//   ];

//   return (
//     <header className="w-full bg-black text-white fixed top-0 z-50">
//       <div className="max-w-[1400px] mx-auto px-2 py-4 flex items-center justify-between">
//         {/* Logo */}
//         <Link href="/">
//           <Image
//             src="/logo.png"
//             alt="Logo"
//             width={55}
//             height={65}
//             className="cursor-pointer"
//           />
//         </Link>

//         {/* Desktop Nav */}
//         <div className="hidden md:flex flex-1 items-center justify-center space-x-10 text-lg font-medium">
//           {navLinks.map((link,index) => {
//             if (link.name === 'Services') {
//               return (
//                 <>
//                   <div
//                     key={index}
//                     onMouseEnter={() => setIsServicesHovered(true)}
//                     onMouseLeave={() => setIsServicesHovered(false)}
//                     className="relative"
//                   >
//                     <Link
//                       href={link.href}
//                       className={`hover:text-[#f29d28] cursor-pointer transition ${isActive(link.href) || isServicesHovered ? 'text-[#f29d28]' : ''
//                         }`}
//                     >
//                       {link.name} ▾
//                     </Link>
//                     {/* <span
//                       className={`hover:text-[#f29d28] cursor-pointer transition ${isActive(link.href) || isServicesHovered ? 'text-[#f29d28]' : ''
//                         }`}
//                     >
//                       {link.name} ▾
//                     </span> */}
//                   </div>
//                   {isServicesHovered && (
//                     <div
//                       onMouseEnter={() => setIsServicesHovered(true)}
//                       onMouseLeave={() => setIsServicesHovered(false)}
//                       className="absolute left-0 top-full w-screen z-40"
//                     >
//                       <Services />
//                     </div>
//                   )}
//                 </>
//               );

//               //   <div
//               //     key={link.href}
//               //     className=""
//               //     onMouseEnter={() => setIsServicesHovered(true)}
//               //     onMouseLeave={() => setIsServicesHovered(false)}
//               //   >
//               //     <span
//               //       className={`hover:text-[#f29d28] cursor-pointer transition ${isActive(link.href) || isServicesHovered ? 'text-[#f29d28]' : ''
//               //       //</div>className={`hover:text-[#f29d28] cursor-pointer transition ${isActive(link.href) || isServicesHovered ? 'text-[#f29d28]' : ''
//               //         }`}
//               //     >
//               //       {link.name} ▾
//               //     </span>

//               //     {/* Mega Menu */}
//               //     {/* {isServicesHovered && <Services />} */}
//               //     {/* // In your Header component, modify the mega menu container to be full width */}
//               //     {isServicesHovered && (
//               //       <div
//               //         onMouseEnter={() => setIsServicesHovered(true)}
//               //         onMouseLeave={() => setIsServicesHovered(false)}
//               //         className="absolute left-0 top-full w-screen z-40"
//               //       >
//               //         <Services />
//               //       </div>
//               //     )}
//               //     {/* {isServicesHovered && (
//               //       <div
//               //         onMouseEnter={() => setIsServicesHovered(true)}
//               //         onMouseLeave={() => setIsServicesHovered(false)}
//               //         className="absolute left-0 top-full w-screen bg-white text-black z-40"
//               //       >
//               //         <Services />
//               //       </div>
//               //     )} */}
//               //   </div>
//               // );
//             }

//             return (
//               <Link
//                 key={index}
//                 href={link.href}
//                 className={`hover:text-[#f29d28] transition ${isActive(link.href) ? 'text-[#f29d28]' : ''
//                   }`}
//               >
//                 {link.name}
//               </Link>
//             );
//           })}
//         </div>

//         {/* Call-to-action Button */}
//         <div className="hidden md:block">
//           <PrimaryButton text="TALK TO US" />
//         </div>

//         {/* Hamburger for Mobile */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="text-white focus:outline-none"
//           >
//             {isMenuOpen ? (
//               <span className="text-lg font-bold">CLOSE</span>
//             ) : (
//               <span className="text-lg font-bold">MENU</span>
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden absolute top-full left-0 w-full bg-[#c17a20]/90 backdrop-blur text-white text-xl font-semibold px-6 py-8 space-y-5">
//           {navLinks.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               onClick={() => setIsMenuOpen(false)}
//               className={`block ${isActive(link.href)
//                 ? 'text-[#f29d28]'
//                 : 'text-white hover:text-[#f29d28]'
//                 }`}
//             >
//               {link.name}
//             </Link>
//           ))}
//         </div>
//       )}
//     </header>
//   );
// }
