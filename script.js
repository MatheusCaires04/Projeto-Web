document.querySelector(".hamburguer").addEventListener("click", () =>  
    document.querySelector(".container").classList.toggle("show--menu")
)

document.querySelector("#qtde").addEventListener("change", updatePrice)
document.querySelector("#js").addEventListener("change", updatePrice)
document.querySelector("#layout--sim").addEventListener("change", updatePrice)
document.querySelector("#layout--nao").addEventListener("change", updatePrice)
document.querySelector("#prazo").addEventListener("change", () => {
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
    updatePrice()
})

function updatePrice() {
    const qtde = document.querySelector("#qtde").value
    const haveJS = document.querySelector("#js").checked
    const includeLayout = document.querySelector("#layout--sim").checked
    const prazo = document.querySelector("#prazo").value

    let price = qtde * 100

    if (haveJS) price *= 1.1
    if (includeLayout) price += 500

    let urgencyRate = 1 - prazo*0.1

    price *= 1 + urgencyRate
    
    document.querySelector("#price").innerHTML = `R$ ${price.toFixed(2)}` 
}

