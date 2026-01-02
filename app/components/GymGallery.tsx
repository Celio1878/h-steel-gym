import { useLanguage } from "./LanguageProvider";

export function GymGallery() {
  const { t } = useLanguage();
  const images = [
    {
      url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600",
      alt: "Gym Machine 1",
      title: "Advanced Cardio Section"
    },
    {
      url: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=600",
      alt: "Gym Machine 2",
      title: "Strength Training Area"
    },
    {
      url: "https://images.unsplash.com/photo-1571902251103-64056792e3b8?auto=format&fit=crop&q=80&w=600",
      alt: "Gym 1",
      title: "Free Weights Zone"
    },
    {
      url: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=600",
      alt: "Gym 2",
      title: "Functional Training Space"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-black text-center mb-16 text-gray-900 dark:text-white tracking-tight">
          {t("gymGallery")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {images.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow-lg transition-transform hover:scale-105">
              <img src={img.url} alt={img.alt} className="w-full h-64 object-cover" />
              <div className="p-4 bg-white dark:bg-gray-800">
                <p className="text-center font-medium text-gray-700 dark:text-gray-300">{img.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
