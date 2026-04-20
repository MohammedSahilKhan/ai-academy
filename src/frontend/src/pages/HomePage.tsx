import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BookOpen,
  Brain,
  Calculator,
  ChevronRight,
  Clock,
  Monitor,
  Phone,
  Star,
  Target,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

const courses = [
  {
    icon: BookOpen,
    title: "RSCIT",
    desc: "Government-recognized computer literacy program — essential for Rajasthan government jobs and career advancement.",
    tag: "Government Certified",
  },
  {
    icon: Calculator,
    title: "Tally",
    desc: "Master GST accounting, inventory management, and financial reporting with industry-standard Tally software.",
    tag: "Job Ready",
  },
  {
    icon: Monitor,
    title: "Basic Computer",
    desc: "Start from zero — learn MS Office, internet, email, and essential digital skills for everyday professional use.",
    tag: "Beginner Friendly",
  },
  {
    icon: Brain,
    title: "AI Basics",
    desc: "Understand artificial intelligence concepts, ChatGPT, automation tools, and the future of technology careers.",
    tag: "Future Skills",
  },
];

const features = [
  {
    icon: Users,
    title: "Expert Instructors",
    desc: "MCA-qualified faculty with real-world industry experience and personal mentorship.",
  },
  {
    icon: Target,
    title: "Job Placement",
    desc: "Dedicated career support with interview preparation and local job network connections.",
  },
  {
    icon: Award,
    title: "Hands-on Training",
    desc: "Every concept reinforced with practical lab sessions on real software and tools.",
  },
  {
    icon: Clock,
    title: "Flexible Batches",
    desc: "Morning, afternoon, and evening batches to fit your school or work schedule.",
  },
];

const testimonials = [
  {
    text: "AI Academy completely changed my career path. I got a job at a local accounting firm within 2 months of completing the Tally course. The practical training made all the difference.",
    name: "Priya Sharma",
    role: "Tally Graduate",
    avatar: "PS",
  },
  {
    text: "I was nervous about computers but the instructors here are so patient and supportive. Cleared my RSCIT exam on the first attempt and now working in a government office.",
    name: "Rahul Meena",
    role: "RSCIT Graduate",
    avatar: "RM",
  },
  {
    text: "The AI Basics course opened my eyes to so many possibilities. I now use AI tools daily in my work and feel confident about the future of technology.",
    name: "Anjali Verma",
    role: "AI Basics Graduate",
    avatar: "AV",
  },
];

const stats = [
  { value: "500+", label: "Students Trained" },
  { value: "4", label: "Expert Courses" },
  { value: "95%", label: "Pass Rate" },
  { value: "3+", label: "Years Experience" },
];

