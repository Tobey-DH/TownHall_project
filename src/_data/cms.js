import { getUpcomingEvents } from './sanity.js';

export default async function() {
  const upcomingEvents = await getUpcomingEvents();
  return {
    cms: {
      upcomingEvents,
    }
  };
}
