
export const activity = [
  {
    name: 'Nexters',
    url: 'http://teamnexters.com/',
    description: 'Developer',
  },
  {
    name: 'SOPT',
    url: 'http://sopt.org/wp/',
    description: 'Developer',
  },
];

export type ActivityItem = Readonly<MergeArrayType<typeof activity>>;
