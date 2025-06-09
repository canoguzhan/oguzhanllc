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
  Users,
  Star,
  DollarSign,
  Heart,
  Truck,
  FileText,
  MapPin,
  Clock,
  Award,
} from "lucide-react";

const Careers = () => {
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
              Join Our Growing Team
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Drive Your <br />
              <span className="text-primary">Career Forward</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join OGUZHAN LLC and become part of a family that values safety,
              professionalism, and career growth. We offer competitive benefits
              and opportunities for advancement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                View Open Positions
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why Work at OGUZHAN LLC?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We believe our success comes from our people. That's why we invest
              in our team with competitive benefits and a supportive work
              environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Competitive Pay</h3>
              <p className="text-sm text-muted-foreground">
                Above industry-average wages with performance bonuses and
                regular pay increases
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Excellent Benefits</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive health insurance, retirement plans, and paid time
                off
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Career Growth</h3>
              <p className="text-sm text-muted-foreground">
                Clear advancement paths and ongoing training opportunities
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold mb-2">Family Culture</h3>
              <p className="text-sm text-muted-foreground">
                Supportive team environment where every employee is valued
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Current Opportunities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team.
              Explore our current openings below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <Truck className="h-5 w-5 mr-2 text-primary" />
                    CDL Driver
                  </CardTitle>
                  <Badge variant="secondary">Full-time</Badge>
                </div>
                <CardDescription>
                  Experienced OTR and regional drivers wanted
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>Multiple Locations</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <DollarSign className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>$60,000 - $85,000/year</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>Flexible schedules available</span>
                  </div>
                </div>
                <Separator className="my-4" />
                <ul className="text-sm space-y-1 mb-4">
                  <li>• Valid CDL Class A license</li>
                  <li>• Clean driving record</li>
                  <li>• 2+ years OTR experience</li>
                  <li>• DOT physical current</li>
                </ul>
                <Button className="w-full">Apply Now</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-primary" />
                    Dispatcher
                  </CardTitle>
                  <Badge variant="secondary">Full-time</Badge>
                </div>
                <CardDescription>
                  Coordinate routes and support drivers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>Office - Main Location</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <DollarSign className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>$45,000 - $55,000/year</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>Monday - Friday</span>
                  </div>
                </div>
                <Separator className="my-4" />
                <ul className="text-sm space-y-1 mb-4">
                  <li>• Transportation experience preferred</li>
                  <li>• Strong communication skills</li>
                  <li>• Multi-tasking abilities</li>
                  <li>• Computer proficiency</li>
                </ul>
                <Button className="w-full">Apply Now</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 mr-2 text-primary" />
                    Safety Manager
                  </CardTitle>
                  <Badge variant="secondary">Full-time</Badge>
                </div>
                <CardDescription>
                  Oversee safety programs and compliance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>Office - Main Location</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <DollarSign className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>$65,000 - $75,000/year</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>Standard business hours</span>
                  </div>
                </div>
                <Separator className="my-4" />
                <ul className="text-sm space-y-1 mb-4">
                  <li>• DOT compliance knowledge</li>
                  <li>• Safety certification preferred</li>
                  <li>• Leadership experience</li>
                  <li>• Attention to detail</li>
                </ul>
                <Button className="w-full">Apply Now</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Comprehensive Benefits Package
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We believe in taking care of our employees with a complete
              benefits package that supports you and your family.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                What We Offer
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Heart className="h-5 w-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold block">
                      Health Insurance
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Medical, dental, and vision coverage for you and your
                      family
                    </span>
                  </div>
                </div>

                <div className="flex items-start">
                  <DollarSign className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold block">
                      Retirement Planning
                    </span>
                    <span className="text-sm text-muted-foreground">
                      401(k) with company matching to secure your future
                    </span>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold block">Paid Time Off</span>
                    <span className="text-sm text-muted-foreground">
                      Generous vacation and sick leave policies
                    </span>
                  </div>
                </div>

                <div className="flex items-start">
                  <Star className="h-5 w-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold block">
                      Performance Bonuses
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Safety and performance incentives throughout the year
                    </span>
                  </div>
                </div>

                <div className="flex items-start">
                  <Award className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold block">
                      Training & Development
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Ongoing training programs and career advancement
                      opportunities
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-800">For Drivers</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-blue-700">
                    <li>• $2,000 sign-on bonus for qualified drivers</li>
                    <li>• Paid weekly via direct deposit</li>
                    <li>• Home every weekend (regional routes)</li>
                    <li>• Top-of-the-line equipment</li>
                    <li>• Fuel cards and maintenance coverage</li>
                    <li>• Safety and mileage bonuses</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-green-50 border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-800">
                    For Office Staff
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-green-700">
                    <li>• Flexible work arrangements</li>
                    <li>• Professional development opportunities</li>
                    <li>• Modern office environment</li>
                    <li>• Team building activities</li>
                    <li>• Technology and equipment provided</li>
                    <li>• Career advancement paths</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              How to Apply
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to join our team? Follow these simple steps to start your
              application process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold mb-2">Submit Application</h3>
              <p className="text-sm text-muted-foreground">
                Complete our online application form with your information and
                experience
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold mb-2">Phone Interview</h3>
              <p className="text-sm text-muted-foreground">
                HR will contact you for an initial phone screening and to answer
                any questions
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold mb-2">Background Check</h3>
              <p className="text-sm text-muted-foreground">
                Complete background check, drug screening, and DOT physical (for
                drivers)
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold mb-2">Start Working</h3>
              <p className="text-sm text-muted-foreground">
                Complete orientation and training, then begin your career with
                OGUZHAN LLC
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              What Our Team Says
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from our current employees about their experience working at
              OGUZHAN LLC.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 rounded-full p-3 w-12 h-12 mr-4 flex items-center justify-center">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Mike Rodriguez</h4>
                    <p className="text-sm text-muted-foreground">
                      CDL Driver, 3 years
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "Best company I've worked for. They really care about their
                  drivers and provide excellent equipment. Home every weekend
                  means I can spend time with my family."
                </p>
                <div className="flex text-yellow-500 mt-3">
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 rounded-full p-3 w-12 h-12 mr-4 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Sarah Johnson</h4>
                    <p className="text-sm text-muted-foreground">
                      Dispatcher, 2 years
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "Great work environment with supportive management. The
                  benefits are excellent and there are real opportunities for
                  advancement. I've grown so much here."
                </p>
                <div className="flex text-yellow-500 mt-3">
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 rounded-full p-3 w-12 h-12 mr-4 flex items-center justify-center">
                    <Award className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">David Chen</h4>
                    <p className="text-sm text-muted-foreground">
                      Safety Manager, 5 years
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "OGUZHAN LLC truly values safety and their employees. The
                  leadership is accessible and they invest in training and
                  development. It's a place where you can build a career."
                </p>
                <div className="flex text-yellow-500 mt-3">
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Start Your Career?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the OGUZHAN LLC family and take the next step in your
            transportation career. We're looking forward to meeting you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Apply Online
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              Call HR: (929) 928-5805
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
