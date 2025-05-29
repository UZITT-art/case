import React from "react";

function Footer() {
  return (
    <div id="contact">
      <div className="w-full  bg-gradient-to-r from-green-900 to-green-600 shadow-sm p-5 md:pl-20 pt-10">
        <div className="flex flex-col px-4 md:flex-row md:justify-center space-y-5 md:space-y-0 md:space-x-36  text-gray-800">
          <div>
            <p className="text-lg font-semibold">Learn More</p>
            <div className="text-sm">
              <a href="#portfolio">
                <p>Portfolio</p>
              </a>

              <p>Contact Us</p>

              <p>Privacy Policy</p>
            </div>
          </div>
          <div>
            <p className="text-lg font-semibold">Contact Us</p>
            <div className="text-sm">
              <p>+251984566590</p>
              <p>SaronAsfaw916@gmail.com</p>
            </div>
          </div>
          <div>
            <p className="text-lg font-semibold">Socials</p>
            <div className="text-sm">
              <a href="https://www.facebook.com/sarihulo.sari" target="_blank">
                <p>Facebook</p>
              </a>

              <p>Instagram</p>
              <p>Whatsapp</p>
            </div>
          </div>
        </div>

        <div className="h-0.5 mx-10 md:mx-44 mt-12 mb-18 bg-[#F0F0F6]"></div>
        <p className="flex font-normal text-sm text-[#2B2B2B] justify-center pt-16 pb-2">
          2025 All Rights Reserved.SaronAsfawTefera
        </p>
      </div>
    </div>
  );
}

export default Footer;
