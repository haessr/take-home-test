import { getJSON } from "./helpers";
import { GITHUB_API_URL, GITHUB_REPO_URL, RESULTS_PER_PAGE } from "./config";

export const state = {
  commits: [],
  page: 1,
  resultsPerPage: RESULTS_PER_PAGE,
  owner: "haessr",
  repo: "take-home-test",
};

export const loadRepoCommits = async function () {
  try {
    const data = await getJSON(
      `${GITHUB_API_URL}${state.owner}/${state.repo}/commits`
    );
    if (!data) return;

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
    throw error;
  }
};

export const getCommitResultsPage = function (page = state.page) {
  state.page = page;
  const start = (page - 1) * state.resultsPerPage;
  const end = page * state.resultsPerPage;
  return {
    results: state.commits.slice(start, end),
    owner: state.owner,
    repo: state.repo,
  };
};
