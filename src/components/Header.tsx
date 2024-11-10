import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-gray-800 text-white">
      <div className="text-2xl font-bold">
        <h1>sadaf</h1>
      </div>
      <nav>
        <ul className="flex space-x-8">
          <li>
            <Link href="/" legacyBehavior>
              <a className="hover:text-teal-400">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about" legacyBehavior>
              <a className="hover:text-teal-400">About</a>
            </Link>
          </li>
          <li>
            <Link href="/project" legacyBehavior>
              <a className="hover:text-teal-400">Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/contact" legacyBehavior>
              <a className="hover:text-teal-400">Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

