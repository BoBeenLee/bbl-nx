import { activity } from '@bbl-nx/constants';
import ActivityCard from '../activity-card/activity-card';

export function Activities() {
  return (
    <>
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
    </>
  );
}

export default Activities;
