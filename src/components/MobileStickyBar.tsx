import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileStickyBarProps {
  onOpenModal: () => void;
}

export const MobileStickyBar = ({ onOpenModal }: MobileStickyBarProps) => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("مرحبًا، أود الاستفسار عن مخطط ملقا الطائف");
    window.open(`https://wa.me/966500000000?text=${message}`, "_blank");
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-card/95 backdrop-blur-md border-t border-border/50 shadow-lg p-3">
      <div className="flex gap-3">
        <Button 
          variant="whatsapp" 
          size="lg" 
          className="flex-1 gap-2"
          onClick={handleWhatsApp}
        >
          <MessageCircle className="h-5 w-5" />
          واتساب
        </Button>
        <Button 
          variant="hero" 
          size="lg" 
          className="flex-1"
          onClick={onOpenModal}
        >
          اطلب الأسعار
        </Button>
      </div>
    </div>
  );
};
