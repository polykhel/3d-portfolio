export interface ProjectModel {
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  sourceCodeLink: string;
}
