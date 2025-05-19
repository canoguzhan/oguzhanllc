import { Link } from "wouter";
import { ChevronRight, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const WarehouseManagement = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl leading-tight mb-6 text-white">
              Warehouse Management Services
            </h1>
            <p className="font-opensans text-lg md:text-xl mb-8 text-white/90">
              Strategic storage solutions with state-of-the-art facilities and inventory management systems.
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
              <div className="h-[400px] bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center rounded-lg shadow-xl"></div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="max-w-xl">
                <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-6">Advanced Warehouse Management Solutions</h2>
                <p className="font-opensans text-text/80 mb-4">
                  OGUZHAN LLC provides comprehensive warehouse management services designed to optimize your storage, handling, and distribution operations. Our state-of-the-art facilities and advanced inventory management systems help streamline your supply chain.
                </p>
                <p className="font-opensans text-text/80 mb-6">
                  From receipt of goods to order fulfillment and distribution, our warehouse management solutions offer the visibility, efficiency, and reliability your business needs to stay competitive.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <p className="font-opensans">Strategic facility locations</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <p className="font-opensans">Advanced security systems</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <p className="font-opensans">Real-time inventory tracking</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <p className="font-opensans">Flexible storage options</p>
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
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-4">Our Warehouse Services</h2>
            <p className="font-opensans text-text/80">
              We offer a comprehensive range of warehouse management services tailored to your specific business requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Inventory Management */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="font-montserrat font-bold text-xl text-primary mb-4">Inventory Management</h3>
              <p className="font-opensans text-text/80 mb-4">
                Comprehensive inventory management solutions that provide real-time visibility, accurate stock levels, and efficient order processing capabilities.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Real-time inventory tracking</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Barcode and RFID systems</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Cycle counting procedures</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Inventory reporting and analytics</span>
                </li>
              </ul>
              <Link href="/contact">
                <Button variant="outline" className="flex items-center text-primary border-primary hover:bg-primary hover:text-white">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            {/* Order Fulfillment */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="font-montserrat font-bold text-xl text-primary mb-4">Order Fulfillment</h3>
              <p className="font-opensans text-text/80 mb-4">
                Efficient order processing and fulfillment services that ensure accurate picking, packing, and timely delivery of products to your customers.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Pick and pack services</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Kitting and assembly</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Quality control inspections</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Returns management</span>
                </li>
              </ul>
              <Link href="/contact">
                <Button variant="outline" className="flex items-center text-primary border-primary hover:bg-primary hover:text-white">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            {/* Cross-Docking */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="font-montserrat font-bold text-xl text-primary mb-4">Cross-Docking Services</h3>
              <p className="font-opensans text-text/80 mb-4">
                Strategic cross-docking services that minimize storage time and handling costs by transferring incoming shipments directly to outbound transportation.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Reduced handling costs</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Minimized storage time</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Expedited distribution</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Optimized transportation costs</span>
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

      {/* Facilities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-4">Our Warehouse Facilities</h2>
            <p className="font-opensans text-text/80">
              OGUZHAN LLC's warehouse facilities are strategically located and equipped with advanced technology to provide maximum efficiency and security.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-montserrat font-bold text-xl text-primary mb-4">Features & Capabilities</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-montserrat font-medium">Climate-Controlled Storage</p>
                    <p className="font-opensans text-text/80 text-sm">Temperature and humidity-controlled environments for sensitive products</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-montserrat font-medium">High-Bay Racking Systems</p>
                    <p className="font-opensans text-text/80 text-sm">Maximized vertical space utilization for increased storage capacity</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-montserrat font-medium">Advanced Security Systems</p>
                    <p className="font-opensans text-text/80 text-sm">24/7 surveillance, controlled access, and fire protection systems</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-montserrat font-medium">Dock-High Loading Bays</p>
                    <p className="font-opensans text-text/80 text-sm">Efficient loading and unloading capabilities for various vehicle types</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-montserrat font-bold text-xl text-primary mb-4">Technology Integration</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-montserrat font-medium">Warehouse Management System (WMS)</p>
                    <p className="font-opensans text-text/80 text-sm">Advanced software for inventory control and process optimization</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-montserrat font-medium">RF Scanning Technology</p>
                    <p className="font-opensans text-text/80 text-sm">Barcode and RFID systems for accurate inventory tracking</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-montserrat font-medium">Client Portal Access</p>
                    <p className="font-opensans text-text/80 text-sm">Real-time visibility into inventory levels and order status</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-montserrat font-medium">Automated Material Handling</p>
                    <p className="font-opensans text-text/80 text-sm">Conveyors, sorters, and automated guided vehicles for efficient operations</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Value-Added Services */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-4">Value-Added Services</h2>
            <p className="font-opensans text-text/80">
              Beyond traditional warehousing, we offer a range of value-added services to enhance your supply chain operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <h3 className="font-montserrat font-semibold text-lg text-primary mb-2">Product Labeling</h3>
              <p className="font-opensans text-text/80 text-sm">
                Custom labeling services including price tags, barcodes, and brand labels.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <h3 className="font-montserrat font-semibold text-lg text-primary mb-2">Kitting & Assembly</h3>
              <p className="font-opensans text-text/80 text-sm">
                Combining multiple products into kits or assembling components for final products.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" />
                </svg>
              </div>
              <h3 className="font-montserrat font-semibold text-lg text-primary mb-2">Quality Inspection</h3>
              <p className="font-opensans text-text/80 text-sm">
                Comprehensive quality control inspections to ensure product standards are met.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-montserrat font-semibold text-lg text-primary mb-2">Reporting & Analytics</h3>
              <p className="font-opensans text-text/80 text-sm">
                Detailed reporting and data analytics to optimize your inventory and supply chain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary/5 p-8 rounded-lg border border-primary/20">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">Case Study: Optimizing E-Commerce Fulfillment</h2>
              
              <div className="mb-6">
                <h3 className="font-montserrat font-semibold text-lg text-primary mb-2">The Challenge</h3>
                <p className="font-opensans text-text/80">
                  An e-commerce retailer was struggling with order fulfillment delays, high error rates, and limited visibility into inventory levels, resulting in customer dissatisfaction and lost sales.
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="font-montserrat font-semibold text-lg text-primary mb-2">Our Solution</h3>
                <p className="font-opensans text-text/80 mb-4">
                  OGUZHAN LLC implemented a comprehensive warehouse management solution including:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span className="font-opensans">Advanced WMS integration with the client's e-commerce platform</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span className="font-opensans">RF scanning and barcode technology for accurate inventory tracking</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span className="font-opensans">Optimized warehouse layout and picking processes</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span className="font-opensans">Real-time inventory visibility through a client portal</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-montserrat font-semibold text-lg text-primary mb-2">The Results</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span className="font-opensans">Order fulfillment time reduced by 40%</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span className="font-opensans">Order accuracy improved to 99.8%</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span className="font-opensans">Inventory accuracy increased to 99.9%</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span className="font-opensans">Customer satisfaction ratings improved by 35%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white mb-6">Ready to Optimize Your Warehouse Operations?</h2>
            <p className="font-opensans text-xl text-white/80 mb-8">
              Contact us today for a customized warehouse management solution that enhances efficiency and reduces costs.
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

export default WarehouseManagement;