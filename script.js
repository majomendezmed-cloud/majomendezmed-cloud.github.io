const toggle=document.getElementById('languageToggle');
let currentLanguage='es';
function setLanguage(language){currentLanguage=language;document.documentElement.lang=language;document.querySelectorAll('[data-es][data-en]').forEach(el=>{const value=el.dataset[language];if(value!==undefined)el.innerHTML=value;});toggle.innerHTML=language==='es'?'ES <span>↔</span> EN':'EN <span>↔</span> ES';toggle.setAttribute('aria-label',language==='es'?'Cambiar idioma a inglés':'Switch language to Spanish');}
toggle.addEventListener('click',()=>setLanguage(currentLanguage==='es'?'en':'es'));
document.getElementById('year').textContent=new Date().getFullYear();
