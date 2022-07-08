import { Icon } from '../../atoms';

export interface ProjectLinksProps {
  url: {
    home?: string;
    link?: string;
    storybook?: string;
    github?: string;
    googleStore?: string;
    appStore?: string;
  };
}

export function ProjectLinks(props: ProjectLinksProps) {
  const { url } = props;
  return (
    <div className="flex flex-row items-center gap-3">
      {url.home ? (
        <a className="w-5 h-5" href={url.home} target="_blank" rel="noreferrer">
          <Icon name={'home'} />
        </a>
      ) : null}
      {url.link ? (
        <a className="w-5 h-5" href={url.link} target="_blank" rel="noreferrer">
          <Icon name={'link'} />
        </a>
      ) : null}
      {url.storybook ? (
        <a
          className="w-6 h-6"
          href={url.storybook}
          target="_blank"
          rel="noreferrer"
        >
          <Icon className="w-6 h-6" name={'storybook'} />
        </a>
      ) : null}
      {url.github ? (
        <a
          className="w-5 h-5"
          href={url.github}
          target="_blank"
          rel="noreferrer"
        >
          <Icon name={'github'} />
        </a>
      ) : null}
      {url.googleStore ? (
        <a
          className="w-5 h-5"
          href={url.googleStore}
          target="_blank"
          rel="noreferrer"
        >
          <Icon name={'android'} />
        </a>
      ) : null}
      {url.appStore ? (
        <a
          className="w-5 h-5"
          href={url.appStore}
          target="_blank"
          rel="noreferrer"
        >
          <Icon name={'apple'} />
        </a>
      ) : null}
    </div>
  );
}

export default ProjectLinks;
