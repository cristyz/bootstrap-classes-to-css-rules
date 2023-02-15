import { cssClasses } from './cssClasses';

function generateCss(e) {
  e.preventDefault();
  
  let cssRules = "";
  const bootstrapClasses = document.querySelector('#bootstrap-input').value.split(' ')

  bootstrapClasses.forEach(bsClass => {
    if (cssClasses[bsClass]) cssRules += `${cssClasses[bsClass]}`;
  });

  document.querySelector('#css-output').innerHTML = cssRules;
}

function copyCode() {
  const cssCopiedSuccess = document.querySelector('#css-copied-success');
  const copyText = document.getElementById("css-output");
  copyText.select();
  copyText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyText.value);

  cssCopiedSuccess.classList.remove('d-none');
  setTimeout(() => {
    cssCopiedSuccess.classList.add('d-none');
  }, 3000);
}

document.querySelector('#generate-css').addEventListener('submit', generateCss);
document.querySelector('#copy-css-btn').addEventListener('click', copyCode);