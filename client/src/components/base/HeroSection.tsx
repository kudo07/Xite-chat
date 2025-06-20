import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';

const HeroSection = () => {
  return (
    <section className="flex-1 flex flex-col items-center justify-center text-center p-12 bg-gradient-to-b from-gray-200 to-cyan-50">
      <h1 className="text-6xl font-extrabold text-cyan-800 mb-4">
        Xite Chat fly messages like kite
      </h1>
      <p className="text-xl text-cyan-700 mb-9">
        Makes the chat like the sky and fill with Xite Messages, sending
        messages in seconds.
      </p>
      <Link href="/dashboard">
        <Button size="lg" className="animate-pulse">
          Start Chatting
        </Button>
      </Link>
      <div className="mt-12 w-full max-w-5xl flex justify-center">
        {/* Placeholder for Illustration/Image */}
        <img
          src="/images/conversation.svg"
          alt="Illustration"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default HeroSection;
