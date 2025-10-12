import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const Doctors = () => {
  const doctors = [
    {
      name: "Dr. Sarah Chen",
      specialty: "Ophthalmologist & LASIK Surgeon",
      bio: "15+ years of experience in refractive surgery and comprehensive eye care",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
    },
    {
      name: "Dr. Michael Rodriguez",
      specialty: "Pediatric Ophthalmologist",
      bio: "Specialized in children's eye health with a gentle, caring approach",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
    },
    {
      name: "Dr. Emily Thompson",
      specialty: "Cataract & Retina Specialist",
      bio: "Expert in advanced cataract surgery and retinal disease management",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
    },
    {
      name: "Dr. James Park",
      specialty: "Optometrist",
      bio: "Comprehensive eye exams and contact lens specialist",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop",
    },
  ];

  return (
    <section id="doctors" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Meet Our Doctors
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expert eye care professionals dedicated to your vision health
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-medium transition-smooth group">
                <div className="relative overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-1">
                    {doctor.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">{doctor.specialty}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{doctor.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
