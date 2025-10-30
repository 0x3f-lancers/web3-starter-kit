// "use client";
// import { ConnectButton } from "@rainbow-me/rainbowkit";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
//       <div className="mx-auto max-w-6xl px-6 py-4 space-y-32">
//         {/* Hero Section */}
//         <section className="text-center space-y-8 pt-12">
//           <div className="relative">
//             <div className="absolute inset-x-0 top-0 h-96 overflow-hidden blur-xl -z-10">
//               <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 opacity-50" />
//             </div>
//             <h1 className="text-7xl font-black bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent pb-4">
//               Web3 Starter Kit
//             </h1>
//             <p className="text-2xl font-medium text-gray-600 max-w-2xl mx-auto mt-8">
//               Your ultimate launchpad for building modern Web3 applications with{" "}
//               <span className="font-bold text-gray-900">Next.js 15</span> and{" "}
//               <span className="font-bold text-gray-900">RainbowKit</span>
//             </p>
//           </div>
//         </section>

//         {/* Features Section */}
//         <section className="space-y-16">
//           <h2 className="text-4xl font-bold text-center text-gray-900">
//             Built With Latest Tech
//           </h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="group p-8 rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
//               <div className="space-y-4">
//                 <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
//                   ⚡
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900">Next.js 15</h3>
//                 <p className="text-gray-600 text-lg leading-relaxed">
//                   Built on Next.js 15 with App Router, Server Components, and
//                   React Server Components for optimal performance.
//                 </p>
//               </div>
//             </div>

//             <div className="group p-8 rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
//               <div className="space-y-4">
//                 <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
//                   🌐
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900">RainbowKit</h3>
//                 <p className="text-gray-600 text-lg leading-relaxed">
//                   Seamless wallet integration with RainbowKit for the best Web3
//                   authentication experience.
//                 </p>
//               </div>
//             </div>

//             <div className="group p-8 rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
//               <div className="space-y-4">
//                 <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
//                   🎨
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900">
//                   TailwindCSS
//                 </h3>
//                 <p className="text-gray-600 text-lg leading-relaxed">
//                   Modern, responsive design powered by TailwindCSS with custom
//                   animations and transitions.
//                 </p>
//               </div>
//             </div>

//             <div className="group p-8 rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
//               <div className="space-y-4">
//                 <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
//                   🔗
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900">TypeScript</h3>
//                 <p className="text-gray-600 text-lg leading-relaxed">
//                   Built with TypeScript for enhanced developer experience and
//                   type-safe code.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Connect Section */}
//         <section className="relative">
//           <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-50 -z-10" />
//           <div className="text-center space-y-8 max-w-3xl mx-auto">
//             <h2 className="text-4xl font-bold text-gray-900">
//               Ready to Build?
//             </h2>
//             <p className="text-xl text-gray-600">
//               Connect your wallet and start building the future of Web3
//             </p>
//             <div className="flex justify-center pt-4">
//               <ConnectButton />
//             </div>
//           </div>
//         </section>

//         {/* Footer */}
//         <footer className="text-center space-y-3 pt-8 border-t border-gray-200">
//           <p className="flex items-center justify-center space-x-2 text-lg">
//             <span className="text-gray-600">Built with</span>
//             <span
//               className="inline-block text-red-500"
//               role="img"
//               aria-label="love"
//             >
//               ❤️
//             </span>
//             <span className="text-gray-600">by</span>
//             <a
//               href="https://lancers.technology"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-900 font-semibold hover:text-gray-600 transition-colors"
//             >
//               Lancers Technology
//             </a>
//           </p>
//           <div className="flex justify-center space-x-6">
//             <Link
//               href="https://github.com/0x3f-lancers/web3-starter-kit/fork"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-900 hover:text-gray-600 transition-colors font-medium"
//             >
//               Fork on GitHub
//             </Link>
//           </div>
//         </footer>
//       </div>
//     </main>
//   );
// }
// "use client";
// import { ConnectButton } from "@rainbow-me/rainbowkit";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
//       <div className="mx-auto max-w-6xl px-6 py-4 space-y-32">
//         {/* Hero Section */}
//         <section className="text-center space-y-8 pt-12">
//           <div className="relative">
//             <div className="absolute inset-x-0 top-0 h-96 overflow-hidden blur-xl -z-10">
//               <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 opacity-50" />
//             </div>
//             <h1 className="text-7xl font-black bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent pb-4">
//               Web3 Starter Kit
//             </h1>
//             <p className="text-2xl font-medium text-gray-600 max-w-3xl mx-auto mt-8">
//               Production-ready template with{" "}
//               <span className="font-bold text-gray-900">Next.js 16</span>,{" "}
//               <span className="font-bold text-gray-900">TypeScript</span>, and{" "}
//               <span className="font-bold text-gray-900">The Graph</span>{" "}
//               integration
//             </p>
//           </div>
//         </section>

