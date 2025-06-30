
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import MobileNav from "@/components/MobileNav";
import { 
  ArrowRight, 
  CheckCircle, 
  Mail, 
  Phone, 
  MapPin, 
  Users, 
  Briefcase, 
  Star,
  Globe,
  Code,
  Smartphone,
  Palette,
  Lock
} from "lucide-react";

const Index = () => {
  const [contactForm, setContactForm] = useState({
    fullName: "",
    email: "",
    mobile: "",
    city: "",
    message: ""
  });
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const { toast } = useToast();

  // Sample projects data (will be replaced with API calls)
  const projects = [
    {
      id: 1,
      name: "E-Commerce Platform",
      description: "A full-featured online shopping platform with advanced filtering, payment integration, and real-time inventory management.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=450&h=350&fit=crop",
      category: "Web Development"
    },
    {
      id: 2,
      name: "Task Management App",
      description: "Collaborative project management tool with team collaboration features, deadline tracking, and progress analytics.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=450&h=350&fit=crop",
      category: "Mobile App"
    },
    {
      id: 3,
      name: "Healthcare Dashboard",
      description: "Comprehensive patient management system with appointment scheduling, medical records, and analytics dashboard.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=450&h=350&fit=crop",
      category: "Dashboard"
    },
    {
      id: 4,
      name: "Learning Management System",
      description: "Interactive online learning platform with course creation tools, progress tracking, and student engagement features.",
      image: "https://images.unsplash.com/photo-1584697964194-1b6f8c2d3e5f?w=450&h=350&fit=crop",
      category: "Education"
    }
  ];

  // Sample clients data (will be replaced with API calls)
  const clients = [
    {
      id: 1,
      name: "Sarah Johnson",
      designation: "CEO, TechStart Inc",
      description: "Outstanding work quality and exceptional attention to detail. The team delivered beyond our expectations and helped transform our digital presence.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Michael Chen",
      designation: "CTO, Innovation Labs",
      description: "Professional, efficient, and incredibly skilled. They understood our complex requirements and delivered a solution that exceeded all benchmarks.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      designation: "Product Manager, GrowthCo",
      description: "The level of expertise and commitment shown was remarkable. Our project was completed on time with exceptional quality and attention to user experience.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Replace with actual API call
    console.log("Contact form submitted:", contactForm);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setContactForm({
      fullName: "",
      email: "",
      mobile: "",
      city: "",
      message: ""
    });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Replace with actual API call
    console.log("Newsletter subscription:", newsletterEmail);
    toast({
      title: "Subscribed!",
      description: "You've successfully subscribed to our newsletter.",
    });
    setNewsletterEmail("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"></div>
              <h1 className="text-xl font-bold text-gray-900">DevStack</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
              <a href="#clients" className="text-gray-600 hover:text-blue-600 transition-colors">Clients</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.location.href = "/admin"}
                className="ml-4"
              >
                <Lock className="mr-2 h-4 w-4" />
                Admin Panel
              </Button>
            </nav>
            <MobileNav />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 gradient-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Building Digital
              <span className="text-primary block">Excellence</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Full-stack development solutions that transform ideas into powerful, scalable applications. 
              From concept to deployment, we deliver exceptional digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-primary">
                View Our Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                <Phone className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-slide-up">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="animate-slide-up">
              <div className="text-3xl font-bold text-primary mb-2">30+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="animate-slide-up">
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="animate-slide-up">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Projects Section */}
      <section id="projects" className="py-20 gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our portfolio of innovative solutions that have helped businesses transform their digital presence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="hover-lift overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 gradient-primary">
                    {project.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.name}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full group">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Happy Clients Section */}
      <section id="clients" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Happy Clients</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clients.map((client) => (
              <Card key={client.id} className="hover-lift text-center">
                <CardHeader>
                  <div className="mx-auto mb-4">
                    <img 
                      src={client.image} 
                      alt={client.name}
                      className="w-20 h-20 rounded-full object-cover mx-auto"
                    />
                  </div>
                  <CardTitle className="text-lg">{client.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold">
                    {client.designation}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic leading-relaxed">
                    "{client.description}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive development services to bring your vision to life
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover-lift text-center">
              <CardHeader>
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Web Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Custom web applications built with modern frameworks</p>
              </CardContent>
            </Card>
            <Card className="hover-lift text-center">
              <CardHeader>
                <Smartphone className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Mobile Apps</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Native and cross-platform mobile applications</p>
              </CardContent>
            </Card>
            <Card className="hover-lift text-center">
              <CardHeader>
                <Code className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Backend Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Scalable APIs and server-side solutions</p>
              </CardContent>
            </Card>
            <Card className="hover-lift text-center">
              <CardHeader>
                <Palette className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>UI/UX Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">User-centered design and interface development</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to start your next project? Let's discuss how we can help bring your ideas to life
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input
                          id="fullName"
                          value={contactForm.fullName}
                          onChange={(e) => setContactForm({...contactForm, fullName: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={contactForm.email}
                          onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="mobile">Mobile Number</Label>
                        <Input
                          id="mobile"
                          value={contactForm.mobile}
                          onChange={(e) => setContactForm({...contactForm, mobile: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          value={contactForm.city}
                          onChange={(e) => setContactForm({...contactForm, city: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        rows={4}
                        value={contactForm.message}
                        onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                        placeholder="Tell us about your project..."
                      />
                    </div>
                    <Button type="submit" className="w-full gradient-primary">
                      Send Message
                      <Mail className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-8">
              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>contact@devstackpro.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>San Francisco, CA</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle>Newsletter Subscription</CardTitle>
                  <CardDescription>
                    Stay updated with our latest projects and tech insights
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="newsletter-email">Email Address</Label>
                      <Input
                        id="newsletter-email"
                        type="email"
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full gradient-primary">
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Subscribe
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">DevStack Pro</h3>
              <p className="text-gray-400">
                Building the future of web development, one project at a time.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Web Development</li>
                <li>Mobile Apps</li>
                <li>Backend Systems</li>
                <li>UI/UX Design</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Portfolio</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>LinkedIn</li>
                <li>Twitter</li>
                <li>GitHub</li>
                <li>Dribbble</li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-gray-700" />
          <div className="text-center text-gray-400">
            <p>&copy; 2024 DevStack Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
