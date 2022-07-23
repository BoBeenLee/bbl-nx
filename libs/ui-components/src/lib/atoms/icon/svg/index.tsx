import Github from './Github';
import Close from './Close';
import Facebook from './Facebook';
import Instagram from './Instagram';
import Linkedin from './Linkedin';
import OutlineLightMode from './OutlineLightMode';
import OutlineNightlight from './OutlineNightlight';
import DiAndroid from '@react-icons/all-files/di/DiAndroid';
import DiApple from '@react-icons/all-files/di/DiApple';
import AiFillHome from '@react-icons/all-files/ai/AiFillHome';
import LinkIcon from '@react-icons/all-files/go/GoLink';
import GithubIcon from '@react-icons/all-files/go/GoMarkGithub';
import MdSearch from '@react-icons/all-files/md/MdSearch';
import MdMenu from '@react-icons/all-files/md/MdMenu';
import MdClose from '@react-icons/all-files/md/MdClose';

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
  light: OutlineLightMode,
  night: OutlineNightlight,
} as const;

export const reactIcons = {
  android: DiAndroid.DiAndroid,
  apple: DiApple.DiApple,
  link: LinkIcon.GoLink,
  github: GithubIcon.GoMarkGithub,
  home: AiFillHome.AiFillHome,
  menu: MdMenu.MdMenu,
  close: MdClose.MdClose,
  search: MdSearch.MdSearch,
} as const;
