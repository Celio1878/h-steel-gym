import { useLanguage } from "./LanguageProvider";

export function WarmupBenefits() {
  const { t } = useLanguage();
  const benefits = [
    {
      title: t("injuryPrevention"),
      description: t("injuryPreventionDesc")
    },
    {
      title: t("bloodFlow"),
      description: t("bloodFlowDesc")
    },
    {
      title: t("mentalPrep"),
      description: t("mentalPrepDesc")
    },
    {
      title: t("rangeOfMotion"),
      description: t("rangeOfMotionDesc")
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-black text-center mb-16 text-gray-900 dark:text-white tracking-tight">
          {t("warmupBenefits")}
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-6 p-8 bg-gray-50 dark:bg-gray-900 rounded-3xl border-l-8 border-blue-600 shadow-sm transition-all hover:shadow-md hover:translate-x-2">
              <div className="shrink-0 w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-lg shadow-blue-600/20">
                {index + 1}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
