import { useLanguage } from "./LanguageProvider";

export function WorkoutTypes() {
  const { t } = useLanguage();
  const workouts = [
    {
      type: "Hypertrophy",
      focus: "Muscle Growth",
      icon: "💪"
    },
    {
      type: "HIIT",
      focus: "Fat Burning",
      icon: "🔥"
    },
    {
      type: "Powerlifting",
      focus: "Max Strength",
      icon: "🏋️‍♂️"
    },
    {
      type: "Yoga & Mobility",
      focus: "Flexibility",
      icon: "🧘‍♀️"
    },
    {
      type: "Calisthenics",
      focus: "Body Control",
      icon: "🤸‍♂️"
    },
    {
      type: "Endurance",
      focus: "Cardiovascular Health",
      icon: "🏃‍♂️"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-black text-center mb-16 text-gray-900 dark:text-white tracking-tight">
          {t("workoutTypes")}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {workouts.map((workout, index) => (
            <div key={index} className="flex flex-col items-center p-10 bg-white dark:bg-gray-800 rounded-3xl shadow-sm border border-transparent hover:border-blue-500 transition-all hover:shadow-lg">
              <span className="text-6xl mb-6 transform transition-transform hover:scale-110 duration-300">{workout.icon}</span>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{workout.type}</h3>
              <p className="text-blue-600 dark:text-blue-400 font-bold text-lg">{workout.focus}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
