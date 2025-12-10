import technicianPanel1 from "@assets/Generated Image November 05, 2025 - 10_35AM (1) (1)_1762969968842.png";
import technicianPanel2 from "@assets/Generated Image November 05, 2025 - 10_33AM (1)_1762969968843.png";
import technicianApartment from "@assets/Generated Image November 05, 2025 - 1_41PM_1762969968844.png";
import technicianBasement from "@assets/Generated Image November 05, 2025 - 1_40PM_1762969968844.png";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6" data-testid="text-about-title">
              About FireGuard
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Our system specializes in cutting-edge fire prevention solutions for home electrical
                panels – the #1 cause of residential electrical fires*.
              </p>
              <p>
                By monitoring circuit breakers within your electrical panel, our system identifies
                irregularities—such as overloads or overheating—that may signal early signs of
                electrical fires.
              </p>
              <p className="font-semibold text-foreground">
                Faulty wiring, overloaded circuits, and outdated panels cause over 50,000 U.S. home
                fires annually (NFPA). Our systems stop fires before they start.
              </p>
              <p className="text-sm italic">
                *National Fire Protection Association (NFPA)
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src={technicianPanel1}
              alt="FireGuard technician installing monitoring system"
              className="rounded-lg w-full h-48 object-cover hover-elevate transition-all duration-300"
              data-testid="img-control-center"
            />
            <img
              src={technicianPanel2}
              alt="Professional installation of electrical panel monitoring"
              className="rounded-lg w-full h-48 object-cover hover-elevate transition-all duration-300"
              data-testid="img-arc-fault"
            />
            <img
              src={technicianApartment}
              alt="FireGuard technician servicing apartment electrical system"
              className="rounded-lg w-full h-48 object-cover hover-elevate transition-all duration-300"
              data-testid="img-circuit-breaker"
            />
            <img
              src={technicianBasement}
              alt="Basement electrical panel inspection and monitoring"
              className="rounded-lg w-full h-48 object-cover hover-elevate transition-all duration-300"
              data-testid="img-technician"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
