import { Maximize2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import masterplanImage from "@/assets/hero-masterplan.jpg";

export const MasterPlanViewer = () => {
  return (
    <section className="section-padding bg-secondary/20">
      <div className="container-narrow mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            صورة المخطط
          </h2>
        </div>

        {/* Plan Viewer */}
        <div className="relative max-w-4xl mx-auto">
          <div 
            className="relative rounded-2xl overflow-hidden aspect-[16/10] shadow-xl border border-border/50 cursor-pointer group"
          >
            <img 
              src={masterplanImage}
              alt="المخطط الرئيسي لمخطط ملقا الطائف - عرض كامل"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-foreground/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-background/80 flex items-center justify-center">
                <Maximize2 className="h-10 w-10 text-primary" />
              </div>
            </div>
          </div>

          {/* Download Button */}
          <div className="flex justify-center mt-6">
            <Button variant="outline" size="lg" className="gap-2">
              <Download className="h-5 w-5" />
              تحميل صورة المخطط
            </Button>
          </div>

          {/* Disclaimer */}
          <p className="text-center text-sm text-muted-foreground mt-4">
            الصورة للتوضيح — التفاصيل النهائية حسب جدول القطع المتاحة
          </p>
        </div>
      </div>
    </section>
  );
};
