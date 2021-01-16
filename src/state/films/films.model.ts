// Dummy model for films - to be used ideally when service is created
export interface Films {
  fields: {
    title: string;
    episode_id: string;
    opening_crawl: string;
    director: string;
    release_date: string;
  };
  loading: boolean;
  error: boolean;
}
