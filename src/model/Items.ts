export interface Items {
      id: number,
      node_id: string,
      name: string,
      full_name: string,
      owner: {
        login: string,
        id: number,
        node_id: string,
        avatar_url: string,
        gravatar_id: number,
        url: string,
        received_events_url: string,
        type: string
      },
      private: boolean,
      html_url: string,
      description: string,
      fork: boolean,
      url: string,
      created_at: Date,
      updated_at: string,
      pushed_at: string,
      homepage: string,
      size: number,
      stargazers_count: number,
      watchers_count: number,
      language: string,
      forks_count: number,
      open_issues_count: number,
      master_branch: string,
      default_branch: string,
      score: number
}

