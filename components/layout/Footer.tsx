export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-gray-600 dark:text-slate-400">
            © {currentYear} Claro. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-600 dark:text-slate-400 hover:text-primary dark:hover:text-emerald-400 transition-colors duration-300">
              Privacy
            </a>
            <a href="#" className="text-gray-600 dark:text-slate-400 hover:text-primary dark:hover:text-emerald-400 transition-colors duration-300">
              Terms
            </a>
            <a href="#" className="text-gray-600 dark:text-slate-400 hover:text-primary dark:hover:text-emerald-400 transition-colors duration-300">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
