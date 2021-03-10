const app = document.querySelector("#app")

app.innerHTML = `
<div class="preloader">
<div class="loguito"></div>
</div>

<header>
<div class="titulo">
    <select id="selection" onChange="langChange(this)">
    <option value="en">English</option>
    <option value="es">Español</option>
  </select>
    <h1>@devcalabro</h1>
    <h2 lang="en"><mark>Web Developer & Information Designer</mark></h2>
    <h2 lang="es"><mark>Desarrollador Web & Diseñador de la Información</mark></h2>

</div>

</header>

<div class="bio"></div>

<section class="blocks">

<div class="componente design">
    <a onClick="muestra_oculta('contenido')" title=""></a>
    <p lang="en">HUMAN CENTERED <span class="spdesign">Web Design</span></p>
    <p lang="es">DISEÑO WEB <span class="spdesign">Centrado en Humanos</span></p>
</div>
<div class="design projects">
    <div class='card_uno slide' id='contenido'>
        <h2>Gym / Personal Links</h2>
        <p class="subcard" lang="en"> These projects were made in the middle of the covid pandemic, coping with the needs of both artists and businesses to reach people, show their work and shine among the countless offers out there. 
        That's why the designs were planned focusing on usability, always having in mind the client's desire of growing up in the digital field.
        </p> 
        <p class="subcard" lang="es"> Estos proyectos fueron realizados en medio de la pandemia, enfrentando las necesidades tanto de artistas como emprendedores para encontrarse con clientes, mostrar su trabajo y destacar entre las incontables ofertas en la web. 
        Por esta razón, los diseños fueron pensados haciendo foco en la usabilidad y el fácil acceso, siempre teniendo en cuenta el deseo del cliente de crecer en el ámbito digital.
        </p> 
        <div class="slider">
            <img name="slide1">
        </div>
        <ul class="olcard">
            <li lang="en"> Responsive Design </li>
            <li lang="en"> User focused</li>
            <li lang="en"> SEO & Google Analytics applied</li>
            <li lang="es"> Diseño Responsive </li>
            <li lang="es"> Centrado en el usuario</li>
            <li lang="es"> SEO & Google Analytics aplicados</li>
        </ul>
    </div>
</div>


<div class="componente development">
<a title="" onClick="muestra_oculta('contenido2')"></a>
    <p lang="en">JAVASCRIPT FUELED <span class="spdesign">Web Apps</span>
    </p>
    <p lang="es">APLICACIONES WEB <span class="spdesign">Impulsadas por Javascript</span>
    </p>
</div>
<div class="dev projects">
    <div class="card_dos slide" id="contenido2">
        <h2>Matchings Cards / ToDo / Cat Therapy</h2>
        <p class="subcard" lang="en"> These web apps were made with Javascript, a language famous for giving life to websites. However, it is more powerful than that. Here are a few examples: a matching cards game, an app that brings you photos of kittens (to relieve stress, maybe?) through an API, a To Do List, the FrontEnd of an E-commerce and more projects. Check out my gitHub! </p> 
        <p class="subcard" lang="es"> Estas aplicaciones web fueron realizadas para practicar y crear con Javascript. Es un lenguaje famoso por darle vida a los sitios web, sin embargo es mucho más que eso. Acá hay unos ejemplos: un juego de memoria, una app que te brinda fotos de gatitos (para aliviar el stress, ¿quizás?) a través de una API, una lista de tareas, siempre útil, el FrontEnd de un comercio digital y un par de proyectos más. Revisá mi gitHub!
        </p> 
        <div class="slider">
            <img name="slide2">
        </div>
        <ul class="olcard">
        <li lang="en"> ES6+ Syntax / work with APIs</li>
            <li lang="en"> Good practices</li>
            <li lang="en"> Performance & Organization</li>
            <li lang="es"> Elementos y Sintaxis ES6+ / Trabajo con APIs </li>
            <li lang="es"> Buenas prácticas</li>
            <li lang="es"> Rendimiento & organización</li>
        </ul>
    </div>
</div>

<div class="componente ux">
<a title="" onClick="muestra_oculta('contenido3')"></a>
    <p lang="en">USER EXPERIENCE <span class="spdesign"> Study Cases</span></p>
    <p lang="es">EXPERIENCIA DE USUARIO <span class="spdesign">Casos de estudio</span>
    </p>
</div>
<div class="ux projects">
    <div class="card_tres slide" id="contenido3">
        <h2>Futura Box: UX Case</h2>
        <p class="subcard" lang="en"> This is an example of an UX study case. I thought about the problem of the client (reaching new customers) and I've worked on a solution that implied the making of a value proposition canvas, user personas, an inventory of elements and the hierarchy of them, made the information architecture of the project and the presentation of the study case. </p> 
        <p class="subcard" lang="es"> Este es un ejemplo de un caso de estudio de UX. Pensé acerca del problema del cliente (alcanzar nuevos clientes) y he trabajo en una solución que implicó hacer una proposición de valor, los user personas, un inventario de elementos y su jerarquía, creé la arquitectura de la información del proyecto y la presentación del caso de estudio</p> 
        <div class="slider">
            <img name="slide3">
        </div>
        <ul class="olcard">
            <li lang="en"> Human Centered Design </li>
            <li lang="en"> Value Proposition Canvas</li>
            <li lang="en"> Lean UX</li>
            <li lang="es"> Diseño Centrado en Humanos (HCD) </li>
            <li lang="es"> Propuesta de Valor</li>
            <li lang="es"> Lean UX</li>
        </ul>
    </div>
</div>

</section>

<footer>
<div class="ctacontainer">
    <div class="ctagithub">
    <a class="cta" href="https://www.github.com/Punishedvic"><span lang="en"><span lang="es">Ir a mi gitHub</span><span lang="en">Go to GitHub</span></a>
    </div>
    <div class="ctalinkedin">
    <a class="cta" href="https://www.linkedin.com/in/victorcalabro"><span lang="es">Perfil LinkedIn</span><span lang="en">Go to LinkedIn</span></a>
    </div>
    <div class="ctacv">
    <a class="cta" href="./files/cv.pdf"><span lang="en">Check CV</span><span lang="es">Ver Currículum</span></a>
    </div>
</div>

<p lang="en">Designed and developed by Víctor Calabró @ 2021 </p>
<p lang="es">Diseñado y desarrollado por Víctor Calabró @ 2021 </p>

</footer>`


