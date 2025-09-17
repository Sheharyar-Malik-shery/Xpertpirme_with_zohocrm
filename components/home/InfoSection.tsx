  const steps = [
    'Fill out the form, and an expert consultant will contact you soon.',
    'Before starting the project, we can sign an NDA to ensure the privacy of your data.',
    'We will share a detailed documentation including timeline and estimations.',
  ];

  export default function InfoSection() {
    return (
      <div className="bg-[#be7b20] text-white py-20 px-0  rounded-md w-full mx-auto">
        <div className="w-full text-center space-y-4 mb-12 ">
          <div className="w-48 mx-auto bg-black rounded-[50%] p-10 swirl-in-fwd"><img src="/logo.png" alt="Logo" className="w-38 h-30 mx-auto" /></div>
          {/* <img src="/logo.png" alt="Logo" className="w-40 mx-auto" /> */}
          <h2 className="text-3xl font-bold ">Hear From the Prime Team!</h2>
          <p className="text-base">An expert will reach out soon. Here’s how it will work:</p>
        </div>

        <div className=" relative">
          {steps.map((text, index) => (
            <div
              key={index}
              className="relative flex items-start gap-6 w-[90%] md:w-[75%] mx-auto"
            >
              {/* Circle + Dotted Line */}
              <div className="flex flex-col items-center relative">
                {/* Circle */}
                <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-sm font-semibold bg-[#be7b20] z-10">
                  {index + 1}
                </div>

                {/* Only add the dotted line if not the last step */}
                {index !== steps.length - 1 && (
                  <div className="w-px flex-1 mt-1 border-l border-dashed border-white min-h-[40px]" />
                )}
              </div>

              {/* Step Text */}
              <p className="text-sm leading-relaxed">{text}</p>
            </div>
          ))}    
        </div>  
      </div>
    );
  }


  // export default function InfoSection() {
  //   return (
  //     <div className="text-white pt-20 md:pt-2 px-4">
  //       <div className="text-center space-y-4 mb-12">
  //         <img src="/logo1.png" alt="Logo" className="w-44 mx-auto" />
  //         <h2 className="text-3xl font-bold">Hear From the Prime Team!</h2>
  //         <p className="text-base">An expert will reach out soon. Here’s how it will work:</p>
  //       </div>

  //       <div className="space-y-10 max-w-xl mx-auto relative">
  //         {steps.map((text, index) => (
  //           <div key={index} className="flex items-start gap-4 relative">
  //             {/* Circle number */}
  //             <div className="flex flex-col items-center">
  //               <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-sm font-semibold">
  //                 {index + 1}
  //               </div>
  //               {index !== steps.length - 1 && (
  //                 <div className="h-full w-px border-dashed border-l border-white mt-1"></div>
  //               )}
  //             </div>

  //             {/* Step text */}
  //             <p className="text-sm text-left">{text}</p>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // }




  // export default function InfoSection() {
  //   return (
  //     <div className="space-y-6 text-white text-center pt-20 md:pt-2">
  //       <img src="/logo1.png" alt="Logo" className="w-44 mx-auto" />
        
  //       <h2 className="text-3xl font-bold">Hear From the Prime Team!</h2>
        
  //       <p>An expert will reach out soon. Here’s how it will work:</p>
        
  //       <ul className="space-y-4 text-sm">
  //         <li>① Fill out the form, and an expert consultant will contact you soon.</li>
  //         <li>② We can sign an NDA to ensure the privacy of your data.</li>
  //         <li>③ We’ll share a detailed timeline and documentation.</li>
  //       </ul>
  //     </div>
  //   );
  // }


  // export default function InfoSection() {
  //   return (
  //     <div className="space-y-6 bg-[#b1731e] text-center pt-12 text-white">
  //       <img src="/logo1.png" alt="Logo" className="w-24 mx-auto md:mx-0" />
  //       <h2 className="text-3xl font-bold text-center md:text-left">
  //         Hear From the Prime Team!
  //       </h2>
  //       <p className="text-center md:text-left">
  //         An expert will reach out soon. Here’s how it will work:
  //       </p>
  //       <ul className="space-y-4 text-sm">
  //         <li>① Fill out the form, and an expert consultant will contact you soon.</li>
  //         <li>② We can sign an NDA to ensure the privacy of your data.</li>
  //         <li>③ We’ll share a detailed timeline and documentation.</li>
  //       </ul>
  //     </div>
  //   );
  // }
