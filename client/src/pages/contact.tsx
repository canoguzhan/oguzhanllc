import { Link } from "wouter";
import { MapPin, Phone, Mail, Clock, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import ContactForm from "@/components/ui/contact-form";

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl leading-tight mb-6 text-white">
              Contact OGUZHAN LLC
            </h1>
            <p className="font-opensans text-lg md:text-xl mb-8 text-white/90">
              Get in touch with our team for inquiries, quotes, or more information about our logistics services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-6">Contact Us</h2>
              <p className="font-opensans text-text/80 mb-8">
                Have questions about our logistics services? Contact our team for more information or to request a quote.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-primary">Headquarters</h4>
                    <p className="font-opensans text-text/80">123 Logistics Avenue, Business District, New York, NY 10001, USA</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-primary">Phone</h4>
                    <p className="font-opensans text-text/80">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-primary">Email</h4>
                    <p className="font-opensans text-text/80">info@oguzhanllc.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-primary">Working Hours</h4>
                    <p className="font-opensans text-text/80">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="font-opensans text-text/80">24/7 Support Available</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-montserrat font-semibold text-primary mb-4">Connect With Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition" aria-label="Twitter">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition" aria-label="Facebook">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition" aria-label="Instagram">
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-montserrat font-bold text-3xl text-primary mb-4">Our Location</h2>
            <p className="font-opensans text-text/80">Visit our headquarters in New York City</p>
          </div>
          
          <div className="h-[400px] bg-gray-300 rounded-lg shadow-md w-full">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304605!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sua!4v1622812241659!5m2!1sen!2sua" 
              className="w-full h-full rounded-lg"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="OGUZHAN LLC Headquarters Location"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
