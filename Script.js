const search = document.getElementById("search");
const list_makanan = document.getElementById("list_makanan");
const button_search = document.getElementById("search_button");
const dropdownfilter = document.querySelector(".pilihan")
const divlabel = document.querySelector(".none_item")
const Beranda = document.querySelectorAll(".Beranda")
const menu_nav = document.querySelectorAll(".menu_nav")
const search_nav = document.querySelectorAll(".search_nav")
const beranda_a = document.querySelector(".Beranda_a")
const menu_a = document.querySelectorAll(".Menu_a")
const search_a = document.querySelector(".Search_a")
const menulist = document.querySelector(".menu_list")
const gmbr = document.querySelector(".gmbrmakanan")


const penjelasan = document.querySelectorAll(".penjelasan")
const imgpj = document.querySelector(".img_pj")
const nmkn = document.querySelector(".nmakanan_h2")
const kotas = document.querySelector(".kota_pj")
const kalor = document.querySelector(".kaloris")
const deskripss = document.querySelector(".p_penjelasan")
const btnpj = document.querySelector(".btnpj")

const p_b = document.querySelectorAll(".p_deskrip")
const nh3 = document.querySelector(".h3_nama")
const kalori = document.querySelector(".kalori")
const daerahh = document.querySelector(".daerahh")


const about = document.querySelectorAll(".aboutme")
const abouta = document.querySelector(".about_a")

const home = document.querySelectorAll(".home")
const home_a = document.querySelector(".home_a")

let nav_type = 1;

let isclicked = false;
let clickedd = false;
let mouseon = false;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}


api_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBucGxpYnJjcnhncGd1eHB1Zm16Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODczNTc2OTUsImV4cCI6MjEwMjkzMzY5NX0.uMswo0T5YFh0Oc4An5VLNW5hu0lOra8wNZD3ZCKFP58";
var A = 1

penjelasan.forEach((p) => {
    p.style = "display: none;"
});


button_search.addEventListener("click", () => {
    
    searchMakanan();
});

penjelasan.forEach((penjelasan) => {
    btnpj.addEventListener("click", async () => {
        penjelasan.classList.add('animback1');
        penjelasan.style = "animation: color 5s ease infinite, besarkecil1 2s ease;"
        await sleep(2000)
        list_makanan.classList.remove("aback")
        list_makanan.style = "display: ;"
        penjelasan.style = "display: none;"

        penjelasan.classList.remove('animback1');
    });
});


list_makanan.addEventListener("click", async (event) => {
    if (event.target.classList.contains("item_div_button")) {
        const btndivv = event.target;
        console.log(btndivv.id);

        list_makanan.classList.add("aback")
        list_makanan.style = "animation: trans2back 2s ease;"

        console.log("dimulai")

        await sleep(2000)
        
        ambildatabtn(btndivv.id)
        list_makanan.style = "display: none;"
    }
});

dropdownfilter.addEventListener("change", () => {
    const pilihann = dropdownfilter.value;

    console.log(pilihann);

    filter(pilihann)
});

beranda_a.addEventListener("click", () => {

    nav_type = 1;
    navigationmenu();
});

menu_a.addEventListener("click", () => {
    if (isclicked) {
        menu_nav.forEach(menu => {
            menu.style = "display: none;"
        });
        menu_a.forEach(menu => {
            menu.classList.remove("putar")
        });

        isclicked = false;
    } else {
        menu_nav.forEach(menu => {
            menu.style = "display: flex;"
        });
        menu_a.forEach(menu => {
            menu.classList.add("putar")
        });
        
        isclicked = true;
    }
   
});

menu_a.addEventListener("click", () => {
    if (isclicked) {
        menu_nav.forEach(menu => {
            menu.style = "display: none;"
        });
        isclicked = false;
    } else {
        menu_nav.forEach(menu => {
            menu.style = "display: flex;"
        });

        isclicked = true;
    }

});


search_a.addEventListener("click", () => {
    nav_type = 3;
    navigationmenu();
});

abouta.addEventListener("click", () => {
    abotme()
})

home_a.addEventListener("click", () => {
    homes()
})


function navigationmenu() {
    console.log(nav_type);
    if (nav_type == 1) {
        Beranda.forEach(beranda => {
            beranda.style = "display: flex;"
        });
        menu_nav.forEach(menu => {
            menu.style = "display: none;"
        });
        search_nav.forEach(search => {
            search.style = "display: none;"
        });

    } else if (nav_type == 2) {
        menu_nav.forEach(menu => {
            menu.style = "display: flex;"
        });

    } else if (nav_type == 3) {
        search_nav.forEach(search => {
            search.style = "display:;"
        });
        Beranda.forEach(beranda => {
            beranda.style = "display: none;"
        });
        menu_nav.forEach(menu => {
            menu.style = "display: none;"
        });
    }

}

function homes() {
    about.forEach(abot => {
        abot.style = "display: none;"
    });

    menu_nav.forEach(menu => {
        menu.style = "display: none;"
    });

    home.forEach(home => {
        home.style = "display: ;"
    })
}

