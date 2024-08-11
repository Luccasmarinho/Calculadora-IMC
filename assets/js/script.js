const weight = document.querySelector("#input-weight");
const height = document.querySelector("#input-height");
const form = document.querySelector("form");
const resultImc = document.querySelector(".result-imc");
const resultMsg = document.querySelector(".result-msg");

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const weightNumber = Number(weight.value)
    const heightNumber = Number(height.value)

    if (isNaN(weightNumber) || isNaN(heightNumber)) {
        alert("Ocorreu um erro. Digite apenas números!!!")
        return
    } 

    const imc = weightNumber / (heightNumber * heightNumber)
    document.querySelector("#hidden").classList.remove("hidden")

    resetClass(resultImc, ["red", "green", "yellow", "white"]);

     if (imc >= 18.5 && imc <= 24.99) {
        addClassMessage("green", "Você está no peso ideal!", imc);

    } else if (imc >= 25 && imc <= 29.99) {
        addClassMessage("yellow", "SOBREPESO", imc)

    } else if (imc >= 30 && imc <= 39.99) {
        addClassMessage("red", "OBESIDADE", imc)

    } else if (imc >= 40) {
        addClassMessage("red", "OBESIDADE GRAVE", imc)

    } else {
        addClassMessage("white", "MAGREZA", imc)
    }
});

const addClassMessage = (classColor, msg, imc) => {
    resultImc.classList.add(classColor)
    resultImc.innerHTML = `${imc.toFixed(2)}`
    resultMsg.innerHTML = `${msg}!`
}

const resetClass = (element, classes) => {
    classes.forEach((className) => element.classList.remove(className))
}