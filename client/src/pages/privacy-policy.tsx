import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="lead text-muted-foreground mb-8">
                At NY FIREGUARD, we are committed to protecting your privacy. This Privacy Policy explains how we collect, 
                process, store, and protect your personal information when you use our fire monitoring and fire safety services. 
                By using our services, you agree to the collection and use of your data in accordance with this policy.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-4">1. Information We Collect</h2>
              <p className="mb-4">To provide our fire monitoring and fire safety services, we collect the following types of information:</p>
              <ul className="space-y-3 mb-6">
                <li><strong>Personal Information:</strong> When you sign up for our services, we may collect personal details such as your name, contact information (email, phone number), address, and payment details. This information is necessary for us to deliver our services to you and communicate with you regarding your account.</li>
                <li><strong>Service-Related Data:</strong> We collect and store data related to your electrical fire risk monitoring, including data from sensors, systems, and devices used in our fire prevention technology. This data helps us monitor and assess electrical fire risks and ensure the safety of your property.</li>
                <li><strong>Usage Data:</strong> We may collect information about how you interact with our services, such as the pages you visit, features you use, and any technical data related to your device, browser, or operating system. This helps us improve our services and ensure a better user experience.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-12 mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">The information we collect is used for the following purposes:</p>
              <ul className="space-y-3 mb-6">
                <li><strong>To Provide Our Services:</strong> We use your personal and service-related data to monitor and analyze electrical fire risks, send notifications or alerts regarding fire hazards, and provide you with service updates.</li>
                <li><strong>To Communicate with You:</strong> Your contact information allows us to send you updates about your account, new services, and information relevant to your fire safety needs. We may also contact you for service-related support or inquiries.</li>
                <li><strong>To Improve Our Services:</strong> We may use your usage data to improve and enhance our fire monitoring and fire safety services. This helps us identify areas for improvement and provide a better experience for all our customers.</li>
                <li><strong>For Legal and Regulatory Compliance:</strong> We may use your data as required by law, such as to comply with regulations or respond to lawful requests from authorities.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-12 mb-4">3. Data Sharing and Disclosure</h2>
              <p className="mb-4">We value your privacy and will never share your personal data with third parties, except in the following circumstances:</p>
              <ul className="space-y-3 mb-6">
                <li><strong>Service Providers:</strong> We may share your information with trusted third-party service providers who assist us in operating our business, such as payment processors, cloud storage providers, and data analytics services. These providers are only allowed to use your data for the specific purpose of assisting with the provision of our services.</li>
                <li><strong>Legal Compliance:</strong> If required by law or in response to a valid legal process (such as a subpoena), we may disclose your information to government authorities or law enforcement agencies.</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of our business, your information may be transferred as part of the transaction. In such cases, we will notify you and provide options for managing your data.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-12 mb-4">4. Data Security</h2>
              <p className="mb-4">We take the security of your personal and service-related data seriously. To protect your information, we implement industry-standard security measures, including:</p>
              <ul className="space-y-3 mb-6">
                <li><strong>Encryption:</strong> Your data is encrypted during transmission using Secure Socket Layer (SSL) encryption to ensure that it cannot be accessed by unauthorized parties.</li>
                <li><strong>Access Controls:</strong> We use strict access controls to ensure that only authorized personnel have access to your data. Our team is trained to handle your data responsibly and securely.</li>
                <li><strong>Data Storage:</strong> Your information is stored on secure servers, protected by firewalls and other security protocols. We regularly update our security measures to stay ahead of potential threats.</li>
                <li><strong>Regular Security Audits:</strong> We perform regular security audits and vulnerability assessments to identify and address potential risks to your data.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-12 mb-4">5. Your Rights and Choices</h2>
              <p className="mb-4">As a customer, you have the following rights regarding your personal data:</p>
              <ul className="space-y-3 mb-6">
                <li><strong>Access:</strong> You can request access to the personal information we hold about you and request a copy of this information.</li>
                <li><strong>Correction:</strong> If you believe that any of your personal information is incorrect or incomplete, you can request corrections.</li>
                <li><strong>Deletion:</strong> You can request the deletion of your personal information, subject to certain legal and contractual obligations.</li>
                <li><strong>Opt-Out:</strong> You may opt out of receiving marketing communications at any time by clicking the unsubscribe link in any marketing email or contacting us directly.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-12 mb-4">6. Retention of Data</h2>
              <p className="mb-6">
                We retain your personal and service-related data only for as long as necessary to provide our services or as required 
                by law. Once your data is no longer needed for the purposes outlined in this policy, we will securely delete or anonymize it.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-4">7. Changes to This Privacy Policy</h2>
              <p className="mb-6">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will 
                notify you of any significant changes by posting the updated policy on our website or through other communication channels. 
                We encourage you to review this policy periodically for the latest information on how we protect your privacy.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-4">8. Contact Us</h2>
              <p className="mb-2">If you have any questions or concerns about our privacy practices or wish to exercise your rights regarding your personal data, please contact us at:</p>
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
