const btn = document.getElementById("btn");
const animeContainer = document.querySelector(".anime-container");
const animeImg = document.querySelector(".anime-img");
const animeName = document.querySelector(".anime-name");

btn.addEventListener("click", async function () {
    try {
        animeImg.src = "spinner.svg";
        const response = await fetch("https://api.unsplash.com/photos/random?client_id=CkFO60TcgMR858-Cf0V_iIXrNGaRMVGS17HJwh-0bNo&query=anime");
        const data = await response.json();
        btn.innerText = "Get animes";
        animeContainer.style.display = "block";
        animeImg.src = data.links.download;
        animeName.innerText = data.alt_description;
    } catch (error) {
        console.log(error);
        btn.disabled = false;
        btn.innerText = "Get anime";
        animeName.innerText = "An error happened, please try again";
    }
});
