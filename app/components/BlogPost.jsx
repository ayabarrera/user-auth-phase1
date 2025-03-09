import client from "@/lib/directus";
import { readItems } from "@directus/sdk";

export default async function BlogPosts() {
  const blogposts = await client.request(readItems("blogpost"));

  return (
    <div className="blogposts-container">
      {blogposts.length > 0 ? (
        <div className="blogposts-grid">
          {blogposts.map((post, index) => {
            return (
              <article
                key={post.id || `post-${index}`}
                className="blogpost-article"
              >
                <h2>From the Community</h2>
                <h3>{post.title}</h3>
                <h4 className="author">{post.author_name}</h4>
                <p className="article-text">{post.article}</p>
              </article>
            );
          })}
        </div>
      ) : (
        <p>No blog posts found.</p>
      )}
    </div>
  );
}
