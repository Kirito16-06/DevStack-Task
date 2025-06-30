
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Lock, Menu } from "lucide-react";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "#projects", label: "Projects" },
    { href: "#clients", label: "Clients" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = (href: string) => {
    setOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col space-y-4 mt-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="text-left text-lg font-medium text-gray-600 hover:text-blue-600 transition-colors py-2"
            >
              {item.label}
            </button>
          ))}
          <Button 
            variant="outline" 
            onClick={() => {
              setOpen(false);
              window.location.href = "/admin";
            }}
            className="justify-start mt-6"
          >
            <Lock className="mr-2 h-4 w-4" />
            Admin Panel
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
