import { useLanguage } from "./LanguageProvider";

export function Services() {
  const { t } = useLanguage();
  const services = [
    {
      title: t("personalTrainer"),
      description: t("personalTrainerDesc"),
      price: "$60/hr"
    },
    {
      title: t("nutritionPlan"),
      description: t("nutritionPlanDesc"),
      price: "$45/session"
    },
    {
      title: t("groupClasses"),
      description: t("groupClassesDesc"),
      price: "$25/session"
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-black text-center mb-16 text-gray-900 dark:text-white tracking-tight">
          {t("services")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col p-8 border border-gray-100 dark:border-gray-700 rounded-3xl bg-gray-50 dark:bg-gray-900 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight">{service.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">{service.description}</p>
              <div className="mt-auto flex items-center justify-between">
                <span className="text-2xl font-black text-blue-600 dark:text-blue-400">
                  {service.price}
                </span>
                <button className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-2 rounded-full font-bold hover:bg-blue-600 dark:hover:bg-blue-500 dark:hover:text-white transition-colors">
                  {t("bookNow")}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
