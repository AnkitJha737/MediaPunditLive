
import Layout from "@/components/Layout";
import { Calendar, Users, Globe, Award } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-primary">Media Pundit</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We started back in 2017 with a simple mission: to help brands look sharp,
              sound smart, and sell better in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6">
                We're not your typical agency. We operate at the intersection of strategy,
                design, storytelling, and performance, helping brands look sharp, sound smart,
                and sell better.
              </p>
              <p className="text-muted-foreground mb-6">
                From brand films to influencer campaigns, website makeovers to digital performance
                creatives, we've built our reputation on delivering results that matter. Our client
                mix is as diverse as our skillset across all sectors.
              </p>
              <p className="text-muted-foreground">
                We like working with smart tools that help us move faster and better, always
                staying ahead of the curve in this ever-evolving digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold mb-2">2017</div>
              <p className="text-muted-foreground">Founded</p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold mb-2">100+</div>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold mb-2">All</div>
              <p className="text-muted-foreground">Sectors</p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <p className="text-muted-foreground">Projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">Strategy First</h3>
                <p className="text-muted-foreground">
                  Every great campaign starts with sharp strategy. We dive deep into your
                  brand, audience, and objectives to create data-driven strategies that deliver.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Design That Stops Scrolls</h3>
                <p className="text-muted-foreground">
                  In a world of endless content, we create designs that demand attention.
                  Our creative team crafts visuals that not only look good but work hard.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Story-First Content</h3>
                <p className="text-muted-foreground">
                  Every brand has a story. We help you tell yours in a way that resonates
                  with your audience and drives meaningful engagement.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Performance Driven</h3>
                <p className="text-muted-foreground">
                  Beautiful work is meaningless without results. We measure success by
                  your success, tracking performance and optimizing for maximum impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Based in Mumbai</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're proudly based in Mumbai, India, the commercial capital and heart of
            the country's advertising industry. From here, we serve clients across all sectors
            and geographies.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default About;