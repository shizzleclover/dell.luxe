import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-luxury-ivory dark:bg-[#010400]">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://source.unsplash.com/random/1920x1080/?luxury-boutique)' }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="container-luxe relative z-10 h-full flex flex-col justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-heading font-bold mb-4 text-white"
          >
            Our Story
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 max-w-2xl"
          >
            A legacy of luxury craftsmanship
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container-luxe">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-luxury-charcoal dark:text-luxury-ivory">
                Our Mission
              </h2>
              <p className="text-luxury-charcoal/80 dark:text-luxury-ivory/80 mb-6">
                At DAISY, we believe that luxury is defined by exceptional quality, timeless design, and meticulous craftsmanship. Our mission is to create pieces that transcend fleeting trends and become cherished possessions for generations.
              </p>
              <p className="text-luxury-charcoal/80 dark:text-luxury-ivory/80 mb-6">
                We work with the finest artisans and use only the most exquisite materials to ensure that each DAISY creation embodies sophistication and elegance. Every detail is thoughtfully considered, every finish is perfectly executed.
              </p>
              <p className="text-luxury-charcoal/80 dark:text-luxury-ivory/80">
                Our commitment to sustainability and ethical practices is unwavering. We believe that true luxury must be created with respect for our planet and its people.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-lg h-[500px]"
            >
              <img 
                src="https://source.unsplash.com/random/800x1000/?luxury-atelier" 
                alt="Our atelier" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/20">
        <div className="container-luxe">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center text-luxury-charcoal dark:text-luxury-ivory"
          >
            Our History
          </motion.h2>
          <div className="space-y-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="https://source.unsplash.com/random/600x800/?vintage-boutique" 
                      alt="Our founding" 
                      className="w-full h-[300px] object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-heading font-bold mb-4 text-luxury-charcoal dark:text-luxury-ivory">
                    2005: The Beginning
                  </h3>
                  <p className="text-luxury-charcoal/80 dark:text-luxury-ivory/80">
                    DAISY was founded by Claire Bennett, a former fashion editor with a passion for timeless elegance. Frustrated by the disposable nature of contemporary fashion, Claire set out to create a brand that honored the traditions of old-world luxury while embracing modern sensibilities.
                  </p>
                  <p className="text-luxury-charcoal/80 dark:text-luxury-ivory/80 mt-4">
                    Our first boutique opened in Paris, featuring a small collection of meticulously crafted evening wear that quickly gained recognition for its exceptional quality and distinctive aesthetic.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex flex-col md:flex-row-reverse gap-8">
                <div className="md:w-1/3">
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="https://source.unsplash.com/random/600x800/?luxury-jewelry" 
                      alt="Expanding our collections" 
                      className="w-full h-[300px] object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-heading font-bold mb-4 text-luxury-charcoal dark:text-luxury-ivory">
                    2012: Expanding Our Vision
                  </h3>
                  <p className="text-luxury-charcoal/80 dark:text-luxury-ivory/80">
                    With the success of our ready-to-wear collections, DAISY expanded into fine jewelry and accessories. We partnered with master jewelers and artisans to create pieces that complemented our clothing line while adhering to our standards of excellence.
                  </p>
                  <p className="text-luxury-charcoal/80 dark:text-luxury-ivory/80 mt-4">
                    This period marked the beginning of our global expansion, with flagship stores opening in London, New York, and Tokyo.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="https://source.unsplash.com/random/600x800/?sustainable-fashion" 
                      alt="Sustainability commitment" 
                      className="w-full h-[300px] object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-heading font-bold mb-4 text-luxury-charcoal dark:text-luxury-ivory">
                    Today: A Sustainable Future
                  </h3>
                  <p className="text-luxury-charcoal/80 dark:text-luxury-ivory/80">
                    DAISY is now at the forefront of sustainable luxury. We've implemented rigorous standards for our materials and manufacturing processes, ensuring that our environmental impact is minimized without compromising on quality or design.
                  </p>
                  <p className="text-luxury-charcoal/80 dark:text-luxury-ivory/80 mt-4">
                    Our Foundation supports artisan communities around the world, preserving traditional craftsmanship and providing economic opportunities for skilled craftspeople. We believe that true luxury has a responsibility to protect both cultural heritage and natural resources.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container-luxe">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center text-luxury-charcoal dark:text-luxury-ivory"
          >
            Our Values
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-[#010400] p-8 rounded-lg shadow-sm"
            >
              <div className="bg-luxury-gold/10 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-luxury-gold">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold mb-4 text-luxury-charcoal dark:text-luxury-ivory">
                Excellence
              </h3>
              <p className="text-luxury-charcoal/80 dark:text-luxury-ivory/80">
                We are relentless in our pursuit of the highest quality. From design to execution, we demand excellence in every detail.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-[#010400] p-8 rounded-lg shadow-sm"
            >
              <div className="bg-luxury-gold/10 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-luxury-gold">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold mb-4 text-luxury-charcoal dark:text-luxury-ivory">
                Sustainability
              </h3>
              <p className="text-luxury-charcoal/80 dark:text-luxury-ivory/80">
                We believe that responsible luxury prioritizes the wellbeing of our planet. We source ethically and produce mindfully.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-[#010400] p-8 rounded-lg shadow-sm"
            >
              <div className="bg-luxury-gold/10 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-luxury-gold">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 1-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold mb-4 text-luxury-charcoal dark:text-luxury-ivory">
                Heritage
              </h3>
              <p className="text-luxury-charcoal/80 dark:text-luxury-ivory/80">
                We honor traditional craftsmanship, preserving techniques passed down through generations while embracing innovation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 