import { Link } from "wouter";
import { ChevronRight, Check, ArrowRight, FileText, AlertTriangle, Globe, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const CustomsClearance = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl leading-tight mb-6 text-white">
              Customs Clearance Services
            </h1>
            <p className="font-opensans text-lg md:text-xl mb-8 text-white/90">
              Expert handling of customs documentation and compliance for smooth international shipping.
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
              <div className="h-[400px] bg-[url('https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center rounded-lg shadow-xl"></div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="max-w-xl">
                <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-6">Expert Customs Clearance Solutions</h2>
                <p className="font-opensans text-text/80 mb-4">
                  OGUZHAN LLC provides comprehensive customs clearance services designed to navigate the complexities of international trade regulations. Our experienced team ensures your shipments cross borders smoothly and in full compliance with all applicable laws.
                </p>
                <p className="font-opensans text-text/80 mb-6">
                  From documentation preparation to duty calculations and customs representation, we handle every aspect of the customs clearance process, allowing you to focus on your core business operations.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <p className="font-opensans">Global customs expertise</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <p className="font-opensans">Accurate documentation</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <p className="font-opensans">Duty & tax management</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <p className="font-opensans">Regulatory compliance</p>
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

      {/* Service Offerings */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-4">Our Customs Services</h2>
            <p className="font-opensans text-text/80">
              We offer a comprehensive range of customs clearance services to facilitate smooth international trade for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Documentation Management */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mb-6">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-primary mb-4">Documentation Management</h3>
              <p className="font-opensans text-text/80 mb-4">
                Expert preparation and handling of all customs documentation to ensure compliance and minimize delays at border crossings.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Commercial invoice preparation</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Packing list verification</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Certificate of origin procurement</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Import/export declarations</span>
                </li>
              </ul>
              <Link href="/contact">
                <Button variant="outline" className="flex items-center text-primary border-primary hover:bg-primary hover:text-white">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            {/* Customs Compliance */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-primary mb-4">Customs Compliance</h3>
              <p className="font-opensans text-text/80 mb-4">
                Ensuring adherence to all international customs regulations and requirements to avoid penalties and shipment delays.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Regulatory compliance monitoring</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Customs audit support</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Trade compliance programs</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Risk assessment services</span>
                </li>
              </ul>
              <Link href="/contact">
                <Button variant="outline" className="flex items-center text-primary border-primary hover:bg-primary hover:text-white">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            {/* Duty & Tax Management */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-montserrat font-bold text-xl text-primary mb-4">Duty & Tax Management</h3>
              <p className="font-opensans text-text/80 mb-4">
                Strategic planning and precise calculation of duties, taxes, and other import/export charges to optimize costs while ensuring compliance.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Duty calculation services</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Tariff classification</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Tax recovery services</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Customs valuation strategies</span>
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

      {/* Global Capabilities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="max-w-xl">
                <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-6">Global Customs Expertise</h2>
                <p className="font-opensans text-text/80 mb-4">
                  With a network of customs specialists in key markets worldwide, OGUZHAN LLC provides expert clearance services for shipments across all major global trade lanes.
                </p>
                <p className="font-opensans text-text/80 mb-6">
                  Our team stays up-to-date with the latest changes in customs regulations and international trade agreements to ensure your shipments comply with all requirements.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-semibold text-lg text-primary mb-1">Global Network</h3>
                      <p className="font-opensans text-text/80">Customs experts in over 100 countries providing local expertise with global coordination.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <AlertTriangle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-semibold text-lg text-primary mb-1">Regulatory Intelligence</h3>
                      <p className="font-opensans text-text/80">Continuous monitoring of regulatory changes to keep your customs processes compliant.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-montserrat font-semibold text-lg text-primary mb-1">Trade Agreements Expertise</h3>
                      <p className="font-opensans text-text/80">Strategic utilization of free trade agreements and preferential duty programs to reduce costs.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="h-[400px] bg-[url('https://images.unsplash.com/photo-1521898672182-8bfebd40bb6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center rounded-lg shadow-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trade Compliance */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-4">Trade Compliance Programs</h2>
            <p className="font-opensans text-text/80">
              OGUZHAN LLC helps businesses implement comprehensive trade compliance programs to mitigate risks and ensure adherence to international trade regulations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-montserrat font-bold text-xl text-primary mb-4">Risk Assessment & Mitigation</h3>
              <p className="font-opensans text-text/80 mb-4">
                Thorough evaluation of your customs processes to identify compliance risks and develop mitigation strategies.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Customs process audit</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Risk identification</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Compliance gap analysis</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Remediation planning</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-montserrat font-bold text-xl text-primary mb-4">Compliance Training</h3>
              <p className="font-opensans text-text/80 mb-4">
                Customized training programs to ensure your team understands customs requirements and best practices.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Documentation workshops</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Regulatory compliance training</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Classification seminars</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Compliance management systems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary/5 p-8 rounded-lg border border-primary/20">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">Case Study: Electronics Manufacturer</h2>
              
              <div className="mb-6">
                <h3 className="font-montserrat font-semibold text-lg text-primary mb-2">The Challenge</h3>
                <p className="font-opensans text-text/80">
                  An electronics manufacturer was facing significant delays and penalties due to inconsistent customs documentation and classification issues when importing components from multiple countries.
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="font-montserrat font-semibold text-lg text-primary mb-2">Our Solution</h3>
                <p className="font-opensans text-text/80 mb-4">
                  OGUZHAN LLC implemented a comprehensive customs management solution including:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span className="font-opensans">Standardized documentation procedures across all shipping origins</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span className="font-opensans">Harmonized System (HS) code review and optimization</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span className="font-opensans">Pre-clearance submission process to expedite shipments</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span className="font-opensans">Staff training on customs compliance requirements</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-montserrat font-semibold text-lg text-primary mb-2">The Results</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span className="font-opensans">85% reduction in customs-related delays</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span className="font-opensans">Eliminated customs penalties completely</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span className="font-opensans">Reduced customs broker fees by 35%</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span className="font-opensans">Improved supply chain predictability and reliability</span>
                  </li>
                </ul>
              </div>
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
                  What documentation is typically required for customs clearance?
                </h3>
                <p className="font-opensans text-text/80">
                  Standard documentation includes commercial invoice, packing list, bill of lading or air waybill, certificate of origin, and customs declaration forms. Depending on the goods being shipped and the destination country, additional documents such as import licenses, permits, or certificates may be required.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-montserrat font-semibold text-lg text-primary mb-2">
                  How can I determine the correct classification code for my products?
                </h3>
                <p className="font-opensans text-text/80">
                  Product classification is based on the Harmonized System (HS) which categorizes goods into specific codes. Our customs experts can help determine the correct classification by analyzing your product specifications, materials, function, and intended use to assign the appropriate HS code.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-montserrat font-semibold text-lg text-primary mb-2">
                  What are the benefits of working with a customs broker?
                </h3>
                <p className="font-opensans text-text/80">
                  A customs broker provides expertise in navigating complex customs regulations, ensuring proper documentation, accurate classification, and compliance with import/export laws. This reduces the risk of delays, penalties, and seizures while potentially saving money through duty optimization strategies.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-montserrat font-semibold text-lg text-primary mb-2">
                  How can I reduce customs clearance times?
                </h3>
                <p className="font-opensans text-text/80">
                  To expedite customs clearance, ensure all documentation is complete, accurate, and submitted in advance. Proper classification, valuation, and origin determination are essential. Consider participating in trusted trader programs like AEO or C-TPAT where available, and work with an experienced customs broker who understands local procedures.
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
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white mb-6">Streamline Your Customs Processes</h2>
            <p className="font-opensans text-xl text-white/80 mb-8">
              Contact OGUZHAN LLC today for expert customs clearance services that ensure compliance and minimize delays.
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

export default CustomsClearance;