import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  BookOpen,
  GraduationCap,
  Heart,
  MapPin,
  Phone,
  Shield,
  Star,
  Target,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

const qualifications = [
  { label: "MCA", desc: "Master of Computer Applications" },
  { label: "BCA", desc: "Bachelor of Computer Applications" },
  { label: "Ethical Hacking", desc: "Certified Ethical Hacker" },
];

const values = [
  {
    icon: Target,
    title: "Job-Oriented Focus",
    desc: "Every course is designed with employment outcomes in mind. We teach what employers actually need.",
  },
  {
    icon: Heart,
    title: "Student-First Approach",
    desc: "Personal attention, small batch sizes, and a supportive environment where every student can succeed.",
  },
  {
    icon: Shield,
    title: "Quality Education",
    desc: "MCA-qualified faculty, up-to-date curriculum, and certified programs recognized by government and industry.",
  },
  {
    icon: Star,
    title: "Community Impact",
    desc: "Empowering the youth of Nimbahera and surrounding areas with digital skills for a better future.",
  },
];

const milestones = [
  { year: "2020", event: "AI Academy founded in Nimbahera, Rajasthan" },
  { year: "2021", event: "Became authorized RSCIT exam center" },
  { year: "2022", event: "Launched Tally Prime and AI Basics programs" },
  { year: "2023", event: "Trained 300+ students, 95% placement rate" },
  {
    year: "2024",
    event: "Expanded to evening batches for working professionals",
  },
  { year: "2025", event: "500+ students trained and counting" },
];

export default function AboutPage() {
  return (
    <div data-ocid="about.page">
      {/* Hero */}
      <section
        className="py-16 bg-gradient-to-b from-primary/5 to-background"
        data-ocid="about.hero_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Our Story
            </Badge>
            <h1 className="font-display font-bold text-5xl text-foreground mb-4">
              About AI Academy
            </h1>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
              A passionate mission to bring quality computer education to
              Nimbahera — empowering every student with practical skills for
              real-world careers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission + Founder */}
      <section
        className="py-16 bg-background"
        data-ocid="about.founder_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Founder Card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              data-ocid="about.founder_card"
            >
              <Card className="bg-card border-border overflow-hidden hover:shadow-elevated transition-smooth">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src="/assets/generated/founder-sahil.dim_400x400.png"
                      alt="Sahil Yusufzai — Co-Founder, AI Academy"
                      className="w-full aspect-square object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h2 className="font-display font-bold text-2xl">
                        Sahil Yusufzai
                      </h2>
                      <p className="text-white/80 text-sm">
                        Co-Founder & Head Instructor
                      </p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2">
                      {qualifications.map((q) => (
                        <div key={q.label} className="text-center">
                          <Badge className="bg-primary/10 text-primary border-primary/20 text-xs px-3">
                            {q.label}
                          </Badge>
                        </div>
                      ))}
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                      With qualifications in MCA, BCA, and Ethical Hacking,
                      Sahil brings deep technical expertise paired with a
                      genuine passion for education. His mission is to make
                      quality computer education accessible to every student in
                      Nimbahera.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Mission Text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
                Our Mission
              </Badge>
              <h2 className="font-display font-bold text-4xl text-foreground mb-4 leading-tight">
                "To Build Future for{" "}
                <span className="text-gradient-primary">Better Growth"</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                AI Academy was founded with a single conviction — every student
                in Nimbahera deserves access to world-class computer education
                that actually leads to employment.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We are not just a training center. We are a launchpad for
                careers. Our practical approach means students leave our courses
                ready to work on day one — not just with theoretical knowledge
                but with real, hands-on experience.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                From RSCIT certification for government jobs to AI skills for
                the digital economy, we equip our students with exactly what the
                current job market demands.
              </p>

              {/* Address */}
              <div
                className="bg-muted/40 rounded-xl p-5 border border-border"
                data-ocid="about.address_card"
              >
                <h3 className="font-display font-semibold text-foreground mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Find Us
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  AI Academy, Ishakabad, Nimbahera,
                  <br />
                  Chittorgarh – 312601, Rajasthan, India
                </p>
                <a
                  href="tel:7734922886"
                  className="flex items-center gap-2 text-sm text-primary font-medium hover:underline"
                  data-ocid="about.phone_link"
                >
                  <Phone className="w-4 h-4" />
                  +91 77349 22886
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted/30" data-ocid="about.values_section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">
              What We Stand For
            </Badge>
            <h2 className="font-display font-bold text-4xl text-foreground mb-4">
              Our Values
            </h2>
          </motion.div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            data-ocid="about.values_list"
          >
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                data-ocid={`about.value_card.${i + 1}`}
              >
                <Card className="h-full bg-card border-border hover:shadow-elevated transition-smooth text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 mx-auto gradient-primary rounded-xl flex items-center justify-center mb-4">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-display font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        className="py-16 bg-background"
        data-ocid="about.timeline_section"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">
              Our Journey
            </Badge>
            <h2 className="font-display font-bold text-4xl text-foreground mb-4">
              Milestones
            </h2>
          </motion.div>

          <div className="relative" data-ocid="about.milestones_list">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform -translate-x-1/2" />
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex items-start gap-4 mb-8 pl-12 md:pl-0 ${i % 2 === 0 ? "md:flex-row-reverse md:text-right" : "md:flex-row"}`}
                data-ocid={`about.milestone.${i + 1}`}
              >
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 gradient-primary rounded-full flex items-center justify-center z-10 shadow-subtle flex-shrink-0">
                  <GraduationCap className="w-4 h-4 text-white" />
                </div>
                <div
                  className={`md:w-[45%] ${i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"} bg-card border border-border rounded-xl p-4 shadow-subtle`}
                >
                  <Badge className="mb-2 bg-primary/10 text-primary border-primary/20 text-xs font-display font-bold">
                    {m.year}
                  </Badge>
                  <p className="text-sm text-muted-foreground">{m.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-12 bg-muted/30" data-ocid="about.stats_section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Users, value: "500+", label: "Students Trained" },
              { icon: BookOpen, value: "4", label: "Expert Courses" },
              { icon: Star, value: "95%", label: "Pass Rate" },
              {
                icon: GraduationCap,
                value: "3+",
                label: "Years of Excellence",
              },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border shadow-subtle"
                data-ocid={`about.stat.${i + 1}`}
              >
                <div className="w-10 h-10 mx-auto gradient-primary rounded-lg flex items-center justify-center mb-3">
                  <stat.icon className="w-5 h-5 text-white" />
                </div>
                <div className="font-display font-bold text-3xl text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background" data-ocid="about.cta_section">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-3xl text-foreground mb-4">
              Join the AI Academy Family
            </h2>
            <p className="text-muted-foreground mb-6">
              Become part of our growing community of 500+ students who have
              transformed their careers. Your journey starts here, in Nimbahera.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                asChild
                size="lg"
                className="gradient-accent text-white border-0 hover:opacity-90 font-semibold"
                data-ocid="about.cta_enroll_button"
              >
                <a
                  href="https://wa.me/917734922886?text=Hi%2C%20I%20want%20to%20enroll%20at%20AI%20Academy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start Learning Today
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="font-semibold border-primary text-primary hover:bg-primary/5"
                data-ocid="about.cta_courses_button"
              >
                <Link to="/courses">View Courses</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
