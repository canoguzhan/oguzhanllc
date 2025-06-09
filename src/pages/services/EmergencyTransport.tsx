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
  Clock,
  Phone,
  Zap,
  CheckCircle,
  AlertTriangle,
  Shield,
  Truck,
  MapPin,
} from "lucide-react";

const EmergencyTransport = () => {
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
      <section className="bg-gradient-to-br from-red-50 to-orange-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="destructive" className="mb-4">
              24/7 Emergency Response
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Emergency <br />
              <span className="text-primary">Transport Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              When time is critical, count on OGUZHAN LLC for immediate
              emergency transportation services. Available 24/7 with rapid
              response times for your urgent freight needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-8 bg-red-600 hover:bg-red-700"
              >
                <Phone className="mr-2 h-5 w-5" />
                Emergency Hotline
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                <Clock className="mr-2 h-5 w-5" />
                Response Times
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-8 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <AlertTriangle className="h-8 w-8 mr-3" />
              <div>
                <h3 className="text-xl font-bold">24/7 Emergency Hotline</h3>
                <p className="text-red-100">
                  Immediate response for urgent shipments
                </p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-3xl font-bold">(555) 911-RUSH</p>
              <p className="text-red-100">Available 24 hours a day</p>
            </div>
          </div>
        </div>
      </section>

      {/* Response Times */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Rapid Response Times
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our emergency response team is strategically positioned to provide
              the fastest possible pickup times.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="border-2 border-red-200 bg-red-50">
              <CardHeader className="text-center">
                <div className="bg-red-100 rounded-full p-3 w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-red-800">Critical</CardTitle>
                <CardDescription className="text-red-700">
                  Life-threatening urgency
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-3xl font-bold text-red-600 mb-2">30 min</p>
                <p className="text-sm text-red-700">Response time</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-200 bg-orange-50">
              <CardHeader className="text-center">
                <div className="bg-orange-100 rounded-full p-3 w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-orange-800">Urgent</CardTitle>
                <CardDescription className="text-orange-700">
                  Same-day required
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-3xl font-bold text-orange-600 mb-2">2 hrs</p>
                <p className="text-sm text-orange-700">Response time</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-200 bg-yellow-50">
              <CardHeader className="text-center">
                <div className="bg-yellow-100 rounded-full p-3 w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                  <Truck className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-yellow-800">Priority</CardTitle>
                <CardDescription className="text-yellow-700">
                  Next business day
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-3xl font-bold text-yellow-600 mb-2">4 hrs</p>
                <p className="text-sm text-yellow-700">Response time</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardHeader className="text-center">
                <div className="bg-blue-100 rounded-full p-3 w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-blue-800">Standard</CardTitle>
                <CardDescription className="text-blue-700">
                  Scheduled emergency
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-3xl font-bold text-blue-600 mb-2">6 hrs</p>
                <p className="text-sm text-blue-700">Response time</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Emergency Transport Scenarios
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We handle all types of emergency transportation situations with
              professionalism and urgency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2 text-red-600" />
                  Medical Emergencies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Critical medical supplies, equipment, and pharmaceutical
                  transport.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Temperature-controlled transport
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Direct hospital delivery
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Chain of custody documentation
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-orange-600" />
                  Production Downtime
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Critical parts and equipment to restore operations quickly.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Machinery parts delivery
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    24/7 factory access
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Installation support coordination
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-blue-600" />
                  Disaster Response
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Emergency supplies and equipment for disaster relief efforts.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Relief supplies transport
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Alternative route planning
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Emergency area access
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-purple-600" />
                  Time-Critical Deliveries
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Contract deadlines and time-sensitive project materials.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Deadline guarantee
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Express routing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Real-time updates
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Truck className="h-5 w-5 mr-2 text-green-600" />
                  Equipment Breakdown
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Replacement equipment and vehicle recovery services.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Heavy equipment transport
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Specialized trailers
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Emergency permits
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-indigo-600" />
                  Last-Mile Failures
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  When other carriers fail, we provide backup transportation
                  solutions.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Carrier failure recovery
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Immediate pickup
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Customer communication
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Emergency Response Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our streamlined emergency process ensures rapid deployment and
              execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Phone className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="font-semibold mb-2 text-lg">Immediate Contact</h3>
              <p className="text-muted-foreground mb-4">
                Call our emergency hotline for instant response. Our dispatch
                team is available 24/7 to assess your urgent needs.
              </p>
              <div className="bg-red-50 p-3 rounded-lg">
                <p className="text-red-800 font-bold">(555) 911-RUSH</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Zap className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="font-semibold mb-2 text-lg">Rapid Deployment</h3>
              <p className="text-muted-foreground mb-4">
                Within minutes, we deploy the nearest available truck and driver
                to your location with all necessary equipment.
              </p>
              <div className="bg-orange-50 p-3 rounded-lg">
                <p className="text-orange-800 font-bold">30 min average</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2 text-lg">Mission Complete</h3>
              <p className="text-muted-foreground mb-4">
                We execute the emergency transport with continuous updates until
                successful delivery is confirmed.
              </p>
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-green-800 font-bold">100% commitment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Emergency? We're Here to Help
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Don't let transportation emergencies derail your operations. Our
            team is standing by 24/7 to provide immediate assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 bg-white text-red-600 hover:bg-red-50"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Emergency Line
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 border-white text-white hover:bg-red-700"
            >
              <Clock className="mr-2 h-5 w-5" />
              24/7 Availability
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmergencyTransport;
