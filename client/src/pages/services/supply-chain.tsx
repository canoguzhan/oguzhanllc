import { Link } from "wouter";
import { ChevronRight, Check, ArrowRight, BarChart3, Clock, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const SupplyChain = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl leading-tight mb-6 text-white">
              Supply Chain Solutions
            </h1>
            <p className="font-opensans text-lg md:text-xl mb-8 text-white/90">
              End-to-end supply chain management with real-time tracking and data-driven optimization.
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
              <div className="h-[400px] bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center rounded-lg shadow-xl"></div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="max-w-xl">
                <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-6">End-to-End Supply Chain Solutions</h2>
                <p className="font-opensans text-text/80 mb-4">
                  OGUZHAN LLC delivers comprehensive supply chain solutions that provide visibility, control, and optimization across your entire logistics network. Our technology-driven approach helps you make better decisions, reduce costs, and enhance customer satisfaction.
                </p>
                <p className="font-opensans text-text/80 mb-6">
                  From procurement and manufacturing to distribution and last-mile delivery, we offer integrated services that transform your supply chain into a competitive advantage.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <p className="font-opensans">Complete supply chain visibility</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <p className="font-opensans">Data-driven optimization</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <p className="font-opensans">Risk management strategies</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <p className="font-opensans">Sustainable practices</p>
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
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-4">Our Supply Chain Solutions</h2>
            <p className="font-opensans text-text/80">
              We offer a comprehensive range of supply chain services tailored to your specific business requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Supply Chain Visibility */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mb-6">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-primary mb-4">Supply Chain Visibility</h3>
              <p className="font-opensans text-text/80 mb-4">
                Real-time tracking and monitoring of your entire supply chain for complete visibility and proactive management.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Real-time tracking systems</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">End-to-end visibility</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Performance dashboards</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Bottleneck identification</span>
                </li>
              </ul>
              <Link href="/contact">
                <Button variant="outline" className="flex items-center text-primary border-primary hover:bg-primary hover:text-white">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            {/* Process Optimization */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-primary mb-4">Process Optimization</h3>
              <p className="font-opensans text-text/80 mb-4">
                Data-driven strategies to streamline processes, reduce costs, and improve efficiency across your supply chain.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Network optimization</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Lean methodology implementation</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Cost reduction strategies</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Lead time reduction</span>
                </li>
              </ul>
              <Link href="/contact">
                <Button variant="outline" className="flex items-center text-primary border-primary hover:bg-primary hover:text-white">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            {/* Analytics & Reporting */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-montserrat font-bold text-xl text-primary mb-4">Analytics & Reporting</h3>
              <p className="font-opensans text-text/80 mb-4">
                Advanced analytics and customized reporting to provide actionable insights for strategic decision-making.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Custom KPI dashboards</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Predictive analytics</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Demand forecasting</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Performance benchmarking</span>
                </li>
              </ul>
              <Link href="/contact">
                <Button variant="outline" className="flex items-center text-primary border-primary hover:bg-primary hover:text-white">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            {/* Risk Management */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-primary mb-4">Risk Management</h3>
              <p className="font-opensans text-text/80 mb-4">
                Proactive strategies to identify, assess, and mitigate risks throughout your supply chain network.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Risk assessment frameworks</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Business continuity planning</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Supplier risk management</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Compliance monitoring</span>
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

      {/* Technology Platform */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="max-w-xl">
                <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-6">Our Technology Platform</h2>
                <p className="font-opensans text-text/80 mb-4">
                  OGUZHAN LLC's cutting-edge supply chain technology platform is the backbone of our solutions, providing real-time visibility, advanced analytics, and seamless integration capabilities.
                </p>
                <p className="font-opensans text-text/80 mb-6">
                  Our platform connects all aspects of your supply chain, from suppliers and manufacturers to warehouses and retail locations, creating a unified ecosystem that enhances efficiency and responsiveness.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-montserrat font-semibold text-lg text-primary mb-1">Real-time Tracking</h3>
                      <p className="font-opensans text-text/80">End-to-end visibility of inventory, orders, and shipments across your entire supply chain.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-montserrat font-semibold text-lg text-primary mb-1">AI-Powered Analytics</h3>
                      <p className="font-opensans text-text/80">Advanced algorithms that analyze data patterns to optimize routing, inventory levels, and resource allocation.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-montserrat font-semibold text-lg text-primary mb-1">Seamless Integration</h3>
                      <p className="font-opensans text-text/80">Easy integration with ERP systems, WMS, TMS, and other business applications through robust APIs.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="h-[400px] bg-[url('https://images.unsplash.com/photo-1581092335397-9583eb92d232?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center rounded-lg shadow-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-4">Sustainable Supply Chain Solutions</h2>
            <p className="font-opensans text-text/80">
              At OGUZHAN LLC, we're committed to helping our clients build environmentally responsible supply chains that reduce carbon footprints while maintaining efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-montserrat font-bold text-xl text-primary mb-4">Carbon Footprint Reduction</h3>
              <p className="font-opensans text-text/80 mb-4">
                Our optimization algorithms reduce emissions by minimizing transportation distances and maximizing load efficiency.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Route optimization</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Load consolidation</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Alternative fuel options</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-montserrat font-bold text-xl text-primary mb-4">Responsible Sourcing</h3>
              <p className="font-opensans text-text/80 mb-4">
                We help you implement sustainable sourcing practices and verify supplier compliance with environmental standards.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Supplier assessment</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Environmental compliance</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Ethical sourcing programs</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-montserrat font-bold text-xl text-primary mb-4">Waste Reduction</h3>
              <p className="font-opensans text-text/80 mb-4">
                Our solutions optimize packaging, reduce excess inventory, and minimize waste throughout the supply chain.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Packaging optimization</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Inventory management</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Reverse logistics</span>
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
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">Case Study: Manufacturing Supply Chain Transformation</h2>
              
              <div className="mb-6">
                <h3 className="font-montserrat font-semibold text-lg text-primary mb-2">The Challenge</h3>
                <p className="font-opensans text-text/80">
                  A global manufacturing company was struggling with limited visibility across their complex supply chain, resulting in frequent production delays, excess inventory, and high logistics costs.
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="font-montserrat font-semibold text-lg text-primary mb-2">Our Solution</h3>
                <p className="font-opensans text-text/80 mb-4">
                  OGUZHAN LLC implemented a comprehensive supply chain transformation program that included:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span className="font-opensans">End-to-end supply chain visibility platform</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span className="font-opensans">Advanced analytics for demand forecasting</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span className="font-opensans">Network optimization and redesign</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span className="font-opensans">Integrated supplier management system</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-montserrat font-semibold text-lg text-primary mb-2">The Results</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span className="font-opensans">25% reduction in inventory carrying costs</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span className="font-opensans">30% improvement in on-time delivery performance</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span className="font-opensans">15% reduction in overall logistics costs</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span className="font-opensans">40% faster response time to supply chain disruptions</span>
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
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white mb-6">Transform Your Supply Chain</h2>
            <p className="font-opensans text-xl text-white/80 mb-8">
              Partner with OGUZHAN LLC to optimize your supply chain operations and gain a competitive advantage.
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

export default SupplyChain;