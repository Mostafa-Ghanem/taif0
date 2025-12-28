import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

interface FooterProps {
  onOpenModal: () => void;
}

export const Footer = ({ onOpenModal }: FooterProps) => {
  return (
    <footer className="bg-brand-navy text-brand-navyText">
      {/* Final CTA */}
      <div className="py-16 px-4 text-center border-b border-brand-navyText/10">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-brand-navyText">
            امتلك اليوم داخل مخطط يمنحك الهدوء والقيمة وسهولة الوصول
          </h2>
          <Button variant="inverse" size="xl" onClick={onOpenModal} className="mt-6">
            اطلب التفاصيل الآن
          </Button>
        </div>
      </div>

      {/* Contact Info */}
      <div className="py-12 px-4">
        <div className="container-narrow mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo & Name */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src={logo} 
                  alt="مخطط ملقا الطائف" 
                  className="h-12 w-auto object-contain brightness-0 invert opacity-80"
                />
                <div>
                  <h3 className="font-bold text-lg text-brand-navyText">مخطط ملقا الطائف</h3>
                  <p className="text-sm text-brand-navyText/60">حي الواسط</p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold mb-4 text-brand-navyText">تواصل معنا</h4>
              <ul className="space-y-3">
                <li>
                  <a href="tel:+966500000000" className="flex items-center gap-2 text-brand-navyText/80 hover:text-brand-beige transition-colors">
                    <Phone className="h-4 w-4" />
                    <span>+966 50 000 0000</span>
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/966500000000" className="flex items-center gap-2 text-brand-navyText/80 hover:text-brand-beige transition-colors">
                    <MessageCircle className="h-4 w-4" />
                    <span>واتساب</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:info@malqa-taif.com" className="flex items-center gap-2 text-brand-navyText/80 hover:text-brand-beige transition-colors">
                    <Mail className="h-4 w-4" />
                    <span>info@malqa-taif.com</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Location */}
            <div>
              <h4 className="font-bold mb-4 text-brand-navyText">الموقع</h4>
              <div className="flex items-start gap-2 text-brand-navyText/80">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>حي الواسط، الطائف، المملكة العربية السعودية</span>
              </div>
            </div>

            {/* Hours */}
            <div>
              <h4 className="font-bold mb-4 text-brand-navyText">ساعات العمل</h4>
              <div className="flex items-start gap-2 text-brand-navyText/80">
                <Clock className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <p>السبت - الخميس</p>
                  <p>9:00 صباحًا - 9:00 مساءً</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-6 px-4 border-t border-brand-navyText/10">
        <div className="container-narrow mx-auto text-center text-sm text-brand-navyText/60">
          <p>© 2024 مخطط ملقا الطائف. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};