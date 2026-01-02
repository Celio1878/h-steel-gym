import { ThemeToggle } from "./ThemeToggle";
import { useLanguage } from "./LanguageProvider";

export function Header() {
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-2xl font-black tracking-tighter text-gray-900 dark:text-white">
          H-STEEL
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#gallery" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {t("gymGallery")}
          </a>
          <a href="#services" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {t("services")}
          </a>
          <a href="#workouts" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {t("workoutTypes")}
          </a>
          <a href="#warmup" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {t("warmupBenefits")}
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <button className="hidden sm:block bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold py-2 px-5 rounded-full transition-all hover:scale-105 active:scale-95">
            {t("joinNow")}
          </button>
        </div>
      </div>
    </header>
  );
}
