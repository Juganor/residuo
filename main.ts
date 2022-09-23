input.onButtonPressed(Button.A, function () {
    Conteo += 1
    if (Conteo % 5 == 0) {
        basic.showString("Pum")
    } else {
        basic.showNumber(Conteo)
    }
})
let Conteo = 0
Conteo = 0
