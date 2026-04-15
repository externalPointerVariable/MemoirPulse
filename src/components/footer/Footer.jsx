import { LuGithub } from "react-icons/lu";
import {Logo} from "../index";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12" aria-label="Site Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Main Footer Content */}
        <Logo />
        <h2 className="text-3xl font-bold text-indigo-400 mb-4">
          memoirpulse
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto mb-6">
          A platform dedicated to preserving and sharing personal stories that
          matter. Connect with others through the universal language of human
          experience.
        </p>

        {/* Social Links */}
        <nav aria-label="Social Links">
          <ul className="flex justify-center space-x-4">
            <li>
              <a
                href="https://github.com/externalPointerVariable/MemoirPulse"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <LuGithub size={28} />
              </a>
            </li>
          </ul>
        </nav>

        {/* Separator and Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-800 text-gray-400 text-sm w-full">
          <p>
            &copy; {new Date().getFullYear()} MemoirPulse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;