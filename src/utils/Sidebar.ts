export default [
  {
    icon: "mdi-account-outline",
    title: "sidebar.users",
    children: [
      // {
      //   icon: "mdi-account-outline",
      //   title: "sidebar.users",
      //   to: `/users`,
      // },
      {
        icon: "mdi-account-outline",
        title: "sidebar.groups",
        to: `/groups`,
      },
      {
        icon: "mdi-account-outline",
        title: "add Item",
        to: `/createProducts`,
      },
    ],
  },
];
