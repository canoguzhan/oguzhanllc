import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowLeft,
  Truck,
  MapPin,
  Clock,
  Shield,
  CheckCircle,
  Globe,
  Navigation,
  Thermometer,
  Scale,
} from "lucide-react";

const LongDistanceFreight = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fe8cf38e3baf04f94a1f5f6a7714c5a89%2Fd0f1444a40d8431e9a36f1cb7f958f7e"
                alt="OGUZHAN LLC Logistics"
                className="h-[100px] w-auto"
              />
            </div>
            <Button variant="outline" asChild>
              <a href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Professional Long-Distance Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Long-Distance <br />
              <span className="text-primary">Freight Transportation</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Reliable cross-country freight transportation with guaranteed
              delivery schedules and comprehensive tracking for your most
              important shipments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Get Long-Distance Quote
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Track Shipment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why Choose Our Long-Distance Service?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our long-distance freight service combines reliability, speed, and
              security for shipments across the nation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Nationwide Coverage</h3>
              <p className="text-sm text-muted-foreground">
                Coast-to-coast delivery to all 48 contiguous states with
                reliable service
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">On-Time Delivery</h3>
              <p className="text-sm text-muted-foreground">
                99.5% on-time delivery rate with precise scheduling and
                real-time updates
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Navigation className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Live Tracking</h3>
              <p className="text-sm text-muted-foreground">
                Real-time GPS tracking with automated status updates throughout
                transit
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Complete Long-Distance Solutions
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our long-distance freight service is designed for businesses
                that need reliable transportation across states and regions. We
                handle everything from pickup to delivery with professional care
                and attention to detail.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold block">
                      Full Truckload (FTL) Service
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Dedicated trucks for your exclusive shipments with maximum
                      security
                    </span>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold block">
                      Expedited Delivery Options
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Rush delivery services for time-critical shipments
                    </span>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold block">
                      Temperature-Controlled Transport
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Climate-controlled trailers for sensitive cargo
                    </span>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold block">
                      Comprehensive Insurance
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Full cargo protection with additional coverage options
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Thermometer className="h-5 w-5 mr-2 text-primary" />
                    Climate Control
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Advanced refrigeration systems maintaining precise
                    temperatures from -20°F to +70°F for perishable goods.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Multi-zone temperature control</li>
                    <li>• Continuous monitoring alerts</li>
                    <li>• Temperature logging documentation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Scale className="h-5 w-5 mr-2 text-primary" />
                    Capacity Options
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Flexible load options to accommodate various shipment sizes
                    and weight requirements.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Up to 80,000 lbs gross weight</li>
                    <li>• 53-foot trailer capacity</li>
                    <li>• Specialized equipment available</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Long-Distance Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A streamlined process from quote to delivery, ensuring smooth
              transportation for your freight.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold mb-2">Quote Request</h3>
              <p className="text-sm text-muted-foreground">
                Submit your shipment details for a competitive quote within 2
                hours
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold mb-2">Schedule Pickup</h3>
              <p className="text-sm text-muted-foreground">
                Coordinate pickup time and prepare your freight for loading
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold mb-2">Transit & Tracking</h3>
              <p className="text-sm text-muted-foreground">
                Monitor your shipment with real-time GPS tracking and updates
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold mb-2">Safe Delivery</h3>
              <p className="text-sm text-muted-foreground">
                Professional delivery with proof of delivery documentation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready for Long-Distance Shipping?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get started with a free quote for your long-distance freight needs.
            Our team is ready to provide you with reliable, professional
            service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Get Free Quote
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              Call (555) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LongDistanceFreight;
