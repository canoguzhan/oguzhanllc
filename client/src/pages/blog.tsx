import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CalendarIcon, Clock, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Supply Chain Management",
      excerpt: "Discover how emerging technologies like AI, IoT, and blockchain are revolutionizing supply chain management for enhanced efficiency and visibility.",
      author: "Sarah Johnson",
      date: "May 10, 2025",
      readTime: "5 min read",
      imageUrl: "https://images.unsplash.com/photo-1576267423048-15c0040fec78?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Technology"
    },
    {
      id: 2,
      title: "Sustainable Logistics: Reducing Your Carbon Footprint",
      excerpt: "Learn how businesses are implementing eco-friendly logistics practices to reduce environmental impact while maintaining operational efficiency.",
      author: "Michael Chen",
      date: "April 28, 2025",
      readTime: "4 min read",
      imageUrl: "https://images.unsplash.com/photo-1473445215363-2e2e818bf537?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Sustainability"
    },
    {
      id: 3,
      title: "Navigating Global Supply Chain Disruptions",
      excerpt: "Strategies for maintaining business continuity and mitigating risks in the face of increasingly common global supply chain disruptions.",
      author: "Emily Rodriguez",
      date: "April 15, 2025",
      readTime: "6 min read",
      imageUrl: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Risk Management"
    },
    {
      id: 4,
      title: "Last Mile Delivery Innovations",
      excerpt: "Exploring cutting-edge solutions in last mile delivery that are improving customer satisfaction and reducing operational costs.",
      author: "David Wilson",
      date: "March 30, 2025",
      readTime: "5 min read",
      imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Innovation"
    },
    {
      id: 5,
      title: "Optimizing Warehouse Operations with Advanced Analytics",
      excerpt: "How data-driven insights and advanced analytics are transforming warehouse management and inventory optimization.",
      author: "Jennifer Lee",
      date: "March 22, 2025",
      readTime: "4 min read",
      imageUrl: "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Analytics"
    },
    {
      id: 6,
      title: "The Role of AI in Modern Logistics",
      excerpt: "Examining how artificial intelligence is being employed across the logistics industry to enhance decision-making and operational efficiency.",
      author: "Robert Thompson",
      date: "March 10, 2025",
      readTime: "7 min read",
      imageUrl: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Technology"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl leading-tight mb-6 text-white">
              OGUZHAN LLC Blog
            </h1>
            <p className="font-opensans text-lg md:text-xl mb-8 text-white/90">
              Insights, trends, and expert opinions on logistics and supply chain management.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="font-montserrat font-bold text-3xl text-primary mb-4">Latest Articles</h2>
            <p className="font-opensans text-text/80 max-w-3xl">
              Stay updated with the latest trends, insights, and news in the logistics and supply chain industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden shadow-lg hover:shadow-xl transition">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${post.imageUrl})` }}>
                  <div className="h-full w-full flex items-start p-4">
                    <span className="bg-secondary text-white text-sm font-semibold px-3 py-1 rounded">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-montserrat font-bold text-xl text-primary mb-3">
                    {post.title}
                  </h3>
                  <p className="font-opensans text-text/80 mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-sm text-text/60 mb-4">
                    <div className="flex items-center mr-4">
                      <User className="h-4 w-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center mr-4">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <Link href={`/blog/${post.id}`}>
                    <Button variant="link" className="p-0 text-secondary font-montserrat font-semibold hover:text-secondary/80">
                      Read More →
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button className="btn-primary">Load More Articles</Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-montserrat font-bold text-3xl text-primary mb-4">Subscribe to Our Newsletter</h2>
            <p className="font-opensans text-text/80 mb-8">
              Get the latest logistics insights and industry news delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex h-12 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" 
              />
              <Button className="btn-secondary h-12 sm:w-auto whitespace-nowrap">
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white mb-6">Need Logistics Solutions?</h2>
            <p className="font-opensans text-xl text-white/80 mb-8">
              Contact us today for a customized logistics solution that meets your business needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <Button className="btn-secondary">Get a Free Quote</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="bg-white text-primary hover:bg-gray-100">
                  Contact Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;