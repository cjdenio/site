import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { postDate } from "../util";

export async function GET(context) {
  const blog = await getCollection("blog", (e) => !e.data.draft);

  return rss({
    title: "Caleb Denio's blog",
    description: "Caleb Denio's blog",
    site: context.site,
    customData: `<atom:link href="${new URL("feed.xml", context.site)}" rel="self" type="application/rss+xml" />`,
    xmlns: {
      atom: "http://www.w3.org/2005/Atom",
    },
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: postDate(post),
      link: `/blog/${post.id}/`,
      content: post.rendered.html,
      author: "me@calebden.io (Caleb Denio)",
    })),
  });
}
