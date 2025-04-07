import React, { useState, useEffect } from 'react';
import { Menu, X, School as Pool, Wrench, Droplets, Settings, Phone, Mail, MapPin, Clock, Building, ChevronRight, Check, ChevronLeft, Shield, Zap, Sparkles, Waves, PaintBucket, Scale, ThermometerSun, Heart } from 'lucide-react';

// Hero slider images
const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "Luxury Pool Design",
    subtitle: "Create your perfect backyard oasis"
  },
  {
    url: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "Expert Maintenance",
    subtitle: "Keep your pool pristine year-round"
  },
  {
    url: "https://images.unsplash.com/photo-1560749003-f4b1e17e2dff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "Professional Service",
    subtitle: "Trust the experts for all your pool needs"
  }
];

const services = [
  {
    title: 'Pool Installation',
    description: 'Custom pool design and professional installation services tailored to your space.',
    icon: Pool,
    details: {
      fullDescription: 'Transform your backyard into a personal oasis with our expert pool installation services. We handle everything from initial design consultation to final touches.',
      features: [
        'Custom pool design and planning',
        'Site preparation and excavation',
        'Professional installation and construction',
        'Plumbing and electrical setup',
        'Decking and landscaping integration',
        'Final inspection and water treatment'
      ],
      process: [
        'Initial consultation and site survey',
        'Design presentation and approval',
        'Permit acquisition',
        'Construction phase',
        'Final inspection and handover'
      ],
      image: 'https://images.unsplash.com/photo-1560749003-f4b1e17e2dff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    }
  },
  {
    title: 'Regular Maintenance',
    description: 'Scheduled maintenance to keep your pool in perfect condition year-round.',
    icon: Wrench,
    details: {
      fullDescription: 'Keep your pool in pristine condition with our comprehensive maintenance programs. We offer weekly, bi-weekly, and monthly service packages.',
      features: [
        'Water chemistry balancing',
        'Filter cleaning and maintenance',
        'Skimming and vacuuming',
        'Equipment inspection',
        'Chemical level monitoring',
        'Seasonal opening and closing'
      ],
      process: [
        'Schedule assessment',
        'Regular maintenance visits',
        'Monthly detailed reports',
        'Quarterly equipment check',
        'Seasonal preparations'
      ],
      image: 'https://images.unsplash.com/photo-1572331165267-854da2b10ccc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    }
  },
  {
    title: 'Cleaning & Repairs',
    description: 'Thorough cleaning services and prompt repairs when needed.',
    icon: Droplets,
    details: {
      fullDescription: 'From routine cleaning to emergency repairs, our team is ready to handle all your pool maintenance needs with prompt and professional service.',
      features: [
        'Deep cleaning services',
        'Tile and grout cleaning',
        'Equipment repair and replacement',
        'Leak detection and repair',
        'Pool resurfacing',
        'Emergency repair service'
      ],
      process: [
        'Issue diagnosis',
        'Service quote provision',
        'Repair scheduling',
        'Work completion',
        'Quality assurance check'
      ],
      image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    }
  },
  {
    title: 'Water Treatment',
    description: 'Expert water balance and treatment services for crystal clear pools.',
    icon: Settings,
    details: {
      fullDescription: 'Maintain perfect water chemistry with our expert treatment services. We ensure your pool water is safe, clean, and properly balanced year-round.',
      features: [
        'Chemical balance testing',
        'pH level adjustment',
        'Chlorine management',
        'Algae prevention',
        'Water clarity treatment',
        'Salt system maintenance'
      ],
      process: [
        'Water testing',
        'Chemical analysis',
        'Treatment application',
        'Balance adjustment',
        'Follow-up testing'
      ],
      image: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    }
  }
];

const frpFeatures = [
  {
    icon: Shield,
    title: "Durability and Strength",
    description: "Robust construction resistant to cracking, chipping, and fading for long-lasting performance."
  },
  {
    icon: Zap,
    title: "Easy Installation",
    description: "Manufactured in sections for quick on-site assembly with minimal disruption."
  },
  {
    icon: Sparkles,
    title: "Low Maintenance",
    description: "Smooth, non-porous surface resists algae and staining, reducing cleaning needs."
  },
  {
    icon: Waves,
    title: "Chemical Resistance",
    description: "Highly resistant to pool chemicals, preventing corrosion and damage."
  },
  {
    icon: ThermometerSun,
    title: "Weather Resistance",
    description: "Designed to withstand extreme temperatures and UV exposure."
  },
  {
    icon: PaintBucket,
    title: "Design Variety",
    description: "Available in various shapes, sizes, and colors for customization."
  },
  {
    icon: Scale,
    title: "Lightweight",
    description: "Perfect for installation in areas with weight restrictions like rooftops."
  },
  {
    icon: Heart,
    title: "Safety Features",
    description: "Smooth, slip-resistant surface with shock absorption properties."
  }
];

const testimonials = [
  {
    name: 'Rajesh Vellayi',
    text: 'Lushwave transformed our backyard into a paradise. Their attention to detail is remarkable!',
    role: 'Homeowner'
  },
  {
    name: 'Arung Gosh',
    text: 'The maintenance service is top-notch. Our pool has never looked better.',
    role: 'Property Manager'
  },
  {
    name: 'Albin Francis',
    text: 'Professional, reliable, and excellent customer service. Highly recommended!',
    role: 'Real Estate Agent'
  }
];

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    primary: '(+91) 8921 1010 19',
    secondary: '(+91) 7994 9419 20',
    action: 'tel:+917994941920'
  },
  {
    icon: Mail,
    title: 'Email',
    primary: 'contact@Lushwavepools.com',
    secondary: 'support@Lushwavepools.com',
    action: 'mailto:contact@Lushwavepools.com'
  },
  {
    icon: MapPin,
    title: 'Location',
    primary: 'Trivandrum',
    secondary: 'Kerala, India',
    action: 'https://maps.google.com/?q=Thiruvananthapuram,+Kerala'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    primary: 'Mon - Fri: 8:00 AM - 6:00 PM',
    secondary: 'Sat: 9:00 AM - 4:00 PM',
    action: null
  },
  {
    icon: Building,
    title: 'Service Area',
    primary: 'All Kerala',
    secondary: 'For other location contact us',
    action: null
  }
];

