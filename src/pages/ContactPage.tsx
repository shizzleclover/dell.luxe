import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server
    console.log({ name, email, subject, message });
    setSubmitted(true);
    // Reset form
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    
    // Reset the submitted state after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="bg-luxury-ivory dark:bg-[#010400]">
      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://source.unsplash.com/random/1920x1080/?luxury-boutique-interior)' }}
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
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 max-w-2xl"
          >
            We'd love to hear from you
          </motion.p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container-luxe">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-heading font-bold mb-6 text-luxury-charcoal dark:text-luxury-ivory">
                Get in Touch
              </h2>
              <p className="mb-8 text-luxury-charcoal/80 dark:text-luxury-ivory/80">
                Whether you have a question about our products, need assistance with an order, or wish to discuss a collaboration, our team is here to help.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-luxury-gold/10 w-12 h-12 flex items-center justify-center rounded-full shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-luxury-gold">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold mb-1 text-luxury-charcoal dark:text-luxury-ivory">
                      Visit Our Flagship Store
                    </h3>
                    <p className="text-luxury-charcoal/80 dark:text-luxury-ivory/80">
                      123 Luxury Avenue<br />
                      New York, NY 10001<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-luxury-gold/10 w-12 h-12 flex items-center justify-center rounded-full shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-luxury-gold">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold mb-1 text-luxury-charcoal dark:text-luxury-ivory">
                      Call Us
                    </h3>
                    <p className="text-luxury-charcoal/80 dark:text-luxury-ivory/80">
                      Customer Service: +1 (800) 123-4567<br />
                      Corporate Office: +1 (212) 555-6789
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-luxury-gold/10 w-12 h-12 flex items-center justify-center rounded-full shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-luxury-gold">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold mb-1 text-luxury-charcoal dark:text-luxury-ivory">
                      Email Us
                    </h3>
                    <p className="text-luxury-charcoal/80 dark:text-luxury-ivory/80">
                      Customer Service: support@daisy.com<br />
                      Media Inquiries: press@daisy.com<br />
                      Careers: careers@daisy.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-luxury-gold/10 w-12 h-12 flex items-center justify-center rounded-full shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-luxury-gold">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold mb-1 text-luxury-charcoal dark:text-luxury-ivory">
                      Hours
                    </h3>
                    <p className="text-luxury-charcoal/80 dark:text-luxury-ivory/80">
                      Monday - Saturday: 10:00 AM - 8:00 PM<br />
                      Sunday: 12:00 PM - 6:00 PM<br />
                      Online Support: 24/7
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white dark:bg-[#010400] p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-heading font-bold mb-6 text-luxury-charcoal dark:text-luxury-ivory">
                  Send a Message
                </h3>
                
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mb-6"
                  >
                    <h4 className="text-lg font-bold text-green-800 dark:text-green-300 mb-2">
                      Thank you for reaching out!
                    </h4>
                    <p className="text-green-700 dark:text-green-400">
                      We have received your message and will get back to you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-luxury-charcoal dark:text-luxury-ivory mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-luxury-charcoal dark:text-luxury-ivory focus:outline-none focus:ring-2 focus:ring-luxury-gold"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-luxury-charcoal dark:text-luxury-ivory mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-luxury-charcoal dark:text-luxury-ivory focus:outline-none focus:ring-2 focus:ring-luxury-gold"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-luxury-charcoal dark:text-luxury-ivory mb-1">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-luxury-charcoal dark:text-luxury-ivory focus:outline-none focus:ring-2 focus:ring-luxury-gold"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-luxury-charcoal dark:text-luxury-ivory mb-1">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-luxury-charcoal dark:text-luxury-ivory focus:outline-none focus:ring-2 focus:ring-luxury-gold"
                        required
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="btn-primary w-full py-3"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-12">
        <div className="container-luxe">
          <div className="h-[400px] rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-800">
            {/* In a real application, you would integrate a map here */}
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-luxury-charcoal/50 dark:text-luxury-ivory/50">
                Interactive map would be displayed here
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 