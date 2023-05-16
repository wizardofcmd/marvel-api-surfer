export interface Root {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: Data;
}

export interface Data {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Result[];
}

export interface Result {
  id: number;
  title: string;
  name: string;
  fullName: string;
  description: string | undefined;
  modified: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  urls: Url[];
  textObject: Description;
}

export interface Description {
  type: string;
  language: string;
  text: string;
}

export interface Thumbnail {
  path: string;
  extension: string;
}

export interface Url {
  type: string;
  url: string;
}
