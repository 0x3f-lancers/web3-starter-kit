"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-4 space-y-32">
        {/* Hero Section */}
        <section className="text-center space-y-8 pt-12">
          <div className="relative">
            <div className="absolute inset-x-0 top-0 h-96 overflow-hidden blur-xl -z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 opacity-50" />
            </div>
            <h1 className="text-7xl font-black bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent pb-4">
              Web3 Starter Kit
            </h1>
            <p className="text-2xl font-medium text-gray-600 max-w-2xl mx-auto mt-8">
              Your ultimate launchpad for building modern Web3 applications with{" "}
              <span className="font-bold text-gray-900">Next.js 14</span> and{" "}
              <span className="font-bold text-gray-900">RainbowKit</span>
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="space-y-16">
          <h2 className="text-4xl font-bold text-center text-gray-900">
            Built With Latest Tech
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group p-8 rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  ⚡
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Next.js 15</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Built on Next.js 14 with App Router, Server Components, and
                  React Server Components for optimal performance.
                </p>
              </div>
            </div>

            <div className="group p-8 rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  🌐
                </div>
                <h3 className="text-2xl font-bold text-gray-900">RainbowKit</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Seamless wallet integration with RainbowKit for the best Web3
                  authentication experience.
                </p>
              </div>
            </div>

            <div className="group p-8 rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  🎨
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  TailwindCSS
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Modern, responsive design powered by TailwindCSS with custom
                  animations and transitions.
                </p>
              </div>
            </div>

            <div className="group p-8 rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  🔗
                </div>
                <h3 className="text-2xl font-bold text-gray-900">TypeScript</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Built with TypeScript for enhanced developer experience and
                  type-safe code.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Connect Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-50 -z-10" />
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900">
              Ready to Build?
            </h2>
            <p className="text-xl text-gray-600">
              Connect your wallet and start building the future of Web3
            </p>
            <div className="flex justify-center pt-4">
              <ConnectButton />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center space-y-3 pt-8 border-t border-gray-200">
          <p className="flex items-center justify-center space-x-2 text-lg">
            <span className="text-gray-600">Built with</span>
            <span
              className="inline-block animate-bounce text-red-500"
              role="img"
              aria-label="love"
            >
              ❤️
            </span>
            <span className="text-gray-600">by</span>
            <a
              href="https://lancers.technology"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 font-semibold hover:text-gray-600 transition-colors"
            >
              Lancers Technology
            </a>
          </p>
          <div className="flex justify-center space-x-6">
            <Link
              href="https://github.com/0x3f-lancers/web3-starter-kit/fork"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-gray-600 transition-colors font-medium"
            >
              Fork on GitHub
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
