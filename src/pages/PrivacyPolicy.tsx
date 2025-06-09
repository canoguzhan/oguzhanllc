import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Shield, Eye, Lock, FileText } from "lucide-react";

const PrivacyPolicy = () => {
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
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground">
            Your privacy is important to us. This policy explains how OGUZHAN
            LLC collects, uses, and protects your information.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Last updated: December 2024
          </p>
        </div>

        <div className="prose prose-gray max-w-none">
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <Eye className="h-5 w-5 text-primary mr-2" />
              <h2 className="text-2xl font-semibold text-foreground">
                Information We Collect
              </h2>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="font-semibold mb-3">Personal Information</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  Name, email address, and phone number when you request a quote
                </li>
                <li>Company information and shipping details</li>
                <li>Communication preferences and contact history</li>
                <li>Payment information when processing transactions</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-3">
                Automatically Collected Information
              </h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Website usage data and analytics</li>
                <li>IP address and browser information</li>
                <li>
                  GPS location data for shipment tracking (with your consent)
                </li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <div className="flex items-center mb-4">
              <FileText className="h-5 w-5 text-primary mr-2" />
              <h2 className="text-2xl font-semibold text-foreground">
                How We Use Your Information
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">Service Delivery</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Processing and fulfilling transportation requests</li>
                  <li>Providing shipment tracking and updates</li>
                  <li>Customer support and communication</li>
                  <li>Invoice processing and payment handling</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">Business Operations</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Improving our services and website functionality</li>
                  <li>Safety and security monitoring</li>
                  <li>Compliance with legal and regulatory requirements</li>
                  <li>Marketing communications (with your consent)</li>
                </ul>
              </div>
            </div>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <div className="flex items-center mb-4">
              <Lock className="h-5 w-5 text-primary mr-2" />
              <h2 className="text-2xl font-semibold text-foreground">
                Data Protection & Security
              </h2>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-muted-foreground mb-4">
                We implement industry-standard security measures to protect your
                personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>SSL encryption for all data transmission</li>
                <li>Secure servers with restricted access</li>
                <li>Regular security audits and updates</li>
                <li>Employee training on data protection practices</li>
                <li>
                  Limited access to personal information on a need-to-know basis
                </li>
              </ul>
            </div>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Information Sharing
            </h2>
            <p className="text-muted-foreground mb-4">
              We do not sell, trade, or rent your personal information. We may
              share your information only in the following circumstances:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <h3 className="font-semibold mb-2">Service Partners</h3>
                <p className="text-sm text-muted-foreground">
                  With trusted partners who help us deliver our services
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <h3 className="font-semibold mb-2">Legal Requirements</h3>
                <p className="text-sm text-muted-foreground">
                  When required by law or legal process
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <h3 className="font-semibold mb-2">Safety & Security</h3>
                <p className="text-sm text-muted-foreground">
                  To protect our rights and ensure safety
                </p>
              </div>
            </div>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Your Rights
            </h2>
            <div className="bg-primary/5 p-6 rounded-lg">
              <p className="text-muted-foreground mb-4">
                You have the right to:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Access your personal information</li>
                  <li>Correct or update your information</li>
                  <li>Request deletion of your information</li>
                </ul>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Opt-out of marketing communications</li>
                  <li>Request information about data sharing</li>
                  <li>File complaints with regulatory authorities</li>
                </ul>
              </div>
            </div>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Cookies & Tracking
            </h2>
            <p className="text-muted-foreground mb-4">
              We use cookies and similar technologies to enhance your experience
              and analyze website usage. You can control cookie settings through
              your browser preferences.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Types of Cookies We Use:</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>
                  <strong>Essential:</strong> Required for website functionality
                </li>
                <li>
                  <strong>Analytics:</strong> Help us understand website usage
                </li>
                <li>
                  <strong>Preferences:</strong> Remember your settings and
                  choices
                </li>
              </ul>
            </div>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Contact Us
            </h2>
            <div className="bg-primary/5 p-6 rounded-lg">
              <p className="text-muted-foreground mb-4">
                If you have questions about this Privacy Policy or want to
                exercise your rights, please contact us:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold">OGUZHAN LLC Logistics</p>
                  <p className="text-muted-foreground">Privacy Officer</p>
                  <p className="text-muted-foreground">
                    Email: privacy@oguzhanllc.com
                  </p>
                  <p className="text-muted-foreground">Phone: (555) 123-4567</p>
                </div>
                <div>
                  <p className="font-semibold">Response Time</p>
                  <p className="text-muted-foreground">
                    We will respond to privacy requests within 30 days of
                    receipt.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Policy Updates
            </h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy periodically. When we make
              changes, we will notify you by updating the "Last updated" date at
              the top of this policy and, for significant changes, we may
              provide additional notice such as email notification.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
