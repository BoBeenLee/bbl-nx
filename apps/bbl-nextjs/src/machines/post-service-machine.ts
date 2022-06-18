import { postMachine } from "@bbl-nx/machines";
import { fetchMD } from "../apis/post";

export const postServiceWithConfig = postMachine.withConfig({
    services: {
      fetchMD,
    },
  });