function openModal(modalId, text) {
  document.getElementById(`modal-text${modalId}`).textContent = text;
  document.getElementById(`modal${modalId}`).style.display = 'flex';
}

function closeModalByClick(event, modalId) {
  const modal = document.getElementById(`modal${modalId}`);
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}

function closeModalByButton(modalId) {
  document.getElementById(`modal${modalId}`).style.display = 'none';
}