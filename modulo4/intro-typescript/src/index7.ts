const transcriptarDNA = (dna: string): string => {
    let rna: string = "";
    const objectDna: { [index: string]: string } = {
        'A': "U",
        'T': "A",
        'C': "G",
        'G': "C"
    }

    for (let i: number = 0; i < dna.length; i++) {
        rna += objectDna[dna[i]]
    }

    return rna
}

console.log(transcriptarDNA("ATTGCTGCGCATTAACGACGCGTA"))