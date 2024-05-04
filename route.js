export const routes = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    {
      title: "Services",
      href: "/services",
      submenu: [
        { title: "Balcony Room", href: "/rooms/balcony-room" },
        { title: "Garden Room", href: "/rooms/garden-room" },
        { title: "Royal Rose Room", href: "/rooms/royal-rose-room" },
        { title: "Reading Room", href: "/rooms/reading-room" },
        { title: "Harbor View Room", href: "/rooms/harbor-view-room" },
      ],
    },
    { title: "Contact", href: "/contact" },
  ];
  