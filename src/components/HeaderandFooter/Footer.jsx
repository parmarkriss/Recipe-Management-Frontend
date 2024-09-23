import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <h5 className="text-xl font-bold mb-2">About Us</h5>
            <p className="text-gray-300">
              Your go-to platform for managing and sharing recipes. Join us in exploring the culinary world!
            </p>
          </div>
          <div>
            <h5 className="text-xl font-bold mb-2">Contact</h5>
            <ul className="list-none space-y-1">
              <li>Email: <a href="mailto:support@recipemanagement.com" className="text-blue-400 hover:underline">support@recipemanagement.com</a></li>
              <li>Phone: <a href="tel:+1234567890" className="text-blue-400 hover:underline">+1 234 567 890</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-xl font-bold mb-2">Follow Us</h5>
            <ul className="flex justify-center space-x-4">
              <li>
                <a href="#" className="text-blue-400 hover:text-blue-300">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-400 hover:text-blue-300">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-400 hover:text-blue-300">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} BiteDelight
          Recipe Management. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
