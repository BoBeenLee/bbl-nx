import { categorySkillArray } from '@bbl-nx/constants';
import TechStackCard from '../tech-stack-card/tech-stack-card';

export function TeckStacks() {
  return (
    <>
      {categorySkillArray.map((item) => {
        const { name, skills } = item;
        return <TechStackCard key={name} groupName={name} items={skills} />;
      })}
    </>
  );
}

export default TeckStacks;
