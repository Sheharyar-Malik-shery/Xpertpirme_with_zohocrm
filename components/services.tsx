
import Button from "./buttons/button";
import MetaTag from "./metatag";
const servicesData = [
  {
    title: "Areas of Expertise",
    bgColor: "#fde9cc",
    items: [
      "Real Estate Solutions",
      "Veterinarian Solutions",
      "Travel and Tourism Solutions",
      "Legal and Law Solutions",
      "Health Care Solutions",
      "Ecommerce and Management",
    ],
    footer: {
      logo: "/logo.png",
      text: "Life At Xpert Prime",
    },
  },
  {
    title: "Enterprise Expertise",
    bgColor: "white",
    items: [
      "Business Automation",
      "Tailored Software Solutions",
      "Dynamic Web Applications",
      "eCommerce Solution",
      "Graphic Designing",
      "System Migration",
    ],
    button: {
      href: "/book",
      icon: "/services-gare-btn-icon.svg",
      text: "Book Now",
    },
  },
  {
    title: "Market Solutions",
    bgColor: "white",
    items: [
      "Business Intelligence",
      "Business Analytics",
      "Customer Support Representative",
      "SEO",
      "Social Media Handling",
      "Business Development",
      "Salesforce  Development Services",
    ],
    button: {
      href: "#",
      icon: "/services-job-seeker-icon.svg",
      text: "Case Studies",
    },
  },
  {
    title: "Core Expertise",
    bgColor: "white",
    items: [
      "Staff Augmentation",
      "Business Consultation",
      "Support & Maintenance",
      "Digital Marketing Automation",
      "Software Quality Assurance",
    ],
    button: {
      href: "#contact",
      icon: "/services-phone-message-icon.svg",
      text: "Contact Us",
    },
  },  
];

export default function Services() {
  return (
    <>
      <MetaTag
        title="XpertPrime – Expert IT Services & Digital Solutions"
        description="XpertPrime provides expert IT services, software development, and digital solutions to help businesses grow online."
        image="https://lh3.googleusercontent.com/p/AF1QipOGspplbNrvuyu092DfcqNM-XLMTDCebZLjEztG=s1360-w1360-h1020-rw"
        url="https://xpertprime.net"
      />
    <div className="top-full w-full bg-white text-black z-50 shadow-2xl">
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-0 py-0">
        {servicesData.map((section, index) => (
          <div
            key={index}
            className="px-6 py-8 flex flex-col justify-between"
            style={{ backgroundColor: section.bgColor }}
          >
            <div>
              <h4 className="font-bold text-[20px] mb-4">{section.title}</h4>
              <ul className="space-y-4 text-[16px] pb-3">
                {section.items.map((item, idx) => (
                  <li className="cursor-pointer hover:text-[#f29d28]" key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Button if exists */}
            {section.button && (
              <Button
                variant="secondary"
                text={section.button.text}
                   icon={
                  <img
                    src={section.button.icon}
                    alt="icon"
                    className="w-8 h-8"
                  />
                }
                href={section.button.href}
              />
              // <ServicesButton
              //   href={section.button.href}
              //   icon={
              //     <img
              //       src={section.button.icon}
              //       alt="icon"
              //       className="w-8 h-8"
              //     />
              //   }
              //   text={section.button.text}
              // />
            )}

            {/* Footer (Logo + Text) if exists */}
            {section.footer && (
              <div className="flex flex-row items-center justify-center mt-10 gap-2">
                <img
                  src={section.footer.logo}
                  alt="logo"
                  className="w-14 h-14"
                />
                <p className="text-[16px] font-semibold">{section.footer.text}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </>
  );
}



// import Link from 'next/link';
// //import { BookOpen, FileText, PhoneCall } from 'lucide-react'; // optional icons
// import ServicesButton from "../components/buttons/services_btn"
// export default function Services() {
//   return (
//     <div className="top-full w-[vw] bg-white text-black z-50 shadow-2xl">
//       <div className="mx-auto grid grid-cols-4 px-0 py-0">
        
//         {/* Column 1 – Left with background and logo */}
//         <div className="bg-[#fde9cc] px-6 py-8 flex flex-col justify-between">
//           <div>
//             <h4 className="font-bold text-[20px] mb-4">Areas of Expertise</h4>
//             <ul className="space-y-4 text-[16px]">
//               <li>Real Estate Solutions</li>
//               <li>Veterinarian Solutions</li>
//               <li>Travel and Tourism Solutions</li>
//               <li>Legal and Law Solutions</li>
//               <li>Health Care Solutions</li>
//               <li>Ecommerce and Management</li>
//             </ul>
//           </div>
//           <div className="flex flex-row items-center justify-center mt-10 flex gap-2">
//             <img src="/logo.png" alt="logo" className=" w-14 h-14" />
//             <p className="text-[16px] font-semibold">Life At Xpert Prime</p>
//           </div>
//         </div>

//         {/* Column 2 */}
//         <div className="px-6 py-8 flex flex-col justify-between">
//           <div>
//             <h4 className="font-bold text-[20px] mb-4">Enterprise Expertise</h4>
//             <ul className="space-y-4 text-[16px]">
//               <li>Business Automation</li>
//               <li>Tailored Software Solutions</li>
//               <li>Dynamic Web Applications</li>
//               <li>eCommerce Solution</li>
//               <li>Graphic Designing</li>
//               <li>System Migration</li>
//             </ul>
//           </div>
//           <ServicesButton
//             href="/book"
//             icon={<img src="/services-gare-btn-icon.svg" alt="Image Load Error" className='w-8 h-8'/>}
//             text="Book Now"
//           />
//           {/* <Link
//             href="/book"
//             className="mt-6 inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#f6dbb5] text-black font-semibold rounded shadow hover:opacity-90 transition"
//           >
         
//             Book Now
//           </Link> */}
//         </div>

//         {/* Column 3 */}
//         <div className="px-6 py-8 flex flex-col justify-between">
//           <div>
//             <h4 className="font-bold text-[20px] mb-4">Market Solutions</h4>
//             <ul className="space-y-4 text-[16px]">
//               <li>Business Intelligence</li>
//               <li>Business Analytics</li>
//               <li>Customer Support Representative</li>
//               <li>SEO</li>
//               <li>Social Media Handling</li>
//               <li>Business Development</li>
//               <li>Salesforce Services</li>
//             </ul>
//           </div>
//            <ServicesButton
//             href="#"
//             icon={<img src="/services-job-seeker-icon.svg" alt="Image Load Error" className='w-8 h-8'/>}
//             text="Case Studies"
//           />
//           {/* <Link
//             href="/case-studies"
//             className="mt-6 inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#f6dbb5] text-black font-semibold rounded shadow hover:opacity-90 transition"
//           >
           
//              Case Studies
//           </Link> */}
//         </div>

//         {/* Column 4 */}
//         <div className="px-6 py-8 flex flex-col justify-between">
//           <div>
//             <h4 className="font-bold text-[20px] mb-4">Core Expertise</h4>
//             <ul className="space-y-4 text-[16px]">
//               <li>Staff Augmentation</li>
//               <li>Business Consultation</li>
//               <li>Support & Maintenance</li>
//               <li>Digital Marketing Automation</li>
//               <li>Software Quality Assurance</li>
//             </ul>
//           </div>
//              <ServicesButton
//             href="#"
//             icon={<img src="/services-phone-message-icon.svg" alt="Image Load Error" className='w-8 h-8'/>}
//             text="Contact Us"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
