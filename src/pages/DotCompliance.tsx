import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  Shield,
  CheckCircle,
  FileText,
  Award,
  Clock,
  Truck,
} from "lucide-react";

const DotCompliance = () => {
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

      {/* Content */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
            <Award className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            DOT Compliance & Safety
          </h1>
          <p className="text-lg text-muted-foreground">
            OGUZHAN LLC is fully compliant with all Department of Transportation
            regulations and safety standards.
          </p>
          <Badge variant="secondary" className="mt-4">
            DOT Certified • FMCSA Registered • Fully Insured
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-green-50 border border-green-200 p-6 rounded-lg text-center">
            <div className="bg-green-100 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-green-800 mb-2">DOT Number</h3>
            <p className="text-2xl font-bold text-green-600">USDOT #123456</p>
            <p className="text-sm text-green-700">Active & Current</p>
          </div>

          <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg text-center">
            <div className="bg-blue-100 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
              <Shield className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-blue-800 mb-2">Safety Rating</h3>
            <p className="text-2xl font-bold text-blue-600">SATISFACTORY</p>
            <p className="text-sm text-blue-700">FMCSA Rating</p>
          </div>

          <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg text-center">
            <div className="bg-purple-100 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
              <Award className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-purple-800 mb-2">MC Authority</h3>
            <p className="text-2xl font-bold text-purple-600">MC-123456</p>
            <p className="text-sm text-purple-700">Interstate Authority</p>
          </div>
        </div>

        <div className="prose prose-gray max-w-none">
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <FileText className="h-5 w-5 text-primary mr-2" />
              <h2 className="text-2xl font-semibold text-foreground">
                Regulatory Compliance
              </h2>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-muted-foreground mb-4">
                OGUZHAN LLC maintains full compliance with all applicable
                federal and state transportation regulations:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Federal Compliance</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Department of Transportation (DOT) registration</li>
                    <li>Federal Motor Carrier Safety Administration (FMCSA)</li>
                    <li>Interstate Commerce Commission (ICC) authority</li>
                    <li>
                      Hazardous Materials Transportation (when applicable)
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Safety Programs</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Comprehensive Safety Analysis (CSA) monitoring</li>
                    <li>Regular vehicle inspections and maintenance</li>
                    <li>Driver qualification and training programs</li>
                    <li>Electronic Logging Device (ELD) compliance</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <div className="flex items-center mb-4">
              <Truck className="h-5 w-5 text-primary mr-2" />
              <h2 className="text-2xl font-semibold text-foreground">
                Fleet Safety Standards
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">Vehicle Maintenance</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Pre-trip and post-trip inspections</li>
                  <li>Scheduled preventive maintenance</li>
                  <li>Annual DOT vehicle inspections</li>
                  <li>Real-time vehicle monitoring systems</li>
                  <li>Immediate repair of safety-critical issues</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">Driver Requirements</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Valid Commercial Driver's License (CDL)</li>
                  <li>Clean driving record verification</li>
                  <li>DOT physical examination compliance</li>
                  <li>Drug and alcohol testing program</li>
                  <li>Ongoing safety training and certification</li>
                </ul>
              </div>
            </div>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <div className="flex items-center mb-4">
              <Clock className="h-5 w-5 text-primary mr-2" />
              <h2 className="text-2xl font-semibold text-foreground">
                Hours of Service Compliance
              </h2>
            </div>
            <div className="bg-primary/5 p-6 rounded-lg">
              <p className="text-muted-foreground mb-4">
                We strictly adhere to Federal Hours of Service (HOS) regulations
                to ensure driver safety and prevent fatigue-related incidents:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold mb-2">Daily Driving Limit</h4>
                  <p className="text-2xl font-bold text-primary">11 Hours</p>
                  <p className="text-sm text-muted-foreground">
                    Maximum consecutive driving
                  </p>
                </div>
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold mb-2">Daily Duty Limit</h4>
                  <p className="text-2xl font-bold text-primary">14 Hours</p>
                  <p className="text-sm text-muted-foreground">
                    Maximum on-duty time
                  </p>
                </div>
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold mb-2">Required Rest</h4>
                  <p className="text-2xl font-bold text-primary">10 Hours</p>
                  <p className="text-sm text-muted-foreground">
                    Consecutive off-duty
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Insurance Coverage
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">Required Coverage</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-white rounded border">
                    <span className="font-medium">Public Liability</span>
                    <span className="text-green-600 font-bold">$750,000</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded border">
                    <span className="font-medium">Cargo Insurance</span>
                    <span className="text-green-600 font-bold">$100,000</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded border">
                    <span className="font-medium">General Liability</span>
                    <span className="text-green-600 font-bold">$1,000,000</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">Additional Protection</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Workers' compensation coverage</li>
                  <li>Environmental liability protection</li>
                  <li>Cyber liability insurance</li>
                  <li>Umbrella policy for excess coverage</li>
                  <li>Contingent auto liability</li>
                </ul>
              </div>
            </div>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Safety Performance Metrics
            </h2>
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-green-600">0</p>
                  <p className="text-sm text-green-700">
                    Preventable Accidents
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Last 24 months
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-600">0</p>
                  <p className="text-sm text-green-700">DOT Violations</p>
                  <p className="text-xs text-muted-foreground">
                    Current period
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-600">100%</p>
                  <p className="text-sm text-green-700">Driver Compliance</p>
                  <p className="text-xs text-muted-foreground">
                    HOS & Drug Testing
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-600">95%</p>
                  <p className="text-sm text-green-700">On-Time Delivery</p>
                  <p className="text-xs text-muted-foreground">Average rate</p>
                </div>
              </div>
            </div>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Technology & Monitoring
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="bg-blue-100 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Electronic Logs</h3>
                <p className="text-sm text-muted-foreground">
                  FMCSA-compliant ELD systems for accurate HOS tracking
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="bg-green-100 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Real-Time Monitoring</h3>
                <p className="text-sm text-muted-foreground">
                  GPS tracking and vehicle diagnostics for safety oversight
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="bg-purple-100 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Safety Analytics</h3>
                <p className="text-sm text-muted-foreground">
                  Continuous monitoring of CSA BASIC scores and metrics
                </p>
              </div>
            </div>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Verification & Documentation
            </h2>
            <div className="bg-primary/5 p-6 rounded-lg">
              <p className="text-muted-foreground mb-4">
                Our compliance status can be verified through official
                government databases:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">FMCSA SAFER System</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Search our DOT number to verify our safety rating and
                    compliance status
                  </p>
                  <Button variant="outline" size="sm">
                    <FileText className="mr-2 h-4 w-4" />
                    View SAFER Record
                  </Button>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Insurance Verification</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Certificate of insurance available upon request for
                    verification
                  </p>
                  <Button variant="outline" size="sm">
                    <Shield className="mr-2 h-4 w-4" />
                    Request Certificate
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Commitment to Excellence
            </h2>
            <div className="bg-primary/5 p-6 rounded-lg">
              <p className="text-muted-foreground mb-4">
                At OGUZHAN LLC, safety and compliance are not just regulatory
                requirements – they are fundamental to our business philosophy.
                We continuously invest in training, technology, and processes to
                exceed industry standards and ensure the safe, reliable
                transportation of your cargo.
              </p>
              <div className="text-center">
                <p className="font-semibold text-foreground">
                  "Safety First, Service Always"
                </p>
                <p className="text-sm text-muted-foreground">
                  OGUZHAN LLC Logistics
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DotCompliance;
