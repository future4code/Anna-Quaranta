enum GENERO {
	ACAO = "ação",
	DRAMA = "drama",
	COMEDIA = "comédia",
	ROMANCE = "romance",
	TERROR = "terror"
}

type Filme = {
	nome: string,
	anoLancamento: number,
	genero: GENERO
}


const retornaInfoMovies = (nome: string, ano: number, genero: GENERO, pontuacao?: number) => {

	if (pontuacao === undefined) {

		const res: Filme = {
			nome: nome,
			anoLancamento: ano,
			genero: genero
		}

		return res

	} else {
		
		const res: Filme & {pontuacao: number} = {
			nome: nome,
			anoLancamento: ano,
			genero: genero,
			pontuacao: pontuacao
		}

		return res
	}
}

console.log(retornaInfoMovies("Duna", 2021, GENERO.ACAO))



