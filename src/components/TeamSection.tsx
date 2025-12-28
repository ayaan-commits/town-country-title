'use client';

import { Linkedin, Mail, Phone } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  email?: string;
  phone?: string;
  linkedin?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Leonor Montes',
    role: 'President & Founder',
    bio: 'With over 49 years in the Florida title industry, Leonor founded Town & Country Title Guaranty in 1976 and has built it into one of South Florida\'s most trusted title companies.',
    image: '/images/team/placeholder-1.jpg',
    email: 'leonor@townandcountrytitle.com',
  },
  {
    name: 'Maria Rodriguez',
    role: 'Closing Manager',
    bio: 'Maria oversees all closing operations and ensures every transaction is handled with precision and care. She has been with the company for over 15 years.',
    image: '/images/team/placeholder-2.jpg',
    email: 'maria@townandcountrytitle.com',
  },
  {
    name: 'David Chen',
    role: 'Title Examiner',
    bio: 'David leads our title examination team, conducting thorough searches to protect our clients from title defects and claims.',
    image: '/images/team/placeholder-3.jpg',
  },
  {
    name: 'Sandra Williams',
    role: 'Escrow Officer',
    bio: 'Sandra manages escrow accounts and ensures all funds are handled securely and in compliance with Florida regulations.',
    image: '/images/team/placeholder-4.jpg',
  },
];

interface TeamSectionProps {
  title?: string;
  description?: string;
  showContact?: boolean;
}

export function TeamSection({
  title = 'Meet Our Team',
  description = 'Experienced professionals dedicated to making your real estate transactions smooth and stress-free.',
  showContact = true,
}: TeamSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="eyebrow mb-4 block">Our People</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-900 mb-4">
            {title}
          </h2>
          <p className="text-primary-600">{description}</p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-cream rounded-2xl border border-primary-100 overflow-hidden group hover:shadow-elevated transition-all duration-300"
            >
              {/* Photo */}
              <div className="aspect-square bg-primary-100 relative overflow-hidden">
                {/* Placeholder - replace with actual images */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-primary-200 rounded-full flex items-center justify-center">
                    <span className="text-4xl font-heading font-bold text-primary-400">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                {/* Uncomment when you have actual images */}
                {/* <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                /> */}
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-lg font-heading font-semibold text-primary-900 mb-1">{member.name}</h3>
                <p className="text-accent-500 text-sm font-medium mb-3">{member.role}</p>
                <p className="text-primary-600 text-sm mb-4 line-clamp-3">{member.bio}</p>

                {/* Contact Links */}
                {showContact && (member.email || member.phone || member.linkedin) && (
                  <div className="flex items-center gap-3 pt-4 border-t border-primary-100">
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-500 hover:bg-accent-400 hover:text-white transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    )}
                    {member.phone && (
                      <a
                        href={`tel:${member.phone}`}
                        className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-500 hover:bg-accent-400 hover:text-white transition-colors"
                        aria-label={`Call ${member.name}`}
                      >
                        <Phone className="w-4 h-4" />
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-500 hover:bg-accent-400 hover:text-white transition-colors"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Optional CTA */}
        <div className="text-center mt-12">
          <p className="text-primary-600">
            Want to join our team?{' '}
            <a href="mailto:careers@townandcountrytitle.com" className="text-accent-500 hover:underline font-medium">
              View open positions
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
