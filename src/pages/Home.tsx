
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb, Target, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Where{" "}
              <span className="text-primary">Bold Brands</span>
              <br />
              Come To Grow
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A full-service creative and advertising agency operating at the intersection of Strategy, Design, Storytelling, and Performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/services">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              We are not your typical “do ads” Agency
              <br />
              We build brands that stick
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Think of us as your creative co-pilot!
              <br />
              Blending sharp strategy, bold storytelling, and performance-led execution to help brands look sharp, sound smart, and sell better.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Strategy</h3>
              <p className="text-sm text-muted-foreground">
                Sharp, data-driven strategies that deliver results
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Design</h3>
              <p className="text-sm text-muted-foreground">
                Scroll-stopping designs that capture attention
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Storytelling</h3>
              <p className="text-sm text-muted-foreground">
                Story-first content that resonates with audiences
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Performance</h3>
              <p className="text-sm text-muted-foreground">
                Results-driven campaigns that drive growth
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              If it's branded, built, launched, or seen
            </h2>
            <p className="text-xl text-muted-foreground">
              Chances are, we do it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-semibold mb-3">Creative & Design</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Branding, content creation, social media creatives, and visual storytelling
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Brand Identity Design</li>
                <li>• Content Creation</li>
                <li>• Creative Design</li>
              </ul>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-semibold mb-3">Digital & Performance</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Digital marketing, web development, and performance campaigns
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Digital Marketing</li>
                <li>• Website Development</li>
                <li>• Social Media Management</li>
              </ul>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-semibold mb-3">Video & Production</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Brand films, ad campaigns, and engaging video content
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Video Production</li>
                <li>• Brand Films</li>
                <li>• Product Explainers</li>
              </ul>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-semibold mb-3">Influencer & Social</h3>
              <p className="text-muted-foreground text-sm mb-4">
                End-to-end influencer campaigns and social media strategy
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Influencer Marketing</li>
                <li>• Creator Strategy</li>
                <li>• Campaign Management</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Let’s build something worth watching
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Whether you need a launch plan, a new look, or just someone who gets it, Media Pundit is ready when you are
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">Start a Conversation</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/work-with-us">Join Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;