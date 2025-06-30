import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { 
  Plus,
  Edit,
  Trash2,
  Users,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Image as ImageIcon,
  BarChart3,
  Eye
} from "lucide-react";

interface AdminProps {
  onLogout?: () => void;
}

const Admin = ({ onLogout }: AdminProps) => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("overview");

  // Sample data - in real app, this would come from API
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "E-Commerce Platform",
      description: "A full-featured online shopping platform with advanced filtering and payment integration.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=450&h=350&fit=crop",
      category: "Web Development"
    },
    {
      id: 2,
      name: "Task Management App",
      description: "Collaborative project management tool with team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=450&h=350&fit=crop",
      category: "Mobile App"
    }
  ]);

  const [clients, setClients] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      designation: "CEO, TechStart Inc",
      description: "Outstanding work quality and exceptional attention to detail.",
      image: "https://unsplash.com/photos/person-sitting-while-using-laptop-computer-and-green-stethoscope-near-NFvdKIhxYlU"
    },
    {
      id: 2,
      name: "Michael Chen",
      designation: "CTO, Innovation Labs",
      description: "Professional, efficient, and incredibly skilled.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    }
  ]);

  const [contactSubmissions] = useState([
    {
      id: 1,
      fullName: "John Doe",
      email: "john@example.com",
      mobile: "+1234567890",
      city: "New York",
      message: "Interested in web development services",
      submittedAt: "2024-01-15 10:30:00"
    },
    {
      id: 2,
      fullName: "Jane Smith",
      email: "jane@example.com",
      mobile: "+1234567891",
      city: "Los Angeles",
      message: "Need help with mobile app development",
      submittedAt: "2024-01-14 14:20:00"
    }
  ]);

  const [newsletterSubscriptions] = useState([
    {
      id: 1,
      email: "subscriber1@example.com",
      subscribedAt: "2024-01-15 09:15:00"
    },
    {
      id: 2,
      email: "subscriber2@example.com",
      subscribedAt: "2024-01-14 16:45:00"
    },
    {
      id: 3,
      email: "subscriber3@example.com",
      subscribedAt: "2024-01-13 11:30:00"
    }
  ]);

  const [projectForm, setProjectForm] = useState({
    name: "",
    description: "",
    image: "",
    category: ""
  });

  const [clientForm, setClientForm] = useState({
    name: "",
    designation: "",
    description: "",
    image: ""
  });

  const [editingProject, setEditingProject] = useState<any>(null);
  const [editingClient, setEditingClient] = useState<any>(null);

  const handleAddProject = () => {
    if (!projectForm.name || !projectForm.description) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    const newProject = {
      id: projects.length + 1,
      ...projectForm
    };

    setProjects([...projects, newProject]);
    setProjectForm({ name: "", description: "", image: "", category: "" });
    toast({
      title: "Success",
      description: "Project added successfully"
    });
  };

  const handleEditProject = (project: any) => {
    setEditingProject(project);
    setProjectForm({
      name: project.name,
      description: project.description,
      image: project.image,
      category: project.category
    });
  };

  const handleUpdateProject = () => {
    if (!editingProject) return;

    const updatedProjects = projects.map(p => 
      p.id === editingProject.id 
        ? { ...editingProject, ...projectForm }
        : p
    );

    setProjects(updatedProjects);
    setEditingProject(null);
    setProjectForm({ name: "", description: "", image: "", category: "" });
    toast({
      title: "Success",
      description: "Project updated successfully"
    });
  };

  const handleDeleteProject = (id: number) => {
    setProjects(projects.filter(p => p.id !== id));
    toast({
      title: "Success",
      description: "Project deleted successfully"
    });
  };

  const handleAddClient = () => {
    if (!clientForm.name || !clientForm.designation) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    const newClient = {
      id: clients.length + 1,
      ...clientForm
    };

    setClients([...clients, newClient]);
    setClientForm({ name: "", designation: "", description: "", image: "" });
    toast({
      title: "Success",
      description: "Client added successfully"
    });
  };

  const handleEditClient = (client: any) => {
    setEditingClient(client);
    setClientForm({
      name: client.name,
      designation: client.designation,
      description: client.description,
      image: client.image
    });
  };

  const handleUpdateClient = () => {
    if (!editingClient) return;

    const updatedClients = clients.map(c => 
      c.id === editingClient.id 
        ? { ...editingClient, ...clientForm }
        : c
    );

    setClients(updatedClients);
    setEditingClient(null);
    setClientForm({ name: "", designation: "", description: "", image: "" });
    toast({
      title: "Success",
      description: "Client updated successfully"
    });
  };

  const handleDeleteClient = (id: number) => {
    setClients(clients.filter(c => c.id !== id));
    toast({
      title: "Success",
      description: "Client deleted successfully"
    });
  };

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600">Manage your projects, clients, and submissions</p>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" onClick={() => window.location.href = "/"}>
                <Eye className="mr-2 h-4 w-4" />
                View Site
              </Button>
              {onLogout && (
                <Button variant="outline" onClick={handleLogout}>
                  Logout
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="clients">Clients</TabsTrigger>
            <TabsTrigger value="contacts">Contacts</TabsTrigger>
            <TabsTrigger value="newsletter">Newsletter</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{projects.length}</div>
                  <p className="text-xs text-muted-foreground">Active projects</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Happy Clients</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{clients.length}</div>
                  <p className="text-xs text-muted-foreground">Client testimonials</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Contact Submissions</CardTitle>
                  <Mail className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{contactSubmissions.length}</div>
                  <p className="text-xs text-muted-foreground">New inquiries</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Newsletter Subscribers</CardTitle>
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{newsletterSubscriptions.length}</div>
                  <p className="text-xs text-muted-foreground">Active subscribers</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Contact Submissions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {contactSubmissions.slice(0, 3).map((contact) => (
                      <div key={contact.id} className="flex items-center space-x-4">
                        <div className="flex-1">
                          <p className="font-medium">{contact.fullName}</p>
                          <p className="text-sm text-muted-foreground">{contact.email}</p>
                        </div>
                        <Badge variant="secondary">{contact.city}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Newsletter Subscriptions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {newsletterSubscriptions.slice(0, 3).map((sub) => (
                      <div key={sub.id} className="flex items-center space-x-4">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <div className="flex-1">
                          <p className="font-medium">{sub.email}</p>
                          <p className="text-sm text-muted-foreground">{sub.subscribedAt}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Project Management</CardTitle>
                    <CardDescription>Add, edit, or remove projects from your portfolio</CardDescription>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>
                        <Plus className="mr-2 h-4 w-4" />
                        Add Project
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle>{editingProject ? "Edit Project" : "Add New Project"}</DialogTitle>
                        <DialogDescription>
                          {editingProject ? "Update project information" : "Enter project details to add to your portfolio"}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="project-name">Project Name</Label>
                          <Input
                            id="project-name"
                            value={projectForm.name}
                            onChange={(e) => setProjectForm({...projectForm, name: e.target.value})}
                            placeholder="Enter project name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="project-category">Category</Label>
                          <Input
                            id="project-category"
                            value={projectForm.category}
                            onChange={(e) => setProjectForm({...projectForm, category: e.target.value})}
                            placeholder="e.g., Web Development, Mobile App"
                          />
                        </div>
                        <div>
                          <Label htmlFor="project-image">Image URL</Label>
                          <Input
                            id="project-image"
                            value={projectForm.image}
                            onChange={(e) => setProjectForm({...projectForm, image: e.target.value})}
                            placeholder="Enter image URL"
                          />
                        </div>
                        <div>
                          <Label htmlFor="project-description">Description</Label>
                          <Textarea
                            id="project-description"
                            value={projectForm.description}
                            onChange={(e) => setProjectForm({...projectForm, description: e.target.value})}
                            placeholder="Enter project description"
                            rows={3}
                          />
                        </div>
                        <Button 
                          onClick={editingProject ? handleUpdateProject : handleAddProject}
                          className="w-full"
                        >
                          {editingProject ? "Update Project" : "Add Project"}
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((project) => (
                    <Card key={project.id} className="overflow-hidden">
                      <div className="relative">
                        <img 
                          src={project.image} 
                          alt={project.name}
                          className="w-full h-48 object-cover"
                        />
                        <Badge className="absolute top-2 left-2">
                          {project.category}
                        </Badge>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg">{project.name}</CardTitle>
                        <CardDescription className="line-clamp-2">
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex space-x-2">
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handleEditProject(project)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handleDeleteProject(project.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Clients Tab */}
          <TabsContent value="clients" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Client Management</CardTitle>
                    <CardDescription>Manage client testimonials and reviews</CardDescription>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>
                        <Plus className="mr-2 h-4 w-4" />
                        Add Client
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle>{editingClient ? "Edit Client" : "Add New Client"}</DialogTitle>
                        <DialogDescription>
                          {editingClient ? "Update client information" : "Enter client details and testimonial"}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="client-name">Client Name</Label>
                          <Input
                            id="client-name"
                            value={clientForm.name}
                            onChange={(e) => setClientForm({...clientForm, name: e.target.value})}
                            placeholder="Enter client name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="client-designation">Designation</Label>
                          <Input
                            id="client-designation"
                            value={clientForm.designation}
                            onChange={(e) => setClientForm({...clientForm, designation: e.target.value})}
                            placeholder="e.g., CEO, Company Name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="client-image">Image URL</Label>
                          <Input
                            id="client-image"
                            value={clientForm.image}
                            onChange={(e) => setClientForm({...clientForm, image: e.target.value})}
                            placeholder="Enter image URL"
                          />
                        </div>
                        <div>
                          <Label htmlFor="client-description">Testimonial</Label>
                          <Textarea
                            id="client-description"
                            value={clientForm.description}
                            onChange={(e) => setClientForm({...clientForm, description: e.target.value})}
                            placeholder="Enter client testimonial"
                            rows={3}
                          />
                        </div>
                        <Button 
                          onClick={editingClient ? handleUpdateClient : handleAddClient}
                          className="w-full"
                        >
                          {editingClient ? "Update Client" : "Add Client"}
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {clients.map((client) => (
                    <Card key={client.id}>
                      <CardHeader className="text-center">
                        <img 
                          src={client.image} 
                          alt={client.name}
                          className="w-16 h-16 rounded-full object-cover mx-auto mb-4"
                        />
                        <CardTitle className="text-lg">{client.name}</CardTitle>
                        <CardDescription className="text-primary font-semibold">
                          {client.designation}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                          "{client.description}"
                        </p>
                        <div className="flex space-x-2">
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handleEditClient(client)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handleDeleteClient(client.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Contact Submissions Tab */}
          <TabsContent value="contacts" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Form Submissions</CardTitle>
                <CardDescription>View and manage contact form submissions</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableCaption>A list of all contact form submissions.</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>City</TableHead>
                      <TableHead>Message</TableHead>
                      <TableHead>Submitted</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {contactSubmissions.map((contact) => (
                      <TableRow key={contact.id}>
                        <TableCell className="font-medium">{contact.fullName}</TableCell>
                        <TableCell>{contact.email}</TableCell>
                        <TableCell>{contact.mobile}</TableCell>
                        <TableCell>{contact.city}</TableCell>
                        <TableCell className="max-w-xs truncate">{contact.message}</TableCell>
                        <TableCell>{contact.submittedAt}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Newsletter Tab */}
          <TabsContent value="newsletter" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Newsletter Subscriptions</CardTitle>
                <CardDescription>Manage your newsletter subscriber list</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableCaption>A list of all newsletter subscribers.</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Email Address</TableHead>
                      <TableHead>Subscribed Date</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {newsletterSubscriptions.map((subscription) => (
                      <TableRow key={subscription.id}>
                        <TableCell className="font-medium">{subscription.email}</TableCell>
                        <TableCell>{subscription.subscribedAt}</TableCell>
                        <TableCell>
                          <Badge variant="secondary">Active</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
