import Github from './Github';
import Close from './Close';
import Facebook from './Facebook';
import Instagram from './Instagram';
import Linkedin from './Linkedin';
import { DiAndroid, DiApple } from 'react-icons/di';
import { AiFillHome } from 'react-icons/ai';
import { GoLink as LinkIcon, GoMarkGithub as GithubIcon } from 'react-icons/go';
import {
  MdSearch,
  MdMenu,
  MdClose,
  MdOutlineLightMode,
  MdOutlineNightlight,
} from 'react-icons/md';
import { images } from '@bbl-nx/images';

export const imageIcons = {
  storybook: images.storybook,
} as const;

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
  light: MdOutlineLightMode,
  night: MdOutlineNightlight,
  menu: MdMenu,
  close: MdClose,
  search: MdSearch,
};
