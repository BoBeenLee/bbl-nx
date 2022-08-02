import cn from 'classnames';
import { activity } from '@bbl-nx/constants';
import { SectionTitle } from '@bbl-nx/ui-components';
import ActivityCard from '../activity-card/activity-card';

interface ActivitiesProps {
  className?: string;
}

export function Activities(props: ActivitiesProps) {
  const { className } = props;
  return (
    <div className={cn(className, 'space-y-8')}>
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
    </div>
  );
}

export default Activities;
