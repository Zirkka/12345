import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function OurTeamPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                Our team consists of certified specialists in electrical safety, smart monitoring, and advanced automation. 
                Engineers, technicians, and analysts collaborate using cutting-edge technology to detect hidden risks, 
                supervise facilities in real time, and deliver immediate responses to any situation. Our expertise is enhanced 
                by innovative systems and proprietary digital platforms, ensuring efficient protection and peace of mind for 
                homes and businesses.
              </p>
            </div>

            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-8">Device Installation</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="aspect-square bg-muted rounded-lg" data-testid="placeholder-installation-1">
                  {/* Placeholder for device installation image */}
                </div>
                <div className="aspect-square bg-muted rounded-lg" data-testid="placeholder-installation-2">
                  {/* Placeholder for device installation image */}
                </div>
              </div>
            </div>

            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-8">Our Branch</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="aspect-square bg-muted rounded-lg" data-testid="placeholder-branch-1"></div>
                <div className="aspect-square bg-muted rounded-lg" data-testid="placeholder-branch-2"></div>
                <div className="aspect-square bg-muted rounded-lg" data-testid="placeholder-branch-3"></div>
                <div className="aspect-square bg-muted rounded-lg" data-testid="placeholder-branch-4"></div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8 text-center">Our Monitoring Center</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-4xl mx-auto text-center">
                Our monitoring center operates 24/7, utilizing smart systems and proprietary digital platforms to continuously 
                oversee all protected installations. We employ advanced sensors, real-time data analysis, and automated alerts 
                to identify any electrical anomaly or potential risk before it becomes a problem. Our specialized team ensures 
                fast responses, preventive actions, and maximum security for our clients, connecting the most innovative 
                technology with their peace of mind.
              </p>
              <div className="max-w-4xl mx-auto">
                <div className="aspect-video bg-muted rounded-lg" data-testid="placeholder-monitoring-center">
                  {/* Placeholder for monitoring center image */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
