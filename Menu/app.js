const dark = document.querySelector(".dark");
const night = document.querySelector(".night");
const light = document.querySelector(".light");
const sidebar = document.querySelector(".sidebar");
const activeList  =document.querySelector(".list-item.active");
dark.addEventListener("click",()=>{

    sidebar.className="sidebar";
    activeListItem =".list-item active"
})
night.addEventListener("click",()=>{

    sidebar.className="sidebar night";
    activeListItem =".list-item active"
}

)
light.addEventListener("click",()=>{

    sidebar.className="sidebar light";
    activeListItem =".list-item active light"
}

)