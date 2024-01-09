import {
  FaFacebook,
  FaXTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";
import React from "react";

function Footer({ children }) {
  let Column_1 = ["homepage", "products", "about", "contact"];

  let Social = ["Facebook", "Instagram", "LinkedIn"];
  const date = new Date();
  let year = date.getFullYear();

  const policy = ["Privacy Policy", "Terms of Service", "Cookies Settings"];
  let socialIcons = [
    // eslint-disable-next-line react/jsx-key
    <FaFacebook />,
    // eslint-disable-next-line react/jsx-key
    <FaInstagram />,
    // eslint-disable-next-line react/jsx-key
    <FaLinkedin />,
  ];

  return (
    <>
      {children}
      <div className="divider"></div>

      <div className="flex flex-col p-5 md:-mt-10 md:p-10 text-sm">
        <footer className="footer">
          <aside className="w-full md:max-w-lg flex flex-col gap-4">
            <div className="md:block avatar ">
              <div className="w-16 md:w-24 bg-neutral-content rounded-full">
                <img src="../icon.png" className="" />
              </div>
            </div>
            <p>Join our newsletter to stay up to date on features and releases.</p>
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 w-full">
              <input
                type="text"
                placeholder="Enter your Email"
                className="input input-bordered rounded-none w-full"
              />
              <button className="btn btn-outline rounded-none">Subscribe</button>
            </div>
          </aside>
          <nav className="gap-5">
            <header className="footer-title">Pages</header>
            {Column_1.map((column, id) => (
              <a key={id} className="link link-hover" href={column !== 'homepage' ? `./${column}` : './'}>
                {column}
              </a>
            ))}
          </nav>

          <nav className="gap-5">
            <header className="footer-title">Follow Us</header>
            {Social.map((social, index) => (
              <div key={index} className="flex gap-3">
                {React.cloneElement(socialIcons[index], { size: 22 })}
                <a key={index} className="link link-hover no-underline">
                  {social}
                </a>
              </div>
            ))}
          </nav>
        </footer>
        <footer className="pt-4 md:pt-8 footer flex justify-between flex-col md:flex-row gap-5 flex-col-reverse ">
          <p>@ {year} Isha. All rights reserved.</p>
          <div className="flex gap-4 flex-col md:flex-row">
            {policy.map((policy, id) => (
              <a key={id} className="link underline">
                {policy}
              </a>
            ))}
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
