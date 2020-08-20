const $ = require('jquery');

const getPageList = () => {
  $('h2').remove();
  $.get('./api', data => {
    data.forEach(file => {
      $('body').append(`<h2>${file}</h2>`)
    });
  }, 'JSON');
};

getPageList();

$('#create-button').click(() => new Promise((resolve) => resolve($.post('./api/createNewHtmlPage.php', { name: $('input').val() })))
  .then(getPageList)
  .catch(() => alert('Такая страница уже существует!')));

$('#delete-button').click(() => new Promise((resolve) => resolve($.post('./api/deleteHtmlPage.php', { name: $('input').val() })))
  .then(getPageList)
  .catch(() => alert('Такой страницы не существует!')));
