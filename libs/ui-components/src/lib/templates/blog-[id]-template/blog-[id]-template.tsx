import { Avatar, PageTitle } from '../../atoms';
import { DATE_TIME_FORMAT5, toDateTimeText } from '@bbl-nx/utils';
export interface BlogIdTemplateProps {
  id: string;
  title: string;
  createdAt: string;
  content: string;
}

export function BlogIdTemplate(props: BlogIdTemplateProps) {
  const { title, content, createdAt } = props;

  return (
    <div className="flex flex-col items-start w-full max-w-2xl mx-auto mb-8 border-gray-200 sm:mb-12 dark:border-gray-700">
      <PageTitle>{title}</PageTitle>
      <div className="flex flex-row items-center justify-between w-full mt-2">
        <div className="flex flex-row items-center">
          <Avatar width={'24'} />
          <p className="ml-2 text-sm text-gray-600 dark:text-gray-400">
            {'BoBeen Lee'}
          </p>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {toDateTimeText(createdAt, DATE_TIME_FORMAT5)}
        </p>
      </div>
      <article
        className="w-full mt-4 prose dark:prose-dark max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}

export default BlogIdTemplate;
