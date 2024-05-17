export const routes = [
    { title: "Home", href: "/" },
    { title: "Plants & Flowers", href: "/flowers-plants", current: false},
    {
      title: "Services",
      href: "/services",
      submenu: [
        { title: "Landscaping", href: "/landscaping" },
        { title: "Home Repair", href: "/home-repair" },
        { title: "Trees", href: "/trees" },
      ],
    },
    { title: "Contact", href: "/contact" },
  ];
  