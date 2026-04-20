import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  label: string;
  category: "lab" | "class" | "event" | "practical";
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "/assets/generated/clipvideo1.mp4",
    alt: "Computer lab with students working",
    label: "Our Modern Computer Lab",
    category: "lab",
  },
  {
    id: 2,
    src: "/assets/generated/gallery-class.dim_800x500.jpg",
    alt: "Classroom session in progress",
    label: "Interactive Classroom Sessions",
    category: "class",
  },
  {
    id: 3,
    src: "/assets/generated/gallery-practical.dim_800x500.jpg",
    alt: "Students doing practical exercises",
    label: "Hands-on Practical Training",
    category: "practical",
  },
  {
    id: 4,
    src: "/assets/generated/gallery-certificate.dim_800x500.jpg",
    alt: "Certificate distribution ceremony",
    label: "Certificate Distribution Ceremony",
    category: "event",
  },
  {
    id: 5,
    src: "/assets/generated/gallery-group.dim_800x500.jpg",
    alt: "Group photo of students",
    label: "Collaborative Learning Environment",
    category: "class",
  },
  {
    id: 6,
    src: "/assets/generated/course-ai.dim_600x400.png",
    alt: "AI and Technology concepts",
    label: "AI Basics Workshop",
    category: "practical",
  },
];

const categoryLabels: Record<GalleryItem["category"], string> = {
  lab: "Lab",
  class: "Classes",
  event: "Events",
  practical: "Practical",
};

const categoryColors: Record<GalleryItem["category"], string> = {
  lab: "bg-blue-100 text-blue-700 border-blue-200",
  class: "bg-emerald-100 text-emerald-700 border-emerald-200",
  event: "bg-orange-100 text-orange-700 border-orange-200",
  practical: "bg-purple-100 text-purple-700 border-purple-200",
};

export default function GalleryPage() {
  return (
    <div data-ocid="gallery.page">
      {/* Hero */}
      <section
        className="py-16 bg-gradient-to-b from-primary/5 to-background"
        data-ocid="gallery.hero_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Vlog & Gallery
            </Badge>
            <h1 className="font-display font-bold text-5xl text-foreground mb-4">
              Our Classes & Activities
            </h1>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
              A peek inside AI Academy — our labs, classrooms, practical
              sessions, and memorable student moments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-background" data-ocid="gallery.grid_section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid="gallery.image_grid"
          >
            {galleryItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative rounded-2xl overflow-hidden bg-card border border-border shadow-subtle hover:shadow-elevated transition-smooth"
                data-ocid={`gallery.item.${i + 1}`}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                </div>
                <div className="p-4">
                  <Badge
                    className={`mb-2 text-xs border ${categoryColors[item.category]}`}
                  >
                    {categoryLabels[item.category]}
                  </Badge>
                  <p className="font-display font-semibold text-sm text-foreground">
                    {item.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Placeholder Section */}
      <section className="py-16 bg-muted/30" data-ocid="gallery.video_section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              Video Highlights
            </Badge>
            <h2 className="font-display font-bold text-3xl text-foreground mb-3">
              See the Academy in Action
            </h2>
            <p className="text-muted-foreground">
              Watch our students learn, grow, and succeed at AI Academy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Campus Tour — AI Academy, Nimbahera",
                desc: "Take a virtual tour of our modern computer labs and classrooms.",
              },
              {
                title: "Student Success Stories",
                desc: "Hear from our graduates about how AI Academy changed their careers.",
              },
            ].map((video, i) => (
              <motion.div
                key={video.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                data-ocid={`gallery.video_card.${i + 1}`}
                className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-elevated transition-smooth"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto gradient-primary rounded-full flex items-center justify-center shadow-elevated mb-3">
                      <svg
                        className="w-8 h-8 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <title>Play</title>
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Video Coming Soon
                    </p>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    {video.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{video.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background" data-ocid="gallery.cta_section">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-3xl text-foreground mb-4">
              Want to See More?
            </h2>
            <p className="text-muted-foreground mb-6">
              Visit AI Academy in person or follow us for more updates from our
              classes and events.
            </p>
            <Button
              asChild
              size="lg"
              className="gradient-accent text-white border-0 hover:opacity-90 font-semibold"
              data-ocid="gallery.cta_visit_button"
            >
              <a
                href="https://wa.me/917734922886?text=Hi%2C%20I%27d%20like%20to%20visit%20AI%20Academy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Plan a Visit
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
