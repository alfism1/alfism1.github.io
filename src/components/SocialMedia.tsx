import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SocialMediaProps {
  href: string;
  label: string;
  icon: IconDefinition;
}

const socialMediaList: SocialMediaProps[] = [
  {
    href: "https://github.com/alfism1",
    label: "GitHub",
    icon: faGithub,
  },
  {
    href: "https://www.linkedin.com/in/alfi-samudro-058b1910a/",
    label: "LinkedIn",
    icon: faLinkedin,
  },
  {
    href: "https://www.instagram.com/alfi.samudro/",
    label: "Instagram",
    icon: faInstagram,
  },
  {
    href: "mailto:alfialfarisi@gmail.com",
    label: "Email",
    icon: faEnvelope,
  },
  {
    href: "https://wa.me/6282339803192",
    label: "Whatsapp",
    icon: faWhatsapp,
  },
];

const SocialMediaLink = ({ href, label, icon }: SocialMediaProps) => (
  <a
    className="block hover:text-slate-200"
    href={href}
    target="_blank"
    rel="noreferrer"
  >
    <span className="sr-only">{label}</span>
    <FontAwesomeIcon icon={icon} className="h-6 w-6 text-slate-200" />
  </a>
);

const SocialMedia = () => (
  <div className="flex gap-4 mt-4 justify-center lg:justify-start">
    {socialMediaList.map((socialMedia) => (
      <SocialMediaLink
        href={socialMedia.href}
        label={socialMedia.label}
        icon={socialMedia.icon}
      />
    ))}
  </div>
);

export default SocialMedia;
