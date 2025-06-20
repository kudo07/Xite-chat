'use client';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';

const Navbar = () => {
  return (
    <nav className=" sticky top-0 z-50 p-6 flex justify-evenly items-center backdrop-blur-lg border-gray-200/80 bg-gray-50/80 shadow-sm">
      <h1 className="text-xl md:text-2xl font-extrabold">XiTe</h1>
      <div className="flex items-center space-x-2  md:space-x-6 text-gray-800">
        <Link href="/">Home</Link>
        <Link href="#feature">features</Link>
        <Link href="/dashboard">
          <Button>Dashboard</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
