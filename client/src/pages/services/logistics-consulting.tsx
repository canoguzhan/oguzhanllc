import { Link } from "wouter";
import { ChevronRight, Check, ArrowRight, BarChart3, Brain, TrendingUp, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const LogisticsConsulting = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl leading-tight mb-6 text-white">
              Logistics Consulting Services
            </h1>
            <p className="font-opensans text-lg md:text-xl mb-8 text-white/90">
              Strategic advice and solutions to optimize your logistics operations and reduce costs.
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
              <div className="h-[400px] bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center rounded-lg shadow-xl"></div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="max-w-xl">
                <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-6">Expert Logistics Consulting</h2>
                <p className="font-opensans text-text/80 mb-4">
                  OGUZHAN LLC provides comprehensive logistics consulting services to help businesses optimize their supply chain operations, reduce costs, and improve efficiency. Our team of experienced consultants brings industry expertise and innovative thinking to deliver customized solutions for your specific challenges.
                </p>
                <p className="font-opensans text-text/80 mb-6">
                  Whether you're looking to streamline your distribution network, implement new technology, or completely transform your logistics operations, our strategic approach ensures measurable results and sustainable improvements.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
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
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <p className="font-opensans">Performance benchmarking</p>
                  </div>
                </div>
                
                <Link href="/contact">
                  <Button className="btn-primary">Request a Consultation</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Services */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-4">Our Consulting Services</h2>
            <p className="font-opensans text-text/80">
              We offer a comprehensive range of logistics consulting services tailored to address your specific business challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Process Assessment */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mb-6">
                <Search className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-primary mb-4">Process Assessment</h3>
              <p className="font-opensans text-text/80 mb-4">
                Comprehensive evaluation of your logistics operations to identify inefficiencies, bottlenecks, and opportunities for improvement.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">End-to-end process mapping</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Performance analysis</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Gap identification</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Improvement roadmap</span>
                </li>
              </ul>
              <Link href="/contact">
                <Button variant="outline" className="flex items-center text-primary border-primary hover:bg-primary hover:text-white">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            {/* Cost Reduction Strategies */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-primary mb-4">Cost Reduction Strategies</h3>
              <p className="font-opensans text-text/80 mb-4">
                Data-driven approaches to identify and implement cost-saving opportunities throughout your logistics operations.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Transportation cost analysis</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Inventory optimization</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Network rationalization</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Vendor management strategies</span>
                </li>
              </ul>
              <Link href="/contact">
                <Button variant="outline" className="flex items-center text-primary border-primary hover:bg-primary hover:text-white">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            {/* Technology Implementation */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mb-6">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-primary mb-4">Technology Implementation</h3>
              <p className="font-opensans text-text/80 mb-4">
                Expert guidance on selecting and implementing the right technology solutions to enhance your logistics operations.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Technology needs assessment</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Solution evaluation and selection</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Implementation planning</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span className="font-opensans text-sm">Change management support</span>
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

      {/* Performance Benchmarking */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="max-w-xl">
                <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-6">Performance Benchmarking</h2>
                <p className="font-opensans text-text/80 mb-4">
                  OGUZHAN LLC provides comprehensive logistics performance benchmarking to help you understand how your operations compare to industry standards and best practices.
                </p>
                <p className="font-opensans text-text/80 mb-6">
                  Our benchmarking services analyze key performance indicators across all aspects of your logistics operations, identifying areas where you excel and opportunities for improvement.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <BarChart3 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-semibold text-lg text-primary mb-1">KPI Development & Analysis</h3>
                      <p className="font-opensans text-text/80">Establishing and analyzing meaningful metrics to measure performance and track improvements.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-montserrat font-semibold text-lg text-primary mb-1">Industry Comparisons</h3>
                      <p className="font-opensans text-text/80">Comparing your performance against industry standards and competitors to identify competitive advantages.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-montserrat font-semibold text-lg text-primary mb-1">Performance Reporting</h3>
                      <p className="font-opensans text-text/80">Detailed reports with actionable insights and recommendations for performance improvement.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="h-[400px] bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center rounded-lg shadow-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Process */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-4">Our Consulting Process</h2>
            <p className="font-opensans text-text/80">
              OGUZHAN LLC follows a structured consulting methodology to deliver measurable results and sustainable improvements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="rounded-full bg-primary w-12 h-12 flex items-center justify-center mx-auto mb-6 text-white">
                <span className="font-montserrat font-semibold text-xl">1</span>
              </div>
              <h3 className="font-montserrat font-bold text-xl text-primary mb-4 text-center">Discovery & Assessment</h3>
              <p className="font-opensans text-text/80">
                Thorough analysis of your current logistics operations, challenges, and objectives through data collection, interviews, and process observation.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="rounded-full bg-primary w-12 h-12 flex items-center justify-center mx-auto mb-6 text-white">
                <span className="font-montserrat font-semibold text-xl">2</span>
              </div>
              <h3 className="font-montserrat font-bold text-xl text-primary mb-4 text-center">Solution Development</h3>
              <p className="font-opensans text-text/80">
                Creating customized strategies and solutions based on assessment findings, industry best practices, and your specific business requirements.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="rounded-full bg-primary w-12 h-12 flex items-center justify-center mx-auto mb-6 text-white">
                <span className="font-montserrat font-semibold text-xl">3</span>
              </div>
              <h3 className="font-montserrat font-bold text-xl text-primary mb-4 text-center">Implementation Support</h3>
              <p className="font-opensans text-text/80">
                Providing guidance and hands-on assistance during the implementation phase to ensure solutions are executed effectively.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="rounded-full bg-primary w-12 h-12 flex items-center justify-center mx-auto mb-6 text-white">
                <span className="font-montserrat font-semibold text-xl">4</span>
              </div>
              <h3 className="font-montserrat font-bold text-xl text-primary mb-4 text-center">Results Measurement</h3>
              <p className="font-opensans text-text/80">
                Monitoring and measuring the impact of implemented solutions, making adjustments as needed to ensure sustained performance improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-4">Industry Expertise</h2>
            <p className="font-opensans text-text/80">
              Our consultants bring specialized experience across various industries, allowing us to deliver tailored logistics solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md border border-primary/10">
              <h3 className="font-montserrat font-bold text-xl text-primary mb-3">Retail & E-commerce</h3>
              <p className="font-opensans text-text/80 mb-4">
                Optimizing omnichannel fulfillment, last-mile delivery, and returns management for enhanced customer experience.
              </p>
              <div className="flex items-start">
                <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                <p className="font-opensans text-sm">Inventory management strategies</p>
              </div>
              <div className="flex items-start">
                <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                <p className="font-opensans text-sm">Fulfillment network design</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-primary/10">
              <h3 className="font-montserrat font-bold text-xl text-primary mb-3">Manufacturing</h3>
              <p className="font-opensans text-text/80 mb-4">
                Streamlining production logistics, materials management, and finished goods distribution.
              </p>
              <div className="flex items-start">
                <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                <p className="font-opensans text-sm">JIT/Lean logistics implementation</p>
              </div>
              <div className="flex items-start">
                <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                <p className="font-opensans text-sm">Production planning integration</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-primary/10">
              <h3 className="font-montserrat font-bold text-xl text-primary mb-3">Healthcare & Pharmaceuticals</h3>
              <p className="font-opensans text-text/80 mb-4">
                Ensuring compliance, maintaining product integrity, and optimizing healthcare supply chains.
              </p>
              <div className="flex items-start">
                <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                <p className="font-opensans text-sm">Cold chain logistics</p>
              </div>
              <div className="flex items-start">
                <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                <p className="font-opensans text-sm">Regulatory compliance</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-primary/10">
              <h3 className="font-montserrat font-bold text-xl text-primary mb-3">Consumer Goods</h3>
              <p className="font-opensans text-text/80 mb-4">
                Optimizing distribution channels and streamlining flows from production to retail shelves.
              </p>
              <div className="flex items-start">
                <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                <p className="font-opensans text-sm">Distribution network design</p>
              </div>
              <div className="flex items-start">
                <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                <p className="font-opensans text-sm">Demand forecasting integration</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-primary/10">
              <h3 className="font-montserrat font-bold text-xl text-primary mb-3">Food & Beverage</h3>
              <p className="font-opensans text-text/80 mb-4">
                Managing perishable goods logistics with temperature control and rapid distribution requirements.
              </p>
              <div className="flex items-start">
                <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                <p className="font-opensans text-sm">Cold chain optimization</p>
              </div>
              <div className="flex items-start">
                <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                <p className="font-opensans text-sm">Freshness management</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-primary/10">
              <h3 className="font-montserrat font-bold text-xl text-primary mb-3">Automotive</h3>
              <p className="font-opensans text-text/80 mb-4">
                Optimizing inbound logistics, just-in-time delivery, and global parts distribution.
              </p>
              <div className="flex items-start">
                <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                <p className="font-opensans text-sm">JIT supply chain design</p>
              </div>
              <div className="flex items-start">
                <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                <p className="font-opensans text-sm">Spare parts logistics</p>
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
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">Case Study: Global Manufacturing Company</h2>
              
              <div className="mb-6">
                <h3 className="font-montserrat font-semibold text-lg text-primary mb-2">The Challenge</h3>
                <p className="font-opensans text-text/80">
                  A global manufacturing company was experiencing increasing logistics costs, lengthy shipping times, and inconsistent service levels across different regions, negatively impacting customer satisfaction and profitability.
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="font-montserrat font-semibold text-lg text-primary mb-2">Our Solution</h3>
                <p className="font-opensans text-text/80 mb-4">
                  OGUZHAN LLC implemented a comprehensive logistics optimization program including:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span className="font-opensans">End-to-end logistics network analysis and redesign</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span className="font-opensans">Transportation mode optimization and carrier consolidation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span className="font-opensans">Implementation of a global transportation management system</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span className="font-opensans">Standardized logistics KPIs and performance management framework</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-montserrat font-semibold text-lg text-primary mb-2">The Results</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span className="font-opensans">18% reduction in overall logistics costs</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span className="font-opensans">22% improvement in on-time delivery performance</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span className="font-opensans">35% reduction in average transit times</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span className="font-opensans">25% improvement in customer satisfaction scores</span>
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
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white mb-6">Ready to Transform Your Logistics Operations?</h2>
            <p className="font-opensans text-xl text-white/80 mb-8">
              Contact OGUZHAN LLC today for expert logistics consulting that delivers measurable results.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <Button className="btn-secondary">Get a Free Consultation</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="bg-white text-primary hover:bg-gray-100">
                  Speak to a Consultant
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LogisticsConsulting;