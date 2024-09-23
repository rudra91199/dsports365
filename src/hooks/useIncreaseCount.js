import { makeRequest } from "../axios";

export const useIncreaseCount = async (id, count) => {
  console.log(id, count);
  const data = await makeRequest.put("/posts/updateCount", {
    id: id,
    count: count + 1,
  });
};
