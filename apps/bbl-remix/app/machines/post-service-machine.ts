import { postMachine } from '@bbl-nx/machines';
import { fetchMD, fetchTistories } from '../apis/post';

export const postServiceWithConfig = postMachine.withConfig({
  services: {
    fetchMD,
    fetchTistories,
  },
});
