import directus from '@/lib/directus';
import { readItems } from '@directus/sdk';

async function getGlobalData() {
  return directus.request(readItems('global'));
}

export default async function Dashboard() {
  const globalData = await getGlobalData();

  return (
    
    <div>
      <h1>{globalData.site_title}</h1>
      <p>{globalData.welcome_message}</p>
    </div>
  );
}