const search = document.querySelector(".search");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () =>{
    const url = "https://www.google.com/search?hl=pt-PT&sxsrf=APwXEdcF2J5sxhiftQKkxS36HjahAb-kcg:1684271883825&q=" + search.value;
    window.open(url,"_self");
})

search.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        const url = "https://www.google.com/search?hl=pt-PT&sxsrf=APwXEdcF2J5sxhiftQKkxS36HjahAb-kcg:1684271883825&q=" + search.value
        search.click()
        window.open(url,"_self")
    }
})