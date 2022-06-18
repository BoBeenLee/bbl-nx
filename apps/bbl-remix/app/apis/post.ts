import _ from "lodash";
import { getFeednamiTistories, TistoryItem } from '../libs/tistory';
import { getAllPosts, PostItem as MDPostItem } from '~/libs/post.server';

const mapRemarkToPosts = (allMarkdownRemark: MDPostItem[]) => {
    const posts = allMarkdownRemark;
    return _.map(
        posts,
        ({ slug, frontmatter: { title, date, path, published } }) => {
            return {
                createdAt: date,
                id: slug,
                title,
                url: path ?? '',
                published,
                isExternal: false,
            };
        }
    );
};

const mapTistoryToPosts = (tistories: TistoryItem[]) => {
    return _.map(tistories, (item) => ({
        createdAt: item.date,
        id: item.guid,
        title: item.title,
        url: item.link,
        published: true,
        isExternal: true,
    }));
};

export const fetchMD = async () => {
    const response = await getAllPosts();
    const data = mapRemarkToPosts(response);
    return data;
};

export const fetchTistories = async (): Promise<ReturnType<typeof mapTistoryToPosts>> => {
    const response = await getFeednamiTistories(
        'http://cultist-tp.tistory.com/rss'
    );
    const data = mapTistoryToPosts(response);
    return data;
};