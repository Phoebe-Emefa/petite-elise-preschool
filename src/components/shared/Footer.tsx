import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t bg-[#ecf0f1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3  lg:justify-items-start">
          <div className="space-y-4 text-left">
            <h3 className="text-lg font-bold">Petite Elise Preschool</h3>
            <p className="text-sm text-muted-foreground">
              Nurturing young minds to become curious, resilient, and independent thinkers in a safe, loving environment
            </p>
            <div className="flex justify-start space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <FaFacebookF className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <FaInstagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <FaTwitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="text-left">
            <h3 className="mb-4 text-lg font-bold">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">123 School Street</li>
              <li className="text-muted-foreground">Anytown, ST 12345</li>
              <li className="text-muted-foreground">Phone: (123) 456-7890</li>
              <li className="text-muted-foreground">Email: info@petiteelisepreschool.com</li>
            </ul>
          </div>
          <div className="text-left">
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/admissions" className="text-muted-foreground hover:text-primary">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-muted-foreground hover:text-primary">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground w-full">
          © {new Date().getFullYear()} Petite Elise Preschool. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
