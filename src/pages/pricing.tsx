import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export default function PricingPage() {
  const plans = [
    {
      badge: "MOST POPULAR",
      name: "FireGuard Essential Protection",
      price: "$400",
      period: "/year",
      commitment: "Annual payment • No hidden fees",
      tagline: "Smart Choice for Responsible Homeowners",
      features: [
        "Annual inspections with official certification",
        "Early-warning alert system with proven technology",
        "Insurance-ready documentation",
        "Price locked for 1 year",
        "Priority technical support"
      ],
      quote: "Home safety isn't an expense—it's the investment that protects everything you value."
    },
    {
      badge: "STRATEGIC CHOICE",
      name: "FireGuard Advanced Protection",
      price: "$375",
      period: "/year",
      commitment: "3-year commitment • Price savings guaranteed",
      tagline: "For homeowners who know prevention saves the most.",
      features: [
        "Everything in the Essential Plan PLUS",
        "24/7 monitoring",
        "Preventive maintenance",
        "Up to 15% off insurance premiums",
        "Price locked for 3 years",
        "Guaranteed $75 savings"
      ],
      quote: "The safest homes don't choose the cheapest—they choose the most value."
    },
    {
      badge: "PREMIUM STATUS",
      name: "FireGuard Total Protection",
      price: "$350",
      period: "/year",
      commitment: "5-year commitment • Maximum value guaranteed",
      tagline: "For those who demand excellence and absolute protection.",
      features: [
        "All-inclusive solution",
        "Automatic fire suppression system",
        "Tech upgrades included (always up to date)",
        "Up to 25% off insurance premiums",
        "Price locked for 5 years",
        "Guaranteed $250 savings",
        "Premium security certification"
      ],
      quote: "Some pay to meet requirements. Smart families invest in peace of mind and wealth protection."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">FireGuard Subscription Plans</h1>
              <p className="text-xl text-muted-foreground">
                Choose the plan that fits your home and lifestyle. Transparent pricing, no hidden fees, maximum peace of mind.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-20">
              {plans.map((plan, index) => (
                <Card 
                  key={index} 
                  className="flex flex-col" 
                  data-testid={`card-plan-${index}`}
                  style={{
                    border: '2px solid #cc3333',
                    boxShadow: '0 0 10px rgba(204, 51, 51, 0.2)'
                  }}
                >
                  <CardHeader>
                    <Badge className="w-fit mb-4">{plan.badge}</Badge>
                    <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                    <div className="mb-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                    <CardDescription className="text-base">{plan.commitment}</CardDescription>
                    <p className="font-semibold mt-4">{plan.tagline}</p>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <p className="text-sm italic text-muted-foreground">{plan.quote}</p>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="bg-muted/50 rounded-lg p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-4">Are you a Building Manager or Insurance Partner?</h2>
              <p className="text-lg mb-6">Exclusive corporate solutions tailored for professionals:</p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Scalable solutions for property portfolios</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Special programs for insurance companies</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Technical documentation for adjusters & compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Preferred corporate agreements</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Predictive risk models for property evaluation</span>
                </li>
              </ul>
              <p className="italic mb-6">"We don't just sell fire protection. We build safety ecosystems for communities and real estate portfolios."</p>
              <div className="space-y-2">
                <p className="font-semibold">Contact our corporate team:</p>
                <p>📧 <a href="mailto:fireguardny@gmail.com" className="text-primary hover:underline">fireguardny@gmail.com</a></p>
                <p>📞 516-283-1459</p>
                <p>🌐 <a href="https://www.fireguard.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Fireguard.org</a></p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
