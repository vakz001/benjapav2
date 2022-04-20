var miArreglo = [];

function cargarArreglo() {
  var txt = document.getElementById('txtNum').value;
  if (isNaN(txt)) return;
  miArreglo.push(parseFloat(txt));
  document.getElementById('txtNum').value = '';
  cargarTablaHTML();
}

function cargarTablaHTML() {
  var tabla = document.getElementById('miTabla');
  var filas = '';
  for (let index = 0; index < miArreglo.length; index++) {
    filas += `<tr>
            <td>${miArreglo[index]}</td>
            <td><input type="button" value="Ver" class="btn btn-info" onclick="verValorArreglo(${index})"></td>
            <td><input type="button" value="Eliminar" class="btn btn-warning" onclick="eliminarValorArreglo(${index})"></td>
        </tr>`;
    console.log('miArreglo[' + index + '] =' + miArreglo[index]);
  }
  tabla.innerHTML = filas;
}

function eliminarValorArreglo(index) {
  if (window.confirm('Desea Eliminarlo?')) {
    miArreglo.splice(index, 1);
    cargarTablaHTML();
  }
}

function verValorArreglo(index) {
  window.alert(
    'el valor del arreglo ' + (index + 1) + ' es ' + miArreglo[index]
  );
}
