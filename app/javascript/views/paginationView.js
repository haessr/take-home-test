import View from "./View";

class PaginationView extends View {
  addHandlerClick(handlerFunction) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".pagination__btn");
      if (!btn) return;

      const goToPage = Number(btn.dataset.goto);
      handlerFunction(goToPage);
    });
  }

  _generateMarkup() {
    const currentPage = this._data.page;
    const numPages = Math.ceil(
      this._data.commits.length / this._data.resultsPerPage
    );
    // Page 1, and there are other pages
    if (currentPage === 1 && numPages > 1) {
      return `
          <button class="btn btn-primary pagination__btn pagination__btn--prev" data-goto="${
            currentPage + 1
          }">
            <span>Page ${currentPage + 1} &gt;</span>
          </button>
      `;
    }
    // Last page
    if (currentPage === numPages && numPages > 1) {
      return `
          <button class="btn btn-primary pagination__btn pagination__btn--prev" data-goto="${
            currentPage - 1
          }">
            <span>&lt; Page ${currentPage - 1}</span>
          </button>
      `;
    }
    // Other page
    if (currentPage < numPages) {
      return `
          <button class="btn btn-primary pagination__btn pagination__btn--prev" data-goto="${
            currentPage - 1
          }">
            <span>&lt; Page ${currentPage - 1}</span>
          </button>
          <button class="btn btn-primary pagination__btn pagination__btn--prev" data-goto="${
            currentPage + 1
          }">
            <span>Page ${currentPage + 1} &gt;</span>
          </button>
      `;
    }
    // Page 1, and there are NO other pages
    return "";
  }
}

export default new PaginationView();
