import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "ما هي أنواع الاستخدامات المتاحة في المخطط؟",
    answer: "يتضمن المخطط قطع سكنية وتجارية وسكنية-تجارية، مما يتيح مرونة كاملة سواء للسكن العائلي أو إطلاق مشروع تجاري.",
  },
  {
    question: "ما هي المساحات المتوفرة للقطع؟",
    answer: "تتراوح مساحات القطع من 500 إلى 1400 متر مربع، مما يناسب احتياجات متنوعة من الفلل الصغيرة إلى المشاريع الكبيرة.",
  },
  {
    question: "هل يمكنني زيارة الموقع قبل الشراء؟",
    answer: "نعم، نوفر زيارات ميدانية للموقع. يمكنك حجز موعد الزيارة من خلال النموذج أو التواصل معنا مباشرة عبر واتساب.",
  },
  {
    question: "كيف أحصل على الأسعار وجدول القطع المتاحة؟",
    answer: "عند تعبئة النموذج، سنرسل لك على واتساب ملف PDF يتضمن الأسعار المحدثة وجدول القطع المتاحة مع خريطة المخطط.",
  },
  {
    question: "ما هي آلية حجز القطعة؟",
    answer: "بعد اختيار القطعة المناسبة، يمكنك حجزها بدفعة أولى. سنوفر لك كافة التفاصيل والإجراءات عند التواصل.",
  },
  {
    question: "هل الأسعار قابلة للتغيير؟",
    answer: "الأسعار المعروضة محدثة وقت الإرسال، وقد تتغير حسب العرض والطلب. ننصح بالتواصل للحصول على أحدث الأسعار.",
  },
];

export const FAQ = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            الأسئلة الشائعة
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border/50 px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-right font-bold text-foreground hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
