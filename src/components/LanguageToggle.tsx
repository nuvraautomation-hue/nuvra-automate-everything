import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-secondary/80 rounded-full p-1 border border-primary/20">
      <button
        onClick={() => setLanguage("fr")}
        className={`px-3 py-1 text-sm font-medium rounded-full transition-all duration-300 ${
          language === "fr"
            ? "bg-primary text-primary-foreground shadow-[0_0_15px_-3px_hsl(var(--primary)/0.5)]"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        FR
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1 text-sm font-medium rounded-full transition-all duration-300 ${
          language === "en"
            ? "bg-primary text-primary-foreground shadow-[0_0_15px_-3px_hsl(var(--primary)/0.5)]"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageToggle;
