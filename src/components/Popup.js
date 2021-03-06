export class Popup {
  constructor(popupElement) {
    this._popupElement = document.querySelector(popupElement);
    this._handleEscClose = this._handleEscClose.bind(this)
  }
  open() {
    document.addEventListener('keydown', this._handleEscClose);
    this._popupElement.classList.add('popup_opened');
  }

  close() {
    document.removeEventListener('keydown', this._handleEscClose);
    this._popupElement.classList.remove('popup_opened');
  }

  _handleEscClose(evt) {
      if (evt.key === 'Escape') {
        this.close()
      }
  }

  setEventListeners() {
    this._popupElement.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button')) {
        this.close();
      }
    });
  }
};