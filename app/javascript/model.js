import { getJSON } from "./helpers";
import { GITHUB_REPO_URL } from "./config";

export const state = {
  commits: [],
};

export const loadRepoCommits = async function () {
  try {
    state.commits = await getJSON(`${GITHUB_REPO_URL}`);
  } catch (error) {
    console.error(error);
  }
};
