import { useState } from "react";
import { Filter, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface InventoryTableProps {
  onOpenModal: (plotNumber?: string) => void;
}

const samplePlots = [
  { number: "A-101", usage: "سكني", area: "650" },
  { number: "A-102", usage: "سكني", area: "720" },
  { number: "B-201", usage: "تجاري", area: "1200" },
  { number: "B-202", usage: "سكني-تجاري", area: "980" },
  { number: "C-301", usage: "سكني", area: "550" },
];

const usageOptions = ["الكل", "سكني", "تجاري", "سكني-تجاري"];
const areaOptions = ["الكل", "500–800", "800–1100", "1100–1400"];

export const InventoryTable = ({ onOpenModal }: InventoryTableProps) => {
  const [selectedUsage, setSelectedUsage] = useState("الكل");
  const [selectedArea, setSelectedArea] = useState("الكل");

  return (
    <section className="section-padding bg-background" id="inventory">
      <div className="container-narrow mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            جدول القطع المتاحة
          </h2>
          <p className="text-muted-foreground">
            استعرض القطع المتاحة واطلب تفاصيل الأسعار
          </p>
        </div>

        {/* Filters */}
        <div className="bg-card rounded-xl p-4 shadow-sm border border-border/50 mb-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Filter className="h-5 w-5" />
              <span className="font-medium">تصفية:</span>
            </div>

            <div className="flex flex-wrap gap-4">
              {/* Usage Filter */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">الاستخدام:</span>
                <select
                  value={selectedUsage}
                  onChange={(e) => setSelectedUsage(e.target.value)}
                  className="bg-secondary rounded-lg px-3 py-2 text-sm border-0 focus:ring-2 focus:ring-primary/50"
                >
                  {usageOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              {/* Area Filter */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">المساحة:</span>
                <select
                  value={selectedArea}
                  onChange={(e) => setSelectedArea(e.target.value)}
                  className="bg-secondary rounded-lg px-3 py-2 text-sm border-0 focus:ring-2 focus:ring-primary/50"
                >
                  {areaOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Primary CTA */}
        <div className="text-center mb-8">
          <Button variant="whatsapp" size="lg" className="gap-2" onClick={() => onOpenModal()}>
            <MessageCircle className="h-5 w-5" />
            اطلب أحدث جدول متاح على واتساب
          </Button>
        </div>

        {/* Table */}
        <div className="bg-card rounded-xl shadow-sm border border-border/50 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-secondary/50">
                  <th className="text-right py-4 px-6 font-bold text-foreground">رقم القطعة</th>
                  <th className="text-right py-4 px-6 font-bold text-foreground">الاستخدام</th>
                  <th className="text-right py-4 px-6 font-bold text-foreground">المساحة</th>
                  <th className="text-center py-4 px-6 font-bold text-foreground">السعر</th>
                </tr>
              </thead>
              <tbody>
                {samplePlots.map((plot, index) => (
                  <tr 
                    key={index}
                    className="border-t border-border/50 hover:bg-secondary/20 transition-colors"
                  >
                    <td className="py-4 px-6 font-medium text-foreground">{plot.number}</td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                        plot.usage === "سكني" ? "bg-success/10 text-success" :
                        plot.usage === "تجاري" ? "bg-primary/10 text-primary" :
                        "bg-accent/10 text-accent"
                      }`}>
                        {plot.usage}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-foreground">{plot.area} م²</td>
                    <td className="py-4 px-6 text-center">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => onOpenModal(plot.number)}
                      >
                        اطلب سعرها
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Note */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          هذه عينة فقط — للحصول على الجدول الكامل والأسعار المحدثة، اطلب عبر النموذج أعلاه
        </p>
      </div>
    </section>
  );
};
