import { ChevronRight, Check } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl leading-tight mb-6 text-white">
              Our Logistics Services
            </h1>
            <p className="font-opensans text-lg md:text-xl mb-8 text-white/90">
              OGUZHAN LLC offers a comprehensive suite of logistics services designed to optimize your supply chain from origin to destination.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services List */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Freight Shipping */}
            <Card className="bg-white rounded-lg shadow-lg overflow-hidden transition hover:shadow-xl hover:translate-y-[-5px]">
              <div className="h-48 bg-[url('https://images.unsplash.com/photo-1494412651409-8963ce7935a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center"></div>
              <CardContent className="p-6">
                <h3 className="font-montserrat font-bold text-xl text-primary mb-3">Freight Shipping</h3>
                <p className="font-opensans text-text/80 mb-4">Global freight shipping services covering sea, air, and land transportation for all your cargo needs.</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <p className="font-opensans">Ocean freight services</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <p className="font-opensans">Air freight solutions</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <p className="font-opensans">Land transportation</p>
                  </div>
                </div>
                <Link href="/contact">
                  <a className="inline-flex items-center font-montserrat font-semibold text-secondary hover:text-secondary/80">
                    Request a Quote <ChevronRight className="ml-2 h-4 w-4" />
                  </a>
                </Link>
              </CardContent>
            </Card>
            
            {/* Warehouse Management */}
            <Card className="bg-white rounded-lg shadow-lg overflow-hidden transition hover:shadow-xl hover:translate-y-[-5px]">
              <div className="h-48 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center"></div>
              <CardContent className="p-6">
                <h3 className="font-montserrat font-bold text-xl text-primary mb-3">Warehouse Management</h3>
                <p className="font-opensans text-text/80 mb-4">Strategic storage solutions with state-of-the-art facilities and inventory management systems.</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <p className="font-opensans">Inventory management</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <p className="font-opensans">Order fulfillment</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <p className="font-opensans">Cross-docking services</p>
                  </div>
                </div>
                <Link href="/contact">
                  <a className="inline-flex items-center font-montserrat font-semibold text-secondary hover:text-secondary/80">
                    Request a Quote <ChevronRight className="ml-2 h-4 w-4" />
                  </a>
                </Link>
              </CardContent>
            </Card>
            
            {/* Supply Chain Solutions */}
            <Card className="bg-white rounded-lg shadow-lg overflow-hidden transition hover:shadow-xl hover:translate-y-[-5px]">
              <div className="h-48 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center"></div>
              <CardContent className="p-6">
                <h3 className="font-montserrat font-bold text-xl text-primary mb-3">Supply Chain Solutions</h3>
                <p className="font-opensans text-text/80 mb-4">End-to-end supply chain management with real-time tracking and data-driven optimization.</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <p className="font-opensans">Supply chain visibility</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <p className="font-opensans">Process optimization</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <p className="font-opensans">Analytics and reporting</p>
                  </div>
                </div>
                <Link href="/contact">
                  <a className="inline-flex items-center font-montserrat font-semibold text-secondary hover:text-secondary/80">
                    Request a Quote <ChevronRight className="ml-2 h-4 w-4" />
                  </a>
                </Link>
              </CardContent>
            </Card>
            
            {/* Customs Clearance */}
            <Card className="bg-white rounded-lg shadow-lg overflow-hidden transition hover:shadow-xl hover:translate-y-[-5px]">
              <div className="h-48 bg-[url('https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center"></div>
              <CardContent className="p-6">
                <h3 className="font-montserrat font-bold text-xl text-primary mb-3">Customs Clearance</h3>
                <p className="font-opensans text-text/80 mb-4">Expert handling of customs documentation and compliance for smooth international shipping.</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <p className="font-opensans">Import/export documentation</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <p className="font-opensans">Customs compliance</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <p className="font-opensans">Duty & tax management</p>
                  </div>
                </div>
                <Link href="/contact">
                  <a className="inline-flex items-center font-montserrat font-semibold text-secondary hover:text-secondary/80">
                    Request a Quote <ChevronRight className="ml-2 h-4 w-4" />
                  </a>
                </Link>
              </CardContent>
            </Card>
            
            {/* Last Mile Delivery */}
            <Card className="bg-white rounded-lg shadow-lg overflow-hidden transition hover:shadow-xl hover:translate-y-[-5px]">
              <div className="h-48 bg-[url('https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center"></div>
              <CardContent className="p-6">
                <h3 className="font-montserrat font-bold text-xl text-primary mb-3">Last Mile Delivery</h3>
                <p className="font-opensans text-text/80 mb-4">Efficient and timely delivery solutions to ensure your products reach their final destination.</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <p className="font-opensans">Urban delivery networks</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <p className="font-opensans">Real-time tracking</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <p className="font-opensans">Proof of delivery systems</p>
                  </div>
                </div>
                <Link href="/contact">
                  <a className="inline-flex items-center font-montserrat font-semibold text-secondary hover:text-secondary/80">
                    Request a Quote <ChevronRight className="ml-2 h-4 w-4" />
                  </a>
                </Link>
              </CardContent>
            </Card>
            
            {/* Logistics Consulting */}
            <Card className="bg-white rounded-lg shadow-lg overflow-hidden transition hover:shadow-xl hover:translate-y-[-5px]">
              <div className="h-48 bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center"></div>
              <CardContent className="p-6">
                <h3 className="font-montserrat font-bold text-xl text-primary mb-3">Logistics Consulting</h3>
                <p className="font-opensans text-text/80 mb-4">Strategic advice and solutions to optimize your logistics operations and reduce costs.</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <p className="font-opensans">Process assessment</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <p className="font-opensans">Cost reduction strategies</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <p className="font-opensans">Technology implementation</p>
                  </div>
                </div>
                <Link href="/contact">
                  <a className="inline-flex items-center font-montserrat font-semibold text-secondary hover:text-secondary/80">
                    Request a Quote <ChevronRight className="ml-2 h-4 w-4" />
                  </a>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Global Network */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-4">Our Global Network</h2>
            <p className="font-opensans text-text/80">With operations in over 120 countries, we provide logistics solutions across the globe.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-lg mb-12">
            <div className="w-full h-[400px] bg-[url('https://pixabay.com/get/gbbcc7fd00a87b0be8eeddfd6a401833d29f3e63398d5d6a38f3fea9142d0ff23bd5d39939f3bf10027f6d4ab45ee895aeab18747432d5eda5ff5620b513d6cf9_1280.jpg')] bg-cover bg-center rounded"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="text-center">
              <h4 className="font-montserrat font-semibold text-primary">North America</h4>
              <p className="font-opensans text-sm text-text/80">28 locations</p>
            </div>
            <div className="text-center">
              <h4 className="font-montserrat font-semibold text-primary">South America</h4>
              <p className="font-opensans text-sm text-text/80">16 locations</p>
            </div>
            <div className="text-center">
              <h4 className="font-montserrat font-semibold text-primary">Europe</h4>
              <p className="font-opensans text-sm text-text/80">42 locations</p>
            </div>
            <div className="text-center">
              <h4 className="font-montserrat font-semibold text-primary">Asia</h4>
              <p className="font-opensans text-sm text-text/80">35 locations</p>
            </div>
            <div className="text-center">
              <h4 className="font-montserrat font-semibold text-primary">Africa</h4>
              <p className="font-opensans text-sm text-text/80">12 locations</p>
            </div>
            <div className="text-center">
              <h4 className="font-montserrat font-semibold text-primary">Australia</h4>
              <p className="font-opensans text-sm text-text/80">8 locations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white mb-6">Ready to Optimize Your Logistics?</h2>
            <p className="font-opensans text-xl text-white/80 mb-8">
              Contact us today for a customized logistics solution that meets your business needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <Button className="btn-secondary">Get a Free Quote</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="bg-white text-primary hover:bg-gray-100">
                  Contact Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
