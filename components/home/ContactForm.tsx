"use client";

import { useFormik } from "formik";
import {FormOptions} from "../../constents/index"
import {submitForm} from "../../services/contectFormApis"
import Loader from "../loader"
import { useState } from "react";
import Toast from "../toast"
import Button from "../buttons/button";

export default function ContactForm() {
  const[loading,setLoading] = useState(false)
  const[showToast,setShowToast] = useState("")
  const formik = useFormik({
    initialValues: {
      service: "Software Solutions",
      First_Name: "",
      Email: "",
      Phone: "",
      Company: "",
      message: "",
      Last_Name:"Test"
    },

    validate: (values) => {
      const errors: { [key: string]: string } = {};

      if (!values.First_Name) errors.First_Name = "First_Name is required";
      if (!values.Email) {
        errors.Email = "Email is required";
      } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(values.Email)) {
        errors.Email = "Invalid Email format";
      }

      if (!values.Phone) errors.Phone = "Phone is required";
      if (!values.Company) errors.Company = "Company is required";
      if (!values.message) errors.message = "Message is required";

      return errors;
    },

    onSubmit: async (values) => {
       setLoading(true)
      console.log(values);
      const newValues = {
        ...values,
      };
      console.log("values are",newValues)
      let data = []
      data.push(newValues)
      let response_structure:any = {}
      response_structure["data"] = data
      console.log("response structure is",response_structure);
      let response = await submitForm(response_structure)
      console.log("response",response)
      if(response?.success){
        setLoading(false)
        setShowToast(response?.message||"Your information is Submitted")
        formik.resetForm();
      }else{
        setLoading(false)
        setShowToast(response?.error||"Somethink went Wrong")
      }
      // alert(JSON.stringify(response, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="w-full px-6 space-y-4">
      <select
        name="service"
        value={formik.values.service}
        onChange={formik.handleChange}
        className="w-full rounded focus:outline-none shadow-[2px_4px_4px_0px_rgba(0,0,0,0.1)] focus:shadow-[2px_4px_4px_0px_rgba(255,115,0,0.4)] px-2 py-2 mb-8"
      >
        {FormOptions.map((option,index)=>(
       <option key={index} >{option}</option>
        ))}
      </select>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8  ">
        <div>
          <input
            name="First_Name"
            value={formik.values.First_Name}
            onChange={formik.handleChange}
            placeholder="Name*"
            className="w-full px-4 py-2 rounded shadow-[2px_4px_4px_0px_rgba(0,0,0,0.1)] focus:shadow-[2px_4px_4px_0px_rgba(255,115,0,0.4)] focus:outline-none"
          />
          {formik.errors.First_Name && formik.touched.First_Name && (
            <div className="text-sm text-red-500">{formik.errors.First_Name}</div>
          )}
        </div>

        <div>
          <input
            name="Email"
            type="email"
            value={formik.values.Email}
            onChange={formik.handleChange}
            placeholder="Email*"
            className="w-full px-4 py-2 rounded focus:outline-none shadow-[2px_4px_4px_0px_rgba(0,0,0,0.1)] focus:shadow-[2px_4px_4px_0px_rgba(255,115,0,0.4)]"
          />
          {formik.errors.Email && formik.touched.Email && (
            <div className="text-sm text-red-500">{formik.errors.Email}</div>
          )}
        </div>

        <div className="mb-6">
          <input
            name="Phone"
            value={formik.values.Phone}
            onChange={formik.handleChange}
            placeholder="Phone"
            className="w-full px-4 py-2 rounded shadow-[2px_4px_4px_0px_rgba(0,0,0,0.1)] focus:shadow-[2px_4px_4px_0px_rgba(255,115,0,0.4)] focus:outline-none"
          />
          {formik.errors.Phone && formik.touched.Phone && (
            <div className="text-sm text-red-500">{formik.errors.Phone}</div>
          )}
        </div>

        <div>
          <input
            name="Company"
            value={formik.values.Company}
            onChange={formik.handleChange}
            placeholder="Company Name"
            className="w-full px-4 py-2 rounded shadow-[2px_4px_4px_0px_rgba(0,0,0,0.1)] focus:shadow-[2px_4px_4px_0px_rgba(255,115,0,0.4)] focus:outline-none"
          />
          {formik.errors.Company && formik.touched.Company && (
            <div className="text-sm text-red-500">{formik.errors.Company}</div>
          )}
        </div>
      </div>

      <div>
        <textarea
          name="message"
          value={formik.values.message}
          onChange={formik.handleChange}
          placeholder="Your Message"
          rows={4}
          className="w-full px-4 py-2 rounded shadow-[2px_4px_4px_0px_rgba(0,0,0,0.1)] focus:shadow-[2px_4px_4px_0px_rgba(255,115,0,0.4)] focus:outline-none"
        />
        {formik.errors.message && formik.touched.message && (
          <div className="text-sm text-red-500">{formik.errors.message}</div>
        )}
      </div>

      <div className="text-sm">
        We will reach out ASAP or you can{" "}
        <a href="/schedule" className="text-orange-500 underline">schedule a call now</a>.
      </div>

      <div className="flex items-center gap-4 mt-2">
        <Button
          variant="submit"
          type="submit"
          text="Submit"
          icon={<img src="/sendicon.png" alt="send" className="w-4 h-4" />}
        />
        {/* <SubmitButton
          type="submit"
          text="Submit"
          icon={<img src="/sendicon.png" alt="send" className="w-4 h-4" />}
        /> */}
      </div>
      {loading && <Loader />}
      {showToast && (
        <Toast
          message={showToast}
          onClose={() => setShowToast("")}
        />
      )}
    </form>
  );
}



// "use client";

// import { useState } from "react";
// import SubmitButton from "../buttons/submitt_btn";


// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     service: "Software Solutions",
//     name: "",
//     Email: "",
//     Phone: "",
//     Company: "",
//     message: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log(formData);
//     alert(formData)
//     // TODO: Send data to API
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <select
//         name="service"
//         value={formData.service}
//         onChange={handleChange}
//         className="w-full shadow rounded focus:outline-none px-2 py-2"
//       >
//         <option>Software Solutions</option>
//         <option>Web Development</option>
//         <option>Mobile App</option>
//         <option>Consultation</option>
//       </select>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <input
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   title="Please fill out this field"
//                   placeholder="Name*"
//                   className="w-full px-4 py-2 rounded focus:outline-none shadow-[2px_4px_4px_0px_rgba(0,0,0,0.1)] focus:shadow-[2px_4px_4px_0px_rgba(255,115,0,0.4)]"
//                   //className="focus:outline-none shadow-[2px_2px_4px_rgba(0,0,0,0.15)] rounded px-4 py-2"
//               />

//         <input
//           name="Email"
//           type="Email"
//           value={formData.Email}
//           onChange={handleChange}
//           required
//           title="Please fill out this field"
//           placeholder="Email*"
//           className="w-full px-4 py-2 rounded focus:outline-none shadow-[2px_4px_4px_0px_rgba(0,0,0,0.1)] focus:shadow-[2px_4px_4px_0px_rgba(255,115,0,0.4)]"
//           //className="shadow focus:outline-none rounded px-4 py-2"
//         />
//         <input
//           name="Phone"
//           value={formData.Phone}
//           onChange={handleChange}
//           placeholder="Phone"
//           title="Please fill out this field"
//           className="w-full px-4 py-2 rounded focus:outline-none shadow-[2px_4px_4px_0px_rgba(0,0,0,0.1)] focus:shadow-[2px_4px_4px_0px_rgba(255,115,0,0.4)]"
//           //className="shadow focus:outline-none rounded px-4 py-2"
//         />
//         <input
//           name="Company"
//           value={formData.Company}
//           onChange={handleChange}
//           placeholder="Company Name"
//           title="Please fill out this field"
//           className="w-full px-4 py-2 rounded focus:outline-none shadow-[2px_4px_4px_0px_rgba(0,0,0,0.1)] focus:shadow-[2px_4px_4px_0px_rgba(255,115,0,0.4)]"
//           //className="shadow focus:outline-none rounded px-4 py-2"
//         />
//       </div>

//       <textarea
//         name="message"
//         value={formData.message}
//         onChange={handleChange}
//         placeholder="Your Message"
//         className="w-full px-4 py-2 rounded focus:outline-none shadow-[2px_4px_4px_0px_rgba(0,0,0,0.1)] focus:shadow-[2px_4px_4px_0px_rgba(255,115,0,0.4)]"
//         //className="w-full shadow focus:outline-none rounded px-4 py-2"
//         rows={4}
//       />

//       <div className="text-sm">
//         We will reach out ASAP or you can{" "}
//         <a href="/schedule" className="text-orange-500 underline">schedule a call now</a>
//       </div>

//       <div className="flex items-center gap-4 mt-2">
//         {/* <div className="bg-red-100 text-red-600 px-4 py-2 text-sm rounded">
//           ⚠️ ReCAPTCHA error (dev placeholder)
//         </div> */}
//          <SubmitButton type="submit" text="Submit" icon={<img src="/sendicon.png" alt="Logo" className="w-4 h-4" />}/>
//         {/* <button
//           type="submit"
//           className="ml-auto bg-[#94a3b8] text-white px-6 py-2 rounded hover:bg-gray-900 flex items-center gap-2"
//         >
//           Submit <span><img src="/sendicon.png" alt="Logo" className="w-4 h-4" /></span>
//         </button> */}
//       </div>
//     </form>
//   );
// }
