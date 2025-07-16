import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Download, MapPin, Clock, Users, Heart } from "lucide-react";
import GeneralApplicationModal from "@/components/GeneralApplicationModal";
import JobApplicationModal from "@/components/JobApplicationModal";

const WorkWithUs = () => {
  const handleDownloadJD = (fileUrl: string) => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileUrl.split("/").pop() || "JD.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openPositions = [
    {
      title: "Graphic Designer",
      type: "Full-time",
      mode: "Hybrid",
      location: "Mumbai",
      experience: "3+ years experience in branding, visualizing, and digital design",
      description: "We're looking for a creative graphic designer who can create visuals based on briefs.",
      jdFile: "/jds/Graphic_Designer.pdf"
    },
    {
      title: "Recruiter",
      type: "Full-time",
      mode: "Hybrid",
      location: "Mumbai",
      experience: "0 - 1 Year experience in recruitment",
      description: "We are seeking someone to find, attract, and hire qualified candidates.",
      jdFile: "/jds/Recruiter.pdf"
    },
  ];

  const benefits = [
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work with a team of creative professionals who share your passion for great work"
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "We believe great work comes from happy people. Flexible hours and a supportive environment"
    },
    {
      icon: Clock,
      title: "Growth Opportunities",
      description: "Learn from industry experts and grow your skills with diverse projects and clients"
    },
    {
      icon: MapPin,
      title: "Mumbai Location",
      description: "Work from the heart of India's advertising industry with great connectivity and amenities"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Work <span className="text-primary">With Us</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Be part of a fresh, innovative agency that's shaping the future of digital advertising.
              <br />
              We're looking for creative minds who share our passion for excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Join Media Pundit?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We offer more than just a job – we provide an opportunity to grow,
                create, and make a meaningful impact in the digital advertising world.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-card border rounded-lg p-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Current Openings</h2>

            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <div key={index} className="bg-card border rounded-lg p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-2xl font-bold mb-2">{position.title}</h3>

                      <div className="flex items-center flex-wrap gap-2 text-sm text-muted-foreground mb-2">
                        <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                          {position.type}
                        </span>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                          {position.mode}
                        </span>
                        <span className="flex items-center text-xs">
                          <MapPin className="h-4 w-4 mr-1" />
                          {position.location}
                        </span>
                      </div>

                      <p className="text-sm text-muted-foreground mb-1">
                        {position.experience}
                      </p>
                      <p className="text-sm font-medium">{position.description}</p>
                    </div>

                    <div className="flex flex-col gap-8">
                      <Button
                        onClick={() => handleDownloadJD(position.jdFile)}
                        variant="outline"
                        size="sm"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download JD
                      </Button>

                      <JobApplicationModal role={position.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Application Process</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  1
                </div>
                <h3 className="font-semibold mb-2">Apply</h3>
                <p className="text-sm text-muted-foreground">
                  Submit your application with portfolio and resume
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  2
                </div>
                <h3 className="font-semibold mb-2">Interview</h3>
                <p className="text-sm text-muted-foreground">
                  Initial screening followed by detailed discussion
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  3
                </div>
                <h3 className="font-semibold mb-2">Welcome</h3>
                <p className="text-sm text-muted-foreground">
                  Join our team and start creating amazing work
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* General Application */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Don't see the right fit?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We're always looking for talented individuals. Send us your portfolio
              and tell us how you can contribute to our team.
            </p>
            <GeneralApplicationModal />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WorkWithUs;