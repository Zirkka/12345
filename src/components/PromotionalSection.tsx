import electricFiresPromo from "@assets/24_7_Peace_of_Mind__version_1 (1)_1762969968844.png";
import firePreventionPromo from "@assets/Alert_Before_the_Fire_version_1_1762969968845.png";
import technicianVan from "@assets/Generated Image November 05, 2025 - 1_44PM_1762969968843.png";

export default function PromotionalSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div 
            className="rounded-lg overflow-hidden hover-elevate transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            onClick={scrollToContact}
            data-testid="card-promo-electric-fires"
          >
            <img
              src={electricFiresPromo}
              alt="Electric fires don't take holidays - 24/7 smart monitoring"
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div 
            className="rounded-lg overflow-hidden hover-elevate transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            onClick={scrollToContact}
            data-testid="card-promo-fire-prevention"
          >
            <img
              src={firePreventionPromo}
              alt="24/7 fire prevention - Alert before the fire"
              className="w-full h-auto object-cover"
            />
          </div>

          <div 
            className="rounded-lg overflow-hidden hover-elevate transition-all duration-300 hover:-translate-y-1"
            data-testid="card-promo-service-van"
          >
            <img
              src={technicianVan}
              alt="FireGuard service technician ready to help"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
