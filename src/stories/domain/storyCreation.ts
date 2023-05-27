import { StoriesService } from "../infrastructure/storiesService";

export async function createStory(text: string): Promise<boolean> {
  return new StoriesService().createStory(text);
}
