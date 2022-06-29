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
          <p className="pr-4 mb-0 font-medium text-gray-900 truncate dark:text-gray-100">
            {name}
          </p>
          <p className="mb-0 text-sm text-gray-500">{period}</p>
        </div>
        {IconComponent}
      </div>
      <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">{summary}</p>
      <div className="flex flex-row flex-wrap items-center gap-2 mb-4">
        {techStacks.map((item) => {
          return (
            <div key={`${name}${item}`} className="text-sm text-gray-500">
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectCard;
