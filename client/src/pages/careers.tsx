import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, MapPin, Building, Clock, ArrowRight } from "lucide-react";

const Careers = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "Logistics Operations Manager",
      location: "New York, NY",
      type: "Full-time",
      department: "Operations",
      description: "We're looking for an experienced Logistics Operations Manager to oversee our daily logistics operations, optimize processes, and lead a team of logistics professionals.",
      responsibilities: [
        "Manage day-to-day logistics operations and workflow",
        "Develop and implement strategies to enhance operational efficiency",
        "Lead, train and mentor a team of logistics professionals",
        "Analyze performance data and identify areas for improvement",
        "Ensure compliance with company policies and industry regulations"
      ],
      requirements: [
        "Bachelor's degree in Supply Chain, Logistics, or related field",
        "5+ years of experience in logistics or supply chain management",
        "Strong leadership and team management skills",
        "Excellent problem-solving and analytical abilities",
        "Experience with logistics management software"
      ]
    },
    {
      id: 2,
      title: "Supply Chain Analyst",
      location: "Chicago, IL",
      type: "Full-time",
      department: "Supply Chain",
      description: "Join our team as a Supply Chain Analyst to help us optimize our supply chain processes through data analysis and implementation of best practices.",
      responsibilities: [
        "Analyze supply chain data and metrics to identify improvement opportunities",
        "Develop reports and dashboards to track key performance indicators",
        "Collaborate with cross-functional teams to implement process improvements",
        "Conduct cost-benefit analyses for supply chain initiatives",
        "Support inventory management and demand planning activities"
      ],
      requirements: [
        "Bachelor's degree in Supply Chain, Business Analytics, or related field",
        "2+ years of experience in supply chain analysis or related role",
        "Proficiency in data analysis tools (Excel, Power BI, Tableau)",
        "Strong analytical and problem-solving skills",
        "Experience with ERP systems"
      ]
    },
    {
      id: 3,
      title: "Warehouse Supervisor",
      location: "Atlanta, GA",
      type: "Full-time",
      department: "Warehouse Operations",
      description: "We're seeking a detail-oriented Warehouse Supervisor to oversee daily warehouse operations, ensure efficiency, and maintain inventory accuracy.",
      responsibilities: [
        "Supervise daily warehouse operations and staff",
        "Implement and maintain inventory control procedures",
        "Ensure proper handling, storage, and shipping of materials",
        "Train warehouse staff on safety procedures and operational protocols",
        "Monitor and report on warehouse performance metrics"
      ],
      requirements: [
        "High school diploma or equivalent (Bachelor's degree preferred)",
        "3+ years of experience in warehouse management",
        "Knowledge of warehouse management systems",
        "Strong leadership and communication skills",
        "Experience with inventory management techniques"
      ]
    },
    {
      id: 4,
      title: "Transportation Coordinator",
      location: "Miami, FL",
      type: "Full-time",
      department: "Transportation",
      description: "We are looking for a Transportation Coordinator to help manage our shipping operations, coordinate with carriers, and ensure timely delivery of goods.",
      responsibilities: [
        "Coordinate and schedule transportation of products",
        "Maintain relationships with carriers and negotiate rates",
        "Track shipments and ensure on-time delivery",
        "Resolve transportation issues and delays",
        "Maintain accurate records and prepare reports"
      ],
      requirements: [
        "Bachelor's degree in Logistics, Supply Chain, or related field",
        "2+ years of experience in transportation coordination",
        "Knowledge of transportation management systems",
        "Strong negotiation and communication skills",
        "Experience with freight rate analysis"
      ]
    }
  ];

  const benefits = [
    "Competitive salary and performance bonuses",
    "Comprehensive health, dental, and vision insurance",
    "401(k) retirement plan with company match",
    "Generous paid time off and holidays",
    "Professional development and education reimbursement",
    "Flexible work arrangements",
    "Employee wellness program",
    "Career advancement opportunities"
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl leading-tight mb-6 text-white">
              Careers at OGUZHAN LLC
            </h1>
            <p className="font-opensans text-lg md:text-xl mb-8 text-white/90">
              Join our team of logistics professionals and build a rewarding career in a dynamic global environment.
            </p>
            <Button className="btn-secondary">View Current Openings</Button>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-4">Why Join OGUZHAN LLC</h2>
            <p className="font-opensans text-text/80">
              At OGUZHAN LLC, we're more than just a logistics company. We're a team of passionate professionals dedicated to excellence in everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-montserrat font-semibold text-xl text-primary mb-3">Innovation</h3>
              <p className="font-opensans text-text/80">We encourage innovative thinking and embrace new technologies to stay at the forefront of the logistics industry.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-montserrat font-semibold text-xl text-primary mb-3">Collaborative Culture</h3>
              <p className="font-opensans text-text/80">We foster a collaborative environment where teamwork and open communication drive our success.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-montserrat font-semibold text-xl text-primary mb-3">Growth Opportunities</h3>
              <p className="font-opensans text-text/80">We invest in our employees' development and provide clear pathways for career advancement.</p>
            </div>
          </div>
          
          <div className="mt-16">
            <h3 className="font-montserrat font-bold text-2xl text-primary mb-6 text-center">Our Benefits & Perks</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <p className="font-opensans">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16 bg-accent/30" id="openings">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="font-montserrat font-bold text-3xl text-primary mb-4">Current Openings</h2>
            <p className="font-opensans text-text/80 max-w-3xl">
              Explore our current job opportunities and find the perfect role for your skills and career goals.
            </p>
          </div>
          
          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <Card key={job.id} className="overflow-hidden shadow-md hover:shadow-lg transition">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <h3 className="font-montserrat font-bold text-xl text-primary mb-2 lg:mb-0">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <div className="inline-flex items-center bg-primary/10 px-3 py-1 rounded text-sm">
                        <MapPin className="h-4 w-4 mr-1 text-primary" />
                        <span>{job.location}</span>
                      </div>
                      <div className="inline-flex items-center bg-primary/10 px-3 py-1 rounded text-sm">
                        <Building className="h-4 w-4 mr-1 text-primary" />
                        <span>{job.department}</span>
                      </div>
                      <div className="inline-flex items-center bg-primary/10 px-3 py-1 rounded text-sm">
                        <Clock className="h-4 w-4 mr-1 text-primary" />
                        <span>{job.type}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="font-opensans text-text/80 mb-4">
                    {job.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-montserrat font-semibold text-primary mb-2">Responsibilities</h4>
                      <ul className="space-y-2">
                        {job.responsibilities.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                            <span className="font-opensans text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-montserrat font-semibold text-primary mb-2">Requirements</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                            <span className="font-opensans text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <Link href={`/careers/${job.id}`}>
                    <Button className="btn-secondary flex items-center">
                      Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl text-primary mb-4">Our Application Process</h2>
            <p className="font-opensans text-text/80">
              Our streamlined application process is designed to identify the best talent and ensure a positive candidate experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="rounded-full bg-primary text-white w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="font-montserrat font-semibold text-lg text-primary mb-2">Application</h3>
              <p className="font-opensans text-text/80 text-sm">Submit your resume and cover letter through our online portal.</p>
            </div>
            
            <div className="text-center">
              <div className="rounded-full bg-primary text-white w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="font-montserrat font-semibold text-lg text-primary mb-2">Initial Screening</h3>
              <p className="font-opensans text-text/80 text-sm">Our HR team reviews applications and conducts initial phone interviews.</p>
            </div>
            
            <div className="text-center">
              <div className="rounded-full bg-primary text-white w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="font-montserrat font-semibold text-lg text-primary mb-2">Interviews</h3>
              <p className="font-opensans text-text/80 text-sm">Selected candidates participate in technical and behavioral interviews.</p>
            </div>
            
            <div className="text-center">
              <div className="rounded-full bg-primary text-white w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="font-montserrat font-semibold text-lg text-primary mb-2">Job Offer</h3>
              <p className="font-opensans text-text/80 text-sm">Successful candidates receive a job offer and onboarding information.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white mb-6">Join Our Talent Network</h2>
            <p className="font-opensans text-xl text-white/80 mb-8">
              Don't see the perfect role? Join our talent network to stay updated on future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="btn-secondary">Join Talent Network</Button>
              <Link href="/contact">
                <Button variant="outline" className="bg-white text-primary hover:bg-gray-100">
                  Contact Recruiting Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;