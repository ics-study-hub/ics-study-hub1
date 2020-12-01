let eventGuid = 0;
const todayStr = new Date().toISOString().replace(/T.*$/, '');// YYYY-MM-DD of today

export function createEventId() {
  return String(eventGuid++);
}

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'Available Session',
    start: todayStr,
  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: todayStr,
  },
];