//         {/* Features Section */}
//         <section className="space-y-16">
//           <h2 className="text-4xl font-bold text-center text-gray-900">
//             Built With Latest Tech
//           </h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="group p-8 rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
//               <div className="space-y-4">
//                 <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
//                   ⚡
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900">Next.js 15</h3>
//                 <p className="text-gray-600 text-lg leading-relaxed">
//                   Built on Next.js 15 with App Router, Server Components, and
//                   React Server Components for optimal performance.
//                 </p>
//               </div>
//             </div>

//             <div className="group p-8 rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
//               <div className="space-y-4">
//                 <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
//                   🌐
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900">RainbowKit</h3>
//                 <p className="text-gray-600 text-lg leading-relaxed">
//                   Seamless wallet integration with RainbowKit for the best Web3
//                   authentication experience.
//                 </p>
//               </div>
//             </div>

//             <div className="group p-8 rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
//               <div className="space-y-4">
//                 <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
//                   📊
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900">The Graph</h3>
//                 <p className="text-gray-600 text-lg leading-relaxed">
//                   Pre-configured subgraph integration with GraphQL Codegen for
//                   type-safe queries and efficient data indexing.
//                 </p>
//               </div>
//             </div>

//             <div className="group p-8 rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
//               <div className="space-y-4">
//                 <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
//                   🔗
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900">TypeScript</h3>
//                 <p className="text-gray-600 text-lg leading-relaxed">
//                   Built with TypeScript for enhanced developer experience and
//                   type-safe code with Viem and Wagmi.
//                 </p>
//               </div>
//             </div>

//             <div className="group p-8 rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
//               <div className="space-y-4">
//                 <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
//                   📝
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900">
//                   Smart Contracts
//                 </h3>
//                 <p className="text-gray-600 text-lg leading-relaxed">
//                   ERC20 ABI included with helpers for multi-network deployment
//                   across local, testnet, and mainnet.
//                 </p>
//               </div>
//             </div>

//             <div className="group p-8 rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
//               <div className="space-y-4">
//                 <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
//                   🎨
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900">
//                   TailwindCSS
//                 </h3>
//                 <p className="text-gray-600 text-lg leading-relaxed">
//                   Modern, responsive design powered by TailwindCSS with custom
//                   animations and transitions.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Connect Section */}
//         <section className="relative">
//           <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-50 rounded-3xl -z-10" />
//           <div className="text-center space-y-8 max-w-3xl mx-auto p-16">
//             <h2 className="text-4xl font-bold text-gray-900">
//               Ready to Build?
//             </h2>
//             <p className="text-xl text-gray-600">
//               Connect your wallet and start building the future of Web3
//             </p>
//             <div className="flex justify-center pt-4">
//               <ConnectButton />
//             </div>
//           </div>
//         </section>

//         {/* Quick Start */}
//         <section className="bg-gray-900 rounded-3xl p-12 text-white">
//           <h2 className="text-3xl font-bold mb-8 text-center">Quick Start</h2>
//           <div className="space-y-4 max-w-3xl mx-auto">
//             <div className="bg-gray-800 rounded-xl p-6 font-mono text-sm">
//               <div className="text-gray-400"># Clone the repository</div>
//               <div className="text-green-400">
//                 git clone https://github.com/your-repo/web3-starter-kit
//               </div>
//             </div>
//             <div className="bg-gray-800 rounded-xl p-6 font-mono text-sm">
//               <div className="text-gray-400"># Install dependencies</div>
//               <div className="text-green-400">npm install</div>
//             </div>
//             <div className="bg-gray-800 rounded-xl p-6 font-mono text-sm">
//               <div className="text-gray-400"># Setup environment</div>
//               <div className="text-green-400">cp .env.example .env.local</div>
//             </div>
//             <div className="bg-gray-800 rounded-xl p-6 font-mono text-sm">
//               <div className="text-gray-400"># Start developing</div>
//               <div className="text-green-400">npm run dev</div>
//             </div>
//           </div>
//         </section>

