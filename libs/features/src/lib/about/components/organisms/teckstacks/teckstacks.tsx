import cn from "classnames";
import { categorySkillArray } from '@bbl-nx/constants';
import { SectionTitle } from '@bbl-nx/ui-components';
import TechStackCard from '../tech-stack-card/tech-stack-card';

interface TeckStacksProps {
  className?: string;
}

export function TeckStacks(props: TeckStacksProps) {
  const { className } = props;
  return (
    <div className={cn(className, "space-y-8")}>
      <SectionTitle className="pb-2" href={'#tech-stack'}>
        Tech Stack
      </SectionTitle>
      {categorySkillArray.map((item) => {
        const { name, skills } = item;
        return <TechStackCard key={name} groupName={name} items={skills} />;
      })}
    </div>
  );
}

export default TeckStacks;
