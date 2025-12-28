import { MapPin, Maximize2, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-masterplan.jpg";

interface HeroSectionProps {
  onOpenModal: () => void;
  onOpenBookVisit: () => void;
}

export const HeroSection = ({ onOpenModal, onOpenBookVisit }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen pt-24 md:pt-28 pb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container-narrow mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Right Column - Content (RTL) */}
          <div className="order-2 lg:order-1 animate-fade-in">
            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                500–1400 م²
              </span>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium">
                77,000 م² مساحة إجمالية
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
              مخطط ملقا الطائف
              <span className="block text-2xl md:text-3xl lg:text-4xl text-muted-foreground mt-2 font-medium">
                149 قطعة سكنية وتجارية بحي الواسط
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              خيارك لبناء بيت العمر أو إطلاق مشروع عقاري واعد داخل حي الواسط — هدوء عمراني، سهولة وصول، وقرب من الطرق الرئيسية والخدمات اليومية.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <StatCard value="77,000" unit="م²" label="مساحة إجمالية" />
              <StatCard value="500–1400" unit="م²" label="مساحات قطع متنوعة" />
              <StatCard value="40/25/15" unit="م" label="عروض الشوارع" />
              <StatCard value="سكني + تجاري" label="مرونة حسب هدفك" />
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <Button variant="hero" size="xl" onClick={onOpenModal} className="w-full sm:w-auto">
                استلم الأسعار + جدول القطع المتاحة
              </Button>
              <Button variant="outline" size="lg" onClick={onOpenBookVisit} className="w-full sm:w-auto">
                احجز زيارة للموقع
              </Button>
            </div>

            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
            >
              <MapPin className="h-4 w-4" />
              افتح الموقع على قوقل ماب
            </a>

            {/* Microcopy */}
            <p className="text-xs text-muted-foreground mt-4 max-w-md">
              توصلك التفاصيل على واتساب + ملف PDF + خريطة + صورة المخطط
            </p>
          </div>

          {/* Left Column - Visual (RTL) */}
          <div className="order-1 lg:order-2 animate-slide-up delay-200">
            <div className="relative">
              {/* Main Plan Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl group cursor-pointer">
                <img 
                  src={heroImage} 
                  alt="المخطط الرئيسي لمخطط ملقا الطائف"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                
                {/* Overlay content */}
                <div className="absolute bottom-4 right-4 left-4 flex items-center justify-between">
                  <div className="text-primary-foreground">
                    <p className="font-bold text-lg">المخطط الرئيسي</p>
                    <p className="text-sm opacity-80">اضغط للتكبير</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center">
                    <Maximize2 className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                
                {/* View Map Button */}
                <button className="absolute top-4 left-4 flex items-center gap-2 bg-background/90 backdrop-blur-sm rounded-lg px-4 py-2 text-sm font-medium text-foreground hover:bg-background transition-colors shadow-md">
                  <MapPin className="h-4 w-4" />
                  عرض الخريطة
                </button>
              </div>

              {/* Mini Map */}
              <div className="absolute -bottom-4 -right-4 w-32 h-24 rounded-xl bg-card shadow-lg border border-border overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-secondary/50 to-muted/50 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary/50" />
                </div>
              </div>

              {/* QR Code */}
              <div className="absolute -top-4 -left-4 w-20 h-20 rounded-xl bg-card shadow-lg border border-border flex items-center justify-center">
                <QrCode className="h-10 w-10 text-muted-foreground/50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ 
  value, 
  unit, 
  label 
}: { 
  value: string; 
  unit?: string; 
  label: string;
}) => (
  <div className="bg-card rounded-xl p-4 shadow-sm border border-border/50 hover:shadow-md transition-shadow">
    <div className="flex items-baseline gap-1 mb-1">
      <span className="text-xl font-bold text-foreground">{value}</span>
      {unit && <span className="text-sm text-primary font-medium">{unit}</span>}
    </div>
    <p className="text-xs text-muted-foreground">{label}</p>
  </div>
);
