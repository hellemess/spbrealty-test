export const initDeleteSelected = () => {
  const deleteButton = document.querySelector('button.delete');

  if (!deleteButton) {
    return;
  }

  deleteButton.addEventListener('click', () => {
    Array.from(document.querySelectorAll('input[name="select_item"]:checked')).forEach((it) => {
      it.closest('li').remove();
    });
  });
};