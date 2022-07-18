import { blogMachine } from '@bbl-nx/features';
import { fetchMD, fetchTistories } from '../apis/blog';

export const blogServiceWithConfig = blogMachine.withConfig({
  services: {
    fetchMD,
    fetchTistories
  },
});
