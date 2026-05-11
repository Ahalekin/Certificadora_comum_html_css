import { BookOpen } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const SiteHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToLessons = () => {
    if (location.pathname !== "/") {
      navigate("/#aulas");
      setTimeout(() => {
        document.getElementById("aulas")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById("aulas")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg">
          <BookOpen className="w-5 h-5 text-primary" />
          <span className="text-gradient-gold">HTML e CSS</span>
        </Link>
        <button
          type="button"
          onClick={scrollToLessons}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Aulas
        </button>
      </div>
    </header>
  );
};

export default SiteHeader;
