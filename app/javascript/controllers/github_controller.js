import { Controller } from "stimulus";
import * as model from "../model";

import commitsView from "../views/commitsView";
import paginationView from "../views/paginationView";

export default class extends Controller {
  static targets = ["inputOwner", "inputRepo", "submitBtn"];

  initialize() {
    commitsView.parentElement = document.querySelector(".results");
    commitsView.addHandlerRender(this.controlAPIResponse);
    paginationView.parentElement = document.querySelector(".pagination");
    paginationView.addHandlerClick(this.controlPagination);
  }

  async controlAPIResponse() {
    await model.loadRepoCommits();
    commitsView.parentElement = document.querySelector(".results");
    commitsView.render(model.getCommitResultsPage());
    paginationView.render(model.state);
  }

  controlPagination(goToPage) {
    commitsView.render(model.getCommitResultsPage(goToPage));
    paginationView.render(model.state);
  }

  controlRefresh() {}

  load() {}

  async refresh() {
    await model.loadRepoCommits();
    commitsView.parentElement = document.querySelector(".results");
    commitsView.render(model.getCommitResultsPage());
    paginationView.parentElement = document.querySelector(".pagination");
    paginationView.render(model.state);
  }

  handleSearch(event) {
    event.preventDefault();
    model.state.owner = this.inputOwnerTarget.value || "haessr";
    model.state.repo = this.inputRepoTarget.value || "take-home-test";
    // console.log(model.state.owner, model.state.repo);
    this.refresh();
  }
}
