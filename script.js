
const caja = document.getElementById('caja');

//Arranca desde 1 porque si se coloca el 0 el link de las imagenes no funciona. por eso se pone <=826 para que cuente el número
for (let i = 1; i <=826; i++) {

    //Función que recibe 3 parámetros y devuelve la manera en cómo se debe visualizar
    const createPost = (name, message, imageURL) => {
        return `<div class="card"><img class=img src="${imageURL}" alt="Characters_Rick_&_Morty"><h2 class="txtH2" >${name}</h2> <p class="txtp" >${message}</p> </div>`;
    }

    const name = "Character "+i;
    const message = "Esta es mi publicación número "+i+". Esto es una prueba (de lo que sufrí) de generación de relleno por medio de funciones y ciclos";
    const imageURL = `https://rickandmortyapi.com/api/character/avatar/${i}.jpeg`;
    const generarCard = createPost(name, message, imageURL);

   caja.innerHTML = caja.innerHTML + generarCard;
}
