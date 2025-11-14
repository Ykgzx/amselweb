// app/privacy/page.tsx
'use client';

import Link from 'next/link';
import { ChevronLeft, Shield, Mail, Phone, Building2, Package, Cookie, Globe } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-sky-50 py-24 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/" className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-500 font-medium mb-6">
            <ChevronLeft className="w-5 h-5" />
            Back to Home
          </Link>
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-100 rounded-full">
              <Shield className="w-10 h-10 text-blue-600" />
            </div>
          </div>
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-blue-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-blue-700 text-lg">Last updated: November 14, 2025</p>
        </div>

        {/* Content */}
        <div className="space-y-12 text-blue-900">

          {/* 1. Introduction */}
          <section className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-blue-100">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h2 className="font-poppins font-bold text-2xl mb-4">1. Introduction</h2>
                <p className="leading-relaxed">
                  <strong>Amcel Nutraceutical Co., Ltd.</strong> ("we", "us", or "our") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.
                </p>
              </div>
            </div>
          </section>

          {/* 2. Personal Data We Collect */}
          <section className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-green-100">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-100 rounded-xl">
                <Package className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1">
                <h2 className="font-poppins font-bold text-2xl mb-4">2. Personal Data We Collect</h2>
                <p className="mb-4">We collect the following personal information to provide and improve our services:</p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <div>
                      <strong>Full Name</strong> and <strong>Company/Organization Name</strong><br />
                      <span className="text-green-600 text-sm">To identify you and issue official documents</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <div>
                      <strong>Email Address</strong><br />
                      <span className="text-green-600 text-sm">To send quotations, product info, and updates</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <div>
                      <strong>Phone Number</strong><br />
                      <span className="text-green-600 text-sm">For coordination and delivery arrangements</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <div>
                      <strong>Product Interests</strong><br />
                      <span className="text-green-600 text-sm">e.g., Cleaning Agents, Mold Cleaners – to recommend suitable products</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 3. Purpose of Data Collection */}
          <section className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-yellow-100">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-yellow-100 rounded-xl">
                <Mail className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="flex-1">
                <h2 className="font-poppins font-bold text-2xl mb-4">3. Purpose of Data Collection</h2>
                <p className="mb-3">We use your data for the following legitimate purposes:</p>
                <ul className="space-y-2 ml-6 text-yellow-700">
                  <li>• Prepare quotations and sales documents</li>
                  <li>• Coordinate product inquiries and deliveries</li>
                  <li>• Recommend products based on your interests</li>
                  <li>• Improve our website and customer service</li>
                  <li>• Analyze anonymized website usage statistics</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 4. Use of Cookies */}
          <section className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-purple-100">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-100 rounded-xl">
                <Cookie className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex-1">
                <h2 className="font-poppins font-bold text-2xl mb-4">4. Use of Cookies</h2>
                <p className="mb-3">We use cookies to:</p>
                <ul className="space-y-2 ml-6 text-purple-700">
                  <li>• Remember your consent preferences</li>
                  <li>• Analyze website performance (via Google Analytics)</li>
                  <li>• Enhance user experience and site functionality</li>
                </ul>
                <p className="mt-4 text-sm">
                  You can <Link href="/" className="text-blue-600 underline hover:text-blue-800">manage cookie preferences</Link> at any time.
                </p>
              </div>
            </div>
          </section>

          {/* 5. Data Sharing & Disclosure */}
          <section className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-teal-100">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-teal-100 rounded-xl">
                <Building2 className="w-6 h-6 text-teal-600" />
              </div>
              <div className="flex-1">
                <h2 className="font-poppins font-bold text-2xl mb-4">5. Data Sharing & Disclosure</h2>
                <p className="text-teal-700">
                  We <strong>do not sell or rent</strong> your personal data.<br />
                  We only share data with:
                </p>
                <ul className="mt-3 space-y-1 ml-6 text-teal-700">
                  <li>• Logistics partners (for product delivery)</li>
                  <li>• Government authorities (when required by law)</li>
                  <li>• Trusted cloud providers (e.g., Google, AWS) with strict security standards</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 6. Your Rights (PDPA Compliance) */}
          <section className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-indigo-100">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-indigo-100 rounded-xl">
                <Phone className="w-6 h-6 text-indigo-600" />
              </div>
              <div className="flex-1">
                <h2 className="font-poppins font-bold text-2xl mb-4">6. Your Rights Under PDPA</h2>
                <p className="mb-3">You have the right to:</p>
                <ul className="space-y-2 ml-6 text-indigo-700">
                  <li>• Access or request a copy of your data</li>
                  <li>• Request correction of inaccurate data</li>
                  <li>• Request deletion or destruction of data</li>
                  <li>• Object to data processing</li>
                  <li>• Request data portability</li>
                  <li>• Withdraw consent at any time</li>
                </ul>
                <p className="mt-4 text-sm">
                  <strong>Contact us:</strong>{' '}
                  <a href="mailto:privacy@amcelnutra.com" className="text-blue-600 underline">
                    privacy@amcelnutra.com
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* 7. Data Security */}
          <section className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-rose-100">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-rose-100 rounded-xl">
                <Shield className="w-6 h-6 text-rose-600" />
              </div>
              <div>
                <h2 className="font-poppins font-bold text-xl">7. Data Security</h2>
                <p className="text-rose-700 text-sm mt-1">
                  We implement SSL encryption, firewalls, and strict access controls. Only authorized personnel can access your data.
                </p>
              </div>
            </div>
          </section>

        </div>

        {/* Footer */}
        <div className="text-center mt-16 text-blue-600">
          <p className="text-sm">
            © 2025 <strong>Amcel Nutraceutical Co., Ltd.</strong> All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}