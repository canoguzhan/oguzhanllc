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
  Shield,
  AlertTriangle,
  Scale,
  CheckCircle,
  Award,
  Truck,
  FileCheck,
  Lock,
} from "lucide-react";

const SpecializedCargo = () => {
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
              Expert Specialized Transportation
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Specialized Cargo <br />
              <span className="text-primary">Handling</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Expert handling of oversized, hazardous, and high-value cargo with
              specialized equipment and certified drivers who understand your
              unique requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Get Specialized Quote
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                View Certifications
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Specialized Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide expert transportation for cargo that requires special
              handling, permits, or equipment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-yellow-200 bg-yellow-50">
              <CardHeader>
                <CardTitle className="flex items-center text-yellow-800">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  Hazardous Materials
                </CardTitle>
                <CardDescription className="text-yellow-700">
                  Certified HAZMAT transportation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-yellow-800">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    DOT certified drivers
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Proper placarding & documentation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Emergency response protocols
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Route compliance monitoring
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-800">
                  <Scale className="h-5 w-5 mr-2" />
                  Oversized Loads
                </CardTitle>
                <CardDescription className="text-blue-700">
                  Permit and escort services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Overweight permits obtained
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Pilot car coordination
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Route surveys & planning
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Specialized trailers available
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle className="flex items-center text-purple-800">
                  <Lock className="h-5 w-5 mr-2" />
                  High-Value Cargo
                </CardTitle>
                <CardDescription className="text-purple-700">
                  Enhanced security measures
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-purple-800">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    GPS tracking & monitoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Background-checked drivers
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Secure loading facilities
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Enhanced insurance coverage
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Equipment & Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Specialized Equipment & Capabilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our fleet includes specialized trailers and equipment designed for
              unique cargo requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Truck className="h-5 w-5 mr-2 text-primary" />
                  Flatbed Trailers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Open flatbed trailers for oversized and irregularly shaped
                  cargo.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Length:</span>
                    <span className="font-medium">53 feet</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Width:</span>
                    <span className="font-medium">8.5 feet</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Height:</span>
                    <span className="font-medium">13.6 feet max</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Capacity:</span>
                    <span className="font-medium">48,000 lbs</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Scale className="h-5 w-5 mr-2 text-primary" />
                  Heavy Haul Trailers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Multi-axle trailers for extremely heavy and oversized loads.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Axles:</span>
                    <span className="font-medium">Up to 19 axles</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Capacity:</span>
                    <span className="font-medium">150,000+ lbs</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Width:</span>
                    <span className="font-medium">Up to 16 feet</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Height:</span>
                    <span className="font-medium">Up to 16 feet</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-primary" />
                  Security Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Advanced security systems for high-value and sensitive cargo.
                </p>
                <ul className="space-y-1 text-sm">
                  <li>• GPS tracking & geofencing</li>
                  <li>• Temperature monitoring</li>
                  <li>• Door sensors & alarms</li>
                  <li>• 24/7 dispatch monitoring</li>
                  <li>• Secure communication systems</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Certifications & Compliance
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our specialized cargo services meet all regulatory requirements
              and industry standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
              <div className="bg-green-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-green-800 mb-2">
                HAZMAT Certified
              </h3>
              <p className="text-sm text-green-700">
                DOT hazardous materials certification for safe transport
              </p>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-lg border border-blue-200">
              <div className="bg-blue-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FileCheck className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-blue-800 mb-2">
                Permit Services
              </h3>
              <p className="text-sm text-blue-700">
                Licensed to obtain oversize/overweight permits in all states
              </p>
            </div>

            <div className="text-center p-6 bg-purple-50 rounded-lg border border-purple-200">
              <div className="bg-purple-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-purple-800 mb-2">
                Security Cleared
              </h3>
              <p className="text-sm text-purple-700">
                Background-checked drivers for sensitive cargo transport
              </p>
            </div>

            <div className="text-center p-6 bg-orange-50 rounded-lg border border-orange-200">
              <div className="bg-orange-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Scale className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-orange-800 mb-2">
                Heavy Haul Licensed
              </h3>
              <p className="text-sm text-orange-700">
                Authorized for oversized loads up to 150,000+ pounds
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Specialized Cargo Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our systematic approach ensures safe, compliant transportation of
              specialized cargo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold mb-2">Assessment</h3>
              <p className="text-sm text-muted-foreground">
                Detailed cargo evaluation and requirements analysis
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold mb-2">Planning</h3>
              <p className="text-sm text-muted-foreground">
                Route planning, permits, and equipment selection
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold mb-2">Preparation</h3>
              <p className="text-sm text-muted-foreground">
                Equipment setup and safety protocol briefing
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold mb-2">Transport</h3>
              <p className="text-sm text-muted-foreground">
                Secure loading and monitored transportation
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary font-bold text-xl">5</span>
              </div>
              <h3 className="font-semibold mb-2">Delivery</h3>
              <p className="text-sm text-muted-foreground">
                Safe unloading and delivery confirmation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Need Specialized Cargo Transportation?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our experts are ready to handle your most challenging cargo
            requirements with the highest standards of safety and compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Consult Our Experts
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              Call (929) 928-5805
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpecializedCargo;
