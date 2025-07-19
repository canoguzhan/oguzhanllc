import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Globe, Instagram, Facebook, Phone, Mail } from "lucide-react";

const LinkTree = () => {
  const links = [
    {
      title: "Website",
      url: "https://oguzhanllc.com",
      icon: Globe,
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      title: "Instagram",
      url: "https://instagram.com/oguzhanllc",
      icon: Instagram,
      color: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
    },
    {
      title: "Facebook",
      url: "https://facebook.com/oguzhanllc",
      icon: Facebook,
      color: "bg-blue-500 hover:bg-blue-600",
    },
    {
      title: "Phone: +1 (227) 250-2476",
      url: "tel:+12272502476",
      icon: Phone,
      color: "bg-green-600 hover:bg-green-700",
    },
    {
      title: "Phone: +1 (929) 928-5805",
      url: "tel:+19299285805",
      icon: Phone,
      color: "bg-green-600 hover:bg-green-700",
    },
    {
      title: "Email: info@oguzhanllc.com",
      url: "mailto:info@oguzhanllc.com",
      icon: Mail,
      color: "bg-yellow-500 hover:bg-yellow-600 text-gray-900 hover:text-gray-900",
    },
  ];

  const handleLinkClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <img
            src="/linkslogo.png"
            alt="Oguzhan LLC Logo"
            className="w-80 h-48 mx-auto object-contain shadow-md bg-white"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Oguzhan LLC</h1>
            <p className="text-gray-600 mt-1">Connect with us</p>
          </div>
        </div>

        {/* Links */}
        <div className="space-y-3">
          {links.map((link, index) => (
            <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <Button
                  variant="ghost"
                  className={`w-full h-16 ${link.color} text-white hover:text-white border-0 rounded-lg flex items-center justify-between px-6`}
                  onClick={() => handleLinkClick(link.url)}
                >
                  <div className="flex items-center space-x-3">
                    <link.icon className="w-5 h-5" />
                    <span className="font-medium">{link.title}</span>
                  </div>
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center pt-6">
          <p className="text-sm text-gray-500">
            © 2025 Oguzhan LLC. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LinkTree; 