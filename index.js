import{S as m,i as a}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const u="https://pixabay.com/api/",h="48409293-cb4f9d519a51e4cf248f48e36";function p(s){const o=new URLSearchParams({key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return console.dir(o),fetch(`${u}?${o}`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()})}function g(s){return s.map(({webformatURL:o,largeImageURL:t,tags:l,likes:e,views:r,comments:i,downloads:f})=>` <li class="gallery-list">
          <a class="gallery-link" href="${t}">
          <img class="gallery-img" src="${o}" alt="${l}" width="360" loading="lazy"></img></a>
            <ul class="inform-list">
              <li class="inform-iteam">
                <h3 class="inform-title">Likes:</h3>
                <p class="inform-par">${e}</p>
              </li>
              <li class="inform-iteam">
                <h3 class="inform-title">Views:</h3>
                <p class="inform-par">${r}</p>
              </li>
              <li class="inform-iteam">
                <h3 class="inform-title">Comments:</h3>
                <p class="inform-par">${i}</p>
              </li>
              <li class="inform-iteam">
                <h3 class="inform-title">Downloads:</h3>
                <p class="inform-par">${f}</p>
              </li>
            </ul>
        </li>`).join("")}const d=document.querySelector(".form"),c=document.querySelector(".gallery"),n=document.querySelector(".loader");n.style.display="none";const y=new m(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),F=s=>{s.preventDefault();let o=s.target.elements.query.value.trim();if(console.dir(o),c.innerHTML="",!o){a.show({backgroundColor:"#EF4040",message:"Enter the data for the search!",messageColor:"#FFFFFF",position:"topRight"});return}n.style.display="flex",p(o).then(t=>{console.log(t),console.log(t.hits.length),console.log(t.hits),t.hits.length===0&&a.show({title:"",backgroundColor:"#EF4040",messageColor:"#FFFFFF",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.insertAdjacentHTML("beforeend",g(t.hits)),y.refresh(),n.style.display="none"}).catch(t=>{console.log(t.message)}).finally(()=>s.target.reset())};d.addEventListener("submit",F);
//# sourceMappingURL=index.js.map
