import axios from 'axios';

class Api {
  getApiUrl(endPoint: string) {
    return `https://api.github.com/users/${endPoint}`;
  }

  getData(endPoint: string) {
    return axios
      .get(this.getApiUrl(endPoint))
      .then((response) => response.data)
      .catch((error) => {
        if (error.response.status === 404) {
          throw new Error(`${error.config.url} not found`);
        }
        throw error;
      });
  }

  async loadUser(username: string) {
    return this.getData(`${username}`);
  }

  async loadRepos(username: string) {
    return this.getData(`${username}/repos`);
  }

  async loadGists(username: string) {
    return this.getData(`${username}/gists`);
  }

  async loadOrgs(username: string) {
    return this.getData(`${username}/orgs`);
  }
}

export default Api;
