import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", color: "bg-facebook", label: "Facebook" },
    { icon: Twitter, href: "#", color: "bg-twitter", label: "Twitter" },
    { icon: Instagram, href: "#", color: "bg-instagram", label: "Instagram" },
    { icon: Youtube, href: "#", color: "bg-youtube", label: "YouTube" },
  ];

  const footerLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Term of Use", href: "/term-of-use" },
    { label: "Cookies Policy", href: "/cookies-policy" },
    { label: "Cancellation and Refunds", href: "/cancellation-and-refunds" },
    { label: "Disclaimer", href: "/disclaimer" },
  ];

  return (
    <footer className="bg-background">
      {/* Footer Content */}
      <div className="container max-w-[912px] py-12 px-5">
        <div className="flex flex-col md:flex-row gap-8 md:gap-24">
          {/* Left Side - Brand */}
          <div className="flex-1">
            <div className="flex items-center gap-5 mb-7">
              <Rocket className="w-6 h-6 text-foreground" />
              <h3 className="text-xl md:text-2xl font-medium font-body">
                YONECKI PROPERTIES LLC
              </h3>
            </div>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center text-white transition-opacity hover:opacity-90 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Contact */}
          <div className="flex-[2]">
            <h3 className="text-xl md:text-2xl font-medium font-body mb-6">
              CONTACT US
            </h3>
            <div className="flex flex-col gap-2">
              <a
                href="javascript:void(0)"
                className="flex items-center gap-2 text-foreground text-sm py-2 hover:text-primary transition-colors"
              >
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span>101 Marketside Avenue Ste 404 #139 Ponte Vedra Beach, FL 32081</span>
              </a>
              <a
                href="javascript:void(0)"
                className="flex items-center gap-2 text-foreground text-sm py-2 hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+1 (442) 238-2874</span>
              </a>
              <a
                href="javascript:void(0)"
                className="flex items-center gap-2 text-foreground text-sm py-2 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>support@yonecki.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="container max-w-[1033px] py-12 px-5">
        <div className="flex flex-col gap-5">
          <p className="text-center text-sm text-foreground">
            Copyright 2025 by YONECKI PROPERTIES LLC.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
