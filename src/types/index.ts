export type UserType = {
  id: number;
  login: string;
  name: string;
  avatar_url: string;
  html_url: string;
  bio: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  twitter_username: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
};

export type RepoType = {
  id: number;
  name: string;
  full_name: string;
  description: string;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
  language: string;
};

export type GistType = {
  id: string;
  description: string;
  comments: number;
};

export type OrganizarionType = {
  id: number;
  login: string;
  description: string;
};
