const gerarAnagrama = (palavra: string): number | string => {

    let resp = 1;
    let rep: boolean[] = []

    for (let i = 0; i < palavra.length; i++) {
        for (let j = i + 1; j < palavra.length; j++) {
            if (palavra[i] === palavra[j]) {
                rep.push(true)
            }
        }
    }

    if (rep.length === 0 && palavra.length === 0) {
        return 1

    } else if (rep.length === 0 && palavra.length > 0) {
        for (let i = palavra.length; i > 0; i--) {
            resp *= i
        }
        return resp

    } else {
        return "Existem letras iguais. Escolha outra palavra!"
    }
}

console.log(gerarAnagrama("mesa"))