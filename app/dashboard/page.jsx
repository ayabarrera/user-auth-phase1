import { getUserData } from '@/lib/dal'; // Import your DAL function
import client from '@/lib/directus';
import { readItems } from '@directus/sdk';

export default async function Dashboard() {
  const response = await getUserData();
  const posts = await client.request(readItems('posts'));
  
  const firstName = response?.user?.first_name || 'User';

  return (
    <main>
      <form action="/api/auth/logout" method="POST">
       
      </form>
      <h1>Hello, {firstName}</h1>
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