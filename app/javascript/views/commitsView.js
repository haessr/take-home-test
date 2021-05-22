import View from "./View";
import { truncateString } from "../helpers";
import { GITHUB_REPO_URL, TITLE_LENGTH } from "../config";

class CommitsView extends View {
  // parentElement = document.querySelector(".results");
  // parentElement;
  _errorMessage = "Something went wrong!";
  // _data;

  addHandlerRender(handlerFunction) {
    ["pageShow", "load"].forEach((event) =>
      window.addEventListener(event, handlerFunction)
    );
  }

  addHandlerRefresh(handlerFunction) {
    // const refreshBtn = document.querySelector(".btn-refresh");
    // refreshBtn.addEventListener("click", function (e) {
    // const btn = e.target.closest(".pagination__btn");
    // if (!btn) return;
    // console.log("Refresh in process");
    // const goToPage = Number(btn.dataset.goto);
    // handlerFunction(goToPage);
    // });
  }

  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join("");
  }

  _generateMarkupPreview(commit) {
    return `
      <li class="list-group-item preview">
        <div class="content row d-flex">
          <div class="section-info">
            <div class="commit-title h6">
              <a href="${commit.url}" target="_blank" class="link-dark">
                ${truncateString(
                  commit.message.split("\n").slice(0, 1).join(""),
                  TITLE_LENGTH
                )}
              </a>
            </div>

            <div class="commit-body">
              ${commit.message
                .split("\n")
                .slice(1)
                .map((block) => {
                  return `<p>${block}</p>`;
                })
                .join("")}
            </div>

            <div class="author-area">
              <div class="autor-area__left">
                <a href="https://github.com/${
                  commit.author_login
                }" target="_blank" class="avatar-link">
                  <img class="avatar" alt="avatar" src="${
                    commit.author_avatar
                  }">
                </a>

                <a href="${GITHUB_REPO_URL}/commits?author=${
      commit.author_login
    }" target="_blank" class="author-link">
                  ${commit.author_login}
                </a>
              </div>

              <div class="autor-area__right">
                <p class="center-p text-muted"> committed on ${commit.date} </p>
              </div>
            </div>
          </div>

          <div class="section-tree">
          <a href="${GITHUB_REPO_URL}/tree/${
      commit.sha
    }" target="_blank" class="btn btn-light">
            <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-code">
    <path fill-rule="evenodd" d="M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z"></path>
</svg>
          </a>
          </div>
        </div>

      </li>
    `;
  }
}

export default new CommitsView();
