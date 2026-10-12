// Edit this file to change the content of the portfolio. Every section reads from here.

export const profile = {
  name: "MD. Emon Ali",
  shortName: "Emon Ali",
  role: "MERN stack developer",
  location: "Kurigram, Rangpur, Bangladesh",
  tagline: "I build full-stack web apps with React, Node.js and MongoDB.",
  photo:
    "https://res.cloudinary.com/dwfet15kj/image/upload/v1791811411/emonlab_zwnde3.png",
  resume:
    "https://docs.google.com/document/d/1ZxKLtrgvVASvwlUk7rn68y8_T6z_VoTt0KLrfED5MH4/edit?usp=sharing",
  linkedin: "https://www.linkedin.com/in/md-emon-ali/",
  github: "https://github.com/nuruzzaman-emon",
  bio: [
    "I'm a web developer from Kurigram, Bangladesh. I build full-stack apps with the MERN stack: React on the front end, and Node.js, Express and MongoDB on the back end.",
    "My projects include a book delivery platform with role-based dashboards and payments, and a marketplace that connects farmers directly with buyers. I care about clean, responsive interfaces that are easy to use.",
  ],
};

// Order: first item shows first. Change the version labels to match your own timeline.
export const projects = [
  {
    version: "v4.0",
    title: "MD. Emon Ali Portfolio",
    summary:
      "This portfolio site. Built with Next.js and JavaScript, with light and dark modes, a responsive layout and smooth animations.",
    stack: ["Next.js", "React", "CSS"],
    links: [
      // TODO: replace both links with your real portfolio repository and live site.
      { label: "Live site", href: "https://your-portfolio-link.vercel.app", primary: true },
      { label: "Source code", href: "https://github.com/nuruzzaman-emon/portfolio" },
    ],
  },
  {
    version: "v3.0",
    title: "Book Courier",
    summary:
      "A book delivery and management platform. Readers browse, order and pay for books and track their orders. Librarians add books, and admins manage users and roles, each from their own dashboard.",
    stack: ["React", "Tailwind CSS", "DaisyUI", "Node.js", "Express", "MongoDB", "Stripe"],
    links: [
      { label: "Live site", href: "https://book-courier-c3864.web.app", primary: true },
      { label: "Source code", href: "https://github.com/nuruzzaman-emon/book-courier2-client" },
    ],
  },
  {
    version: "v2.0",
    title: "KrishLink",
    summary:
      "A marketplace that connects farmers directly with buyers. Farmers list their crops with price and quantity, and customers browse, filter and buy fresh produce.",
    stack: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Firebase"],
    links: [
      { label: "Live site", href: "https://krish-link.web.app/", primary: true },
      { label: "Source code", href: "https://github.com/nuruzzaman-emon/krishlink-client" },
    ],
  },
  {
    version: "v1.0",
    title: "Greenest Plant",
    summary:
      "A plant-themed web app with user sign-up and login, built to practice authentication in React.",
    stack: ["React", "Vite", "Firebase"],
    links: [
      { label: "Live site", href: "https://greenest-plant-authentication.web.app/", primary: true },
      { label: "Source code", href: "https://github.com/nuruzzaman-emon/greenest-plant-auth" },
    ],
  },
];

export const skills = [
  { group: "Front end", items: ["React", "Tailwind CSS", "DaisyUI"] },
  { group: "Back end", items: ["Node.js", "Express", "MongoDB"] },
  { group: "Libraries and services", items: ["Stripe", "SweetAlert2"] },
];
