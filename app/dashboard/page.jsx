import { getUserData } from '@/lib/dal'; // Import your DAL function
import client from '@/lib/directus';
import { readItems } from '@directus/sdk';

export default async function Dashboard() {
  const response = await getUserData();

  const posts = await client.request(readItems('posts'));

  return (
    <main>
      <form action="/api/auth/logout" method="POST">
        <button type="submit">Logout</button>
      </form>
      <h1>Welcome!</h1>
      <p>Your id: {response?.user?.id}</p>
      <section>
        <h2>Posts</h2>
        {posts.length > 0 ? (
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <h3>{post.title}</h3>
              </li>
            ))}
          </ul>
        ) : (
          <p>No posts available.</p>
        )}
      </section>
    </main>
  );
}
