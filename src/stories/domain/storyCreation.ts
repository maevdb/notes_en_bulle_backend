import { StoriesInterface } from "../infrastructure/storiesInterface";
import { Response } from "../infrastructure/types";

export async function createStory(text: string): Promise<Response> {
  return new StoriesInterface().createStory(text);
}
