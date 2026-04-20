import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  BookOpen,
  Brain,
  Calculator,
  CheckCircle,
  Clock,
  Monitor,
  Phone,
} from "lucide-react";
import { motion } from "motion/react";

interface Course {
  id: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  duration: string;
  level: string;
  badge: string;
  color: string;
  description: string;
  benefits: string[];
  syllabus: string[];
  fee: string;
}

const courses: Course[] = [
  {
    id: "rscit",
    icon: BookOpen,
    title: "RSCIT",
    subtitle: "Rajasthan State Certificate in IT",
    duration: "3 Months",
    level: "Beginner",
    badge: "Government Certified",
    color: "from-blue-600 to-blue-700",
    description:
      "RSCIT is the government-recognized computer literacy certificate mandatory for Rajasthan government jobs. Our success rate exceeds 95% — we provide exam-focused preparation with real government exam practice papers.",
    benefits: [
      "Required for all Rajasthan government jobs",
      "Official Vmou affiliation — valid certificate",
      "Online + offline exam preparation",
      "Previous year question paper practice",
      "Personal attention in small batch sizes",
    ],
    syllabus: [
      "Computer Fundamentals",
      "Windows OS",
      "MS Word & Excel",
      "Internet & Email",
      "Cyber Security Basics",
      "Online Services (DigiLocker, BHIM)",
      "Government Portal Usage",
    ],
    fee: "₹3,500",
  },
  {
    id: "tally",
    icon: Calculator,
    title: "Tally Prime",
    subtitle: "Complete Accounting & GST Course",
    duration: "2 Months",
    level: "Beginner to Intermediate",
    badge: "Job Ready",
    color: "from-emerald-600 to-emerald-700",
    description:
      "Master India's most widely used accounting software. From basic bookkeeping to advanced GST filing, this course prepares you for accounting and finance roles in any business — small or large.",
    benefits: [
      "GST billing and return filing skills",
      "Excel basic to Advance",
      "Inventory and payroll management",
      "Banking reconciliation in Tally",
      "Job-ready for accountant positions",
      "Course completion certificate",
    ],
    syllabus: [
      "Company Creation & Setup",
      "Ledger & Voucher Entry",
      "Inventory Management",
      "GST Configuration & Returns",
      "TDS/TCS Handling",
      "Payroll Processing",
      "Banking & Reconciliation",
      "MIS Reports & Audit",
    ],
    fee: "₹4,000",
  },
  {
    id: "Kid's Computer",
    icon: Monitor,
    title: "Basic Computer",
    subtitle: "Complete Digital Literacy Program",
    duration: "2 Months",
    level: "Absolute Beginner",
    badge: "Beginner Friendly",
    color: "from-purple-600 to-purple-700",
    description:
      "Perfect for those starting from zero. Learn everything you need to confidently use computers in daily professional life — from typing to creating presentations and managing emails.",
    benefits: [
      "Start from complete beginner level",
      "Practical hands-on lab every class",
      "MS Office (Word, Excel, PowerPoint)",
      "Internet browsing and email management",
      "Build foundation for advanced courses",
    ],
    syllabus: [
      "Computer Basics & Hardware",
      "Windows Navigation",
      "MS Word (Documents)",
      "MS Excel (Spreadsheets)",
      "MS PowerPoint (Presentations)",
      "Internet & Browsing",
      "Email & Communication",
      "Printing & File Management",
    ],
    fee: "₹1,000",
  },
  {
    id: "Ai",
    icon: Brain,
    title: "AI Basics",
    subtitle: "Artificial Intelligence for Everyone",
    duration: "2 Months",
    level: "Beginner to Intermediate",
    badge: "Future Skills",
    color: "from-orange-500 to-orange-600",
    description:
      "Designed for the future workforce — understand AI, use ChatGPT and modern AI tools professionally, automate repetitive tasks, and gain a competitive edge in any career path.",
    benefits: [
      "Understand AI and its real-world applications",
      "Master ChatGPT and AI writing tools",
      "AI for business automation and productivity",
      "Future-proof your career with AI skills",
      "No programming background required",
    ],
    syllabus: [
      "What is AI? History & Impact",
      "Machine Learning Concepts",
      "ChatGPT & Prompt Engineering",
      "AI Image & Content Generation",
      "AI Tools for Business (Canva AI, Notion AI)",
      "Automation Basics (Zapier)",
      "AI Ethics & Safety",
      "Career Paths in AI",
    ],
    fee: "₹0.00",
  },
];

