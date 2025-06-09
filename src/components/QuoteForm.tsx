import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { sendQuoteRequest, type QuoteRequestData } from "@/lib/email";

const quoteSchema = z.object({
  customerName: z.string().min(2, "Name must be at least 2 characters"),
  customerEmail: z.string().email("Please enter a valid email address"),
  customerPhone: z.string().min(10, "Please enter a valid phone number"),
  companyName: z.string().optional(),
  pickupLocation: z.string().min(3, "Pickup location is required"),
  deliveryLocation: z.string().min(3, "Delivery location is required"),
  weight: z.string().min(1, "Weight is required"),
  pickupDate: z.string().min(1, "Pickup date is required"),
  cargoDescription: z
    .string()
    .min(10, "Please provide more details about your cargo"),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

export function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  });

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);

    try {
      const success = await sendQuoteRequest(data);

      if (success) {
        setSubmitted(true);
        reset();
        toast({
          title: "Quote Request Sent!",
          description:
            "We'll get back to you within 24 hours with a detailed quote.",
          duration: 5000,
        });
      } else {
        throw new Error("Failed to send quote request");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description:
          "Failed to send quote request. Please try again or call us directly.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <div className="bg-green-100 rounded-full p-3 w-16 h-16 mx-auto flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                Quote Request Sent!
              </h3>
              <p className="text-muted-foreground">
                Thank you for choosing OGUZHAN LLC Logistics. We'll review your
                request and get back to you within 24 hours with a detailed
                quote.
              </p>
            </div>
            <Button
              variant="outline"
              onClick={() => setSubmitted(false)}
              className="mt-4"
            >
              Send Another Request
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Request a Quote</CardTitle>
        <CardDescription>
          Get a personalized quote for your transportation needs
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">
                Full Name *
              </label>
              <input
                {...register("customerName")}
                type="text"
                placeholder="John Doe"
                className="w-full px-3 py-2 border border-input rounded-md text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              {errors.customerName && (
                <p className="text-xs text-red-600 mt-1 flex items-center">
                  <AlertCircle className="h-3 w-3 mr-1" />
                  {errors.customerName.message}
                </p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">
                Email Address *
              </label>
              <input
                {...register("customerEmail")}
                type="email"
                placeholder="john@company.com"
                className="w-full px-3 py-2 border border-input rounded-md text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              {errors.customerEmail && (
                <p className="text-xs text-red-600 mt-1 flex items-center">
                  <AlertCircle className="h-3 w-3 mr-1" />
                  {errors.customerEmail.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">
                Phone Number *
              </label>
              <input
                {...register("customerPhone")}
                type="tel"
                placeholder="(555) 123-4567"
                className="w-full px-3 py-2 border border-input rounded-md text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              {errors.customerPhone && (
                <p className="text-xs text-red-600 mt-1 flex items-center">
                  <AlertCircle className="h-3 w-3 mr-1" />
                  {errors.customerPhone.message}
                </p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">
                Company Name
              </label>
              <input
                {...register("companyName")}
                type="text"
                placeholder="Your Company Inc."
                className="w-full px-3 py-2 border border-input rounded-md text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>

          {/* Shipping Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">
                Pick-up Location *
              </label>
              <input
                {...register("pickupLocation")}
                type="text"
                placeholder="City, State"
                className="w-full px-3 py-2 border border-input rounded-md text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              {errors.pickupLocation && (
                <p className="text-xs text-red-600 mt-1 flex items-center">
                  <AlertCircle className="h-3 w-3 mr-1" />
                  {errors.pickupLocation.message}
                </p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">
                Delivery Location *
              </label>
              <input
                {...register("deliveryLocation")}
                type="text"
                placeholder="City, State"
                className="w-full px-3 py-2 border border-input rounded-md text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              {errors.deliveryLocation && (
                <p className="text-xs text-red-600 mt-1 flex items-center">
                  <AlertCircle className="h-3 w-3 mr-1" />
                  {errors.deliveryLocation.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">
                Weight (lbs) *
              </label>
              <input
                {...register("weight")}
                type="text"
                placeholder="10,000"
                className="w-full px-3 py-2 border border-input rounded-md text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              {errors.weight && (
                <p className="text-xs text-red-600 mt-1 flex items-center">
                  <AlertCircle className="h-3 w-3 mr-1" />
                  {errors.weight.message}
                </p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">
                Pick-up Date *
              </label>
              <input
                {...register("pickupDate")}
                type="date"
                min={new Date().toISOString().split("T")[0]}
                className="w-full px-3 py-2 border border-input rounded-md text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              {errors.pickupDate && (
                <p className="text-xs text-red-600 mt-1 flex items-center">
                  <AlertCircle className="h-3 w-3 mr-1" />
                  {errors.pickupDate.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">
              Cargo Description *
            </label>
            <textarea
              {...register("cargoDescription")}
              placeholder="Please describe your cargo, including dimensions, special handling requirements, etc."
              rows={4}
              className="w-full px-3 py-2 border border-input rounded-md text-sm resize-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            {errors.cargoDescription && (
              <p className="text-xs text-red-600 mt-1 flex items-center">
                <AlertCircle className="h-3 w-3 mr-1" />
                {errors.cargoDescription.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full"
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending Request...
              </>
            ) : (
              <>
                <Calendar className="mr-2 h-4 w-4" />
                Get Quote Now
              </>
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            By submitting this form, you agree to receive communications from
            OGUZHAN LLC Logistics. We'll respond within 24 hours with your
            personalized quote.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
