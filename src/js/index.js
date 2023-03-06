$(document).ready(function () {
  $('.header-burger').click(function (event) {
    $('.header-burger,.menu-list').toggleClass('active');
    $('body').toggleClass('lock');
  });
});
