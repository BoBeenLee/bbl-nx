import Github from './Github';
import Close from './Close';
import Facebook from './Facebook';
import Instagram from './Instagram';
import Linkedin from './Linkedin';
import { DiAndroid, DiApple } from 'react-icons/di';
import { AiFillHome } from 'react-icons/ai';
import { GoLink as LinkIcon, GoMarkGithub as GithubIcon } from 'react-icons/go';

export const svgIcons = {
  github: Github,
  close: Close,
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
} as const;

export const reactIcons = {
  android: DiAndroid,
  apple: DiApple,
  link: LinkIcon,
  github: GithubIcon,
  home: AiFillHome,
};
