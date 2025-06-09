import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { QuoteForm } from "@/components/QuoteForm";
import {
  Truck,
  MapPin,
  Clock,
  Shield,
  Phone,
  Mail,
  Calendar,
  CheckCircle,
  Star,
  Users,
  Globe,
  Package,
  FileText,
  Award,
  Zap,
  Target,
  Navigation,
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fe8cf38e3baf04f94a1f5f6a7714c5a89%2F55d062d908cd4961acb7baf0e313d715"
                alt="OGUZHAN LLC Logistics"
                className="h-[100px] w-auto"
                onError={(e) => {
                  // Fallback to text if logo fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  target.parentElement!.innerHTML = `
                    <div class="flex items-center space-x-3">
                      <div class="bg-primary text-primary-foreground p-2 rounded-lg">
                        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M3 4V1h18v3h-3v13l3 2v1H3v-1l3-2V4H3zm6 0v13h6V4H9zm-2 8h2v2H7v-2zm10 0h2v2h-2v-2z"/>
                        </svg>
                      </div>
                      <div>
                        <h1 class="text-xl font-bold text-foreground">OGUZHAN LLC</h1>
                        <p class="text-sm text-muted-foreground">Trucking & Logistics</p>
                      </div>
                    </div>
                  `;
                }}
              />
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a
                href="#services"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                About
              </a>
              <a
                href="#fleet"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Fleet
              </a>
              <a
                href="#contact"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Contact
              </a>
              <Button size="sm" className="ml-4">
                Get Quote
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Professional Transportation Solutions
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Reliable Trucking <br />
              <span className="text-primary">You Can Trust</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              OGUZHAN LLC provides professional freight transportation and
              logistics services across the nation. Safe, timely, and
              cost-effective solutions for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                <FileText className="mr-2 h-5 w-5" />
                Request Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gray-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">24/7 Service</h3>
              <p className="text-sm text-muted-foreground">
                Round-the-clock availability for urgent deliveries
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Fully Insured</h3>
              <p className="text-sm text-muted-foreground">
                Complete protection for your valuable cargo
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Navigation className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">GPS Tracking</h3>
              <p className="text-sm text-muted-foreground">
                Real-time location updates for peace of mind
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Licensed & DOT</h3>
              <p className="text-sm text-muted-foreground">
                Fully compliant with all federal regulations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Our Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete Transportation Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From local deliveries to long-haul freight, we provide
              comprehensive logistics services tailored to meet your specific
              requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Truck className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Long-Distance Freight</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Cross-country transportation of goods with guaranteed delivery
                  schedules and comprehensive tracking.
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Full truckload (FTL) services
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Temperature-controlled options
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Expedited delivery available
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Local & Regional</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Fast and reliable local deliveries and regional transportation
                  services for businesses of all sizes.
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Same-day delivery options
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Scheduled route services
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Multiple stop deliveries
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Package className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Specialized Cargo</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Expert handling of oversized, hazardous, and high-value cargo
                  with specialized equipment and certified drivers.
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Oversized load permits
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Hazmat certified drivers
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    High-security transport
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                About OGUZHAN LLC Logistics
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Your Trusted Transportation Partner
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                As OGUZHAN LLC Logistics, with the knowledge and experience we
                have gained over the years, the aim of our logistics service is
                your unconditional customer satisfaction and by creating
                long-term cooperation, we offer a holistic service approach with
                our current technologies used in logistics service.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                OGUZHAN LLC Logistics continues to be a corporate logistics
                company that offers flawless Land Transportation service
                domestically and has brought countless innovations to the
                sector.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Our Mission
                </h3>
                <p className="text-muted-foreground mb-6">
                  OGUZHAN LLC Logistics has set out with a mission to add value
                  to our customers by bringing together excellence and trust in
                  logistics solutions. We aim to be a pioneer in the sector with
                  our customer-oriented approach, innovative solutions and
                  sustainability principles. We contribute to optimizing our
                  customers' business processes and their growth by ensuring
                  reliability and operational excellence at every step.
                </p>

                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Our Vision
                </h3>
                <p className="text-muted-foreground mb-6">
                  Our vision is to maximize our customer satisfaction and offer
                  our service to you with a strong organization, the use of the
                  latest technology and environmentally sensitive approaches.
                </p>
              </div>

              <Button size="lg">Learn More About Us</Button>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Our Goals
              </h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Zap className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold block">
                      Technological Leadership
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Optimizing logistics operations using innovative
                      technologies and increasing customer satisfaction.
                    </span>
                  </div>
                </div>

                <div className="flex items-start">
                  <Shield className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold block">
                      Sustainability & Environmental Responsibility
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Becoming a leader in sustainability by developing
                      environmentally sensitive solutions.
                    </span>
                  </div>
                </div>

                <div className="flex items-start">
                  <Globe className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold block">Global Impact</span>
                    <span className="text-sm text-muted-foreground">
                      To expand in the global market and become a strong brand
                      in international logistics solutions.
                    </span>
                  </div>
                </div>

                <div className="flex items-start">
                  <Target className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold block">
                      Customer Satisfaction
                    </span>
                    <span className="text-sm text-muted-foreground">
                      To support our customers' logistics processes by
                      understanding their needs and offering flexible solutions.
                    </span>
                  </div>
                </div>

                <div className="flex items-start">
                  <Users className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold block">
                      Employee Satisfaction & Development
                    </span>
                    <span className="text-sm text-muted-foreground">
                      To support our employees' professional and personal
                      development and act with a strong team spirit.
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-muted-foreground italic">
                  "In line with these goals, as OGUZHAN LLC Logistics, we are
                  committed to adding value to both our business partners and
                  society and building a sustainable future."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="fleet" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Our Fleet
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Modern & Well-Maintained Vehicles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our fleet consists of modern, well-maintained trucks equipped with
              the latest safety features and tracking technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Truck className="h-5 w-5 mr-2" />
                  Dry Van Trailers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Standard dry van trailers for general freight transportation
                  with maximum security.
                </p>
                <div className="text-sm space-y-1">
                  <div>• 53-foot capacity</div>
                  <div>• Air-ride suspension</div>
                  <div>• Roll-up doors</div>
                  <div>• Load securement systems</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Truck className="h-5 w-5 mr-2" />
                  Refrigerated Units
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Temperature-controlled transportation for perishable goods and
                  sensitive cargo.
                </p>
                <div className="text-sm space-y-1">
                  <div>• Multi-temperature zones</div>
                  <div>• Continuous monitoring</div>
                  <div>• Backup power systems</div>
                  <div>• Temperature logging</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Truck className="h-5 w-5 mr-2" />
                  Flatbed Trailers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Open flatbed trailers for oversized cargo, construction
                  materials, and machinery.
                </p>
                <div className="text-sm space-y-1">
                  <div>• Heavy-duty construction</div>
                  <div>• Tie-down points</div>
                  <div>• Tarping available</div>
                  <div>• Oversized load capable</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Get In Touch
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Ship Your Cargo?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Contact us today for a personalized quote and let us handle your
              transportation needs with professionalism and care.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">
                        info@oguzhanllc.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <p className="font-medium">Office</p>
                      <p className="text-muted-foreground">
                        Available Nationwide
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <p className="font-medium">Hours</p>
                      <p className="text-muted-foreground">
                        24/7 Emergency Service
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Why Choose OGUZHAN LLC?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-2" />
                    <span className="text-sm">5-Star Service</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-4 w-4 text-green-600 mr-2" />
                    <span className="text-sm">Fully Insured</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-blue-600 mr-2" />
                    <span className="text-sm">Always On Time</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="h-4 w-4 text-purple-600 mr-2" />
                    <span className="text-sm">Nationwide Coverage</span>
                  </div>
                </div>
              </div>
            </div>

            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
            <div className="flex items-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fe8cf38e3baf04f94a1f5f6a7714c5a89%2F55d062d908cd4961acb7baf0e313d715"
                alt="OGUZHAN LLC Logistics"
                className="h-[100px] w-auto"
                onError={(e) => {
                  // Fallback to text if logo fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = `
                    <div class="flex items-center space-x-3">
                      <div class="bg-primary text-primary-foreground p-2 rounded-lg">
                        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M3 4V1h18v3h-3v13l3 2v1H3v-1l3-2V4H3zm6 0v13h6V4H9zm-2 8h2v2H7v-2zm10 0h2v2h-2v-2z"/>
                        </svg>
                      </div>
                      <div>
                        <h1 class="text-xl font-bold text-foreground">OGUZHAN LLC</h1>
                        <p class="text-sm text-muted-foreground">Trucking & Logistics</p>
                      </div>
                    </div>
                  `;
                }}
              />
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Long-Distance Freight</li>
                <li>Local & Regional</li>
                <li>Specialized Cargo</li>
                <li>Emergency Transport</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>About Us</li>
                <li>Our Fleet</li>
                <li>Safety Standards</li>
                <li>Careers</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>(555) 123-4567</li>
                <li>info@oguzhanllc.com</li>
                <li>24/7 Emergency Service</li>
                <li>Request Quote</li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-gray-800" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2024 OGUZHAN LLC. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-400 hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white">
                DOT Compliance
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;