import { postsPlop } from './tools/generators/plop-templates/posts/plopfile.mjs';
import { uiComponentsPlop } from './tools/generators/plop-templates/ui-components/plopfile.mjs';

export default function (plop) {
  postsPlop(plop);
  uiComponentsPlop(plop);
}
