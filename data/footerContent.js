module.exports = [
  {
    id: 1,
    title: "Patients",
    menuList: [
      { name: "All Patients", route: "/dashboard/dashboard" },
      { name: "In-Patients", route: "/dashboard/dashboard" },
      { name: "Out-Patients ", route: "/dashboard/dashboard" },
    ],
  },
  {
    id: 2,
    title: "About",
    menuList: [
      { name: "FAQs", route: "/faq" },
      { name: "Contacts", route: "/contacts" },
      { name: "Dashboard", route: "/dashboard/dashboard" },
    ],
  },
  {
    id: 3,
    title: "Hospital ",
    menuList: [
      { name: "Specialist", route: "/" },
      { name: "Location", route: "/" },
      { name: "Appointments", route: "/" },
    ],
  },
  {
    id: 4,
    title: "Helpful Resources",
    menuList: [
      { name: "Site Map", route: "/" },
      { name: "Terms of Use", route: "/" },
      { name: "Privacy Center", route: "/" },
    ],
  },
];
