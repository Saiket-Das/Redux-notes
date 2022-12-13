import { apiCallBegan } from "../api";
import { addBug, bugAdded } from "../bugs";

describe("bugsSlice", () => {
  describe("action creators", () => {
    it("addBug", () => {
      const bug = { describe: "a" };
      const result = addBug(bug);
      const expected = {
        type: apiCallBegan.type,
        payload: {
          url: "/bugs",
          method: "post",
          data: bug,
          onSuccess: bugAdded.type,
        },
      };
      expect(result).toEqual(expected);
    });
  });
});
