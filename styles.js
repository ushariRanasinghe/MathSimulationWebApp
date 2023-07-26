const content=document.getElementById("content")
content.addEventListener("click", uncheck);
function uncheck() {
let input = document.getElementById('menu-toggle');
input.checked = false;

}

const activePage=window.location.pathname;
const navlinks=document.querySelectorAll("top-section a").forEach( link => {
    if(link.href.includes(`${activePage}`)){
        link.classList.add("active");
    }
})

MathJax = {
    tex: {
      inlineMath: [['$', '$'], ["\\(", "\\)"]],
    },
    svg: {fontCache:'global'
    }
      
};