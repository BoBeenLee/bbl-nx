import { experiences } from '@bbl-nx/constants';
import ExperienceCard from '../experience-card/experience-card';

export function Experiences() {
  return (
    <>
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
    </>
  );
}

export default Experiences;
