

//lookafter this is ok or not

async function fetchDate() {
    try{
        const pokemonName=document.getElementById("pokemonName").value.toLowerCase();
        const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if(!response.ok){
            throw new Error("could not find the resource");
            
        }
        const data=await response.json();
        const pokemonsprite=data.sprites.front_default;
         console.log(pokemonsprite)
        const imgElement=document.getElementById("pokemonsprite");
        imgElement.src=pokemonsprite;
       
        imgElement.style.display="block";


    }
    catch(error){
        console.error(error);

    }
    
}
