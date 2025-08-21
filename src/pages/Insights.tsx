import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, User, ArrowRight, TrendingUp, Shield, Brain } from "lucide-react";

const Insights = () => {
  const featuredArticles = [
    {
      title: "The Enterprise AI Revolution: 5 Critical Success Factors",
      excerpt: "Learn why 67% of AI projects fail and the proven strategies that ensure enterprise success.",
      category: "AI Strategy",
      readTime: "8 min read",
      date: "December 15, 2024",
      featured: true
    },
    {
      title: "Zero Trust Security in the Age of Remote Work",
      excerpt: "How modern enterprises are reimagining cybersecurity for distributed teams.",
      category: "Cybersecurity",
      readTime: "6 min read", 
      date: "December 10, 2024",
      featured: true
    },
    {
      title: "ROI Calculator: Measuring Automation Success",
      excerpt: "A practical framework for quantifying the business impact of process automation.",
      category: "Automation",
      readTime: "5 min read",
      date: "December 5, 2024",
      featured: true
    }
  ];

  const articles = [
    {
      title: "Building Resilient AI Systems for Mission-Critical Operations",
      excerpt: "Best practices for ensuring AI reliability when failure is not an option.",
      category: "AI Strategy",
      readTime: "7 min read",
      date: "November 28, 2024"
    },
    {
      title: "Cybersecurity Compliance: HIPAA, SOC 2, and Beyond",
      excerpt: "Navigate complex compliance requirements with confidence.",
      category: "Compliance",
      readTime: "9 min read", 
      date: "November 20, 2024"
    },
    {
      title: "The Hidden Costs of Manual Processes",
      excerpt: "Calculate the true cost of inefficiency in your organization.",
      category: "Automation",
      readTime: "4 min read",
      date: "November 15, 2024"
    },
    {
      title: "Incident Response in the AI Era",
      excerpt: "How machine learning is transforming cybersecurity response times.",
      category: "Cybersecurity",
      readTime: "6 min read",
      date: "November 10, 2024"
    },
    {
      title: "Enterprise Data Strategy: From Chaos to Competitive Advantage",
      excerpt: "Transform your data from liability to strategic asset.",
      category: "Data Strategy",
      readTime: "8 min read",
      date: "November 5, 2024"
    },
    {
      title: "Cloud Security Best Practices for Enterprise Workloads",
      excerpt: "Secure your cloud infrastructure without sacrificing performance.",
      category: "Cloud Security",
      readTime: "7 min read",
      date: "October 30, 2024"
    }
  ];

  const categories = [
    { name: "AI Strategy", icon: Brain, count: 8 },
    { name: "Cybersecurity", icon: Shield, count: 12 },
    { name: "Automation", icon: TrendingUp, count: 6 },
    { name: "Compliance", icon: Shield, count: 4 },
    { name: "Data Strategy", icon: Brain, count: 3 }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-6">
                Enterprise <span className="text-accent">Insights</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto font-body">
                Stay ahead of the curve with actionable insights on AI, cybersecurity, 
                and automation from our enterprise experts.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                Featured Articles
              </h2>
              <p className="text-muted-foreground font-body">
                Our most impactful insights for enterprise leaders
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {featuredArticles.map((article, index) => (
                <Card key={index} className="group hover:shadow-card transition-smooth border-border hover:border-accent/50">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary" className="font-body">
                        {article.category}
                      </Badge>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-xl font-heading group-hover:text-accent transition-smooth">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground font-body mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground font-body">
                        {article.date}
                      </span>
                      <Button variant="ghost" size="sm" className="group/btn">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Articles */}
              <div className="lg:col-span-3">
                <h2 className="text-2xl font-heading font-bold text-foreground mb-8">
                  Latest Insights
                </h2>
                <div className="space-y-6">
                  {articles.map((article, index) => (
                    <Card key={index} className="group hover:shadow-card transition-smooth border-border hover:border-accent/50">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-4 mb-3">
                              <Badge variant="secondary" className="font-body">
                                {article.category}
                              </Badge>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Clock className="w-4 h-4" />
                                {article.readTime}
                              </div>
                            </div>
                            <h3 className="text-xl font-heading font-semibold text-foreground mb-2 group-hover:text-accent transition-smooth">
                              {article.title}
                            </h3>
                            <p className="text-muted-foreground font-body mb-3">
                              {article.excerpt}
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-muted-foreground font-body">
                                {article.date}
                              </span>
                              <Button variant="ghost" size="sm" className="group/btn">
                                Read Article
                                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="text-center mt-12">
                  <Button variant="outline" size="lg">
                    Load More Articles
                  </Button>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <Card className="mb-8 border-border">
                  <CardHeader>
                    <CardTitle className="font-heading text-foreground">Categories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {categories.map((category, index) => {
                        const IconComponent = category.icon;
                        return (
                          <div key={index} className="flex items-center justify-between p-2 rounded hover:bg-muted/50 transition-smooth cursor-pointer">
                            <div className="flex items-center gap-3">
                              <IconComponent className="w-4 h-4 text-accent" />
                              <span className="font-body text-foreground">{category.name}</span>
                            </div>
                            <Badge variant="secondary" className="text-xs">
                              {category.count}
                            </Badge>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="font-heading text-foreground">Newsletter</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground font-body text-sm mb-4">
                      Get enterprise insights delivered to your inbox weekly.
                    </p>
                    <div className="space-y-3">
                      <input 
                        type="email" 
                        placeholder="Your email" 
                        className="w-full px-3 py-2 border border-border rounded-md bg-background font-body text-sm"
                      />
                      <Button variant="cta" size="sm" className="w-full">
                        Subscribe
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
              Ready to Put These Insights to Work?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-body">
              Transform insights into action with Zero Hour Group's enterprise solutions.
            </p>
            <Button variant="cta" size="lg">
              Schedule Strategy Session
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Insights;