function abotme() {
    about.forEach(abot => {
        abot.style = "display: flex;"
    });

    menu_nav.forEach(menu => {
        menu.style = "display: none;"
    });

    home.forEach(home => {
        home.style = "display: none;"
    })
}

async function searchMakanan() {
    divlabel.innerHTML = "";
    const lbl = document.createElement("label");
    let clickk = 0;
    list_makanan.innerHTML = "";

    let url;
    if (search.value.trim() == "") {
        url = "https://pnplibrcrxgpguxpufmz.supabase.co/rest/v1/kuliner?select=*"
    } else {
        url = "https://pnplibrcrxgpguxpufmz.supabase.co/rest/v1/kuliner?select=*&nama=ilike.*"
        +  encodeURIComponent(search.value.trim()) + "*&order=nama.asc";
    }

    const respon = await fetch(url, {
        headers: {
            "apikey": api_key
        }
    });


    const data = await respon.json();

    console.log(data);


    data.forEach(makanan => {

        const div = document.createElement("div");

        div.classList.add("makanan");
        div.setAttribute("role", "button");
        div.className = "item_div_button";
        div.id = makanan.id;

        div.style.backgroundImage = `url('${makanan.image_url}')`;

        div.innerHTML = `
            <h3>${makanan.nama}</h3>
            <p>${makanan.daerah}</p>
        `;

        list_makanan.appendChild(div);

    });

    if (data.length == "") {

        lbl.className = "tidak_ditemukan";
        lbl.textContent = "Tidak Ditemukan " + "'" + search.value.trim() + "'";

        divlabel.appendChild(lbl);
        console.log("tidak ada " + search.value);
        

    } else { 
        divlabel.innerHTML = "";
    }
}

async function filter(pilihann) {
    const url = "https://pnplibrcrxgpguxpufmz.supabase.co/rest/v1/kuliner?select=*&provinsi=ilike.*" + encodeURIComponent(pilihann);

    list_makanan.innerHTML = "";

    const respon = await fetch(url, {
        headers: {
            "apikey": api_key
        }
    });
    console.log(url);

    const data = await respon.json();

    console.log(data);

    data.forEach(makanan => {

        const div = document.createElement("div");

        div.classList.add("makanan");
        div.setAttribute("role", "button");
        div.className = "item_div_button";
        div.id = makanan.id;

        div.style.backgroundImage = `url('${makanan.image_url}')`;

        div.innerHTML = `
            <h3>${makanan.nama}</h3>
            <p>${makanan.daerah}</p>
        `;

        list_makanan.appendChild(div);


    });

}

async function provinsidrpdwn() {
    const provinsi_set = new Set()
    const url = "https://pnplibrcrxgpguxpufmz.supabase.co/rest/v1/kuliner?select=provinsi"
    list_makanan.innerHTML = "";
    const respon = await fetch(url, {
        headers: {
            "apikey": api_key
        }
    });
    console.log(url);

    const data = await respon.json();

    console.log(data);

    data.sort((a, b) => a.provinsi.localeCompare(b.provinsi));

    data.forEach(daerah => { 
        if (provinsi_set.has(daerah.provinsi)) { 
            return
        }
        provinsi_set.add(daerah.provinsi)
        const option = document.createElement("option")

        option.className = "provinsi-option";
        option.value = daerah.provinsi;
        option.textContent = daerah.provinsi;

        dropdownfilter.appendChild(option);

    })

}

async function randomimage() {
    list_makanan.innerHTML = "";

    const random = Math.floor(Math.random() * 20) + 1;
    console.log(random)

    let url = `https://pnplibrcrxgpguxpufmz.supabase.co/rest/v1/kuliner?select=*&id=eq.${random}`;
    const respon = await fetch(url, {
        headers: {
            "apikey": api_key
        }
    });


    const data = await respon.json();

    console.log(data);

    data.forEach(d => {
        gmbr.src = d.image_url;
        p_b.textContent = d.deskripsi;
        daerahh.textContent = "dari : " + d.daerah;
        nh3.textContent = d.nama;
        kalori.textContent = d.porsi + " = " + d.kalori_kcal + "Kalori";
    })

}

async function ambildatabtn(id) {
    let url = `https://pnplibrcrxgpguxpufmz.supabase.co/rest/v1/kuliner?select=*&id=eq.${id}`;
    const respon = await fetch(url, {
        headers: {
            "apikey": api_key
        }
    });


    const data = await respon.json();

    console.log(data);

    data.forEach((d) => {
        imgpj.src = d.image_url;
        nmkn.textContent = d.nama;
        kotas.textContent = d.daerah;
        kalor.textContent = "Kalori : " + d.kalori_kcal;
        deskripss.textContent = d.deskripsi;
    });
    penjelasan.forEach((p) => {
        p.style = "display: none;"
    });

    await sleep(1000)

    penjelasan.forEach((p) => {
        p.style = "display: flex;"
    });
}

randomimage()

navigationmenu() 

provinsidrpdwn()

searchMakanan()



