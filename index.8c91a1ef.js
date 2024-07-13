var t=document.querySelector(".wall"),e=document.querySelector(".spider");document.addEventListener("click",function(c){if(c.target===t){var i=t.clientWidth,n=t.clientHeight,a=e.clientWidth,l=e.clientHeight,o=c.offsetX,r=c.offsetY;e.style.left="".concat(Math.max(0,Math.min(o-a/2,i-a)),"px"),e.style.top="".concat(Math.max(0,Math.min(r-l/2,n-l)),"px")}});
//# sourceMappingURL=index.8c91a1ef.js.map
