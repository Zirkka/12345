import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import costSavingGif from "@assets/Cost saving red_1763048099672.gif";
import realTimeMonitoringGif from "@assets/Real time monitoring red_1763048099672.gif";
import instantAlertsGif from "@assets/Instant Alerts red_1763048099671.gif";
import maximumProtectionGif from "@assets/Maximum protection red_1763048099671.gif";
import easyInstallationGif from "@assets/Easy installationred_1763048099670.gif";
import detailedAnalyticsGif from "@assets/Detailed analytics red_1763048099673.gif";

export default function BenefitsPage() {
  const benefits = [
    {
      iconGif: costSavingGif,
      title: "Cost Savings",
      description: "Reduce insurance premiums and prevent costly fire damage. Many insurers offer discounts for FireGuard users."
    },
    {
      iconGif: realTimeMonitoringGif,
      title: "Real-Time Monitoring",
      description: "24/7 intelligent monitoring of your electrical systems with instant cloud-based analytics and reporting."
    },
    {
      iconGif: instantAlertsGif,
      title: "Instant Alerts",
      description: "Multi-channel notifications via SMS, email, and mobile app ensure you're always informed of potential dangers."
    },
    {
      iconGif: maximumProtectionGif,
      title: "Maximum Protection",
      description: "Detect electrical hazards before they become fires. Our advanced sensors identify overheating, overloads, and faults instantly."
    },
    {
      iconGif: easyInstallationGif,
      title: "Easy Installation",
      description: "Professional installation in under 2 hours with no electrical downtime or disruption to your operations."
    },
    {
      iconGif: detailedAnalyticsGif,
      title: "Detailed Analytics",
      description: "Comprehensive dashboards showing electrical usage patterns, trends, and potential issues over time."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Why Choose FireGuard</h1>
              <p className="text-xl text-muted-foreground">
                Comprehensive fire prevention benefits for complete peace of mind
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card 
                  key={index} 
                  data-testid={`card-benefit-${index}`}
                  style={{
                    border: '2px solid #cc3333',
                    boxShadow: '0 0 10px rgba(204, 51, 51, 0.2)'
                  }}
                >
                  <CardHeader className="flex flex-col items-center">
                    <div className="w-24 h-24 bg-white dark:bg-white border-2 border-black rounded-full flex items-center justify-center mb-4">
                      <img 
                        src={benefit.iconGif} 
                        alt={benefit.title}
                        className="w-16 h-16 object-contain"
                      />
                    </div>
                    <CardTitle className="text-center">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-center">{benefit.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
