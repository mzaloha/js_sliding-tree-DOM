'use strict';

const tree = document.querySelector('.tree');
const list = document.querySelectorAll('li');

list.forEach(el => {
  if (el.children.length) {
    const span = document.createElement('span');

    el.prepend(span);
    span.append(span.nextSibling);
  }
});

tree.addEventListener('click', e => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  e.target.nextSibling.hidden = !e.target.nextSibling.hidden;
});
