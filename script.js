async function getPokemans(){
    const input = document.getElementById("input").value;
    const tinput = input.toLowerCase();
    
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${tinput}`);
    const d= await res.json();

    const img= document.getElementById("img");
    const imageSrc=d.sprites.front_default;
    img.src=`${imageSrc}`;
    
}
