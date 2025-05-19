import { Link } from "wouter";
import { ChevronRight, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FreightShipping = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl leading-tight mb-6 text-white">
              Freight Shipping Services
            </h1>
            <p className="font-opensans text-lg md:text-xl mb-8 text-white/90">
              Global freight shipping solutions for businesses of all sizes, covering air, sea, and land transportation.
            </p>
            <Link href="/contact">
              <Button className="btn-secondary">Get a Free Quote</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="h-[400px] bg-[url('https://images.unsplash.com/photo-1494412651409-8963ce7935a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center rounded-lg shadow-xl"></div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="max-w-xl">
                <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-6">Global Freight Shipping Solutions</h2>
                <p className="font-opensans text-text/80 mb-4">
                  OGUZHAN LLC offers comprehensive freight shipping services designed to meet your business's unique logistics needs. Our global network and industry expertise ensure your cargo reaches its destination safely, on time, and on budget.
                </p>
                <p className="font-opensans text-text/80 mb-6">
                  Whether you're shipping goods internationally or domestically, our team provides end-to-end solutions that optimize your supply chain and enhance your business efficiency.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <p className="font-opensans">Global shipping network</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <p className="font-opensans">Competitive rates</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <p className="font-opensans">Real-time tracking</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <p className="font-opensans">Customs clearance</p>
                  </div>
                </div>
                
                <Link href="/contact">
                  <Button className="btn-primary">Request a Quote</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-4">Our Freight Services</h2>
            <p className="font-opensans text-text/80">
              We offer a comprehensive range of freight shipping services to meet your specific logistics requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Ocean Freight */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-montserrat font-bold text-xl text-primary mb-4">Ocean Freight</h3>
              <p className="font-opensans text-text/80 mb-4">
                Reliable and cost-effective sea freight solutions for transporting goods across international waters. We offer FCL (Full Container Load) and LCL (Less than Container Load) options to suit your needs.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">FCL and LCL shipping</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Refrigerated containers</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Bulk cargo shipping</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Project cargo handling</span>
                </li>
              </ul>
              <Link href="/contact">
                <Button variant="outline" className="flex items-center text-primary border-primary hover:bg-primary hover:text-white">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            {/* Air Freight */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 17H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-1m-6 0H9a2 2 0 00-2 2v4a2 2 0 002 2h6a2 2 0 002-2v-4a2 2 0 00-2-2z" />
                </svg>
              </div>
              <h3 className="font-montserrat font-bold text-xl text-primary mb-4">Air Freight</h3>
              <p className="font-opensans text-text/80 mb-4">
                Fast and efficient air freight services for time-sensitive shipments. Our global network of air carriers ensures your cargo reaches its destination quickly and safely.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Next-day delivery options</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Temperature-controlled shipping</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Hazardous materials handling</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Charter services for oversized cargo</span>
                </li>
              </ul>
              <Link href="/contact">
                <Button variant="outline" className="flex items-center text-primary border-primary hover:bg-primary hover:text-white">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            {/* Land Transportation */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="font-montserrat font-bold text-xl text-primary mb-4">Land Transportation</h3>
              <p className="font-opensans text-text/80 mb-4">
                Comprehensive road and rail freight solutions for domestic and cross-border shipments. Our extensive network ensures reliable and efficient land transportation.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Full truckload (FTL) services</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Less than truckload (LTL) options</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Intermodal transportation</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Specialized equipment for heavy cargo</span>
                </li>
              </ul>
              <Link href="/contact">
                <Button variant="outline" className="flex items-center text-primary border-primary hover:bg-primary hover:text-white">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-4">Our Freight Shipping Process</h2>
            <p className="font-opensans text-text/80">
              We follow a structured process to ensure your freight is handled with care and efficiency from origin to destination.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="font-montserrat font-bold text-2xl text-primary">1</span>
              </div>
              <h3 className="font-montserrat font-semibold text-lg text-primary mb-2">Consultation</h3>
              <p className="font-opensans text-text/80 text-sm">
                We discuss your shipping requirements and provide tailored solutions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="font-montserrat font-bold text-2xl text-primary">2</span>
              </div>
              <h3 className="font-montserrat font-semibold text-lg text-primary mb-2">Planning</h3>
              <p className="font-opensans text-text/80 text-sm">
                Our team plans the optimal route and transportation method for your cargo.
              </p>
            </div>
            
            <div className="text-center">
              <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="font-montserrat font-bold text-2xl text-primary">3</span>
              </div>
              <h3 className="font-montserrat font-semibold text-lg text-primary mb-2">Execution</h3>
              <p className="font-opensans text-text/80 text-sm">
                We handle the loading, transportation, and documentation for your shipment.
              </p>
            </div>
            
            <div className="text-center">
              <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="font-montserrat font-bold text-2xl text-primary">4</span>
              </div>
              <h3 className="font-montserrat font-semibold text-lg text-primary mb-2">Delivery</h3>
              <p className="font-opensans text-text/80 text-sm">
                Your cargo is delivered safely to its destination with real-time tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-montserrat font-bold text-3xl text-primary mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-montserrat font-semibold text-lg text-primary mb-2">
                  What is the difference between FCL and LCL shipping?
                </h3>
                <p className="font-opensans text-text/80">
                  FCL (Full Container Load) means you're shipping enough goods to fill an entire container. LCL (Less than Container Load) means your goods share container space with other shipments. FCL is typically faster and has less handling, while LCL is more cost-effective for smaller shipments.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-montserrat font-semibold text-lg text-primary mb-2">
                  How do I track my freight shipment?
                </h3>
                <p className="font-opensans text-text/80">
                  OGUZHAN LLC provides real-time tracking for all shipments through our online portal. Once your shipment is confirmed, you'll receive a tracking number that allows you to monitor your cargo's journey from origin to destination.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-montserrat font-semibold text-lg text-primary mb-2">
                  Can you ship hazardous materials?
                </h3>
                <p className="font-opensans text-text/80">
                  Yes, we are certified to handle and transport hazardous materials. However, these shipments require special documentation and handling procedures. Please contact our team for specific requirements related to your hazardous cargo.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-montserrat font-semibold text-lg text-primary mb-2">
                  What documentation is required for international shipping?
                </h3>
                <p className="font-opensans text-text/80">
                  International shipments typically require a commercial invoice, packing list, bill of lading or air waybill, certificate of origin, and customs declaration forms. Depending on the destination country and type of goods, additional documentation may be necessary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white mb-6">Ready to Ship with OGUZHAN LLC?</h2>
            <p className="font-opensans text-xl text-white/80 mb-8">
              Contact us today for a customized freight shipping solution that meets your business needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <Button className="btn-secondary">Get a Free Quote</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="bg-white text-primary hover:bg-gray-100">
                  Speak to a Specialist
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FreightShipping;