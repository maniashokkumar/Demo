export interface FooterLink {
  title: string;
  link: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  platform: string;
  icon: string;
  link: string;
  ariaLabel: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}

export interface FooterData {
  quickLinks: FooterSection;
  legal: FooterSection;
  contact: {
    title: string;
    info: ContactInfo;
  };
  newsletter: {
    title: string;
    description: string;
  };
  socialLinks: SocialLink[];
}

export const footerData: FooterData = {
  quickLinks: {
    title: 'Quick Links',
    links: [
      { title: 'About Us', link: '/about' },
      { title: 'Courses', link: '/courses' },
      { title: 'Blog', link: '/blog' },
      { title: 'Contact', link: '/contact' }
    ]
  },
  legal: {
    title: 'Legal',
    links: [
      { title: 'Privacy Policy', link: '/privacy' },
      { title: 'Terms of Service', link: '/terms' },
      { title: 'FAQs', link: '/faq' }
    ]
  },
  contact: {
    title: 'Contact Us',
    info: {
      phone: '+1 (234) 567-890',
      email: 'info@edurick.com',
      address: '123 Education St, Tech City'
    }
  },
  newsletter: {
    title: 'Newsletter',
    description: 'Subscribe to our newsletter for updates and offers'
  },
  socialLinks: [
    { platform: 'Facebook', icon: 'fab fa-facebook', link: '#', ariaLabel: 'Facebook' },
    { platform: 'Twitter', icon: 'fab fa-twitter', link: '#', ariaLabel: 'Twitter' },
    { platform: 'Instagram', icon: 'fab fa-instagram', link: '#', ariaLabel: 'Instagram' },
    { platform: 'LinkedIn', icon: 'fab fa-linkedin', link: '#', ariaLabel: 'LinkedIn' }
  ]
}; 