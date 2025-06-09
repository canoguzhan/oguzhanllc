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
  CheckCircle,
  Route,
  Calendar,
  Zap,
  Package,
} from "lucide-react";

const LocalRegional = () => {
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
              Fast Local Delivery Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Local & Regional <br />
              <span className="text-primary">Transportation</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Fast and reliable local deliveries and regional transportation
              services for businesses of all sizes. Same-day delivery available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Schedule Pickup
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Same-Day Service
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
              Local & Regional Advantages
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our local and regional services are designed for speed,
              flexibility, and cost-effectiveness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Same-Day Delivery</h3>
              <p className="text-sm text-muted-foreground">
                Rush deliveries within the same business day for urgent
                shipments
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Route className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Multiple Stops</h3>
              <p className="text-sm text-muted-foreground">
                Efficient multi-stop routes for cost-effective deliveries to
                multiple locations
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Scheduled Routes</h3>
              <p className="text-sm text-muted-foreground">
                Regular scheduled deliveries for consistent business supply
                chains
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Flexible Service</h3>
              <p className="text-sm text-muted-foreground">
                Adaptable service options to meet your specific delivery
                requirements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Service Coverage Areas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide local and regional transportation services across
              multiple states and metropolitan areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-primary" />
                  Local Delivery
                </CardTitle>
                <CardDescription>
                  Same-day within metropolitan areas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Within 50 miles</span>
                    <Badge variant="secondary">2-4 hours</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Within 25 miles</span>
                    <Badge variant="secondary">1-2 hours</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Within 10 miles</span>
                    <Badge variant="secondary">30-60 min</Badge>
                  </div>
                </div>
                <Separator className="my-4" />
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Priority rush service available</li>
                  <li>• Real-time tracking</li>
                  <li>• Proof of delivery</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Route className="h-5 w-5 mr-2 text-primary" />
                  Regional Service
                </CardTitle>
                <CardDescription>
                  Next-day delivery within region
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Within 500 miles</span>
                    <Badge variant="secondary">Next Day</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Within 300 miles</span>
                    <Badge variant="secondary">Overnight</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Within 150 miles</span>
                    <Badge variant="secondary">Same Day</Badge>
                  </div>
                </div>
                <Separator className="my-4" />
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Multiple pickup locations</li>
                  <li>• Consolidated shipping</li>
                  <li>• Flexible scheduling</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-primary" />
                  Scheduled Routes
                </CardTitle>
                <CardDescription>Regular delivery schedules</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Daily Routes</span>
                    <Badge variant="secondary">Mon-Fri</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Weekly Routes</span>
                    <Badge variant="secondary">Custom</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Monthly Routes</span>
                    <Badge variant="secondary">Scheduled</Badge>
                  </div>
                </div>
                <Separator className="my-4" />
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Predictable pricing</li>
                  <li>• Dedicated capacity</li>
                  <li>• Volume discounts</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Flexible Local Solutions
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our local and regional services are perfect for businesses that
                need regular, reliable deliveries within their area. From
                same-day rush orders to scheduled route deliveries, we provide
                the flexibility you need.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold block">
                      Less-Than-Truckload (LTL)
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Cost-effective solution for smaller shipments
                    </span>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold block">
                      White Glove Service
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Inside delivery and special handling when needed
                    </span>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold block">
                      Appointment Scheduling
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Precise delivery windows to fit your schedule
                    </span>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold block">Live Updates</span>
                    <span className="text-sm text-muted-foreground">
                      Real-time notifications and delivery confirmations
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <Card className="bg-green-50 border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-800">
                    <Package className="h-5 w-5 mr-2" />
                    Same-Day Express
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-700 mb-4">
                    Ultra-fast delivery for urgent shipments within the local
                    area.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Within 4 hours</span>
                      <Badge variant="outline">Priority</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Real-time tracking</span>
                      <Badge variant="outline">Live GPS</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-800">
                    <Route className="h-5 w-5 mr-2" />
                    Route Optimization
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-700 mb-4">
                    Intelligent routing for maximum efficiency and cost savings.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Multiple stops</span>
                      <Badge variant="outline">Optimized</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Fuel efficient</span>
                      <Badge variant="outline">Eco-friendly</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Need Local or Regional Delivery?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            From same-day rush deliveries to scheduled route services, we're
            here to meet your local transportation needs with reliability and
            speed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Schedule Today
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

export default LocalRegional;