export default function HomePage() {
  return (
    <div data-ocid="home.page">
      {/* Hero Section */}
      <section
        className="relative min-h-[calc(100vh-4rem)] flex items-center bg-background overflow-hidden"
        data-ocid="home.hero_section"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 pointer-events-none" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Badge
              className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/15"
              data-ocid="home.hero_badge"
            >
              Nimbahera, Rajasthan
            </Badge>
            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-foreground leading-tight mb-6">
              Learn Skills.{" "}
              <span className="text-gradient-primary">Build Career.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
              Job-oriented computer courses with practical training — from RSCIT
              to AI Basics. Start your tech journey at Nimbahera's premier
              training institute.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                size="lg"
                className="gradient-accent text-white border-0 hover:opacity-90 transition-smooth font-semibold text-base px-8 shadow-elevated"
                data-ocid="home.hero_enroll_button"
              >
                <a
                  href="https://wa.me/917734922886?text=Hi%2C%20I%20want%20to%20enroll%20at%20AI%20Academy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="font-semibold text-base px-8 border-primary text-primary hover:bg-primary/5"
                data-ocid="home.hero_call_button"
              >
                <a href="tel:7734922886">
                  <Phone className="mr-2 w-4 h-4" />
                  Call Now
                </a>
              </Button>
            </div>

            {/* Stats Row */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="text-center"
                  data-ocid={`home.stat.${i + 1}`}
                >
                  <div className="font-display font-bold text-2xl text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img
                src="/assets/generated/hero-education.dim_900x600.png"
                alt="Students learning computer skills at AI Academy"
                className="w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-card rounded-xl p-4 shadow-elevated border border-border">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 gradient-accent rounded-lg flex items-center justify-center">
                  <Award className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-sm font-display font-semibold text-foreground">
                    Government Certified
                  </div>
                  <div className="text-xs text-muted-foreground">
                    RSCIT Authorized Center
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Courses Overview */}
      <section className="py-20 bg-muted/30" data-ocid="home.courses_section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">
              Our Programs
            </Badge>
            <h2 className="font-display font-bold text-4xl text-foreground mb-4">
              Courses We Offer
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Practical, industry-aligned courses designed to get you job-ready
              from day one.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            data-ocid="home.courses_list"
          >
            {courses.map((course, i) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                data-ocid={`home.course_card.${i + 1}`}
              >
                <Card className="h-full group hover:shadow-elevated transition-smooth border-border bg-card">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                      <course.icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge className="w-fit mb-3 text-xs bg-accent/10 text-accent border-accent/20">
                      {course.tag}
                    </Badge>
                    <h3 className="font-display font-bold text-xl text-foreground mb-2">
                      {course.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {course.desc}
                    </p>
                    <Link
                      to="/courses"
                      className="mt-4 text-sm font-medium text-primary flex items-center gap-1 hover:gap-2 transition-smooth"
                      data-ocid={`home.course_learn_more.${i + 1}`}
                    >
                      Learn More <ChevronRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background" data-ocid="home.why_section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">
              Why AI Academy
            </Badge>
            <h2 className="font-display font-bold text-4xl text-foreground mb-4">
              Why Choose Us
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We go beyond textbooks — our focus is on real skills that
              employers actually need.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            data-ocid="home.features_list"
          >
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="text-center group"
                data-ocid={`home.feature_card.${i + 1}`}
              >
                <div className="w-16 h-16 mx-auto gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth shadow-subtle">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="py-20 bg-muted/30"
        data-ocid="home.testimonials_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">
              Student Stories
            </Badge>
            <h2 className="font-display font-bold text-4xl text-foreground mb-4">
              Student Testimonials
            </h2>
            <p className="text-muted-foreground text-lg">
              Real results from real students in Nimbahera.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            data-ocid="home.testimonials_list"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                data-ocid={`home.testimonial.${i + 1}`}
              >
                <Card className="h-full bg-card border-border hover:shadow-elevated transition-smooth">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex gap-1 mb-4">
                      {["s1", "s2", "s3", "s4", "s5"].map((sk) => (
                        <Star
                          key={sk}
                          className="w-4 h-4 fill-accent text-accent"
                        />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed italic flex-1">
                      "{t.text}"
                    </p>
                    <div className="mt-6 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-white text-sm font-display font-bold flex-shrink-0">
                        {t.avatar}
                      </div>
                      <div>
                        <div className="font-display font-semibold text-sm text-foreground">
                          {t.name}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {t.role}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background" data-ocid="home.cta_section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-card rounded-2xl p-12 shadow-elevated border border-border relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 pointer-events-none" />
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
                Limited Seats Available
              </Badge>
              <h2 className="font-display font-bold text-4xl text-foreground mb-4 relative">
                Ready to Start Your Journey?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto relative">
                Join hundreds of students who have transformed their careers at
                AI Academy, Nimbahera. New batches starting every month.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center relative">
                <Button
                  asChild
                  size="lg"
                  className="gradient-accent text-white border-0 hover:opacity-90 font-semibold px-10 shadow-elevated"
                  data-ocid="home.cta_enroll_button"
                >
                  <a
                    href="https://wa.me/917734922886?text=Hi%2C%20I%20want%20to%20enroll%20at%20AI%20Academy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Enroll on WhatsApp
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="font-semibold px-10 border-primary text-primary hover:bg-primary/5"
                  data-ocid="home.cta_courses_button"
                >
                  <Link to="/courses">View All Courses</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
