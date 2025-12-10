import { Activity, Flame, Zap, Home } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    title: "Live Monitoring of All Circuits",
    description:
      "Smart sensors actively monitor your home's electrical system for overloads and overheating—like having a professional electrician watching over your circuits 24/7.",
    icon: Activity,
  },
  {
    title: "Stop The Fire Before It Starts",
    description:
      "Our system specializes in cutting-edge fire prevention solutions for home electrical panels – the #1 cause of residential electrical fires.",
    icon: Flame,
  },
  {
    title: "Overload Detection",
    description:
      "By monitoring circuit breakers within your electrical panel, our system identifies irregularities—such as overloads or overheating—that may signal early signs of electrical fires.",
    icon: Zap,
  },
  {
    title: "Protect Your Home from Hidden Hazards",
    description:
      "Faulty wiring, overloaded circuits, and outdated panels cause over 50,000 U.S. home fires annually (NFPA). Our system stops fires before they start.",
    icon: Home,
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4" data-testid="text-features-title">
            Protect What Matters Most
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't wait for an emergency. Act today with comprehensive fire prevention technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 hover-elevate transition-all duration-300 hover:-translate-y-1"
              data-testid={`card-feature-${index + 1}`}
              style={{
                border: '2px solid #cc3333',
                boxShadow: '0 0 10px rgba(204, 51, 51, 0.2)'
              }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
