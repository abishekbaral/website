import { Link, useLocation } from "wouter";

export default function Header() {
  const [location] = useLocation();

  return (
    <header className="bg-white shadow-md py-3">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="text-2xl font-extrabold text-green-600 mb-4 sm:mb-0">
          <Link href="/">
            FULLY CHARG<span className="text-[#ff9800]">⚡</span>D NEPAL
          </Link>
        </div>
        <nav className="w-full sm:w-auto">
          <ul className="flex flex-wrap justify-center sm:space-x-6">
            <li className="mx-2 my-1">
              <Link 
                href="/" 
                className={`${location === '/' ? 'text-green-600' : 'text-gray-600'} hover:text-green-600 font-semibold transition duration-300`}
              >
                Home
              </Link>
            </li>
            <li className="mx-2 my-1">
              <Link 
                href="/services" 
                className={`${location === '/services' ? 'text-green-600' : 'text-gray-600'} hover:text-green-600 font-semibold transition duration-300`}
              >
                Services
              </Link>
            </li>
            <li className="mx-2 my-1">
              <Link 
                href="/process" 
                className={`${location === '/process' ? 'text-green-600' : 'text-gray-600'} hover:text-green-600 font-semibold transition duration-300`}
              >
                Process
              </Link>
            </li>
            <li className="mx-2 my-1">
              <Link 
                href="/about" 
                className={`${location === '/about' ? 'text-green-600' : 'text-gray-600'} hover:text-green-600 font-semibold transition duration-300`}
              >
                About Us
              </Link>
            </li>
            <li className="mx-2 my-1">
              <Link 
                href="/contact" 
                className={`${location === '/contact' ? 'text-green-600' : 'text-gray-600'} hover:text-green-600 font-semibold transition duration-300`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
