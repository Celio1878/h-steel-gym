import type { Route } from "./+types/home";
import { GymGallery } from "~/components/GymGallery";
import { Services } from "~/components/Services";
import { WorkoutTypes } from "~/components/WorkoutTypes";
import { WarmupBenefits } from "~/components/WarmupBenefits";
import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";
import { useLanguage } from "~/components/LanguageProvider";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "H-Steel Gym - Strength & Conditioning" },
    { name: "description", content: "Welcome to H-Steel Gym. Your journey to a stronger self starts here." },
  ];
}

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors">
      <Header />
      
      <header className="relative h-[80vh] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200" 
          alt="Gym Hero" 
          className="absolute inset-0 w-full h-full object-cover opacity-50 dark:opacity-40 transition-opacity"
        />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter animate-in fade-in slide-in-from-bottom-4 duration-1000">
            {t("heroTitle")}
          </h1>
          <p className="text-xl md:text-2xl font-light mb-10 max-w-2xl mx-auto text-gray-200 animate-in fade-in slide-in-from-bottom-4 delay-200 duration-1000">
            {t("heroSubtitle")}
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full text-lg transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-600/30 animate-in fade-in slide-in-from-bottom-4 delay-500 duration-1000">
            {t("joinNow")}
          </button>
        </div>
      </header>

      <main>
        <div id="gallery"><GymGallery /></div>
        <div id="services"><Services /></div>
        <div id="workouts"><WorkoutTypes /></div>
        <div id="warmup"><WarmupBenefits /></div>
      </main>

      <Footer />
    </div>
  );
}
