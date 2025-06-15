function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 justify-center text-center w-full">
          <div className="md:col-span-4">
            <h2 className="text-2xl font-bold text-indigo-400 mb-4">
              memoirpulse
            </h2>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              A platform dedicated to preserving and sharing personal stories
              that matter. Connect with others through the universal language of
              human experience.
            </p>
            <nav aria-label="Social Links">
              <ul className="flex justify-center space-x-4">
                <li>
                  <a
                    href="https://github.com/your-repo"
                    className="text-gray-400 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-6 text-gray-400 text-sm w-full">
          <p>
            &copy; {new Date().getFullYear()} MemoirPulse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
