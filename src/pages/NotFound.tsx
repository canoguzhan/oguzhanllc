import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Truck, ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="bg-primary/10 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
          <Truck className="h-12 w-12 text-primary" />
        </div>

        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Route Not Found
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Looks like this delivery got lost on the highway. Let's get you back
          on track.
        </p>

        <div className="space-y-4">
          <Button
            size="lg"
            className="w-full"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go Back
          </Button>

          <Button variant="outline" size="lg" className="w-full" asChild>
            <a href="/">
              <Home className="mr-2 h-5 w-5" />
              Return to Home
            </a>
          </Button>
        </div>

        <div className="mt-12 text-sm text-muted-foreground">
          <p>Need help? Contact OGUZHAN LLC:</p>
          <p className="font-medium text-foreground">(555) 123-4567</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
