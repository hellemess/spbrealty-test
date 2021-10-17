export const initEmptyButton = () => {
  const emptyButton = document.querySelector( 'button.empty-card' );

    if ( !emptyButton ) {
      return;
    }

    emptyButton.addEventListener('click', () => {
      document.querySelector('ul.items').innerHTML = '';
    });
};