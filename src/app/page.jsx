"use client";

import { useState } from "react";
import Head from "next/head";

export default function LandingPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic untuk menangani pendaftaran newsletter
    alert(`Terima kasih! Kami akan mengirim update ke ${email}`);
    setEmail("");
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-800 to-slate-600 text-white">
      {/* <Head> */}
      {/*   <title>StoryApp - Temukan dan Bagikan Cerita Menarik</title> */}
      {/*   <meta */}
      {/*     name="description" */}
      {/*     content="Platform berbagi cerita dan pengalaman hidup" */}
      {/*   /> */}
      {/* </Head> */}
      {/**/}
      {/* {/* Navigation */}
      {/* <nav className="flex justify-between items-center p-6"> */}
      {/*   <div className="text-2xl font-bold">StoryApp</div> */}
      {/*   <div className="flex gap-4"> */}
      {/*     <button className="px-4 py-2 rounded-lg hover:bg-slate-700 transition"> */}
      {/*       Masuk */}
      {/*     </button> */}
      {/*     <button className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition"> */}
      {/*       Daftar */}
      {/*     </button> */}
      {/*   </div> */}
      {/* </nav> */}
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Temukan & Bagikan Cerita Menarik
        </h1>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          StoryApp adalah platform untuk berbagi pengalaman hidup, cerita
          inspiratif, dan petualangan menarik dari seluruh dunia.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-8 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition font-medium">
            Mulai Membaca
          </button>
          <button className="px-8 py-3 border border-white rounded-lg hover:bg-slate-700 transition font-medium">
            Pelajari Lebih Lanjut
          </button>
        </div>
      </section>
      {/* Features Section */}
      <section className="bg-slate-700 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Mengapa Memilih StoryApp?
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-slate-800 p-8 rounded-xl">
              <div className="text-4xl mb-4">📖</div>
              <h3 className="text-xl font-bold mb-3">Beragam Kategori</h3>
              <p>
                Dari petualangan, romansa, hingga cerita inspiratif - temukan
                sesuai minat Anda.
              </p>
            </div>
            <div className="bg-slate-800 p-8 rounded-xl">
              <div className="text-4xl mb-4">✍️</div>
              <h3 className="text-xl font-bold mb-3">Mudah Berbagi</h3>
              <p>
                Bagikan cerita Anda dengan mudah dan dapatkan apresiasi dari
                komunitas.
              </p>
            </div>
            <div className="bg-slate-800 p-8 rounded-xl">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-3">Komunitas Ramah</h3>
              <p>
                Berinteraksi dengan pembaca dan penulis lain yang memiliki minat
                serupa.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Popular Stories */}
      <section className="py-20 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Cerita Populer</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-slate-800 rounded-xl overflow-hidden hover:scale-105 transition"
            >
              <div className="h-48 bg-slate-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Judul Cerita {item}</h3>
                <p className="text-slate-300 mb-4 line-clamp-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-400">Penulis {item}</span>
                  <button className="text-blue-400 hover:text-blue-300">
                    Baca Selengkapnya
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Newsletter */}
      <section className="bg-slate-800 py-20">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Tetap Terupdate</h2>
          <p className="mb-8">
            Daftar newsletter kami untuk mendapatkan notifikasi cerita terbaru,
            event komunitas, dan tips menulis.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Alamat email Anda"
              className="px-4 py-3 rounded-lg text-slate-900 flex-grow max-w-md"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition font-medium"
            >
              Daftar
            </button>
          </form>
        </div>
      </section>
      {/* Footer */}
      {/* <footer className="bg-slate-900 py-12"> */}
      {/*   <div className="container mx-auto px-6"> */}
      {/*     <div className="flex flex-col md:flex-row justify-between items-center"> */}
      {/*       <div className="text-2xl font-bold mb-6 md:mb-0">StoryApp</div> */}
      {/*       <div className="flex gap-6"> */}
      {/*         <a href="#" className="hover:text-blue-400"> */}
      {/*           Tentang */}
      {/*         </a> */}
      {/*         <a href="#" className="hover:text-blue-400"> */}
      {/*           Kebijakan */}
      {/*         </a> */}
      {/*         <a href="#" className="hover:text-blue-400"> */}
      {/*           Kontak */}
      {/*         </a> */}
      {/*       </div> */}
      {/*     </div> */}
      {/*     <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400"> */}
      {/*       © {new Date().getFullYear()} StoryApp. MR.KEPO All rights reserved. */}
      {/*     </div> */}
      {/*   </div> */}
      {/* </footer> */}
    </main>
  );
}
