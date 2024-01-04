// first page
const firstPage = {
    page: document.querySelector('.first-page'),
    btn: document.querySelector('.first-page-btn'),
    opacityPage:()=>{
        firstPage.page.classList.add('is-opacity');
        setTimeout(()=> {
            firstPage.page.style.display = 'none'
        }
, 400)
    }
}
firstPage.btn.addEventListener('click', firstPage.opacityPage)