import { SectionTitle } from '../../atoms';
import LayoutTemplate, {
  LayoutTemplateProps,
} from '../layout-template/layout-template';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ProjectTemplateProps extends Omit<LayoutTemplateProps, "children"> {}

export function ProjectTemplate(props: ProjectTemplateProps) {
  const { asPath, onNavigate } = props;

  return (
    <LayoutTemplate asPath={asPath} onNavigate={onNavigate}>
      <div className="flex flex-col items-start w-full max-w-2xl mx-auto border-gray-200 sm:mb-16 dark:border-gray-700">
        <div className="w-full mt-16 space-y-8">
          <SectionTitle className="pb-2">Education</SectionTitle>
          <p className="font-medium text-gray-900 truncate dark:text-gray-100">
            BoBeen Lee graduated from Sungkonghoe University in Software
            Engineering.
          </p>
        </div>
      </div>
    </LayoutTemplate>
  );
}

export default ProjectTemplate;
