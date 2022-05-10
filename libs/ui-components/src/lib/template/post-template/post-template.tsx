import { theme } from '@bbl-nx/styles';
import { media } from '@bbl-nx/utils';
import styled from 'styled-components';
import Layout from '../../layout/layout';
import SubTitle from '../../title/sub-title/sub-title';
import PostCaptionTemplate from '../post-caption-template/post-caption-template';

interface IMarkdownRemark {
  id: string;
  html: string;
  fields: IMarkdownRemarkFields;
  frontmatter: IMarkdownRemarkFrontmatter;
}

interface IMarkdownRemarkFields {
  slug: string;
}

interface IMarkdownRemarkFrontmatter {
  title: string;
}

export interface PostTemplateProps {
  data: { markdownRemark: IMarkdownRemark };
}

const StyledPostTemplate = styled.div`
  padding: 60px 50px 70px 50px;
  line-height: 1.5;

  a {
    color: ${theme.secondary};
  }
  ${media.mobile`
    padding: 30px 10px 40px 10px;
  `}
`;

const StyledSubTitle = styled(SubTitle)`
  font-size: 30px;
  margin-bottom: 20px;
  color: ${theme.primary};
  font-weight: bold;
`;

export function PostTemplate(props: PostTemplateProps) {
  const { data } = props;
  if (!data) {
    return <div />;
  }
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <StyledPostTemplate>
        <StyledSubTitle title={post.frontmatter.title} />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <PostCaptionTemplate
          title={post.frontmatter.title}
          description={post.frontmatter.title}
          url={post.fields.slug}
        />
      </StyledPostTemplate>
    </Layout>
  );
}

export default PostTemplate;
