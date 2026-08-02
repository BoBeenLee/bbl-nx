import { getAllPosts, PostItem as MDPostItem } from '../libs/post';

const mapRemarkToBlogs = (allMarkdownRemark: MDPostItem[] = []) => {
    return allMarkdownRemark.map(
        ({ slug, frontmatter: { title, date, published } }) => {
            // 라우팅은 slug(파일명)만 쓴다. frontmatter 의 path 는 소비되지 않는다.
            return {
                createdAt: date,
                id: slug,
                title,
                published,
            };
        }
    );
};

export const fetchMD = async () => {
    const response = await getAllPosts();
    const data = mapRemarkToBlogs(response);
    return data;
};