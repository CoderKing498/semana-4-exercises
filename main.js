
const url = "http://localhost:3005/"
const usuario = document.getElementById("usuario")
const email = document.getElementById("email")
const edad = document.getElementById("edad")
const btn = document.getElementById("btn")
const salida = document.getElementById("usuario")

btn.addEventListener("click", async () => {
    const data = {
        nombre: usuario.value,
        email: email.value,
        edad: Number(edad.value)
    }

    try {
    const respuesta = await fetch(`${url}usuarios`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    const resultado = await respuesta.json()
    salida.innerHTML = `Guardado: ${JSON.stringify(resultado)}`

}catch (error){
    alert("NO se pudo conectar al servidor")
    console.error("error")
    }
})
