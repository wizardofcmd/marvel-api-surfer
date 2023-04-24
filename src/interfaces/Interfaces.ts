export interface Root {
  code: number
  status: string
  copyright: string
  attributionText: string
  attributionHTML: string
  etag: string
  data: Data
}

export interface Data {
  offset: number
  limit: number
  total: number
  count: number
  results: Result[]
}

export interface Result {
  id: number
  name: string
  description: string
  modified: string
  thumbnail: Thumbnail
  resourceURI: string
  comics: Comics
  series: Series
  stories: Stories
  events: Events
  urls: Url[]
}

export interface Thumbnail {
  path: string
  extension: string
}

export interface Comics {
  available: number
  collectionURI: string
  items: ComicItems[]
  returned: number
}

export interface ComicItems {
  resourceURI: string
  name: string
}

export interface Series {
  available: number
  collectionURI: string
  items: SeriesItems[]
  returned: number
}

export interface SeriesItems {
  resourceURI: string
  name: string
}

export interface Stories {
  available: number
  collectionURI: string
  items: StoriesItems[]
  returned: number
}

export interface StoriesItems {
  resourceURI: string
  name: string
  type: string
}

export interface Events {
  available: number
  collectionURI: string
  items: EventsItems[]
  returned: number
}

export interface EventsItems {
  resourceURI: string
  name: string
}

export interface Url {
  type: string
  url: string
}
