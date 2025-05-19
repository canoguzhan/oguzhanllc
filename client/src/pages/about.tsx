import { Link } from "wouter";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl leading-tight mb-6 text-white">
              About OGUZHAN LLC
            </h1>
            <p className="font-opensans text-lg md:text-xl mb-8 text-white/90">
              A leading global logistics provider committed to excellence and innovation in supply chain solutions.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="max-w-xl">
                <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-6">About OGUZHAN LLC</h2>
                <p className="font-opensans text-text/80 mb-4">
                  OGUZHAN LLC is a leading global logistics provider founded in 2008. We specialize in end-to-end supply chain solutions that optimize business efficiency and drive growth.
                </p>
                <p className="font-opensans text-text/80 mb-6">
                  Our team of logistics experts brings decades of industry experience, combining traditional logistics knowledge with innovative technology to deliver exceptional service to our clients worldwide.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <p className="font-opensans">Experienced team of professionals</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <p className="font-opensans">Cutting-edge logistics technology</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <p className="font-opensans">Sustainable logistics solutions</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <p className="font-opensans">Customer-centric approach</p>
                  </div>
                </div>
                
                <Link href="/services">
                  <Button className="btn-primary">Explore Our Services</Button>
                </Link>
              </div>
            </div>
            
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="h-[400px] bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center rounded-lg shadow-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-montserrat font-bold text-2xl text-primary mb-4">Our Mission</h3>
              <p className="font-opensans text-text/80 mb-4">
                To provide innovative and efficient logistics solutions that empower businesses to thrive in an increasingly connected global marketplace.
              </p>
              <p className="font-opensans text-text/80">
                We are dedicated to optimizing supply chains, reducing costs, and enhancing operational efficiency for our clients while maintaining the highest standards of service excellence.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-montserrat font-bold text-2xl text-primary mb-4">Our Vision</h3>
              <p className="font-opensans text-text/80 mb-4">
                To be the global leader in logistics services, recognized for our commitment to innovation, sustainability, and customer-centric solutions.
              </p>
              <p className="font-opensans text-text/80">
                We aim to transform the logistics industry through technology-driven operations and create lasting partnerships with our clients based on trust, reliability, and shared success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-4">What Our Clients Say</h2>
            <p className="font-opensans text-text/80">Discover why businesses trust OGUZHAN LLC for their logistics needs.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-secondary flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="font-opensans text-text/80 italic mb-6">
                "OGUZHAN LLC has transformed our supply chain efficiency. Their global network and technology have reduced our shipping times by 30% while cutting costs."
              </p>
              <div className="flex items-center">
                <div className="mr-4 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="font-montserrat font-semibold text-primary">JD</span>
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-primary">John Doe</h4>
                  <p className="font-opensans text-sm text-text/70">Supply Chain Director, Global Retail Inc.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-secondary flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="font-opensans text-text/80 italic mb-6">
                "The warehouse management solutions provided by OGUZHAN LLC have streamlined our operations and improved inventory accuracy to an impressive 99.9%."
              </p>
              <div className="flex items-center">
                <div className="mr-4 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="font-montserrat font-semibold text-primary">JS</span>
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-primary">Jane Smith</h4>
                  <p className="font-opensans text-sm text-text/70">Operations Manager, Tech Solutions Ltd.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-secondary flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="font-opensans text-text/80 italic mb-6">
                "Their 24/7 customer support and real-time tracking capabilities have given us unparalleled visibility into our global supply chain operations."
              </p>
              <div className="flex items-center">
                <div className="mr-4 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="font-montserrat font-semibold text-primary">RJ</span>
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-primary">Robert Johnson</h4>
                  <p className="font-opensans text-sm text-text/70">CEO, International Trade Co.</p>
                </div>
              </div>
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

export default About;
