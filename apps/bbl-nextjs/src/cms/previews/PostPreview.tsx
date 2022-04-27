import React from 'react';
import PostTemplate from 'src/templates/post';

const PostPreview = ({ entry, widgetFor }: any) => {
  const data = {
    markdownRemark: {
      id: '1',
      html: widgetFor('body'),
      fields: {
        slug: '/',
      },
      frontmatter: {
        title: entry.getIn(['data', 'title']),
      },
    },
  };
  return <PostTemplate data={data} />;
};
