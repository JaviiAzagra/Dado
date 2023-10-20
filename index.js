const div$$ = document.createElement("div");
div$$.className = "box";

const h1$$ = document.createElement("h1");
h1$$.className = "title";
h1$$.textContent = "DADO";

const divContainer$$ = document.createElement("div");
divContainer$$.className = "container";

const dado$$ = document.createElement("div");
dado$$.id = "dado";

const input$$ = document.querySelector(".boton");

const salida$$ = document.createElement("p");
salida$$.id = "salida"

const aPage$$ = document.createElement("a");
aPage$$.className = "portfolio";
aPage$$.textContent = "MADE BY 12jav1";

const divSocial$$ = document.createElement("div");
divSocial$$.className = "social";

const aInsta$$ = document.createElement("a");
const aGithub$$ = document.createElement("a");

aPage$$.href = "https://javierazagra.com"
aInsta$$.href = "https://www.instagram.com/12jav1/";
aGithub$$.href = "https://github.com/JaviiAzagra";
aInsta$$.target="_blank";
aPage$$.target="_blank";
aGithub$$.target="_blank";

const iInsta = document.createElement("i");
iInsta.className= "fa-brands fa-instagram";

const iGithub = document.createElement("i");
iGithub.className= "fa-brands fa-github";

aInsta$$.textContent = "Instagram ";
aGithub$$.textContent = "Github ";

document.body.appendChild(div$$);
div$$.appendChild(h1$$);
div$$.appendChild(divContainer$$);
divContainer$$.appendChild(dado$$);
div$$.appendChild(salida$$);
div$$.appendChild(input$$);
div$$.appendChild(aPage$$);
div$$.appendChild(divSocial$$);
aInsta$$.appendChild(iInsta);
aGithub$$.appendChild(iGithub);
divSocial$$.appendChild(aInsta$$);
divSocial$$.appendChild(aGithub$$);

function lanzardado() {
  let aleatorio = 0;
  aleatorio = Math.floor(Math.random() * 6) + 1;
  console.log(aleatorio);
  if (aleatorio === 1) {
    document.getElementById("dado").style.backgroundImage =
      "url(./assets/dado1.png)";
      document.getElementById("salida").innerHTML = "Resultado: " + aleatorio;  
  } else if (aleatorio === 2) {
    document.getElementById("dado").style.backgroundImage =
      "url(./assets/dado2.png)";
      document.getElementById("salida").innerHTML = "Resultado: " + aleatorio;  
  } else if (aleatorio === 3) {
    document.getElementById("dado").style.backgroundImage =
      "url(./assets/dado3.png)";
      document.getElementById("salida").innerHTML = "Resultado: " + aleatorio;  
  } else if (aleatorio === 4) {
    document.getElementById("dado").style.backgroundImage =
      "url(./assets/dado4.png)";
      document.getElementById("salida").innerHTML = "Resultado: " + aleatorio;  
  } else if (aleatorio === 5) {
    document.getElementById("dado").style.backgroundImage =
      "url(./assets/dado5.png)";
      document.getElementById("salida").innerHTML = "Resultado: " + aleatorio;  
  } else if (aleatorio === 6) {
    document.getElementById("dado").style.backgroundImage =
      "url(./assets/dado6.png)";
      document.getElementById("salida").innerHTML = "Resultado: " + aleatorio;  
  }
};
