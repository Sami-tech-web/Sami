// Simple JS for year and mobile menu
document.addEventListener('DOMContentLoaded', function(){
  var yearEls = ['year','year2','year3','year4'];
  yearEls.forEach(function(id){
    var el = document.getElementById(id);
    if(el) el.textContent = new Date().getFullYear();
  });

  function toggleMenu(btnId){
    var btn = document.getElementById(btnId);
    if(!btn) return;
    btn.addEventListener('click', function(){
      var menu = document.querySelector('.menu');
      if(menu.style.display === 'flex') menu.style.display = '';
      else menu.style.display = 'flex';
    });
  }
  toggleMenu('burger');
  toggleMenu('burger2');
  toggleMenu('burger3');
  toggleMenu('burger4');
});
