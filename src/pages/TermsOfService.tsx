import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  FileText,
  Scale,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";

const TermsOfService = () => {
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
            <Scale className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-muted-foreground">
            These terms govern your use of OGUZHAN LLC's transportation and
            logistics services.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Last updated: June 09, 2025
          </p>
        </div>

        <div className="bg-primary/5 p-6 rounded-lg mb-8">
          <div className="flex items-start">
            <AlertTriangle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Important Notice</h3>
              <p className="text-muted-foreground">
                By using our services, you agree to these terms. Please read
                them carefully before engaging our transportation services.
              </p>
            </div>
          </div>
        </div>

        <div className="prose prose-gray max-w-none">
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <FileText className="h-5 w-5 text-primary mr-2" />
              <h2 className="text-2xl font-semibold text-foreground">
                Service Agreement
              </h2>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-3">Transportation Services</h3>
              <p className="text-muted-foreground mb-4">
                OGUZHAN LLC provides professional freight transportation and
                logistics services including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Long-distance freight transportation</li>
                <li>Local and regional delivery services</li>
                <li>Specialized cargo handling</li>
                <li>Temperature-controlled transportation</li>
                <li>Expedited delivery services</li>
              </ul>
            </div>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Customer Responsibilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">Cargo Information</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Provide accurate weight and dimensions</li>
                  <li>Declare hazardous materials properly</li>
                  <li>Ensure cargo is properly packaged</li>
                  <li>Provide clear delivery instructions</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">Payment Terms</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Payment due within 30 days of invoice</li>
                  <li>Late payment fees may apply</li>
                  <li>Provide accurate billing information</li>
                  <li>Notify of any billing disputes promptly</li>
                </ul>
              </div>
            </div>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Liability and Insurance
            </h2>
            <div className="bg-primary/5 p-6 rounded-lg mb-6">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Our Coverage</h3>
                  <p className="text-muted-foreground">
                    OGUZHAN LLC maintains comprehensive commercial insurance
                    including cargo insurance, general liability, and commercial
                    auto insurance as required by DOT regulations.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">Liability Limits</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Standard cargo liability: $100,000 per occurrence</li>
                  <li>Additional coverage available upon request</li>
                  <li>Customer may declare higher value</li>
                  <li>Special handling surcharges may apply</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">Exclusions</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Acts of God and natural disasters</li>
                  <li>Delays due to weather conditions</li>
                  <li>Government actions or regulations</li>
                  <li>Improperly packaged cargo</li>
                </ul>
              </div>
            </div>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Claims and Disputes
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-3">Claims Process</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full p-3 w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <h4 className="font-semibold">Report</h4>
                  <p className="text-sm text-muted-foreground">
                    Notify within 24 hours
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full p-3 w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <h4 className="font-semibold">Document</h4>
                  <p className="text-sm text-muted-foreground">
                    Provide evidence
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full p-3 w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <h4 className="font-semibold">Resolve</h4>
                  <p className="text-sm text-muted-foreground">
                    Investigation & settlement
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground">
                All claims must be submitted in writing within 30 days of
                delivery or scheduled delivery date.
              </p>
            </div>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Prohibited Items
            </h2>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <h3 className="font-semibold mb-3 text-red-800">
                We Do Not Transport:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="list-disc list-inside space-y-2 text-red-700">
                  <li>Illegal substances or contraband</li>
                  <li>
                    Explosive or flammable materials (without proper permits)
                  </li>
                  <li>Live animals (except with special arrangements)</li>
                  <li>Perishable goods without proper refrigeration</li>
                </ul>
                <ul className="list-disc list-inside space-y-2 text-red-700">
                  <li>Personal effects or household goods</li>
                  <li>Fragile items without proper packaging</li>
                  <li>Currency, jewelry, or precious metals</li>
                  <li>Items requiring special permits we don't hold</li>
                </ul>
              </div>
            </div>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Service Modifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">Schedule Changes</h3>
                <p className="text-muted-foreground mb-3">
                  We reserve the right to modify delivery schedules due to:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Weather conditions</li>
                  <li>Traffic or road conditions</li>
                  <li>Mechanical issues</li>
                  <li>DOT regulations</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">Service Cancellations</h3>
                <p className="text-muted-foreground mb-3">
                  Cancellation fees may apply:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>24+ hours notice: No fee</li>
                  <li>6-24 hours notice: 25% fee</li>
                  <li>Less than 6 hours: 50% fee</li>
                  <li>No-show: Full charge</li>
                </ul>
              </div>
            </div>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Governing Law
            </h2>
            <div className="bg-primary/5 p-6 rounded-lg">
              <p className="text-muted-foreground mb-4">
                These terms are governed by federal transportation regulations
                and state laws where services are performed. Any disputes will
                be resolved through binding arbitration in accordance with the
                rules of the American Arbitration Association.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <h4 className="font-semibold">Federal Compliance</h4>
                  <p className="text-sm text-muted-foreground">
                    DOT & FMCSA regulations
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold">State Compliance</h4>
                  <p className="text-sm text-muted-foreground">
                    Local transportation laws
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold">Dispute Resolution</h4>
                  <p className="text-sm text-muted-foreground">
                    Binding arbitration
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Contact Information
            </h2>
            <div className="bg-primary/5 p-6 rounded-lg">
              <p className="text-muted-foreground mb-4">
                For questions about these Terms of Service or to report service
                issues:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold">OGUZHAN LLC Logistics</p>
                  <p className="text-muted-foreground">Customer Service</p>
                  <p className="text-muted-foreground">
                    Email: support@oguzhanllc.com
                  </p>
                  <p className="text-muted-foreground">Phone: (929) 928-5805</p>
                </div>
                <div>
                  <p className="font-semibold">Emergency Contact</p>
                  <p className="text-muted-foreground">24/7 Emergency Line</p>
                  <p className="text-muted-foreground">Phone: (227) 250-2476</p>
                  <p className="text-muted-foreground">
                    For urgent shipment issues
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Terms Updates
            </h2>
            <p className="text-muted-foreground">
              These terms may be updated periodically. Continued use of our
              services after changes constitutes acceptance of the updated
              terms. We will notify customers of significant changes via email
              or website notice.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
