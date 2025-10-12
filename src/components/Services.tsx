import { motion } from "framer-motion";
import { Eye, Zap, Baby, Glasses, CloudSun } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Eye,
      title: "Comprehensive Eye Exams",
      description: "Complete eye health evaluations using the latest diagnostic technology",
    },
    {
      icon: Zap,
      title: "LASIK Surgery",
      description: "Advanced laser vision correction for nearsightedness, farsightedness, and astigmatism",
    },
    {
      icon: Baby,
      title: "Pediatric Eye Care",
      description: "Specialized eye care for children with gentle and friendly approach",
    },
    {
      icon: Glasses,
      title: "Contact Lenses & Eyewear",
      description: "Wide selection of frames and contact lenses to suit your style",
    },
    {
      icon: CloudSun,
      title: "Cataract Treatment",
      description: "Expert cataract diagnosis and surgical treatment for clearer vision",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive eye care services tailored to your unique needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-medium transition-smooth group cursor-pointer border-2 hover:border-primary">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-primary-light/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
