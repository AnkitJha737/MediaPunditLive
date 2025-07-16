import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Download, Instagram, Linkedin, Twitter, Facebook } from "lucide-react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Work With Us", href: "/work-with-us" },
    { name: "Contact", href: "/contact" },
  ];

  const handleDownloadProfile = () => {
    const link = document.createElement("a");
    link.href = "/company-profile.pdf";
    link.download = "Media Pundit - Company Profile.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/uploads/Media Pundit Logo PNG.png"
                alt="Media Pundit"
                className="h-12 w-auto"
              />
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === item.href
                      ? "text-primary"
                      : "text-muted-foreground"
                    }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button onClick={handleDownloadProfile} size="sm" className="ml-4">
                <Download className="h-4 w-4 mr-2" />
                Company Profile
              </Button>
            </nav>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === item.href
                        ? "text-primary"
                        : "text-muted-foreground"
                      }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button onClick={handleDownloadProfile} size="sm" className="w-fit">
                  <Download className="h-4 w-4 mr-2" />
                  Company Profile
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-muted/50 border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src="/uploads/f197735d-63e7-4a9f-b2b4-6482c7728446.png"
                  alt="Media Pundit"
                  className="h-8 w-auto"
                />
                <span className="text-xl font-bold">Media Pundit</span>
              </div>
              <p className="text-muted-foreground mb-4">fluent in digital language</p>
              <p className="text-sm text-muted-foreground">
                A full-service creative and advertising agency based in Mumbai, India.
              </p>

              {/* Social Media Icons */}
              <div className="flex gap-4 mt-6">
                <a href="https://www.instagram.com/mediapundit/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary transition" />
                </a>
                <a href="https://www.linkedin.com/company/themediapundit" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition" />
                </a>
                <a href="https://x.com/mediapundit_" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary transition" />
                </a>
                <a href="https://www.facebook.com/themediapundit/" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary transition" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <p className="text-sm text-muted-foreground">Mumbai, India</p>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Media Pundit. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;