export default function CoursesPage() {
  return (
    <div data-ocid="courses.page">
      {/* Hero */}
      <section
        className="py-16 bg-gradient-to-b from-primary/5 to-background"
        data-ocid="courses.hero_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              All Programs
            </Badge>
            <h1 className="font-display font-bold text-5xl text-foreground mb-4">
              Our Courses
            </h1>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
              Industry-aligned, job-ready programs taught by qualified
              instructors with hands-on practical training.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-12 bg-background" data-ocid="courses.list">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {courses.map((course, i) => (
            <motion.div
              key={course.id}
              id={course.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              data-ocid={`courses.course_card.${i + 1}`}
            >
              <Card className="overflow-hidden border-border bg-card hover:shadow-elevated transition-smooth">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-3">
                    {/* Left Info Panel */}
                    <div
                      className={`bg-gradient-to-br ${course.color} p-8 text-white flex flex-col justify-between`}
                    >
                      <div>
                        <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                          <course.icon className="w-7 h-7 text-white" />
                        </div>
                        <Badge className="mb-3 bg-white/20 text-white border-white/30 text-xs">
                          {course.badge}
                        </Badge>
                        <h2 className="font-display font-bold text-3xl mb-1">
                          {course.title}
                        </h2>
                        <p className="text-white/80 text-sm mb-4">
                          {course.subtitle}
                        </p>
                        <div className="flex items-center gap-3 text-sm">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{course.duration}</span>
                          </div>
                          <div className="w-1 h-1 bg-white/50 rounded-full" />
                          <span>{course.level}</span>
                        </div>
                      </div>
                      <div className="mt-8">
                        <div className="text-white/70 text-xs mb-1">
                          Course Fee
                        </div>
                        <div className="font-display font-bold text-3xl">
                          {course.fee}
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2 mt-4">
                          <Button
                            asChild
                            className="bg-white text-foreground hover:bg-white/90 font-semibold flex-1"
                            data-ocid={`courses.enroll_button.${i + 1}`}
                          >
                            <a
                              href={`https://wa.me/917734922886?text=Hi%2C%20I%20want%20to%20enroll%20in%20${encodeURIComponent(course.title)}%20course`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Enroll Now
                              <ArrowRight className="ml-2 w-4 h-4" />
                            </a>
                          </Button>
                          <Button
                            asChild
                            variant="outline"
                            className="border-white/40 text-white hover:bg-white/10"
                            data-ocid={`courses.whatsapp_button.${i + 1}`}
                          >
                            <a href="tel:7734922886">
                              <Phone className="w-4 h-4" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Right Content */}
                    <div className="lg:col-span-2 p-8">
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {course.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Benefits */}
                        <div>
                          <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-primary" />
                            Key Benefits
                          </h3>
                          <ul className="space-y-2">
                            {course.benefits.map((b) => (
                              <li
                                key={b}
                                className="flex items-start gap-2 text-sm text-muted-foreground"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                {b}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Syllabus */}
                        <div>
                          <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                            <BookOpen className="w-5 h-5 text-accent" />
                            What You'll Learn
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {course.syllabus.map((topic) => (
                              <Badge
                                key={topic}
                                variant="secondary"
                                className="text-xs bg-secondary text-secondary-foreground"
                              >
                                {topic}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/30" data-ocid="courses.cta_section">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-3xl text-foreground mb-4">
              Not Sure Which Course to Pick?
            </h2>
            <p className="text-muted-foreground mb-6">
              Call or WhatsApp us — we'll help you choose the right course for
              your career goals and current skill level.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                asChild
                size="lg"
                className="gradient-accent text-white border-0 hover:opacity-90 font-semibold"
                data-ocid="courses.cta_whatsapp_button"
              >
                <a
                  href="https://wa.me/917734922886?text=Hi%2C%20I%20need%20help%20choosing%20a%20course"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp for Guidance
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="font-semibold border-primary text-primary hover:bg-primary/5"
                data-ocid="courses.cta_call_button"
              >
                <a href="tel:7734922886">
                  <Phone className="mr-2 w-4 h-4" />
                  Call: 77349 22886
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
