const search = document.getElementById("search");
const list_makanan = document.getElementById("list_makanan");
const button_search = document.getElementById("search_button");
const dropdownfilter = document.querySelector(".pilihan")
const divlabel = document.querySelector(".none_item")
const Beranda = document.querySelectorAll(".Beranda")
const menu_nav = document.querySelectorAll(".menu_nav")
const search_nav = document.querySelectorAll(".search_nav")
const beranda_a = document.querySelector(".Beranda_a")
const menu_a = document.querySelector(".Menu_a")
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

const daerahh2 = document.querySelector(".da2")
const daerahh3 = document.querySelector(".da3")
const nh3v2 = document.querySelector(".h3nm2")
const nh3v3 = document.querySelector(".h3nm3")

const gm2 = document.querySelector(".gm2")
const gm3 = document.querySelector(".gm3")

const btnb = document.querySelector(".deskrip-div-btn")

const deskrip1 = document.querySelector(".deskrip1")
const deskrip2 = document.querySelector(".deskrip2")
const deskrip3 = document.querySelector(".deskrip3")

const about = document.querySelectorAll(".aboutme")
const abouta = document.querySelector(".about_a")

const home = document.querySelectorAll(".home")
const home_a = document.querySelector(".home_a")

const fav = document.querySelectorAll(".favorit-div")
const favlist = document.querySelector(".list-fav")
const fav_a = document.querySelector(".disukai")
const h1fav = document.querySelector(".mknfav")

const btnfav = document.querySelector(".btnfav")
const spanlove = document.querySelector(".spanlove")

let nav_type = 1;

let isclicked = false;
let clickedd = false;
let mouseon = false;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
};
let favlists = JSON.parse(localStorage.getItem("favlist")) || [];
let makananSekarang = null;


const api_key = process.env.SUPABASE_API_KEY;
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
        fav.forEach(fav => {
            favlist.style = "display: grid;"
            h1fav.style = "display: flex;"
        });

        Beranda.forEach(Beranda => {
            Beranda.style = "display: flex;"
        })

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

btnb.addEventListener("click", (event) => {
    ambildatabtn(btnb.id);

    Beranda.forEach(Beranda => {
        Beranda.style = "display: none;"
    });
    

});

deskrip2.addEventListener("click", (event) => {
    ambildatabtn(deskrip2.id);

    Beranda.forEach(Beranda => {
        Beranda.style = "display: none;"
    });


});

deskrip3.addEventListener("click", (event) => {
    ambildatabtn(deskrip3.id);

    Beranda.forEach(Beranda => {
        Beranda.style = "display: none;"
    });


});



