import BlogIdArticle from '../../organisms/blog-id-article/blog-id-article';

export interface BlogIdTemplateProps {
  id: string;
  title: string;
  createdAt: string;
  content: string;
}

export function BlogIdTemplate(props: BlogIdTemplateProps) {
  const { title, content, createdAt } = props;
  return (
    <BlogIdArticle
      className="flex flex-col items-start flex-1 w-full max-w-2xl mx-auto mb-8 border-gray-200 sm:mb-12 dark:border-gray-700"
      title={title}
      content={content}
      createdAt={createdAt}
    />
  );
}

export default BlogIdTemplate;
