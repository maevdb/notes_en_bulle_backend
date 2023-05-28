import { StoriesService } from "../infrastructure/storiesService";
import { Response } from "../infrastructure/types";

export async function createStory(text: string): Promise<Response> {
  return new StoriesService().createStory(text);
}
