"use client";

import React from "react";
export default function Footer() {
  return (
    <footer className="bg-slate-900 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold mb-6 md:mb-0">StoryApp</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-400">
              Tentang
            </a>
            <a href="#" className="hover:text-blue-400">
              Kebijakan
            </a>
            <a href="#" className="hover:text-blue-400">
              Kontak
            </a>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          © {new Date().getFullYear()} StoryApp. MR.KEPO All rights reserved.
        </div>
      </div>
    </footer>
  );
}

// export default function Footer;
