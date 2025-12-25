import { useState } from "react";
import { X, MessageCircle, Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  plotNumber?: string;
  type?: "price" | "visit";
}

export const LeadModal = ({ isOpen, onClose, plotNumber, type = "price" }: LeadModalProps) => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    contactMethod: "whatsapp",
    goal: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast({
        title: "يرجى إكمال البيانات المطلوبة",
        variant: "destructive",
      });
      return;
    }

    // Simulate submission
    setIsSubmitted(true);
    toast({
      title: "تم استلام طلبك بنجاح!",
      description: "سنتواصل معك في أقرب وقت",
    });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `مرحبًا، أود الحصول على ${type === "price" ? "أسعار وجدول القطع المتاحة" : "حجز زيارة ميدانية"} في مخطط ملقا الطائف${plotNumber ? ` - قطعة رقم ${plotNumber}` : ""}`
    );
    window.open(`https://wa.me/966500000000?text=${message}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-foreground/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-card rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto animate-scale-in">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 left-4 w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors z-10"
        >
          <X className="h-5 w-5 text-foreground" />
        </button>

        {isSubmitted ? (
          /* Success State */
          <div className="p-8 text-center">
            <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-10 w-10 text-success" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">تم استلام طلبك!</h3>
            <p className="text-muted-foreground mb-8">سنتواصل معك في أقرب وقت ممكن</p>

            <div className="space-y-3">
              <Button variant="whatsapp" size="lg" className="w-full gap-2" onClick={handleWhatsApp}>
                <MessageCircle className="h-5 w-5" />
                فتح واتساب للتواصل الفوري
              </Button>
              <Button variant="outline" size="lg" className="w-full gap-2" asChild>
                <a href="tel:+966500000000">
                  <Phone className="h-5 w-5" />
                  اتصال مباشر
                </a>
              </Button>
            </div>
          </div>
        ) : (
          /* Form State */
          <div className="p-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              {type === "price" 
                ? (plotNumber ? `اطلب سعر القطعة ${plotNumber}` : "اطلب الأسعار وجدول القطع") 
                : "احجز زيارة ميدانية"
              }
            </h3>
            <p className="text-muted-foreground mb-6">
              {type === "price" 
                ? "سنرسل لك تفاصيل الأسعار والقطع المتاحة على واتساب"
                : "سنتواصل معك لتحديد موعد الزيارة"
              }
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  الاسم <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border-0 focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground"
                  placeholder="أدخل اسمك الكريم"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  رقم الجوال <span className="text-destructive">*</span>
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border-0 focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground text-left"
                  placeholder="05xxxxxxxx"
                  dir="ltr"
                  required
                />
              </div>

              {/* Contact Method */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  طريقة التواصل المفضلة
                </label>
                <div className="flex gap-3">
                  <label className="flex-1">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="whatsapp"
                      checked={formData.contactMethod === "whatsapp"}
                      onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                      className="sr-only"
                    />
                    <div className={`flex items-center justify-center gap-2 p-3 rounded-xl cursor-pointer transition-all ${
                      formData.contactMethod === "whatsapp" 
                        ? "bg-whatsapp/10 border-2 border-whatsapp text-whatsapp" 
                        : "bg-secondary border-2 border-transparent text-foreground"
                    }`}>
                      <MessageCircle className="h-5 w-5" />
                      <span className="font-medium">واتساب</span>
                    </div>
                  </label>
                  <label className="flex-1">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="call"
                      checked={formData.contactMethod === "call"}
                      onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                      className="sr-only"
                    />
                    <div className={`flex items-center justify-center gap-2 p-3 rounded-xl cursor-pointer transition-all ${
                      formData.contactMethod === "call" 
                        ? "bg-primary/10 border-2 border-primary text-primary" 
                        : "bg-secondary border-2 border-transparent text-foreground"
                    }`}>
                      <Phone className="h-5 w-5" />
                      <span className="font-medium">اتصال</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Goal (Optional) */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  الهدف <span className="text-muted-foreground text-xs">(اختياري)</span>
                </label>
                <select
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border-0 focus:ring-2 focus:ring-primary/50 text-foreground"
                >
                  <option value="">اختر الهدف</option>
                  <option value="سكن">سكن</option>
                  <option value="استثمار">استثمار</option>
                  <option value="استفسار عام">استفسار عام</option>
                </select>
              </div>

              {/* Submit Buttons */}
              <div className="space-y-3 pt-4">
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  {type === "price" ? "أرسل لي سعر القطعة" : "احجز موعد الزيارة"}
                </Button>
                <Button 
                  type="button" 
                  variant="whatsapp" 
                  size="lg" 
                  className="w-full gap-2"
                  onClick={handleWhatsApp}
                >
                  <MessageCircle className="h-5 w-5" />
                  إرسال أحدث جدول على واتساب
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
