import { Wrench, Activity, Truck, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    title: "Professional Installation",
    description:
      "We send a certified technician to install the FireGuard device in the designated electrical panel of your facility. Each component is configured according to the technical specifications of your site.",
    icon: Wrench,
  },
  {
    number: "02",
    title: "Real-Time Monitoring 24/7",
    description:
      "Once installed, our system continuously monitors critical electrical parameters in real time. If values fall outside of safe thresholds, FireGuard immediately alerts the client via email and they will receive a phone call from us.",
    icon: Activity,
  },
  {
    number: "03",
    title: "Expert Assistance",
    description:
      "If the situation requires on-site action, we dispatch a certified technician to assess and resolve the issue directly at your location.",
    icon: Truck,
  },
  {
    number: "04",
    title: "Peace of Mind",
    description:
      "With FireGuard, you're not just informed — you're protected. Our proactive monitoring means fewer surprises and faster response times.",
    icon: ShieldCheck,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4" data-testid="text-how-it-works-title">
            How FIREGUARD Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            FireGuard is an intelligent fire prevention monitoring system designed to take action
            before risk turns into emergency. Here's how it works:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="p-8 hover-elevate transition-all duration-300 hover:-translate-y-1"
              data-testid={`card-step-${index + 1}`}
              style={{
                border: '2px solid #cc3333',
                boxShadow: '0 0 10px rgba(204, 51, 51, 0.2)'
              }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>
                <div className="text-5xl font-bold text-primary/20 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
