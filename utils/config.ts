const SITE_URL = "https://www.sarahcollinson.com/";
export const Config = {
  pageMeta: {
    pagination: {
      pageSize: 3,
      recentPostsSize: 3,
    },
    filmIndex: {
      url: `${SITE_URL}/film`,
      slug: "/film",
    },
    filmIndexPage: {
      slug: "/film/page/[page]",
    },
  },
};
