export const initSelectAll = () => {
  const selectAll = document.querySelector('input#select_all');

  if (!selectAll) {
    return;
  }

  const items = Array.from(document.querySelectorAll('input[name="select_item"]'));

  selectAll.addEventListener('change', (evt) => {
    items.forEach((it) => {
      it.checked = evt.target.checked;
    });
  });
};