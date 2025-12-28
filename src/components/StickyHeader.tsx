import { useState } from "react";
import { Phone, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const StickyHeader = ({ onOpenModal }: { onOpenModal: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm">
      <div className="container-narrow mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo - Right side (RTL) */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <span className="text-primary font-bold text-lg">م</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-foreground text-lg">مخطط ملقا الطائف</h1>
              <p className="text-xs text-muted-foreground">حي الواسط</p>
            </div>
          </div>

          {/* Actions - Left side (RTL) */}
          <div className="flex items-center gap-2 md:gap-3">
            <a href="https://wa.me/966500000000" className="hidden md:flex">
              <Button variant="whatsapp" size="sm">
                <MessageCircle className="h-4 w-4" />
                <span>واتساب</span>
              </Button>
            </a>
            
            <a href="tel:+966500000000" className="hidden md:flex">
              <Button variant="glass" size="sm">
                <Phone className="h-4 w-4" />
                <span>اتصل الآن</span>
              </Button>
            </a>

            <Button variant="hero" size="sm" onClick={onOpenModal}>
              اطلب الأسعار
            </Button>
          </div>
        </div>
        
        {/* Microcopy */}
        <div className="hidden md:block text-center pb-2 -mt-1">
          <span className="text-xs text-muted-foreground">
            رد خلال وقت العمل – إرسال التفاصيل فورًا
          </span>
        </div>
      </div>
    </header>
  );
};
