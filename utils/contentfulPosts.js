import { Config } from "./config";

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
const pageSize = Config.pageMeta.pagination.pageSize;
const client = require("contentful").createClient({
  space: space,
  accessToken: accessToken,
});

export async function fetchEntries(contentType) {
  const entries = (await client.getEntries()).items;

  const rawPosts = entries.map((p) => {
    if (p.sys.contentType.sys.id === contentType) {
      return p.fields;
    } else {
      return null;
    }
  });

  const [posts] = rawPosts.filter((p) => p);

  if (posts.length !== 0) {
    return posts;
  }
  console.log(`Error getting Entries for ${contentType.name}.`);
}

export function getTotalEntriesNumber(posts) {
  return Object.keys(posts).length;
}

export function getPaginatedPostSummaries(page, contentType) {
  const skipMultiplier = page === 1 ? 0 : page - 1;
  const skip = skipMultiplier > 0 ? pageSize * skipMultiplier : 0;
  // TODO return items needed
  // https://www.contentful.com/blog/2021/04/23/paginating-contentful-blogposts-with-nextjs-graphql-api/
}
export default { fetchEntries, getTotalEntriesNumber };
