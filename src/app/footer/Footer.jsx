// components/Footer.jsx
import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand / Intro */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">CarCare</h2>
          <p className="text-sm">
            We provide top-notch car services to keep your vehicle in the best condition.
          </p>
          <div className="flex gap-4 mt-4">
            <Link href="#">
              <Facebook className="w-5 h-5 hover:text-white" />
            </Link>
            <Link href="#">
              <Instagram className="w-5 h-5 hover:text-white" />
            </Link>
            <Link href="#">
              <Twitter className="w-5 h-5 hover:text-white" />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/" className="hover:text-white">Services</Link></li>
           
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Engine Oil Change</li>
            <li>Brake Repair</li>
            <li>Tire Replacement</li>
            <li>Car Wash & Detailing</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> 123 CarCare Street, Dhaka
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> +880 123 456 789
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> support@carcare.com
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} CarCare. All rights reserved.
      </div>
    </footer>
  );
}
