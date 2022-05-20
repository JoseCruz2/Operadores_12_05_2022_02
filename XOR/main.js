let A = (prompt("Ingrese el valor de la variable A\n false\n true") == "true") ? true : false;



document.querySelector("#operadorAND").insertAdjacentHTML("beforeend", `
    <tr class="resultado">
        <td>${A}</td>
        <td>${!A}</td>
    </tr>
`);
