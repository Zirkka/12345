import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SiInstagram } from "react-icons/si";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4" data-testid="text-contact-title">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get in touch with our team to learn more about FireGuard fire prevention systems.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card 
            className="p-8"
            style={{
              border: '2px solid #cc3333',
              boxShadow: '0 0 10px rgba(204, 51, 51, 0.2)'
            }}
          >
            <MapPin className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-4">Address</h3>
            <div className="space-y-3 text-muted-foreground">
              <p>7101 72nd Place<br />Glendale, NY 11385</p>
              <p>199 Willis Ave.<br />Mineola, NY 11501</p>
            </div>
          </Card>

          <Card 
            className="p-8"
            style={{
              border: '2px solid #cc3333',
              boxShadow: '0 0 10px rgba(204, 51, 51, 0.2)'
            }}
          >
            <Phone className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href="tel:516-283-1459"
                className="block text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-phone"
              >
                516-283-1459
              </a>
              <a
                href="mailto:fireguardny@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-email"
              >
                <Mail className="w-4 h-4" />
                fireguardny@gmail.com
              </a>
              <a
                href="http://instagram.com/fireguard_byloa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-instagram"
              >
                <SiInstagram className="w-4 h-4" />
                @fireguard_byloa
              </a>
            </div>
          </Card>

          <Card 
            className="p-8"
            style={{
              border: '2px solid #cc3333',
              boxShadow: '0 0 10px rgba(204, 51, 51, 0.2)'
            }}
          >
            <Clock className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-4">Opening Hours</h3>
            <div className="space-y-3 text-muted-foreground">
              <div>
                <p className="font-semibold text-foreground">Mon - Fri</p>
                <p>8:00 am – 4:00 pm</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">Saturday</p>
                <p>9:00 am – 1:00 pm</p>
              </div>
            </div>
          </Card>
        </div>

        <Card 
          className="p-8 lg:p-12"
          style={{
            border: '2px solid #cc3333',
            boxShadow: '0 0 10px rgba(204, 51, 51, 0.2)'
          }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                  First Name *
                </label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  data-testid="input-first-name"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                  Last Name *
                </label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  data-testid="input-last-name"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  data-testid="input-email"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone *
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  data-testid="input-phone"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                Subject *
              </label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                data-testid="input-subject"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message *
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                data-testid="input-message"
              />
            </div>

            <Button type="submit" size="lg" className="w-full md:w-auto px-12" data-testid="button-submit">
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
