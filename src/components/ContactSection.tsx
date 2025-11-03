"use client";
import React, { useState, useEffect } from "react";

export default function ContactSection() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [visible, setVisible] = useState(false); // For fade-in animation

  // Detect when section is in viewport
  useEffect(() => {
    const section = document.getElementById("contact");
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (section) observer.observe(section);
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xrbabvgn", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (response.ok) {
        setSuccess(true);
        form.reset();
      } else {
        alert("Sorry — there was a problem submitting the form.");
      }
    } catch (error) {
      console.error(error);
      alert("Sorry — there was a problem submitting the form.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden"
    >
      {/* Floating gradient circles */}
      <div className="absolute top-0 left-1/4 w-72 h-72 sm:w-48 sm:h-48 bg-gradient-to-r from-purple-500 via-pink-400 to-yellow-400 rounded-full opacity-30 blur-3xl animate-float-slow pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 sm:w-64 sm:h-64 bg-gradient-to-r from-pink-500 via-purple-400 to-blue-400 rounded-full opacity-25 blur-3xl animate-float-slow-slow pointer-events-none"></div>

      <div className={`container mx-auto px-6 relative z-10 transition-all duration-1000 ease-in-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-16">
          Get in Touch
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Contact Info */}
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Reach Out
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Have questions, collaborations, or just want to say hi? Send us a message and we'll get back to you!
            </p>
            <p className="text-gray-700 dark:text-gray-200 font-medium">
              Email: <a href="mailto:info@mapurangacovenant1@gmail.com" className="underline hover:text-pink-500 transition">info@mapurangacovenant1@gmail.com</a>
            </p>
            <p className="text-gray-700 dark:text-gray-200 font-medium">
              Phone: <a href="tel:+263716859706" className="underline hover:text-pink-500 transition">+263 716 859 706</a>
            </p>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2 bg-white dark:bg-zinc-900 rounded-3xl p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-300 to-yellow-300 opacity-10 pointer-events-none rounded-3xl"></div>

            {success ? (
              <div className="relative z-10 text-center p-10 max-w-md mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Thank you!
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Your message has been received. We’ll be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative space-y-6 z-10">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 transition h-32 resize-none"
                ></textarea>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:py-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
                >
                  {submitting ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-slow-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-float-slow-slow {
          animation: float-slow-slow 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
