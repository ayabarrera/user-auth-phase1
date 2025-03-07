
import directus from '@/lib/directus';
import { readItems } from '@directus/sdk';
import Navbar from './components/Navbar';

async function getGlobalData() {
  return directus.request(readItems('global'));
}

export default async function Dashboard() {
  const globalData = await getGlobalData();

  return (
    
    <div>
      
      <h1>{globalData.welcome_message}</h1>
      <h2>TEST TEST</h2>
    </div>
  );
}