import { Controller } from "stimulus";
// import { GITHUB_REPO_URL } from "../config";
import * as model from "../model";

import commitsView from "../views/commitsView";
import paginationView from "../views/paginationView";

export default class extends Controller {
  initialize() {
    console.log(`Accessing commits`);
    commitsView.addHandlerRender(this.controlAPIResponse);
  }

  connect() {
    console.log(`Connected`);
  }

  async controlAPIResponse() {
    await model.loadRepoCommits();
    commitsView.parentElement = document.querySelector(".results");
    // commitsView.render(model.state.commits);
    commitsView.render(model.getCommitResultsPage());
    paginationView.parentElement = document.querySelector(".pagination");
    // paginationView.render(model.state.commits);
    // console.log(model.state.commits);
  }

  controlPagination() {}
}
