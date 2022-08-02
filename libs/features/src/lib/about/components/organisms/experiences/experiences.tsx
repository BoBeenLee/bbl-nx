import cn from 'classnames';
import { experiences } from '@bbl-nx/constants';
import { SectionTitle } from '@bbl-nx/ui-components';
import ExperienceCard from '../experience-card/experience-card';

interface ExperiencesProps {
  className?: string;
}

export function Experiences(props: ExperiencesProps) {
  const { className } = props;
  return (
    <div className={cn(className, "space-y-8")}>
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
    </div>
  );
}

export default Experiences;
