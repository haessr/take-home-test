import { Controller } from "stimulus";
// import { GITHUB_REPO_URL } from "../config";
import * as model from "../model";

export default class extends Controller {
  initialize() {
    console.log(`Accessing commits`);
    // this.load();
  }

  async load() {
    await model.loadRepoCommits();
    console.log(model.state.commits);
  }
}
