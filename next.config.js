// module.exports = {
//   async headers() {
//     return [
//       {
//         source: "/(.*)?", // Matches all pages
//         headers: [
//           {
//             key: "X-Frame-Options",
//             value: "DENY",
//           },
//         ],
//       },
//     ];
//   },
// };
module.exports = {
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: "/films/page/1",
        destination: "/films",
        permanent: false,
      },
    ];
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};
