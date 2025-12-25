import { useState } from "react";
import { StickyHeader } from "@/components/StickyHeader";
import { HeroSection } from "@/components/HeroSection";
import { TrustStrip } from "@/components/TrustStrip";
import { ValueProposition } from "@/components/ValueProposition";
import { SpecsBlock } from "@/components/SpecsBlock";
import { LocationBenefits } from "@/components/LocationBenefits";
import { InfrastructureGrid } from "@/components/InfrastructureGrid";
import { NearbyLandmarks } from "@/components/NearbyLandmarks";
import { MasterPlanViewer } from "@/components/MasterPlanViewer";
import { InventoryTable } from "@/components/InventoryTable";
import { ProcessSteps } from "@/components/ProcessSteps";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { LeadModal } from "@/components/LeadModal";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { Helmet } from "react-helmet";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"price" | "visit">("price");
  const [selectedPlot, setSelectedPlot] = useState<string | undefined>();

  const openPriceModal = (plotNumber?: string) => {
    setModalType("price");
    setSelectedPlot(plotNumber);
    setIsModalOpen(true);
  };

  const openVisitModal = () => {
    setModalType("visit");
    setSelectedPlot(undefined);
    setIsModalOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>مخطط ملقا الطائف | 149 قطعة سكنية وتجارية بحي الواسط</title>
        <meta 
          name="description" 
          content="اكتشف مخطط ملقا الطائف - 149 قطعة سكنية وتجارية بمساحات من 500 إلى 1400 م² في حي الواسط. موقع مميز، بنية تحتية متكاملة، وفرص استثمارية واعدة." 
        />
        <meta name="keywords" content="مخطط ملقا, الطائف, أراضي للبيع, قطع سكنية, قطع تجارية, حي الواسط, عقارات الطائف" />
        <link rel="canonical" href="https://malqa-taif.com" />
        <html lang="ar" dir="rtl" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <StickyHeader onOpenModal={() => openPriceModal()} />
        
        <main>
          <HeroSection 
            onOpenModal={() => openPriceModal()} 
            onOpenBookVisit={openVisitModal} 
          />
          <TrustStrip />
          <ValueProposition onOpenModal={() => openPriceModal()} />
          <SpecsBlock />
          <LocationBenefits />
          <InfrastructureGrid />
          <NearbyLandmarks />
          <MasterPlanViewer />
          <InventoryTable onOpenModal={openPriceModal} />
          <ProcessSteps />
          <FAQ />
        </main>

        <Footer onOpenModal={() => openPriceModal()} />

        {/* Mobile Sticky Bar */}
        <MobileStickyBar onOpenModal={() => openPriceModal()} />

        {/* Lead Modal */}
        <LeadModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          plotNumber={selectedPlot}
          type={modalType}
        />
      </div>
    </>
  );
};

export default Index;
