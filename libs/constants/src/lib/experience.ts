
export const experiences = [
  {
    title: 'Naver',
    titleUri: '',
    period: '2022.10 - ',
    role: 'Frontend Developer',
  },
  {
    title: 'Haechi Labs',
    titleUri: 'https://haechi.io/ko',
    period: '2020.2 - 2022.5',
    role: 'Frontend Developer',
  },
  {
    title: 'Blended',
    titleUri: 'https://www.rocketpunch.com/companies/trillionaire',
    period: '2018.4 - 2020.01',
    role: 'React, React Native Developer',
  },
  {
    title: 'Buxi',
    titleUri: 'https://www.rocketpunch.com/companies/buxi',
    period: '2017.8 - 2017.11',
    role: 'React Developer',
  },
  {
    title: 'Coupang',
    titleUri: 'https://www.rocketpunch.com/companies/coupang',
    period: '2015.6 - 2017.7',
    role: 'Fullstack Developer',
  },
  {
    title: 'DailyHotel',
    titleUri: 'https://www.rocketpunch.com/companies/dailyhotel',
    period: '2014.11 - 2015.1',
    role: 'Developer Intern',
  },
];


export type ExperienceItem = Readonly<MergeArrayType<typeof experiences>>;