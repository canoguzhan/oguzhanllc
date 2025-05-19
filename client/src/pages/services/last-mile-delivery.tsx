import { Link } from "wouter";
import { ChevronRight, Check, ArrowRight, TruckIcon, Clock, Target, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const LastMileDelivery = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl leading-tight mb-6 text-white">
              Last Mile Delivery Services
            </h1>
            <p className="font-opensans text-lg md:text-xl mb-8 text-white/90">
              Efficient and timely delivery solutions to ensure your products reach their final destination.
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
              <div className="h-[400px] bg-[url('https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center rounded-lg shadow-xl"></div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="max-w-xl">
                <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-6">Last Mile Delivery Excellence</h2>
                <p className="font-opensans text-text/80 mb-4">
                  OGUZHAN LLC provides efficient last mile delivery services designed to optimize the final and most critical stage of your supply chain. Our cutting-edge technology and dedicated delivery networks ensure your products reach customers accurately, safely, and on time.
                </p>
                <p className="font-opensans text-text/80 mb-6">
                  From urban centers to rural locations, we offer flexible delivery options that adapt to your business needs and customer expectations, enhancing satisfaction and building loyalty.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <p className="font-opensans">Optimized delivery routes</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <p className="font-opensans">Real-time tracking</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <p className="font-opensans">Flexible delivery options</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <p className="font-opensans">Proof of delivery systems</p>
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

      {/* Our Solutions */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-4">Our Last Mile Solutions</h2>
            <p className="font-opensans text-text/80">
              We offer a comprehensive range of last mile delivery services tailored to your specific business requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Urban Delivery Network */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mb-6">
                <TruckIcon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-primary mb-4">Urban Delivery Network</h3>
              <p className="font-opensans text-text/80 mb-4">
                Specialized delivery solutions for high-density urban areas with efficient route optimization and multiple transportation options.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Multiple daily delivery windows</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Same-day delivery options</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Eco-friendly transportation</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Residential and business delivery</span>
                </li>
              </ul>
              <Link href="/contact">
                <Button variant="outline" className="flex items-center text-primary border-primary hover:bg-primary hover:text-white">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            {/* Real-time Tracking */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-primary mb-4">Real-time Tracking</h3>
              <p className="font-opensans text-text/80 mb-4">
                Advanced tracking technology providing visibility of your shipments from dispatch to delivery, with accurate ETAs and status updates.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">GPS-enabled tracking</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Automated notifications</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Live ETA updates</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Customer tracking portals</span>
                </li>
              </ul>
              <Link href="/contact">
                <Button variant="outline" className="flex items-center text-primary border-primary hover:bg-primary hover:text-white">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            {/* Proof of Delivery */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-montserrat font-bold text-xl text-primary mb-4">Proof of Delivery Systems</h3>
              <p className="font-opensans text-text/80 mb-4">
                Comprehensive documentation systems that provide verification of delivery with electronic signatures, photos, and delivery notes.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Digital signature capture</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Photo confirmation</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Geolocation verification</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Digital delivery records</span>
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

      {/* Delivery Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-4">Flexible Delivery Options</h2>
            <p className="font-opensans text-text/80">
              OGUZHAN LLC provides multiple delivery options to meet your customers' expectations and preferences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-montserrat font-semibold text-lg text-primary mb-2">Same-Day Delivery</h3>
              <p className="font-opensans text-text/80 text-sm">
                Rapid delivery within hours for time-sensitive shipments in urban areas.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-montserrat font-semibold text-lg text-primary mb-2">Scheduled Delivery</h3>
              <p className="font-opensans text-text/80 text-sm">
                Pre-planned delivery windows that suit your customers' availability.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-montserrat font-semibold text-lg text-primary mb-2">Pickup Locations</h3>
              <p className="font-opensans text-text/80 text-sm">
                Convenient collection points for customers who prefer to pick up their orders.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-montserrat font-semibold text-lg text-primary mb-2">Contactless Delivery</h3>
              <p className="font-opensans text-text/80 text-sm">
                Safe delivery options with minimal contact for health-conscious customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="max-w-xl">
                <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-6">Technology-Driven Delivery</h2>
                <p className="font-opensans text-text/80 mb-4">
                  OGUZHAN LLC leverages cutting-edge technology to optimize last mile operations, ensuring efficiency, visibility, and customer satisfaction.
                </p>
                <p className="font-opensans text-text/80 mb-6">
                  Our integrated technology platform connects all aspects of the delivery process, from route planning and driver management to customer communications and delivery confirmation.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-montserrat font-semibold text-lg text-primary mb-1">Dynamic Route Optimization</h3>
                      <p className="font-opensans text-text/80">AI-powered algorithms that calculate optimal delivery routes based on traffic, weather, and delivery priorities.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-montserrat font-semibold text-lg text-primary mb-1">Mobile Delivery App</h3>
                      <p className="font-opensans text-text/80">User-friendly application for drivers to manage deliveries, capture proof of delivery, and communicate with customers.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-montserrat font-semibold text-lg text-primary mb-1">Automated Notifications</h3>
                      <p className="font-opensans text-text/80">Real-time updates for customers at each stage of the delivery process, from dispatch to delivery.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="h-[400px] bg-[url('https://images.unsplash.com/photo-1607497447936-d533f8e4e8b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center rounded-lg shadow-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Returns Management */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-4">Returns Management</h2>
            <p className="font-opensans text-text/80">
              OGUZHAN LLC offers comprehensive returns management solutions to simplify the reverse logistics process and enhance customer satisfaction.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-montserrat font-bold text-xl text-primary mb-4">Returns Process</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-primary/10 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                      <span className="font-montserrat font-semibold text-primary text-sm">1</span>
                    </div>
                    <p className="font-opensans text-text/80">Customer initiates return through the returns portal</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                      <span className="font-montserrat font-semibold text-primary text-sm">2</span>
                    </div>
                    <p className="font-opensans text-text/80">Scheduled pickup or drop-off at convenient location</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                      <span className="font-montserrat font-semibold text-primary text-sm">3</span>
                    </div>
                    <p className="font-opensans text-text/80">Item collection and transportation to processing center</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                      <span className="font-montserrat font-semibold text-primary text-sm">4</span>
                    </div>
                    <p className="font-opensans text-text/80">Inspection and processing of returned items</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                      <span className="font-montserrat font-semibold text-primary text-sm">5</span>
                    </div>
                    <p className="font-opensans text-text/80">Refund processing or replacement dispatched</p>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-montserrat font-bold text-xl text-primary mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-montserrat font-medium">Simplified Customer Experience</p>
                      <p className="font-opensans text-text/80 text-sm">Easy-to-use returns portal with clear instructions and options</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-montserrat font-medium">Multiple Return Options</p>
                      <p className="font-opensans text-text/80 text-sm">Convenient pickup services or drop-off locations</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-montserrat font-medium">Efficient Processing</p>
                      <p className="font-opensans text-text/80 text-sm">Streamlined handling for quick refunds or replacements</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-montserrat font-medium">Full Visibility</p>
                      <p className="font-opensans text-text/80 text-sm">Real-time tracking of return status for customers and businesses</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">Case Study: E-commerce Retailer</h2>
              
              <div className="mb-6">
                <h3 className="font-montserrat font-semibold text-lg text-primary mb-2">The Challenge</h3>
                <p className="font-opensans text-text/80">
                  A rapidly growing e-commerce retailer was struggling with delivery reliability, limited visibility, and increasing customer complaints about missed deliveries and lack of communication.
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="font-montserrat font-semibold text-lg text-primary mb-2">Our Solution</h3>
                <p className="font-opensans text-text/80 mb-4">
                  OGUZHAN LLC implemented a comprehensive last mile delivery solution including:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span className="font-opensans">AI-powered route optimization for more efficient delivery scheduling</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span className="font-opensans">Real-time tracking with customer notification system</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span className="font-opensans">Flexible delivery options including scheduled delivery windows</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span className="font-opensans">Digital proof of delivery system with photo verification</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-montserrat font-semibold text-lg text-primary mb-2">The Results</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span className="font-opensans">98.5% on-time delivery rate, up from 82%</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span className="font-opensans">73% reduction in customer service inquiries about delivery status</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span className="font-opensans">95% customer satisfaction rating for delivery experience</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span className="font-opensans">15% reduction in delivery costs through optimized routing</span>
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
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white mb-6">Optimize Your Last Mile Delivery</h2>
            <p className="font-opensans text-xl text-white/80 mb-8">
              Contact OGUZHAN LLC today for efficient last mile delivery solutions that enhance customer satisfaction.
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

export default LastMileDelivery;