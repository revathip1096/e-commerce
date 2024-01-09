import React from "react";
import { CiMail } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
function Contact() {
  const contactIcon = [<CiMail />, <FaPhone />, <IoLocationOutline />];
  const contactInfo = [
    "hello@relume.io",
    "+1 (555) 000-0000",
    "123 Sample St",
    "Sydney NSW 2000 AU",
  ];
  return (
    <div className="flex flex-col md:flex-row justify-between p-10 md:p-20">
      <div className="flex flex-col gap-4">
        <span className="font-semibold">Tagline</span>
        <h1 className="font-extrabold text-4xl">Contact us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="space-y-6">
          {contactIcon.map((icon, index) => (
            <div key={index} className="flex gap-3">
              {React.cloneElement(icon, { size: 22 })}
              <a className="link link-hover">{contactInfo[index]}</a>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full md:w-[50%]">
        <label className="form-control w-full  gap-6">
          <div className="w-full">
            <span className="label-text">Name</span>
            <input type="text" className="input input-bordered w-full " />
          </div>
          <div className="w-full">
            <span className="label-text">Email</span>
            <input type="text" className="input input-bordered w-full " />
          </div>
          <div className="w-full">
            <span className="label-text">Message</span>
            <textarea
              className="textarea textarea-bordered w-full h-40"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="flex flex-start gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-md rounded-none"
            />
            {"  "}
            <span className="text-sm">I accept the Terms</span>
          </div>
          <button className="btn btn-neutral btn-md rounded-none w-28">
            Submit
          </button>
        </label>
      </div>
    </div>
  );
}
export default Contact;