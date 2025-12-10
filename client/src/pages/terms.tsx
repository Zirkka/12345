import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms & Conditions</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="lead text-muted-foreground mb-8">
                Welcome to FIREGUARD! By using our fire safety services, including electrical fire monitoring and fire protection 
                technology, you agree to the following Terms and Conditions. Please read them carefully before utilizing our services. 
                These terms govern your access to and use of our services, including all related products and technologies.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-4">1. Use of Electrical Fire Monitoring and Fire Protection Technology</h2>
              <ul className="space-y-3 mb-6">
                <li><strong>Service Provision:</strong> NY FIREGUARD provides advanced electrical fire prevention services, including fire monitoring, detection, and prevention technology. These services are designed to monitor your electrical systems and detect potential fire risks before they escalate into a fire.</li>
                <li><strong>Authorization for Service Use:</strong> By agreeing to these Terms and Conditions, you grant NY FIREGUARD permission to install and operate fire prevention systems on your property. You are responsible for ensuring that the necessary equipment and infrastructure are in place to support the system, including access to electrical panels and devices for monitoring.</li>
                <li><strong>Service Limitations:</strong> While our fire prevention systems are designed to provide early detection and proactive intervention, they do not guarantee absolute fire prevention. The company will not be held liable for damage, injury, or loss resulting from system failure, misoperation, or failure to maintain the system properly.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-12 mb-4">2. Customer Responsibilities</h2>
              <ul className="space-y-3 mb-6">
                <li><strong>Proper Use and Maintenance:</strong> Customers are responsible for using and maintaining the electrical fire monitoring systems according to the guidelines provided by NY FIREGUARD. This includes ensuring that the system is regularly checked and updated by our authorized professionals.</li>
                <li><strong>Notification of Malfunctions:</strong> Customers must immediately notify NY FIREGUARD in the event of any system malfunctions, errors, or concerns with fire monitoring services. Failure to do so may result in compromised fire safety coverage.</li>
                <li><strong>Compliance with Installation Requirements:</strong> Customers agree to provide NY FIREGUARD with reasonable access to their premises for the installation, maintenance, and servicing of fire prevention systems.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-12 mb-4">3. Service Fees and Payment</h2>
              <ul className="space-y-3 mb-6">
                <li><strong>Service Fees:</strong> The customer agrees to pay all applicable fees for fire monitoring and prevention services as outlined in the service agreement. Fees are based on the type of services provided, the property's size, and the scope of monitoring required.</li>
                <li><strong>Payment Terms:</strong> Payments are due on the date specified in the service contract. Services may be suspended or terminated if payments are not received within the specified time frame. Late fees may apply for overdue payments.</li>
                <li><strong>Price Changes:</strong> NY FIREGUARD reserves the right to change the service fees or pricing structure upon providing reasonable notice to the customer. Customers will be informed of any changes before they take effect.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-12 mb-4">4. Service Contracts and Cancellations</h2>
              <ul className="space-y-3 mb-6">
                <li><strong>Service Agreement:</strong> The provision of fire monitoring and prevention services is subject to a written service agreement between NY FIREGUARD and the customer. The terms of this agreement govern the specific services to be provided, including the duration and cost.</li>
                <li><strong>Service Cancellation:</strong> Customers may cancel their service agreement with NY FIREGUARD by providing written notice in accordance with the cancellation policy outlined in the service contract. Depending on the timing of the cancellation, there may be early termination fees or a pro-rated charge for services already provided.</li>
                <li><strong>Failure to Comply:</strong> If the customer fails to comply with any of the terms outlined in the agreement, including but not limited to failure to pay fees, failure to maintain or repair fire prevention systems, or obstruction of installation or maintenance activities, NY FIREGUARD reserves the right to terminate the service agreement.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-12 mb-4">5. Liabilities and Limitations</h2>
              <ul className="space-y-3 mb-6">
                <li><strong>Limitation of Liability:</strong> NY FIREGUARD will not be held liable for any damages, losses, injuries, or accidents arising from fire hazards, system malfunctions, or other events beyond our control. While we make every effort to ensure the effectiveness of our fire prevention systems, we cannot guarantee the complete prevention of all fire-related incidents.</li>
                <li><strong>Force Majeure:</strong> NY FIREGUARD is not responsible for any delay or failure in providing services due to circumstances beyond our reasonable control, including but not limited to natural disasters, power outages, or acts of government.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-12 mb-4">6. Customer Rights</h2>
              <ul className="space-y-3 mb-6">
                <li><strong>Data Privacy:</strong> By using our fire monitoring services, you consent to the collection and processing of data as outlined in our Privacy Policy. Your data will only be used for the purpose of providing fire monitoring and risk management services.</li>
                <li><strong>Right to Access and Modify:</strong> Customers have the right to access and modify the information they have provided to NY FIREGUARD, including their contact details, billing information, and preferences regarding fire monitoring services.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-12 mb-4">7. Amendments to Terms and Conditions</h2>
              <p className="mb-6">
                NY FIREGUARD reserves the right to update or amend these Terms and Conditions at any time. Any changes to the terms 
                will be communicated to customers through the provided contact information. Continued use of the services after such 
                changes constitutes your acceptance of the updated terms.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-4">8. Governing Law</h2>
              <p className="mb-6">
                These Terms and Conditions shall be governed by and construed in accordance with the laws of the state of New York. 
                Any disputes arising under these terms shall be resolved in the appropriate courts located within New York.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-4">9. Contact Information</h2>
              <p className="mb-2">If you have any questions about these Terms and Conditions or require additional information, please contact us at:</p>
              <div className="bg-muted p-6 rounded-lg mt-4">
                <p className="font-bold mb-2">NY FIREGUARD</p>
                <p>199 Willis Ave. Mineola, NY 11501</p>
                <p><a href="mailto:fireguardny@gmail.com" className="text-primary hover:underline">fireguardny@gmail.com</a></p>
                <p>516-283-1459</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