favlist.addEventListener("click", async (event) => {
    if (event.target.classList.contains("item_div_button")) {
        const btndivv = event.target;
        console.log(btndivv.id);

        favlist.classList.add("aback")
        favlist.style = "animation: trans2back 2s ease;"

        console.log("dimulai")

        await sleep(2000)
        favlist.style = "display: none;"
        ambildatabtn(btndivv.id)
        
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

fav_a.addEventListener("click", () => {
    fav.forEach(fav => {
        fav.style = "display: flex;"
    });
    h1fav.style = "display: flex;"
    favlist.style = "display: grid;"
    home.forEach(home => {
        home.style = "display: none;"
    });
    about.forEach(abot => {
        abot.style = "display: none;"
    });
    menu_nav.forEach(menu => {
        menu.style = "display: none;"
    });
    penjelasan.forEach((p) => {
        p.style = "display: none;"
    });
    simpanfav();
    
});

btnfav.addEventListener("click", () => {
    if (makananSekarang === null) return;

    const id = Number(makananSekarang);

    if (favlists.includes(id)) {
        favlists = favlists.filter((favId) => favId !== id);
        spanlove.classList.remove("terlist");
        console.log("makanan tidak disukai: " + id);
    } else {
        favlists.push(id);
        spanlove.classList.add("terlist");
        console.log("makanan disukai: " + id);
    }
    localStorage.setItem("favlist", JSON.stringify(favlists));
    console.log("Daftar makanan favorit: " + favlists);
    
});


function navigationmenu() {
    console.log(nav_type);
    if (nav_type == 1) {
        Beranda.forEach(beranda => {
            beranda.style = "display: flex;"
        });
        penjelasan.forEach(p => {
            p.style = "display: none"
        })
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
        penjelasan.forEach(p => {
            p.style = "display: none"
        });
        list_makanan.style = "display: grid;"
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
    });
    fav.forEach(fav => {
        fav.style = "display: none;"
    });
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
    });
    fav.forEach(fav => {
        fav.style = "display: none;"
    });
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
            + encodeURIComponent(search.value.trim()) + "*&order=nama.asc";
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

    let random = Math.floor(Math.random() * 20) + 1;

    let random2;
    do {
        random2 = Math.floor(Math.random() * 20) + 1;
    } while (random2 === random);

    let random3;
    do {
        random3 = Math.floor(Math.random() * 20) + 1;
    } while (
        random3 === random ||
        random3 === random2
    );

    console.log(random, random2, random3);

    const data = await ambilMakanan(random);
    const data2 = await ambilMakanan(random2);
    const data3 = await ambilMakanan(random3);

    async function ambilMakanan(id) {
        const url = `https://pnplibrcrxgpguxpufmz.supabase.co/rest/v1/kuliner?select=*&id=eq.${id}`;

        const respon = await fetch(url, {
            headers: {
                "apikey": api_key
            }
        });

        return await respon.json();
    }

    data.forEach(d => {
        deskrip1.id = d.id;
        gmbr.src = d.image_url;
        daerahh.textContent = d.daerah;
        nh3.textContent = d.nama;
    });

    data2.forEach(d => {
        deskrip2.id = d.id;
        gm2.src = d.image_url;
        nh3v2.textContent = d.nama;
        daerahh2.textContent = d.daerah;
    });

    data3.forEach(d => {
        deskrip3.id = d.id;
        gm3.src = d.image_url;
        nh3v3.textContent = d.nama;
        daerahh3.textContent = d.daerah;
    });
}

    async function ambildatabtn(id) {
        let url = `https://pnplibrcrxgpguxpufmz.supabase.co/rest/v1/kuliner?select=*&id=eq.${id}`;
        const respon = await fetch(url, {
            headers: {
                "apikey": api_key
            }
        });

        makananSekarang = id;

        const data = await respon.json();

        console.log(data);

        data.forEach((d) => {
            imgpj.src = d.image_url;
            nmkn.textContent = d.nama;
            kotas.textContent = d.daerah;
            kalor.textContent = "Kalori : " + d.kalori_kcal;
            deskripss.textContent = d.deskripsi;
        });

        if (favlists.includes(Number(id))) {
            spanlove.classList.add("terlist");
        } else {
            spanlove.classList.remove("terlist");
        }
        penjelasan.forEach((p) => {
            p.style = "display: none;"
        });
    

        await sleep(1000)

        penjelasan.forEach((p) => {
            p.style = "display: flex;"
        });
        h1fav.style = "display: none;"
        favlist.style = "display: none;"
    }

async function simpanfav() {
    favlist.innerHTML = "";

    if (favlists.length === 0) {
        favlist.innerHTML = "<p>Tidak ada makanan favorit.</p>";
        return;
    }

    const ids = favlists.join(",");

    let url = `https://pnplibrcrxgpguxpufmz.supabase.co/rest/v1/kuliner?select=*&id=in.(${ids})`;
    const respon = await fetch(url, {
        headers: {
            "apikey": api_key
        }
    });


    const data = await respon.json();

    console.log(data, "fav");

    data.forEach((d) => {
        const div = document.createElement("div");

        div.classList.add("makanan");
        div.setAttribute("role", "button");
        div.className = "item_div_button";
        div.id = d.id;
        div.style.backgroundImage =
            `url('${d.image_url}')`;

        div.innerHTML = `
            <h3>${d.nama}</h3>
            <p>${d.daerah}</p>
        `;

        div.style.backgroundImage = `url('${d.image_url}')`;
        favlist.appendChild(div);

        
    });
}

randomimage()

navigationmenu()

provinsidrpdwn()

searchMakanan()



