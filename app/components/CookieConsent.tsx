// components/CookieConsent.tsx
'use client';

import { useEffect, useState } from 'react';
import { X, Cookie, Shield } from 'lucide-react';
import Link from 'next/link';

const COOKIE_NAME = 'cookie-consent';

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_NAME);
    if (!consent) setShow(true);
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_NAME, 'accepted');
    setShow(false);
  };

  const decline = () => {
    localStorage.setItem(COOKIE_NAME, 'declined');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 w-full max-w-sm animate-slide-in-right">
      <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-blue-100 p-6 flex flex-col gap-4 relative">

        {/* Header with Icon */}
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-blue-100 rounded-full">
            <Cookie className="w-6 h-6 text-blue-600" />
          </div>
          <p className="font-jakarta text-blue-800 text-sm font-semibold">
            We use cookies
          </p>
        </div>

        {/* Message */}
        <p className="font-jakarta text-blue-700 text-xs leading-relaxed -mt-2">
          To enhance your experience and collect secure usage statistics.{' '}
          <Link
            href="/privacy"
            className="text-blue-600 underline hover:text-blue-700 transition text-xs"
          >
            Privacy Policy
          </Link>
        </p>

        {/* Buttons */}
        <div className="flex gap-2 mt-2">
          <button
            onClick={decline}
            className="flex-1 px-4 py-2 text-xs font-jakarta font-medium text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-full transition-all duration-200 border border-blue-200"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="flex-1 px-4 py-2 text-xs font-jakarta font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-1.5"
          >
            <Shield className="w-3.5 h-3.5" />
            Accept
          </button>
        </div>

        {/* Close Button */}
        <button
          onClick={decline}
          className="absolute top-3 right-3 text-blue-400 hover:text-blue-600 transition"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}