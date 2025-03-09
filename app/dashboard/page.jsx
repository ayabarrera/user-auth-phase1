import BlogPosts from '../components/BlogPost';
import { getUserData } from '@/lib/dal';
import client from '@/lib/directus';
import { readItems } from '@directus/sdk';
import styles from './dashboard.module.css';



export default async function Dashboard() {
  const response = await getUserData();
  const posts = await client.request(readItems('posts'));

  return (
    <main className={styles.main}>
      <div className={styles['left-column']}>
        <h1>Hello, {response?.user?.first_name || 'User'}</h1>

        {/* Your Posts Section */}
        <section className={styles['post-section']}>
          <h2>Your Posts</h2>
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

        {/* Blog Posts Section */}
        <div>
        <section className={styles['blogposts-section']}>
          <BlogPosts />
        </section>
        </div>

      </div>

      <div className={styles['right-column']}>
        <div className={styles['logout-form']}>
          <form action="/api/auth/logout" method="POST">
            <button type="submit">Logout</button>
          </form>
        </div>
        <nav>
          <ul>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/settings">Settings</a></li>
          </ul>
        </nav>
      </div>
    </main>
  );
}