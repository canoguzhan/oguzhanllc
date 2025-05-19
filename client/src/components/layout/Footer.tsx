import { Link } from "wouter";
import { 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram,
  MapPin,
  Phone,
  Mail,
  Clock
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="font-montserrat font-bold text-2xl mb-6">
              <span className="text-secondary">OGUZHAN</span> LLC
            </div>
            <p className="font-opensans text-white/80 mb-6">
              Global logistics solutions tailored to meet your business needs with efficiency and reliability.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-secondary transition" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-secondary transition" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-secondary transition" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-secondary transition" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-montserrat font-semibold text-xl mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services/freight-shipping" className="font-opensans text-white/80 hover:text-secondary transition">Freight Shipping</Link></li>
              <li><Link href="/services/warehouse-management" className="font-opensans text-white/80 hover:text-secondary transition">Warehouse Management</Link></li>
              <li><Link href="/services/supply-chain" className="font-opensans text-white/80 hover:text-secondary transition">Supply Chain Solutions</Link></li>
              <li><Link href="/services" className="font-opensans text-white/80 hover:text-secondary transition">Customs Clearance</Link></li>
              <li><Link href="/services" className="font-opensans text-white/80 hover:text-secondary transition">Last Mile Delivery</Link></li>
              <li><Link href="/services" className="font-opensans text-white/80 hover:text-secondary transition">Logistics Consulting</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-montserrat font-semibold text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="font-opensans text-white/80 hover:text-secondary transition">Home</Link></li>
              <li><Link href="/services" className="font-opensans text-white/80 hover:text-secondary transition">Services</Link></li>
              <li><Link href="/about" className="font-opensans text-white/80 hover:text-secondary transition">About Us</Link></li>
              <li><Link href="/contact" className="font-opensans text-white/80 hover:text-secondary transition">Contact</Link></li>
              <li><Link href="/blog" className="font-opensans text-white/80 hover:text-secondary transition">Blog</Link></li>
              <li><Link href="/careers" className="font-opensans text-white/80 hover:text-secondary transition">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-montserrat font-semibold text-xl mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mt-1 mr-3 text-secondary flex-shrink-0" />
                <span className="font-opensans text-white/80">123 Logistics Avenue, Business District, New York, NY 10001, USA</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-secondary flex-shrink-0" />
                <span className="font-opensans text-white/80">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-secondary flex-shrink-0" />
                <span className="font-opensans text-white/80">info@oguzhanllc.com</span>
              </li>
              <li className="flex items-center">
                <Clock className="h-5 w-5 mr-3 text-secondary flex-shrink-0" />
                <span className="font-opensans text-white/80">Mon-Fri: 8:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/20 text-center">
          <p className="font-opensans text-white/70">
            &copy; {new Date().getFullYear()} OGUZHAN LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
