
import InfoSection from "./InfoSection";
import ContactForm from "./ContactForm";

export default function ScheduleCall() {
  return (
    <div id="contact" className="flex flex-col md:flex-row w-full min-h-screen">
      {/* Info Section - Left */}
      <div className="w-full md:w-[40%] bg-[#be7b20] flex items-center justify-center">
        <div className="w-full pt-9">
          <InfoSection />
        </div>
      </div>

      {/* Form Section - Right */}
      <div className="w-full md:w-[60%] flex items-center justify-center  px-2 md:px-8 py-12">
        <ContactForm />
      </div>
    </div>
  );
}



// import InfoSection from "./InfoSection";
// import ContactForm from "./ContactForm";

// export default function ScheduleCall() {
//   return (


//     // <section className="w-full py-16 text-white">
//     //   <div className="bg-[#b1731e] text-white p-8 w-full flex flex-col justify-center">
//     //     <div className="w-full md:w-1/2">
//     //       <InfoSection />
//     //     </div>
//     //     <div className="w-full md:w-1/2 bg-white rounded-xl p-8 shadow-lg text-black">
//     //       <ContactForm />
//     //     </div>
//     //   </div>
//     // </section>
//   );
// }


// "use client";

// import React from "react";

// export default function ScheduleCallSection() {
//   return (
//     <section className="flex flex-col md:flex-row w-full bg-white">
//       {/* Left Side (Info) */}
//       <div className="md:w-1/2 w-full bg-gradient-to-r from-orange-400 to-yellow-700 text-white p-10 flex flex-col justify-center">
//         <div className="max-w-md mx-auto text-center md:text-left">
//           <img src="/logo1.png" alt="Logo" className="w-40 h-40 mb-6 mx-auto md:mx-0" />
//           <h2 className="text-3xl font-bold mb-4">Hear From the Prime Team!</h2>
//           <p className="mb-6 text-white/90">
//             An expert will reach out soon. Here is how it will work:
//           </p>

//           <ul className="space-y-4 text-white/90">
//             <li className="flex items-start gap-4">
//               <span className="text-xl font-bold">1</span>
//               <span>Fill out the form, and an expert consultant will contact you soon.</span>
//             </li>
//             <li className="flex items-start gap-4">
//               <span className="text-xl font-bold">2</span>
//               <span>We can sign an NDA to ensure the privacy of your data.</span>
//             </li>
//             <li className="flex items-start gap-4">
//               <span className="text-xl font-bold">3</span>
//               <span>We’ll share detailed documentation with timeline and estimates.</span>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Right Side (Form) */}
//       <div className="md:w-1/2 w-full bg-white p-10">
//         <form className="space-y-4">
//           <select className="w-full p-3 border rounded shadow-sm">
//             <option>Software Solutions</option>
//             <option>Marketing Services</option>
//             <option>Consulting</option>
//           </select>

//           <div className="flex flex-col md:flex-row gap-4">
//             <input type="text" placeholder="Name*" className="w-full p-3 border rounded shadow-sm" />
//             <input type="email" placeholder="Email*" className="w-full p-3 border rounded shadow-sm" />
//           </div>

//           <div className="flex flex-col md:flex-row gap-4">
//             <input type="text" placeholder="Phone" className="w-full p-3 border rounded shadow-sm" />
//             <input type="text" placeholder="Company Name" className="w-full p-3 border rounded shadow-sm" />
//           </div>

//           <textarea placeholder="Your Message" className="w-full p-3 border rounded shadow-sm min-h-[120px]"></textarea>

//           <p className="text-sm text-gray-600">
//             We will reach out ASAP or you can <a href="#" className="text-orange-600 underline">schedule a call now</a>.
//           </p>

//           {/* Note: Replace this with your working reCAPTCHA */}
//           <div className="text-red-500">ERROR for site owner: Invalid domain for site key</div>

//           <button
//             type="submit"
//             className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 flex items-center gap-2"
//           >
//             Submit <span>📨</span>
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }
