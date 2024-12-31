import React from 'react';
import { MdDoubleArrow } from 'react-icons/md';
import { SiWebpack } from 'react-icons/si';
import AboutImg from "../assets/AboutImg.webp"

const PrivacyPolicy = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
         <div className=" h-[25rem] w-full relative before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-black/20 ">
        <div className=" absolute bottom-[15%] left-[10%] text-[#fff] font-semibold ">
          <h2 className=" text-[4rem] font-bold ">Privacy Policy</h2>
          <p className=" flex items-center gap-3 text-[2rem] ">
            Home <MdDoubleArrow /> Privacy Policy
          </p>
        </div>
        <img
          src="https://d1m75rqqgidzqn.cloudfront.net/wp-data/2020/07/20162255/iStock-1157887211.jpg"
          alt=""
          className="w-full h-full object-cover   "
        />
      </div>
      <h1>Privacy Policy</h1>
      <p>Last updated: [Insert Date]</p>

      <p>
        Welcome to [Your Website Name]! This Privacy Policy explains how we collect, use, and protect your personal information when you use our website.
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        We may collect the following types of information:
        <ul>
          <li>Personal identification information (Name, email address, phone number, etc.)</li>
          <li>Usage data (e.g., pages visited, time spent on pages, etc.)</li>
          <li>Cookies and tracking data</li>
        </ul>
      </p>

      <h2>2. How We Use Your Information</h2>
      <p>We use your information to:</p>
      <ul>
        <li>Provide and maintain our service</li>
        <li>Improve user experience</li>
        <li>Communicate with you about updates and offers</li>
        <li>Ensure security and prevent fraud</li>
      </ul>

      <h2>3. Sharing Your Information</h2>
      <p>
        We do not sell your personal information. However, we may share your data with trusted third parties to help us provide our services, such as:
      </p>
      <ul>
        <li>Service providers</li>
        <li>Legal authorities when required by law</li>
      </ul>

      <h2>4. Cookies</h2>
      <p>
        We use cookies to enhance your browsing experience. You can manage your cookie preferences through your browser settings.
      </p>

      <h2>5. Your Rights</h2>
      <p>
        Depending on your location, you may have rights regarding your personal data, including:
      </p>
      <ul>
        <li>Access to your data</li>
        <li>Correction of inaccurate information</li>
        <li>Deletion of your data</li>
        <li>Data portability</li>
      </ul>

      <h2>6. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We encourage you to review this page periodically for any changes.
      </p>

      <h2>7. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us at:
        <br />
        Email: [Your Email Address]
        <br />
        Phone: [Your Phone Number]
      </p>
    </div>
  );
};

export default PrivacyPolicy;
