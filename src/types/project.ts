export interface ProjectLinks {
  frontend?: string;
  backend?: string;
  deploy?: string;
}

export interface Project {
  title: string;
  description: string;
  stack: string[];
  urlImg?: string; 
  featured: boolean;
  links: ProjectLinks;
}
