let texto = document.getElementById("Pelicula");
const comediaPeliculas = {
    menor: [
        "Toy Story", "Shrek", "Kung Fu Panda", "Frozen", "Moana",
        "Zootopia", "Finding Nemo", "The Incredibles", "The Lion King",
        "Despicable Me", "Minions", "Cars", "The SpongeBob SquarePants Movie",
        "Ice Age", "Ratatouille", "Monsters, Inc.", "Madagascar", "Brave",
        "Tangled"
    ],
    medio: [
        "Back to the Future", "Ghostbusters", "Ferris Bueller's Day Off",
        "The Princess Bride", "Groundhog Day", "Dumb and Dumber", "Anchorman",
        "Superbad", "The Hangover", "Napoleon Dynamite", "Shaun of the Dead",
        "Hot Fuzz", "Bridesmaids", "The Grand Budapest Hotel", "Airplane!",
        "Freaky Friday", "School of Rock", "Elf", "The Lego Movie",
        "Austin Powers: International Man of Mystery"
    ],
    mayor: [
        "Deadpool", "The Big Lebowski", "This Is Spinal Tap", "Annie Hall",
        "Caddyshack", "Dazed and Confused", "The Blues Brothers",
        "Ferris Bueller's Day Off", "Anchorman", "Superbad", "The Hangover",
        "Bridesmaids", "The Grand Budapest Hotel", "Airplane!", "Django Unchained",
        "Inglourious Basterds", "The Wolf of Wall Street", "Fight Club",
        "Pulp Fiction", "The Dark Knight"
    ]
};

const dramaPeliculas = {
    menor: [
        "The Lion King", "Finding Nemo", "Coco", "The Incredibles",
        "Toy Story", "Shrek", "Kung Fu Panda", "Frozen", "Moana",
        "Zootopia", "Despicable Me", "Minions", "Cars", "The SpongeBob SquarePants Movie",
        "Ice Age", "Ratatouille", "Monsters, Inc.", "Madagascar", "Brave",
        "Tangled"
    ],
    medio: [
        "Forrest Gump", "The Shawshank Redemption", "Titanic",
        "The Green Mile", "American Beauty", "A Beautiful Mind", "The Social Network",
        "The Pursuit of Happyness", "Good Will Hunting", "Atonement", "The Departed",
        "The Great Gatsby", "The Godfather", "Pulp Fiction", "Schindler's List",
        "The Silence of the Lambs", "The Deer Hunter", "Casablanca", "Gladiator",
        "Braveheart"
    ],
    mayor: [
        "The Godfather", "Pulp Fiction", "Fight Club", "The Dark Knight",
        "American History X", "Scarface", "Taxi Driver", "A Clockwork Orange",
        "Apocalypse Now", "The Shawshank Redemption", "The Departed", "Requiem for a Dream",
        "The Silence of the Lambs", "Goodfellas", "The Green Mile", "Schindler's List",
        "The Deer Hunter", "Casablanca", "Gladiator", "Braveheart"
    ]
};

const musicalPeliculas = {
    menor: [
        "The Little Mermaid", "Aladdin", "Beauty and the Beast", "Frozen", "Moana",
        "Zootopia", "Toy Story", "Shrek", "Kung Fu Panda", "Despicable Me",
        "Minions", "Coco", "The Incredibles", "The Lion King", "Cats",
        "High School Musical", "The Sound of Music", "Mary Poppins", "The Jungle Book",
        "Mulan"
    ],
    medio: [
        "Les Misérables", "Chicago", "La La Land", "Mamma Mia!", "Grease",
        "West Side Story", "The Phantom of the Opera", "Rent", "Hair",
        "Rock of Ages", "A Star is Born", "Evita", "The Greatest Showman",
        "Into the Woods", "Sweeney Todd: The Demon Barber of Fleet Street",
        "Annie", "Fame", "The Rocky Horror Picture Show", "Footloose", "Dirty Dancing"
    ],
    mayor: [
        "Rent", "Cabaret", "Rock of Ages", "A Star is Born", "La La Land",
        "Chicago", "Moulin Rouge!", "The Phantom of the Opera", "Les Misérables",
        "Hair", "The Rocky Horror Picture Show", "Evita", "Sweeney Todd: The Demon Barber of Fleet Street",
        "Across the Universe", "Dreamgirls", "Once", "Hedwig and the Angry Inch",
        "The Producers", "The Blues Brothers", "The Greatest Showman"
    ]
};

const crimenPeliculas = {
    menor: [
        "Despicable Me", "The Incredibles", "Minions", "Toy Story", "Shrek",
        "Kung Fu Panda", "Frozen", "Moana", "Zootopia", "Finding Nemo",
        "The SpongeBob SquarePants Movie", "Cars", "Ice Age", "Ratatouille",
        "Monsters, Inc.", "Madagascar", "Brave", "Tangled", "The Lion King",
        "Coco"
    ],
    medio: [
        "The Godfather", "The Departed", "Pulp Fiction", "Se7en", "The Silence of the Lambs",
        "Heat", "Fight Club", "No Country for Old Men", "Memento", "The Dark Knight",
        "Reservoir Dogs", "Casino", "The Usual Suspects", "Training Day", "The Big Lebowski",
        "Goodfellas", "Scarface", "Taxi Driver", "American History X", "The Departed"
    ],
    mayor: [
        "The Silence of the Lambs", "Reservoir Dogs", "Goodfellas", "Scarface",
        "Pulp Fiction", "Se7en", "The Departed", "No Country for Old Men", "Heat",
        "Fight Club", "American History X", "Memento", "The Dark Knight", "The Usual Suspects",
        "Training Day", "Casino", "Taxi Driver", "The Big Lebowski", "Sin City", "The Godfather"
    ]
};


function Edad() {
    let edad = document.getElementById("edad").value;
if  (edad < 13){
    return "menor"

}else{
    if(edad < 16){
        return "medio"

    }if(edad >= 16){
        return "mayor"

    }
}
}




function Comedia() {
    let edadGrupo = Edad();
    let peliculaElegida = obtenerPeliculaAleatoria(comediaPeliculas[edadGrupo]);
    texto.textContent = peliculaElegida;
}

function Drama() {
    let edadGrupo = Edad();
    let peliculaElegida = obtenerPeliculaAleatoria(dramaPeliculas[edadGrupo]);
    texto.textContent = peliculaElegida;
}

function Musical() {
    let edadGrupo = Edad();
    let peliculaElegida = obtenerPeliculaAleatoria(musicalPeliculas[edadGrupo]);
    texto.textContent = peliculaElegida;
}

function Crimen() {
    let edadGrupo = Edad();
    let peliculaElegida = obtenerPeliculaAleatoria(crimenPeliculas[edadGrupo]);
    texto.textContent = peliculaElegida;
}
function obtenerPeliculaAleatoria(array) {
    const indiceAleatorio = Math.floor(Math.random() * array.length);
    return array[indiceAleatorio];
}
