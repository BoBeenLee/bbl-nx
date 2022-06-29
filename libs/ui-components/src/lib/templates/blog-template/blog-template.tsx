import { PageTitle } from "../../atoms";
import LayoutTemplate, {
  LayoutTemplateProps,
} from '../layout-template/layout-template';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BlogTemplateProps
  extends Omit<LayoutTemplateProps, 'children'> {}

export function BlogTemplate(props: BlogTemplateProps) {
  const { asPath, onNavigate } = props;

  return (
    <LayoutTemplate asPath={asPath} onNavigate={onNavigate}>
      <div className="flex flex-col items-start justify-center max-w-2xl py-16 mx-auto border-gray-200 sm:mb-16 dark:border-gray-700">
        <PageTitle>All Posts</PageTitle>
        test
      </div>
    </LayoutTemplate>
  );
}

export default BlogTemplate;
