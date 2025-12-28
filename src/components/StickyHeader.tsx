import { useState } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

export const StickyHeader = ({
  onOpenModal
}: {
  onOpenModal: () => void;
}) => {
  const [isVisible, setIsVisible] = useState(true);
  if (!isVisible) return null;
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container-narrow mx-auto px-4">
        <div className="items-center justify-between h-20 md:h-24 flex flex-row">
          {/* Logo - Right side (RTL) */}
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="مخطط ملقا الطائف" 
              className="h-14 md:h-16 w-auto object-contain" 
            />
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
              <Button variant="outline" size="sm">
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
          <span className="text-xs text-muted-foreground text-right">
            رد خلال وقت العمل – إرسال التفاصيل فورًا
          </span>
        </div>
      </div>
    </header>
  );
};