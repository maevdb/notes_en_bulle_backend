export class StoriesService {
  public createStory(text: string): boolean {
    return Boolean(text.length);
  }
}
