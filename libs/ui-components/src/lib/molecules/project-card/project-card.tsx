export interface ProjectCardProps {
  name: string;
  period: string;
  techStacks: string[];
  summary: string;
  IconComponent: React.ReactNode;
}

export function ProjectCard(props: ProjectCardProps) {
  const { name, period, techStacks, summary, IconComponent } = props;
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-start justify-between mb-2">
        <div className="flex flex-row items-center">
          <p className="pr-4 font-medium text-gray-900 truncate dark:text-gray-100">
            {name}
          </p>
          <p className="text-sm text-gray-500">{period}</p>
        </div>
        <div>{IconComponent}</div>
      </div>
      <div className="flex flex-row flex-wrap items-center gap-2 mb-4">
        {techStacks.map((item) => {
          return (
            <div key={`${name}${item}`} className="text-sm text-gray-500">
              {item}
            </div>
          );
        })}
      </div>
      <p className="text-sm text-gray-500">{summary}</p>
    </div>
  );
}

export default ProjectCard;