// PRELOADER SCRIPT
window.addEventListener("load", function() {
    const preloader = document.querySelector(".preloader");
    preloader.className += " hidden";
})

// language
function langChange(el) {
    document.body.setAttribute('lang', el.value);
}

document.querySelector('#selection').value = 'en';
document.body.setAttribute('lang', 'en');

// SLIDER CARDS
let i = 0
let images_design = ["./img/juampa.png", "./img/futurabox.png", "/img/futurabox3.png"];
let images_development = ["./img/cattherapy_gif.gif", "./img/MemoTest_gif.gif", "./img/todo_gif.gif"];
let images_ux = ["./img/ai1.png", "./img/ai2.png", "./img/ai3.png", "./img/ai4.png"];
const time = 10000;

function cambiarFoto() {
    document.slide1.src = images_design[i];
    document.slide2.src = images_development[i];
    document.slide3.src = images_ux[i];
    if (i < images_design.length - 1 && i < images_development.length - 1 && images_ux.length - 1) {
        i++
    } else {
        i = 0
    }
    setTimeout("cambiarFoto()", time)
}

cambiarFoto();

// Div animations

function muestra_oculta(id) {
    if (document.getElementById) { //se obtiene el id
        var el = document.getElementById(id); //se define la variable "el" igual a nuestro div
        el.classList.toggle('slide-active');
    }
}

window.onload = function() { /*hace que se cargue la función lo que predetermina que div estará oculto hasta llamar a la función nuevamente*/
    cambiarFoto; /* "contenido_a_mostrar" es el nombre que le dimos al DIV */
}