function ServiceModal({ service, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img 
            src={service.details.image} 
            alt={service.title}
            className="w-full h-64 object-cover rounded-t-xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <X className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <service.icon className="h-8 w-8 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>
          </div>
          
          <p className="text-gray-600 mb-8">{service.details.fullDescription}</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Features</h3>
              <ul className="space-y-3">
                {service.details.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Process</h3>
              <ul className="space-y-3">
                {service.details.process.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <a
              href="#contact"
              onClick={() => {
                onClose();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function ImageModal({ src, alt, onClose }) {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-7xl w-full">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-200 z-10"
        >
          <X className="h-6 w-6 text-gray-600" />
        </button>
        <img 
          src={src} 
          alt={alt}
          className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
}

function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen">
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 hero-slide transition-opacity duration-500 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url("${image.url}")`,
            }}
          >
            <div className="absolute inset-0 bg-blue-900/40"></div>
          </div>
          <div className="relative h-full flex items-center justify-center text-center">
            <div className="max-w-3xl px-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                {image.title}
              </h1>
              <p className="text-xl text-white mb-8">
                {image.subtitle}
              </p>
              <a
                href="#contact"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      url: "/pool1.jpg",
      alt: "Modern Pool with Swan Float"
    },
    {
      url: "/pool2.jpg",
      alt: "Blue Mosaic Pool Interior"
    },
    {
      url: "/pool3.jpg",
      alt: "Pool Construction Process"
    },
    {
      url: "/pool4.jpg",
      alt: "Detailed Pool Mosaic Work"
    },
    {
      url: "/pool5.jpg",
      alt: "FRP Pool Structure"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="relative overflow-hidden group">
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="min-w-full"
              onClick={() => setSelectedImage(image.url)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-[600px] object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <ChevronLeft className="h-6 w-6 text-gray-800" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <ChevronRight className="h-6 w-6 text-gray-800" />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-white w-4' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`flex-shrink-0 transition-opacity duration-300 ${
              currentSlide === index ? 'opacity-100 ring-2 ring-blue-600' : 'opacity-70 hover:opacity-100'
            }`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-24 h-16 object-cover rounded"
            />
          </button>
        ))}
      </div>

      {selectedImage && (
        <ImageModal
          src={selectedImage}
          alt="Enlarged pool view"
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="min-h-screen bg-white">
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
      
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Pool className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-2xl font-bold text-blue-600">Lushwave</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-600 hover:text-blue-600 font-medium">Home</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 font-medium">About</a>
              <a href="#services" className="text-gray-600 hover:text-blue-600 font-medium">Services</a>
              <a href="#gallery" className="text-gray-600 hover:text-blue-600 font-medium">Gallery</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 font-medium">Contact</a>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-blue-600"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-2 text-gray-600 hover:text-blue-600 font-medium">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-blue-600 font-medium">About</a>
              <a href="#services" className="block px-3 py-2 text-gray-600 hover:text-blue-600 font-medium">Services</a>
              <a href="#gallery" className="block px-3 py-2 text-gray-600 hover:text-blue-600 font-medium">Gallery</a>
              <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-blue-600 font-medium">Contact</a>
            </div>
          </div>
        )}
      </nav>

      <section id="home">
        <HeroSlider />
      </section>

      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Lushwave</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600 mb-8">
              With over 26 years of experience, Lushwave has established itself as the leading pool installation and maintenance company in the region. Our team of certified professionals is dedicated to delivering exceptional service and ensuring your pool remains a source of joy and relaxation.
            </p>
            <p className="text-lg text-gray-600">
              We take pride in our attention to detail, use of premium materials, and commitment to customer satisfaction. Whether you're looking to install a new pool or maintain an existing one, Lushwave is your trusted partner.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 card-hover"
                onClick={() => setSelectedService(service)}
              >
                <div className="relative">
                  <img 
                    src={service.details.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <service.icon className="h-8 w-8 mb-2" />
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                    Learn More
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">FRP Pools</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Fiberglass Reinforced Polymer (FRP) pools represent the future of swimming pool technology, 
              offering unmatched durability, easy installation, and minimal maintenance requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {frpFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2">
              <div className="p-8 lg:p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Why Choose FRP Pools?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                    <p className="text-gray-600">
                      Cost-effective solution compared to traditional concrete pools
                    </p>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                    <p className="text-gray-600">
                      Quick installation process that minimizes disruption to your property
                    </p>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                    <p className="text-gray-600">
                      Superior durability with resistance to chemicals and weather conditions
                    </p>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                    <p className="text-gray-600">
                      Minimal maintenance requirements save time and money long-term
                    </p>
                  </li>
                </ul>
                <div className="mt-8">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-300"
                  >
                    Get a Quote
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
              <div className="relative h-full min-h-[400px]">
                <img
                  src="https://images.unsplash.com/photo-1572331165267-854da2b10ccc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  alt="FRP Pool Installation"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-900/10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Gallery</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <Gallery />
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 transition-colors duration-300">
                    <info.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {info.title}
                    </h3>
                    {info.action ? (
                      <a
                        href={info.action}
                        className="block text-gray-600 hover:text-blue-600 transition-colors duration-300"
                      >
                        <p>{info.primary}</p>
                        <p>{info.secondary}</p>
                      </a>
                    ) : (
                      <>
                        <p className="text-gray-600">{info.primary}</p>
                        <p className="text-gray-600">{info.secondary}</p>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="h-[500px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Lushwave Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126083.25031898271!2d76.85593618359375!3d8.487945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbb805bbcd47%3A0x15439fab5c5c81cb!2sThiruvananthapuram%2C%20Kerala!5e0!3m2!1sen!2sin!4v1710835420000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Pool className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-2xl font-bold text-white">Lushwave</span>
              </div>
              <p className="text-gray-400">
                Creating perfect pools for perfect moments. Your dream pool is our passion.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Pool Installation</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Maintenance</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Repairs</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Water Treatment</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400">
                  <Phone className="h-4 w-4 mr-2" />
                  (+91) 8921 1010 19
                </li>
                <li className="flex items-center text-gray-400">
                  <Mail className="h-4 w-4 mr-2" />
                  contact@Lushwavepools.com
                </li>
                <li className="flex items-center text-gray-400">
                  <MapPin className="h-4 w-4 mr-2" />
                  Trivandrum, Kerala
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Lushwave Pools. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;