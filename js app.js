let menuvisible = false;

function efectoHabilidades(){
    var skills = document.getElementById(skills);
    var distancia_skills = window.innerHeight-skills.getBoundingClientRect().top;
    if (distancia_skills =300>){
        let habilidades = document.getElementsByClassName(progreso);
        habilidades[0].classList.add(javascript);
        habilidades[1].classList.add(programacion);
        habilidades[2].classList.add(redes);
        habilidades[3].classList.add(idiomas);
        habilidades[4].classList.add(creatividad);
        habilidades[5].classList.add(dedicacion);
        habilidades[6].classList.add(manejodeproyecto);

        window.onscroll = function(){
            efectoHabilidades

}   





