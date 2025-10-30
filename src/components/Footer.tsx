import { Facebook, Instagram, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="mt-20 py-8 border-t border-border bg-card/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center hover:scale-110"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://web.whatsapp.com/send?phone=8801925173511"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary hover:bg-success hover:text-success-foreground transition-all duration-300 flex items-center justify-center hover:scale-110"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary hover:bg-gradient-primary hover:text-white transition-all duration-300 flex items-center justify-center hover:scale-110"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
          
          <p className="text-muted-foreground text-sm text-center">
            © 2025 Premium IT Bazar | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
