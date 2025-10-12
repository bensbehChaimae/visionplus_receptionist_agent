import { motion } from "framer-motion";
import { Eye, Microscope, Heart } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Eye,
      title: "Comprehensive Eye Exams",
      description: "State-of-the-art diagnostic equipment for thorough eye health assessment",
    },
    {
      icon: Microscope,
      title: "Advanced Laser Surgery",
      description: "Latest LASIK technology for safe and effective vision correction",
    },
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Patient-centered approach with personalized treatment plans",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            About Vision+
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At Vision+, we combine modern technology with compassionate care to protect and improve
            your eyesight. Our experienced team is dedicated to providing exceptional eye care
            services in a welcoming environment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-smooth"
            >
              <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
