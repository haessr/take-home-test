import { getJSON, truncateString } from "./helpers";
import { GITHUB_API_URL, RESULTS_PER_PAGE, GITHUB_REPO_URL } from "./config";

export const state = {
  commits: [],
  page: 1,
  resultsPerPage: RESULTS_PER_PAGE,
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

export const getCommitResultsPage = function (page = state.page) {
  state.page = page;
  const start = (page - 1) * state.resultsPerPage;
  const end = page * state.resultsPerPage;
  return state.commits.slice(start, end);
};
