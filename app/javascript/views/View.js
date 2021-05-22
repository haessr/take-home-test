export default class View {
  _parentElement;
  _data;

  set parentElement(value) {
    this._parentElement = value;
  }

  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0)) {
      return this.renderError();
    }
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }

  renderError(message = this._errorMessage) {
    const markup = `
      <div class="error">
        <p>${message}</p>
      </div> 
    `;

    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
}
