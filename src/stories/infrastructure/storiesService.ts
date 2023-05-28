import { Response } from "./types";

export class StoriesService {
  public async createStory(text: string): Promise<Response> {
    const wasContentFilled = Boolean(text.length);
    return {
      success: wasContentFilled,
      message: wasContentFilled
        ? "the story was created successfully."
        : "the story's content can't be empty.",
    };
  }
}
