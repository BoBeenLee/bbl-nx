import { PageTitle } from '../../atoms';

export interface BlogIdTemplateProps {
  id: string;
  title: string;
  createdAt: string;
  content: string;
}

export function BlogIdTemplate(props: BlogIdTemplateProps) {
  const { title, content } = props;

  return (
    <div className="flex flex-col items-start w-full max-w-2xl mx-auto mb-8 border-gray-200 sm:mb-12 dark:border-gray-700">
      <PageTitle>{title}</PageTitle>
      <article
        className="w-full mt-4 prose dark:prose-dark max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}

export default BlogIdTemplate;
