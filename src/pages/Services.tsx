import Layout from "@/components/Layout";
import {
  Palette,
  PenTool,
  Monitor,
  Video,
  Users,
  Globe,
  Camera,
  TrendingUp,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Branding & Identity Design",
      description:
        "Complete brand identity solutions that make your brand memorable and impactful.",
      features: [
        "Logo Design",
        "Brand Voice",
        "Packaging Design",
        "Visual Language",
        "Brand Guidelines",
      ],
    },
    {
      icon: PenTool,
      title: "Content Creation",
      description:
        "Compelling content that tells your story and engages your audience across all platforms.",
      features: [
        "Copywriting",
        "Creative Content",
        "Blog Writing",
        "Brand Decks",
        "Social Media Kits",
      ],
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description:
        "Data-driven digital marketing strategies that drive growth and deliver measurable results.",
      features: [
        "Paid Performance Campaigns",
        "Lead Generation",
        "Media Planning",
        "Analytics & Reporting",
      ],
    },
    {
      icon: Monitor,
      title: "Creative Design",
      description:
        "Eye-catching designs that capture attention and communicate your message effectively.",
      features: [
        "Social Media Creatives",
        "Digital Ads",
        "Print Collaterals",
        "Presentations",
        "Brand Assets",
      ],
    },
    {
      icon: Users,
      title: "Social Media Management",
      description:
        "Complete social media solutions that build communities and drive engagement.",
      features: [
        "Social Strategy",
        "Content Planning",
        "Community Management",
        "Analytics",
        "Influencer Outreach",
      ],
    },
    {
      icon: Globe,
      title: "Website & App Development",
      description:
        "Modern, responsive websites and apps that deliver exceptional user experiences.",
      features: [
        "UI/UX Design",
        "Mobile-First Design",
        "Low-Code Development",
        "E-commerce Solutions",
      ],
    },
    {
      icon: Video,
      title: "Video Production",
      description:
        "Professional video content that tells your story and captivates your audience.",
      features: [
        "Brand Films",
        "Ad Films",
        "Social Media Reels",
        "Product Explainers",
        "Corporate Videos",
      ],
    },
    {
      icon: Camera,
      title: "Influencer Marketing",
      description:
        "End-to-end influencer campaigns that amplify your brand's reach and authenticity.",
      features: [
        "Creator Strategy",
        "Campaign Management",
        "Influencer Relations",
        "Content Collaboration",
      ],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              If it's branded, built, launched, or seen, chances are, we do it. Comprehensive solutions for all your digital marketing needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card border rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>

                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="text-sm text-muted-foreground flex items-center"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Our Process
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {["Discover", "Strategize", "Create", "Optimize"].map((step, i) => (
                <div className="text-center" key={i}>
                  <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {i + 1}
                  </div>
                  <h3 className="font-semibold mb-2">{step}</h3>
                  <p className="text-sm text-muted-foreground">
                    {[
                      "We dive deep into your brand, audience, and objectives",
                      "We create data-driven strategies tailored to your goals",
                      "We bring ideas to life with compelling creative execution",
                      "We measure, analyze, and optimize for maximum impact",
                    ][i]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to get started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your brand look sharp, sound smart, and sell better.
          </p>
          <a
            href="/project-brief"
            className="bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
          >
            Start a Project
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Services;