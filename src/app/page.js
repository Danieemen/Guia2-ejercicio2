import styles from "./page.module.css";
const Equipos = ({ equipos }) => {
return (
<div className={styles.container__list}>
<h2 className={styles.title}>Equipos de Fútbol</h2>
{equipos.map((equipo) => (
<div key={equipo.id}>
<h3 className={styles.nameclub}>{equipo.nombre}</h3>
<ul >
{equipo.plantilla.map((jugador) => (
<li className={styles.container__list} key={jugador.id}>
<strong>{jugador.nombre}</strong>
<p>Altura: {jugador.Altura}m <br></br> Peso:
{jugador.Peso}Kg <br></br>edad: {jugador.edad}</p>
</li>
))}
</ul>
</div>
))}
</div>
);
};
export default function Home() {
// Simula la obtención de datos desde tu JSON
const equiposData = [
{"id": 1,
"nombre": "Real Madrid",
"plantilla":[
{"id": 1,"nombre":"Eden Hazard","Altura":"1.75","Peso":"74","edad":"25"},
{"id": 2,"nombre":"Gonzalo García","Altura":"1.82","Peso":"74","edad":"26"},
{"id": 3,"nombre":"Karim Benzema","Altura":"1.85","Peso":"81","edad":"35"}
]},
{"id": 2,
"nombre": "Barcelona",
"plantilla":[
{"id": 1,"nombre":"Marc-André ter Stegen","Altura":"1.75","Peso":"74Kg","edad":"25"},
{"id": 2,"nombre":"Iñigo Martinez","Altura":"1.82","Peso":"74Kg","edad":"29"},
{"id": 3,"nombre":"Gavi","Altura":"1.85","Peso":"81Kg","edad":"17"}
]},
{"id": 3,
"nombre": "Manchester City",
"plantilla":[
{"id": 1,"nombre":"Phil Foden","Altura":"1.75","Peso":"74Kg","edad":"21"},
{"id": 2,"nombre":"Erling Haaland","Altura":"1.92","Peso":"74Kg","edad":"22"},
{"id": 3,"nombre":"Bernardo Silva","Altura":"1.85","Peso":"81Kg","edad":"15"}
]}
// ... agregar otros equipos
];
return (
<main className={styles.main}>
<div>
<h1>Mi Aplicación de Fútbol</h1>
<Equipos equipos={equiposData} />
</div>
</main>
);
}

