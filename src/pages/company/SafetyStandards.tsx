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
  CheckCircle,
  Award,
  Users,
  Truck,
  AlertTriangle,
  FileCheck,
  Clock,
} from "lucide-react";

const SafetyStandards = () => {
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
              Industry-Leading Safety
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Safety <br />
              <span className="text-primary">Standards</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              At OGUZHAN LLC, safety is our top priority. We maintain the
              highest standards in the industry to protect our drivers, cargo,
              and the public.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                View Safety Record
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Safety Certifications
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Metrics */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Outstanding Safety Record
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to safety is reflected in our industry-leading
              performance metrics.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <p className="text-3xl font-bold text-green-600 mb-2">0</p>
              <p className="text-sm text-green-700 font-medium">
                Preventable Accidents
              </p>
              <p className="text-xs text-muted-foreground">Last 24 months</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <p className="text-3xl font-bold text-green-600 mb-2">100%</p>
              <p className="text-sm text-green-700 font-medium">
                Safety Compliance
              </p>
              <p className="text-xs text-muted-foreground">DOT inspections</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <p className="text-3xl font-bold text-green-600 mb-2">40+</p>
              <p className="text-sm text-green-700 font-medium">
                Training Hours
              </p>
              <p className="text-xs text-muted-foreground">
                Per driver annually
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <p className="text-3xl font-bold text-green-600 mb-2">0</p>
              <p className="text-sm text-green-700 font-medium">
                DOT Violations
              </p>
              <p className="text-xs text-muted-foreground">Current period</p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Programs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Comprehensive Safety Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our multi-layered approach to safety encompasses driver training,
              vehicle maintenance, and operational procedures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-primary" />
                  Driver Training Program
                </CardTitle>
                <CardDescription>
                  Comprehensive training for all drivers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    New driver orientation (40 hours)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Defensive driving techniques
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Hazardous materials certification
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Annual safety refresher courses
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Emergency response procedures
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Truck className="h-5 w-5 mr-2 text-primary" />
                  Vehicle Safety Program
                </CardTitle>
                <CardDescription>
                  Rigorous maintenance and inspection
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Daily pre-trip inspections
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Preventive maintenance schedules
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Annual DOT inspections
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Electronic vehicle monitoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Immediate repair protocols
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileCheck className="h-5 w-5 mr-2 text-primary" />
                  Compliance Monitoring
                </CardTitle>
                <CardDescription>
                  Continuous regulatory compliance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Hours of Service monitoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Drug and alcohol testing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Driver qualification files
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    CSA BASIC score monitoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Regular safety audits
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Safety Technology */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Advanced Safety Technology
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We leverage cutting-edge technology to enhance safety and prevent
              accidents before they occur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Technology-Enhanced Safety
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold block">
                      Electronic Logging Devices (ELD)
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Automated hours of service tracking to prevent driver
                      fatigue
                    </span>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold block">
                      GPS Tracking & Monitoring
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Real-time vehicle location and route monitoring for safety
                      oversight
                    </span>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold block">
                      Vehicle Diagnostics Systems
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Continuous monitoring of engine, brake, and safety systems
                    </span>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold block">
                      Driver Behavior Monitoring
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Analysis of driving patterns to identify and correct
                      unsafe behaviors
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-800">
                    Real-Time Monitoring
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-700 mb-4">
                    24/7 monitoring center tracks all vehicles for safety
                    compliance and emergency response.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-blue-600">24/7</p>
                      <p className="text-xs text-blue-700">Monitoring</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-blue-600">100%</p>
                      <p className="text-xs text-blue-700">Fleet Coverage</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-green-50 border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-800">
                    Predictive Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-700 mb-4">
                    Advanced analytics predict potential safety issues before
                    they become problems.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-green-600">95%</p>
                      <p className="text-xs text-green-700">Prevention Rate</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-green-600">
                        &lt;2min
                      </p>
                      <p className="text-xs text-green-700">Alert Response</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Protocols */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Safety Protocols & Procedures
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Detailed protocols ensure consistent safety practices across all
              operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2 text-orange-600" />
                  Emergency Response Protocol
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="bg-orange-100 rounded-full p-1 w-6 h-6 mr-3 flex items-center justify-center">
                      <span className="text-orange-600 text-xs font-bold">
                        1
                      </span>
                    </div>
                    <span className="text-sm">
                      Immediate safety assessment and scene securing
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-orange-100 rounded-full p-1 w-6 h-6 mr-3 flex items-center justify-center">
                      <span className="text-orange-600 text-xs font-bold">
                        2
                      </span>
                    </div>
                    <span className="text-sm">
                      Emergency services notification (if required)
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-orange-100 rounded-full p-1 w-6 h-6 mr-3 flex items-center justify-center">
                      <span className="text-orange-600 text-xs font-bold">
                        3
                      </span>
                    </div>
                    <span className="text-sm">
                      Dispatch and management notification
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-orange-100 rounded-full p-1 w-6 h-6 mr-3 flex items-center justify-center">
                      <span className="text-orange-600 text-xs font-bold">
                        4
                      </span>
                    </div>
                    <span className="text-sm">
                      Documentation and investigation initiation
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-blue-600" />
                  Pre-Trip Inspection Protocol
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="bg-blue-100 rounded-full p-1 w-6 h-6 mr-3 flex items-center justify-center">
                      <span className="text-blue-600 text-xs font-bold">1</span>
                    </div>
                    <span className="text-sm">
                      Engine and fluid level checks
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-blue-100 rounded-full p-1 w-6 h-6 mr-3 flex items-center justify-center">
                      <span className="text-blue-600 text-xs font-bold">2</span>
                    </div>
                    <span className="text-sm">Brake system inspection</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-blue-100 rounded-full p-1 w-6 h-6 mr-3 flex items-center justify-center">
                      <span className="text-blue-600 text-xs font-bold">3</span>
                    </div>
                    <span className="text-sm">Tire condition and pressure</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-blue-100 rounded-full p-1 w-6 h-6 mr-3 flex items-center justify-center">
                      <span className="text-blue-600 text-xs font-bold">4</span>
                    </div>
                    <span className="text-sm">
                      Lights, signals, and safety equipment
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Safety Awards & Recognition
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to safety has been recognized by industry
              organizations and regulatory agencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="font-semibold mb-2">Safety Excellence Award</h3>
              <p className="text-sm text-muted-foreground">
                State Transportation Authority
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Zero Accidents Certificate</h3>
              <p className="text-sm text-muted-foreground">
                Department of Transportation
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Safety Leader Recognition</h3>
              <p className="text-sm text-muted-foreground">
                National Trucking Association
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Driver Safety Champion</h3>
              <p className="text-sm text-muted-foreground">
                Commercial Vehicle Safety Alliance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Partner with Safety Leaders
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Choose OGUZHAN LLC for transportation services that prioritize
            safety without compromising efficiency or reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              View Safety Record
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              Contact Safety Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SafetyStandards;
