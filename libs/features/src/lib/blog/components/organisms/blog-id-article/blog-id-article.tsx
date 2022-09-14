import { Avatar, SectionTitle } from '@bbl-nx/ui-components';
import { DATE_TIME_FORMAT5, transformDateTimeStrToText } from '@bbl-nx/utils';

export interface BlogIdArticleProps {
  className?: string;
  title: string;
  createdAt: string;
  content: string;
}

export function BlogIdArticle(props: BlogIdArticleProps) {
  const { className, title, content, createdAt } = props;

  return (
    <div className={className}>
      <SectionTitle className="pb-2">{title}</SectionTitle>
      <div className="flex flex-row items-center justify-between w-full mt-2">
        <div className="flex flex-row items-center">
          <Avatar className="w-6 h-6" />
          <p className="ml-2 text-sm text-gray-600 dark:text-gray-400">
            {'BoBeen Lee'}
          </p>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {transformDateTimeStrToText(createdAt, DATE_TIME_FORMAT5)}
        </p>
      </div>
      <article
        className="w-full mt-4 prose dark:prose-dark max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}

export default BlogIdArticle;
