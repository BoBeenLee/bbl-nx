import BlogTemplate from '../../src/components/blog/blog-template';
import { interpret } from 'xstate';
import { waitFor } from 'xstate/lib/waitFor';
import { blogServiceWithConfig } from '../../src/machines/blog-service-machine';
import { defaultDESC, sortBy } from '@bbl-nx/utils';
import { BlogItem } from '@bbl-nx/features/blog/interfaces/blog';

const makeBlogState = async () => {
  const blogService = interpret(blogServiceWithConfig);
  blogService.start();
  const doneState = await waitFor(
    blogService,
    (state) => state.matches('Done'),
    {
      timeout: 30_000,
    }
  );
  return doneState;
};

const BlogPage = async () => {
  const blogMachineState = await makeBlogState();
  const blogsByDESC: BlogItem[] = sortBy(
    blogMachineState?.context?.blogs ?? [],
    'createdAt',
    defaultDESC
  );
  const filterPublished = blogsByDESC.filter((item) => item.published);

  return <BlogTemplate allBlogs={filterPublished} />;
};

export default BlogPage;