//         {/* Footer */}
//         <footer className="text-center space-y-3 pt-8 border-t border-gray-200">
//           <p className="flex items-center justify-center space-x-2 text-lg">
//             <span className="text-gray-600">Built with</span>
//             <span
//               className="inline-block text-red-500"
//               role="img"
//               aria-label="love"
//             >
//               ❤️
//             </span>
//             <span className="text-gray-600">by</span>
//             <a
//               href="https://lancers.technology"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-900 font-semibold hover:text-gray-600 transition-colors"
//             >
//               Lancers Technology
//             </a>
//           </p>
//           <div className="flex justify-center space-x-6">
//             <Link
//               href="https://github.com/0x3f-lancers/web3-starter-kit"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-900 hover:text-gray-600 transition-colors font-medium"
//             >
//               View on GitHub
//             </Link>
//             <Link
//               href="https://github.com/0x3f-lancers/web3-starter-kit/fork"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-900 hover:text-gray-600 transition-colors font-medium"
//             >
//               Fork Template
//             </Link>
//           </div>
//         </footer>
//       </div>
//     </main>
//   );
// }
"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4 space-y-16 sm:space-y-24 lg:space-y-32">
        {/* Hero Section */}
        <section className="text-center space-y-6 sm:space-y-8 pt-8 sm:pt-12">
          <div className="relative">
            <div className="absolute inset-x-0 top-0 h-64 sm:h-80 lg:h-96 overflow-hidden blur-xl -z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 opacity-50" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent pb-2 sm:pb-4 px-4">
              Web3 Starter Kit
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-600 max-w-3xl mx-auto mt-4 sm:mt-6 lg:mt-8 px-4">
              Production-ready template with{" "}
              <span className="font-bold text-gray-900">Next.js 16</span>,{" "}
              <span className="font-bold text-gray-900">TypeScript</span>, and{" "}
              <span className="font-bold text-gray-900">The Graph</span>{" "}
              integration
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="space-y-8 sm:space-y-12 lg:space-y-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 px-4">
            Built With Latest Tech
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Next.js 16 */}
            <div className="group p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="space-y-3 sm:space-y-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 rounded-xl sm:rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 text-xl sm:text-2xl">
                  ⚡
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Next.js 16
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                  Built on Next.js 16 with App Router, Server Components, and
                  React Server Components for optimal performance.
                </p>
              </div>
            </div>

            {/* RainbowKit */}
            <div className="group p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="space-y-3 sm:space-y-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 rounded-xl sm:rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 text-xl sm:text-2xl">
                  🌐
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  RainbowKit
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                  Seamless wallet integration with RainbowKit for the best Web3
                  authentication experience.
                </p>
              </div>
            </div>

            {/* The Graph */}
            <div className="group p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="space-y-3 sm:space-y-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 rounded-xl sm:rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 text-xl sm:text-2xl">
                  📊
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  The Graph
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                  Pre-configured subgraph integration with GraphQL Codegen for
                  type-safe queries and efficient data indexing.
                </p>
              </div>
            </div>

            {/* TypeScript */}
            <div className="group p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="space-y-3 sm:space-y-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 rounded-xl sm:rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 text-xl sm:text-2xl">
                  🔗
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  TypeScript
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                  Built with TypeScript for enhanced developer experience and
                  type-safe code with Viem and Wagmi.
                </p>
              </div>
            </div>

            {/* Smart Contracts */}
            <div className="group p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="space-y-3 sm:space-y-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 rounded-xl sm:rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 text-xl sm:text-2xl">
                  📝
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Smart Contracts
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                  ERC20 ABI included with helpers for multi-network deployment
                  across local, testnet, and mainnet.
                </p>
              </div>
            </div>

            {/* TailwindCSS */}
            <div className="group p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="space-y-3 sm:space-y-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 rounded-xl sm:rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 text-xl sm:text-2xl">
                  🎨
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  TailwindCSS
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                  Modern, responsive design powered by TailwindCSS with custom
                  animations and transitions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Connect Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-50 rounded-2xl sm:rounded-3xl -z-10" />
          <div className="text-center space-y-6 sm:space-y-8 max-w-3xl mx-auto p-8 sm:p-12 lg:p-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 px-4">
              Ready to Build?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 px-4">
              Connect your wallet and start building the future of Web3
            </p>
            <div className="flex justify-center pt-2 sm:pt-4">
              <ConnectButton />
            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section className="bg-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
            Quick Start
          </h2>
          <div className="space-y-3 sm:space-y-4 max-w-3xl mx-auto">
            <div className="bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-6 font-mono text-xs sm:text-sm overflow-x-auto">
              <div className="text-gray-400 mb-1"># Clone the repository</div>
              <div className="text-green-400 break-all sm:break-normal">
                git clone https://github.com/your-repo/web3-starter-kit
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-6 font-mono text-xs sm:text-sm">
              <div className="text-gray-400 mb-1"># Install dependencies</div>
              <div className="text-green-400">npm install</div>
            </div>
            <div className="bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-6 font-mono text-xs sm:text-sm">
              <div className="text-gray-400 mb-1"># Setup environment</div>
              <div className="text-green-400">cp .env.example .env.local</div>
            </div>
            <div className="bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-6 font-mono text-xs sm:text-sm">
              <div className="text-gray-400 mb-1"># Start developing</div>
              <div className="text-green-400">npm run dev</div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center space-y-3 pt-8 border-t border-gray-200 pb-8">
          <p className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2 text-sm sm:text-base lg:text-lg px-4">
            <span className="text-gray-600">Built with</span>
            <span
              className="inline-block text-red-500"
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
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm sm:text-base">
            <Link
              href="https://github.com/0x3f-lancers/web3-starter-kit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-gray-600 transition-colors font-medium"
            >
              View on GitHub
            </Link>
            <Link
              href="https://github.com/0x3f-lancers/web3-starter-kit/fork"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-gray-600 transition-colors font-medium"
            >
              Fork Template
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
