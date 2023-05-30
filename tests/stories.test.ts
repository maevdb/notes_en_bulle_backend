import { it, expect, describe } from "@jest/globals";
import { createStory } from "../src/stories/domain/storyCreation";

describe("Testing stories creation", () => {
  it("should create a story", async () => {
    expect(await createStory("phrase")).toEqual({
      success: true,
      message: "the story was created successfully.",
    });
  });
  it("should not create a story", async () => {
    expect(await createStory("")).toEqual({
      success: false,
      message: "the story's content can't be empty.",
    });
  });
});
