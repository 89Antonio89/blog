import React from "react";

const Footer = () => {
  return (
    <footer className=" text-gray-300 py-8">
      <div className="container mx-auto px-4 ">
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" aria-label="Instagram">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-pink-500 hover:text-pink-400"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M12 2.2c3.2 0 3.6 0 4.8.1..." />
            </svg>
          </a>

          <a href="#" aria-label="Instagram">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-pink-500 hover:text-pink-400"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2.2c3.2 0 3.6 0 4.8.1..." />
            </svg>
          </a>

          <a href="#" aria-label="Instagram">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-pink-500 hover:text-pink-400"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2.2c3.2 0 3.6 0 4.8.1..." />
            </svg>
          </a>
        </div>

        <p className="text-sm text-gray-300 mt-4">
          &copy; {new Date().getFullYear()} António Gonçalo. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
