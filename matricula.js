var tdTotalCursos = document.getElementById('total-cursos');
var tdTotalHoras = document.getElementById('total-horas');

var totalHoras = 0;
var totalCursos = 0;

function adicionaCurso(checkbox) {
    console.log(checkbox);

    if (checkbox.checked) { //marquei
        totalCursos += 1;
        totalHoras += parseInt(checkbox.value);

    } else { //desmarquei
        totalCursos -= 1
        totalHoras -= parseInt(checkbox.value);
    }

    tdTotalHoras.textContent = totalHoras + ' h(s)'
    tdTotalCursos.textContent = totalCursos + ' curso(s)'
}


function confirmaMatricula() {
    if (totalCursos > 0) {
        alert('Matricula confirmada')

    } else {
        alert('Selecione pelo menos 1 curso')

    }

}