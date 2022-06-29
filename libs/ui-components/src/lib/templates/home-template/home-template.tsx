import HomeCard from '../../molecules/home-card/home-card';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HomeTemplateProps {}

export function HomeTemplate() {
  return (
    <div className="flex flex-col items-start justify-center max-w-2xl py-12 mx-auto sm:py-20 sm:mb-16">
      <HomeCard
        name={'BoBeen Lee'}
        roleName={'Frontend Developer'}
        description={'Thinking about React, Typescript and Misc development.'}
      />
    </div>
  );
}

export default HomeTemplate;
