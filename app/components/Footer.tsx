import { useLanguage } from "./LanguageProvider";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-gray-950 text-gray-400 border-t border-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="text-2xl font-black tracking-tighter text-white mb-6">
              H-STEEL
            </div>
            <p className="text-sm leading-relaxed mb-6">
              {t("heroSubtitle")}
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">{t("contact")}</h4>
            <ul className="space-y-4 text-sm">
              <li>123 Strength Ave, Iron City</li>
              <li>+1 (555) 000-STEEL</li>
              <li>contact@hsteelgym.com</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#gallery" className="hover:text-blue-500 transition-colors">{t("gymGallery")}</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition-colors">{t("services")}</a></li>
              <li><a href="#workouts" className="hover:text-blue-500 transition-colors">{t("workoutTypes")}</a></li>
              <li><a href="#warmup" className="hover:text-blue-500 transition-colors">{t("warmupBenefits")}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">{t("social")}</h4>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-blue-600 transition-colors text-white" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://facebook.com" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-blue-600 transition-colors text-white" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://youtube.com" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-blue-600 transition-colors text-white" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
              </a>
              <a href="https://x.com" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-blue-600 transition-colors text-white" aria-label="X">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-900 text-center text-sm">
          <p>&copy; {currentYear} H-STEEL GYM. {t("footerRights")}</p>
        </div>
      </div>
    </footer>
  );
}
