import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-900 py-20 px-4 sm:px-6 lg:px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <p className="text-gray-700 dark:text-gray-300">
              We’d love to connect with you! Whether you’re looking for a custom
              design, business inquiry, or just want to share your thoughts —
              we’re here to listen.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 hover:text-purple-600 transition-colors">
                <Mail className="w-5 h-5 text-black dark:text-white" />
                <span className="text-gray-800 dark:text-gray-300">
                  info@covenantfashion.com
                </span>
              </div>
              <div className="flex items-center gap-3 hover:text-purple-600 transition-colors">
                <Phone className="w-5 h-5 text-black dark:text-white" />
                <span className="text-gray-800 dark:text-gray-300">
                  +263 71 234 5678
                </span>
              </div>
              <div className="flex items-center gap-3 hover:text-purple-600 transition-colors">
                <MapPin className="w-5 h-5 text-black dark:text-white" />
                <span className="text-gray-800 dark:text-gray-300">
                  Harare, Zimbabwe
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                autoComplete="name"
                className="w-full rounded-lg border border-gray-300 dark:border-zinc-700 px-4 py-3 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-zinc-600"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                autoComplete="email"
                className="w-full rounded-lg border border-gray-300 dark:border-zinc-700 px-4 py-3 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-zinc-600"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
                className="w-full rounded-lg border border-gray-300 dark:border-zinc-700 px-4 py-3 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-zinc-600"
                rows={5}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white rounded-lg py-3 text-sm font-medium hover:bg-zinc-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
