import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Linkedin } from "lucide-react"; // Ensure these are correctly imported

function Footer() {
  return (
    <footer className="w-full bg-custom-dark-blue border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
      <div className="container mx-auto p-4 flex flex-col md:flex-row items-center justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-400 font-space">
          © 2024{" "}
          <Link to="/" className=" text-white font-space">
            CRID™
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex items-center mt-3 text-sm font-medium text-white dark:text-gray-400 md:mt-0">
          <li className="flex items-center me-4">
            <Link to="" className="hover:underline flex items-center">
              <Instagram
                className="h-6 w-6"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/crid.rgit?igsh=Y3d2OWtiZjJpN2xq",
                    "_blank"
                  )
                }
              />
            </Link>
          </li>
          <li className="flex items-center">
            <Link to="" className="hover:underline flex items-center">
              <Linkedin
                className="h-6 w-6 cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/company/rgit-crid/",
                    "_blank"
                  )
                }
              />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
