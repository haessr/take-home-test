import { getJSON, truncateString } from "./helpers";
import { GITHUB_API_URL, RESULTS_PER_PAGE, GITHUB_REPO_URL } from "./config";

export const state = {
  commits: [],
};

export const loadRepoCommits = async function () {
  try {
    const data = await getJSON(`${GITHUB_API_URL}/commits`);
    state.commits = data.map((row) => {
      return {
        url: row.html_url,
        message: row.commit.message,
        author_avatar: row.author.avatar_url,
        author_login: row.author.login,
        date: new Date(row.commit.author.date).toLocaleString(),
        sha: row.sha,
      };
    });
  } catch (error) {
    console.error(error);
  }
};
