

import Link from 'next/link';

export default function Footer() {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-8 lg:space-y-0">
        {/* Morent Brand Section */}
        <div className="flex flex-col items-start">
          <Link href="/">
            <li className="font-bold text-2xl text-blue-500 mb-4">MORENT</li>
          </Link>
          <p className="text-gray-600 text-sm">
            Our vision is to provide convenience and help increase your sales business.
          </p>
          <p className="text-gray-500 text-sm mt-4">©2022 MORENT. All rights reserved</p>
        </div>

        {/* About Section */}
        <div className="flex flex-col items-start">
          <h3 className="font-bold text-lg mb-4">About</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about/how-it-works">
                <li className="text-gray-600 hover:text-blue-500 text-sm">How it works</li>
              </Link>
            </li>
            <li>
              <Link href="/about/featured">
                <li className="text-gray-600 hover:text-blue-500 text-sm">Featured</li>
              </Link>
            </li>
            <li>
              <Link href="/about/partnership">
                <li className="text-gray-600 hover:text-blue-500 text-sm">Partnership</li>
              </Link>
            </li>
            <li>
              <Link href="/about/business-relation">
                <li className="text-gray-600 hover:text-blue-500 text-sm">Business Relation</li>
              </Link>
            </li>
          </ul>
        </div>

        {/* Community Section */}
        <div className="flex flex-col items-start">
          <h3 className="font-bold text-lg mb-4">Community</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/community/events">
                <li className="text-gray-600 hover:text-blue-500 text-sm">Events</li>
              </Link>
            </li>
            <li>
              <Link href="/community/socials">
                <li className="text-gray-600 hover:text-blue-500 text-sm">Socials</li>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
