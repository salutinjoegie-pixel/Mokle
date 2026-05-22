/* theme.js — shared across all pages */
(function(){
  const THEMES=['dark','purple','white'];
  function applyTheme(t){
    document.documentElement.setAttribute('data-theme',t);
    localStorage.setItem('mauchly-theme',t);
    document.querySelectorAll('.theme-btn').forEach(b=>{
      b.classList.toggle('active', b.dataset.theme===t);
    });
  }
  document.querySelectorAll('.theme-btn').forEach(btn=>{
    btn.addEventListener('click',()=>applyTheme(btn.dataset.theme));
  });
  const saved=localStorage.getItem('mauchly-theme')||'dark';
  applyTheme(saved);

  /* Mark active nav link */
  const page=location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.nav-links a').forEach(a=>{
    if(a.getAttribute('href')===page) a.classList.add('active');
  });
})();
