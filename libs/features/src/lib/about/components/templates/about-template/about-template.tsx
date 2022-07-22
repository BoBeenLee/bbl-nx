import {
  activity,
  experiences,
  categorySkillArray,
} from '@bbl-nx/constants';
import { SectionTitle, Seperator } from '@bbl-nx/ui-components';
import { ActivityCard, ExperienceCard, TechStackCard } from '../../organisms';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AboutTemplateProps {}

export function AboutTemplate() {
  return (
    <div className="flex flex-col items-start w-full max-w-2xl mx-auto mb-8 border-gray-200 sm:mb-12 dark:border-gray-700">
      <div className="w-full space-y-8">
        <SectionTitle className="pb-2" href={'#experience'}>
          Experience
        </SectionTitle>
        {experiences.map((item) => {
          const { title, titleUri, period, role } = item;
          return (
            <ExperienceCard
              key={title}
              title={
                <a
                  className=""
                  href={titleUri}
                  target={'_blank'}
                  rel="noreferrer"
                >
                  {role}
                </a>
              }
              caption={`${title} / ${period}`}
            />
          );
        })}
        <Seperator />
      </div>
      <div className="w-full mt-16 space-y-8">
        <SectionTitle className="pb-2" href={'#activity'}>
          Activity
        </SectionTitle>
        {activity.map((item) => {
          const { name, url, description } = item;
          return (
            <ActivityCard
              key={name}
              title={
                <a className="" href={url} target={'_blank'} rel="noreferrer">
                  {name}
                </a>
              }
              caption={description}
            />
          );
        })}
        <Seperator />
      </div>
      <div className="w-full mt-16 space-y-8">
        <SectionTitle className="pb-2" href={'#tech-stack'}>
          Tech Stack
        </SectionTitle>
        {categorySkillArray.map((item) => {
          const { name, skills } = item;
          return <TechStackCard key={name} groupName={name} items={skills} />;
        })}
        <Seperator />
      </div>
      <div className="w-full mt-16 space-y-8">
        <SectionTitle className="pb-2" href={'#education'}>
          Education
        </SectionTitle>
        <p className="font-medium text-gray-900 dark:text-gray-100">
          BoBeen Lee graduated from Sungkonghoe University in Software
          Engineering.
        </p>
      </div>
    </div>
  );
}

export default AboutTemplate;
