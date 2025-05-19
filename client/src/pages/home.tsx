import { Link } from "wouter";
import { Globe, ShieldCheck, HeadphonesIcon, LineChart, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 text-white">
              Global Logistics Solutions for Your Business
            </h1>
            <p className="font-opensans text-lg md:text-xl mb-8 text-white/90">
              OGUZHAN LLC provides end-to-end logistics services that optimize your supply chain and enhance your business efficiency.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/services">
                <Button className="btn-secondary">Explore Our Services</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="bg-white text-primary hover:bg-gray-100">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-4">Our Logistics Services</h2>
            <p className="font-opensans text-text/80">Comprehensive logistics solutions designed to meet your business needs with efficiency and reliability.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white rounded-lg shadow-lg overflow-hidden transition hover:shadow-xl hover:translate-y-[-5px]">
              <div className="h-48 bg-[url('https://images.unsplash.com/photo-1494412651409-8963ce7935a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center"></div>
              <CardContent className="p-6">
                <h3 className="font-montserrat font-bold text-xl text-primary mb-3">Freight Shipping</h3>
                <p className="font-opensans text-text/80 mb-4">Global freight shipping services covering sea, air, and land transportation for all your cargo needs.</p>
                <Link href="/services">
                  <a className="inline-flex items-center font-montserrat font-semibold text-secondary hover:text-secondary/80">
                    Learn More <ChevronRight className="ml-2 h-4 w-4" />
                  </a>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="bg-white rounded-lg shadow-lg overflow-hidden transition hover:shadow-xl hover:translate-y-[-5px]">
              <div className="h-48 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center"></div>
              <CardContent className="p-6">
                <h3 className="font-montserrat font-bold text-xl text-primary mb-3">Warehouse Management</h3>
                <p className="font-opensans text-text/80 mb-4">Strategic storage solutions with state-of-the-art facilities and inventory management systems.</p>
                <Link href="/services">
                  <a className="inline-flex items-center font-montserrat font-semibold text-secondary hover:text-secondary/80">
                    Learn More <ChevronRight className="ml-2 h-4 w-4" />
                  </a>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="bg-white rounded-lg shadow-lg overflow-hidden transition hover:shadow-xl hover:translate-y-[-5px]">
              <div className="h-48 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center"></div>
              <CardContent className="p-6">
                <h3 className="font-montserrat font-bold text-xl text-primary mb-3">Supply Chain Solutions</h3>
                <p className="font-opensans text-text/80 mb-4">End-to-end supply chain management with real-time tracking and data-driven optimization.</p>
                <Link href="/services">
                  <a className="inline-flex items-center font-montserrat font-semibold text-secondary hover:text-secondary/80">
                    Learn More <ChevronRight className="ml-2 h-4 w-4" />
                  </a>
                </Link>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/services">
              <Button className="btn-primary">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-4">Why Choose OGUZHAN LLC</h2>
            <p className="font-opensans text-text/80">Our competitive advantages that make us the preferred logistics partner for businesses worldwide.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-montserrat font-semibold text-xl text-primary mb-3">Global Network</h3>
              <p className="font-opensans text-text/80">Operations spanning 120+ countries with local expertise and global reach.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-montserrat font-semibold text-xl text-primary mb-3">Reliability</h3>
              <p className="font-opensans text-text/80">99.8% on-time delivery rate with industry-leading cargo safety measures.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                <HeadphonesIcon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-montserrat font-semibold text-xl text-primary mb-3">24/7 Support</h3>
              <p className="font-opensans text-text/80">Dedicated customer service team available round-the-clock for your needs.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                <LineChart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-montserrat font-semibold text-xl text-primary mb-3">Technology</h3>
              <p className="font-opensans text-text/80">Advanced tracking systems and data analytics for supply chain optimization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-montserrat font-bold text-secondary mb-2">15+</div>
              <p className="font-opensans text-white/80">Years of Experience</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-montserrat font-bold text-secondary mb-2">120+</div>
              <p className="font-opensans text-white/80">Countries Served</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-montserrat font-bold text-secondary mb-2">500+</div>
              <p className="font-opensans text-white/80">Business Clients</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-montserrat font-bold text-secondary mb-2">99.8%</div>
              <p className="font-opensans text-white/80">On-time Delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-6">Ready to Optimize Your Logistics?</h2>
            <p className="font-opensans text-xl text-text mb-8">
              Contact us today for a customized logistics solution that meets your business needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <Button className="btn-secondary">Get a Free Quote</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="bg-white text-primary border-primary hover:bg-gray-100">
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

export default Home;
