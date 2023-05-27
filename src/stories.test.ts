import { it, expect, describe } from "@jest/globals";
import { createStory } from "./stories/domain/storyCreation";

describe("Testing stories creation", () => {
  it("should create a story", async () => {
    expect(await createStory("phrase")).toEqual(true);
  });
  it("should not create a story", async () => {
    expect(await createStory("")).toEqual(false);
  });
});
