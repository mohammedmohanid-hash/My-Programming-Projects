const display = document.getElementById('display');
document.querySelectorAll('[data-value]').forEach(button => {
  button.addEventListener('click', () => { display.value += button.dataset.value; });
});
document.getElementById('clear').addEventListener('click', () => { display.value = ''; });
document.getElementById('equals').addEventListener('click', () => {
  // Accept only basic arithmetic characters before evaluating.
  if (!/^[0-9+*/.\-() ]+$/.test(display.value)) {
    display.value = 'Invalid input';
    return;
  }
  try {
    const result = Function('"use strict"; return (' + display.value + ')')();
    display.value = Number.isFinite(result) ? String(result) : 'Error';
  } catch {
    display.value = 'Error';
  }
});
