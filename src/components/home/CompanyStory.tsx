import React, { useEffect, useState } from 'react';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';

const testimonials = [
  {
    name: 'Riyasath',
    role: 'CEO, RIYAFO PVT(LTD)',
    content:
      'INFO BSC delivered our CRM system built with ASP.NET Core and React. The real-time analytics and automated workflows have transformed our sales process!',
    project: 'Business CRM System',
  },
  {
    name: 'Dr. Sarah Johnson',
    role: 'Medical Director, HealthClinic',
    content:
      'The appointment booking app they developed with React Native and ASP.NET Core has reduced no-shows by 80% and streamlined our scheduling process.',
    project: 'Appointment Booking App',
  },
  {
    name: 'Safnis',
    role: 'CEO, RIDHA Ent',
    content:
      'INFO BSC helped us launch our e-commerce platform in record time. Their expertise in React and cloud deployment is outstanding.',
    project: 'E-commerce Platform',
  },
];

const chapters = [
  {
    id: 'partner',
    kicker: 'Partner',
    title: 'A Sri Lankan software partner',
    body: (
      <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
        <p>
          <strong>INFO BSC</strong> is a Sri Lankan based forward-thinking software company that specializes in integrating cutting-edge technology solutions to drive innovation, efficiency, and seamless experiences for our clients.
        </p>
        <p>
          With our innovative and insightful technology, we strive to enhance our users&apos; everyday experiences. Founded in 2024, we&apos;ve quickly established ourselves as a trusted partner for businesses seeking digital transformation.
        </p>
        <p>
          Our team of 11-50 dedicated professionals brings together expertise in modern technologies and industry best practices to deliver exceptional software solutions.
        </p>
      </div>
    ),
  },
  {
    id: 'mission',
    kicker: 'Mission',
    title: 'Our Mission',
    body: (
      <p className="text-lg text-gray-700 leading-relaxed">
        To deliver innovative, cost-effective, and reliable software solutions that help businesses grow faster and achieve their digital transformation goals. We are committed to providing exceptional value through cutting-edge technology and personalized service.
      </p>
    ),
  },
  {
    id: 'vision',
    kicker: 'Vision',
    title: 'Our Vision',
    body: (
      <p className="text-lg text-gray-700 leading-relaxed">
        To become a trusted global technology partner for startups and enterprises, known for delivering exceptional software solutions that drive business success. We envision a future where technology seamlessly integrates with business processes to create unprecedented value.
      </p>
    ),
  },
  {
    id: 'approach',
    kicker: 'How we work',
    title: 'Transparency, innovation, and results',
    body: (
      <div className="grid gap-4">
        <p className="text-lg text-gray-700 leading-relaxed">
          At INFO BSC, we simplify technology to help your business thrive.
        </p>
        {[
          {
            title: 'Transparency & Quality',
            text: 'We maintain complete transparency throughout the development process, ensuring quality deliverables that exceed expectations.',
          },
          {
            title: 'Innovation & Excellence',
            text: 'Driven by passion for innovation, we deliver cutting-edge solutions that streamline operations and drive business growth.',
          },
          {
            title: 'Results-Driven Approach',
            text: 'From startups to enterprises, we build solutions that make a real impact and deliver measurable business results.',
          },
        ].map((item) => (
          <div key={item.title} className="rounded-2xl border border-blue-100 bg-white p-5">
            <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
            <p className="text-gray-600 leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'stories',
    kicker: 'Success stories',
    title: 'Work clients can point to',
    body: (
      <div className="grid gap-4">
        {testimonials.map((story) => (
          <blockquote key={story.name} className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="text-gray-700 leading-relaxed mb-4">{story.content}</p>
            <footer>
              <p className="font-semibold text-gray-900">{story.name}</p>
              <p className="text-sm text-gray-500">{story.role}</p>
              <p className="text-sm text-blue-900 mt-1">{story.project}</p>
            </footer>
          </blockquote>
        ))}
      </div>
    ),
  },
];

const CompanyStory: React.FC = () => {
  const reduced = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const [seen, setSeen] = useState<number[]>([0]);

  useEffect(() => {
    const nodes = chapters
      .map((chapter) => document.getElementById(`story-${chapter.id}`))
      .filter((node): node is HTMLElement => Boolean(node));

    const activeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number((entry.target as HTMLElement).dataset.index);
            if (!Number.isNaN(index)) setActive(index);
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = Number((entry.target as HTMLElement).dataset.index);
          if (Number.isNaN(index)) return;
          setSeen((current) => (current.includes(index) ? current : [...current, index]));
        });
      },
      { threshold: 0.2 }
    );

    nodes.forEach((node) => {
      activeObserver.observe(node);
      revealObserver.observe(node);
    });
    return () => {
      activeObserver.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  const goToChapter = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: reduced ? 'auto' : 'smooth',
      block: 'center',
    });
  };

  return (
    <section id="about" className="scroll-mt-24 bg-gradient-to-br from-gray-50 to-blue-50 py-16 xs:py-20">
      <div className="max-w-6xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl xs:text-5xl font-bold mb-4 text-gray-900">
            About <span className="text-blue-900">INFO</span> <span className="text-yellow-500">BSC</span>
          </h2>
          <p className="text-lg xs:text-xl text-gray-600 max-w-4xl mx-auto">
            A Sri Lankan based forward-thinking software company that specializes in integrating cutting-edge technology solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-[180px_minmax(0,1fr)] gap-10">
          <nav className="hidden lg:block" aria-label="Company story">
            <ol className="sticky top-28 space-y-3">
              {chapters.map((chapter, index) => (
                <li key={chapter.id}>
                  <button
                    type="button"
                    onClick={() => goToChapter(`story-${chapter.id}`)}
                    className={`flex w-full items-center gap-3 text-left text-sm font-semibold ${
                      active === index ? 'text-blue-900' : 'text-gray-500'
                    }`}
                    aria-current={active === index ? 'true' : undefined}
                  >
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${
                        active === index ? 'bg-yellow-500' : 'bg-gray-300'
                      }`}
                    />
                    {chapter.kicker}
                  </button>
                </li>
              ))}
            </ol>
          </nav>

          <div className="space-y-16 lg:space-y-24">
            {chapters.map((chapter, index) => {
              const shown = reduced || seen.includes(index);
              return (
                <article
                  key={chapter.id}
                  id={`story-${chapter.id}`}
                  data-index={index}
                  className={`scroll-mt-28 transition-opacity duration-500 motion-reduce:transition-none ${
                    shown ? 'opacity-100' : 'opacity-40'
                  }`}
                >
                  <p className="text-sm font-semibold uppercase tracking-wide text-yellow-600 mb-3">
                    {String(index + 1).padStart(2, '0')} · {chapter.kicker}
                  </p>
                  <h3 className="text-3xl xs:text-4xl font-bold text-gray-900 mb-6">{chapter.title}</h3>
                  {chapter.body}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;
