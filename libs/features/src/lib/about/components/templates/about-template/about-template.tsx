import { SectionTitle, Seperator } from '@bbl-nx/ui-components';
import { Activities, Experiences, TeckStacks } from '../../organisms';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AboutTemplateProps {}

export function AboutTemplate() {
  return (
    <div className="flex flex-col items-start w-full max-w-2xl mx-auto mb-8 border-gray-200 sm:mb-12 dark:border-gray-700">
      <div className="w-full space-y-8">
        <Experiences />
        <Seperator />
      </div>
      <div className="w-full mt-16 space-y-8">
        <Activities />
        <Seperator />
      </div>
      <div className="w-full mt-16 space-y-8">
        <TeckStacks />
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
