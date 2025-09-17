// src/constants/index.ts

// constants/api.ts
 //export const BASE_API_URL = 'http://localhost:3000';
 export const BASE_API_URL = "https://www.zohoapis.com/crm/v8/";


import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { ReactNode } from 'react';
import React from 'react';

export const FormOptions = [
  "Software Solutions",
  "Web Development",
  "Mobile App",
  "Consultation",
];

export const footerSections = [
  {
    title: 'Quick Links',
    links: [
      { label: 'Case Studies', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Client Feedback', href: '#' },
      { label: 'Life At Xpert Prime', href: '#' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'CRM Integration', href: '#' },
      { label: 'Digital Marketing', href: '#' },
      { label: 'Staff Augmentation', href: '#' },
      { label: 'Web Application', href: '#' },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Use", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Blogs", href: "#" },
    ],
  }
];

export type SocialLink = {
  href: string;
  icon: ReactNode;
};

// export const socialLinks: SocialLink[] = [
//   {
//     href: 'https://facebook.com',
//     icon: <FaFacebookF />,
//   },
//   {
//     href: 'https://instagram.com',
//     icon: <FaInstagram />,
//   },
//   {
//     href: 'https://linkedin.com',
//     icon: <FaLinkedinIn />,
//   },
//   {
//     href: 'https://youtube.com',
//     icon: <FaYoutube />,
//   },
// ];


// constants/statusCodes.ts

export const STATUS_CODES = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  INTERNAL_SERVER_ERROR: 500,
};

