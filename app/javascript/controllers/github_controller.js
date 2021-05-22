import { Controller } from "stimulus";
// import { GITHUB_REPO_URL } from "../config";
import * as model from "../model";

import commitsView from "../views/commitsView";
import paginationView from "../views/paginationView";

export default class extends Controller {
  initialize() {
    console.log(`Accessing commits`);
    commitsView.addHandlerRender(this.controlAPIResponse);
    // commitsView.addHandlerClick(this.controlRefresh);
    paginationView.parentElement = document.querySelector(".pagination");
    paginationView.addHandlerClick(this.controlPagination);
  }

  // connect() {
  //   console.log(`Connected`);
  // }

  async controlAPIResponse() {
    await model.loadRepoCommits();
    commitsView.parentElement = document.querySelector(".results");
    commitsView.render(model.getCommitResultsPage());
    // paginationView.parentElement = document.querySelector(".pagination");
    paginationView.render(model.state);
  }

  controlPagination(goToPage) {
    // Render NEW commits
    commitsView.render(model.getCommitResultsPage(goToPage));
    // console.log("click");
    // Render NEW pagination buttons
    paginationView.render(model.state);
  }

  controlRefresh() {}

  load() {}

  async refresh() {
    console.log("refresh btrn click");
    await model.loadRepoCommits();
    commitsView.parentElement = document.querySelector(".results");
    commitsView.render(model.getCommitResultsPage());
    paginationView.parentElement = document.querySelector(".pagination");
    paginationView.render(model.state);
  }
}
