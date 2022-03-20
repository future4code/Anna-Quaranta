export interface Character {
    name: string,
    health: number,
    defense: number,
    strength: number
}

export const validateCharacter = (input: Character): boolean => {

    if (!input || !input.name || !input.health || !input.defense || !input.health) {
        return false
    }

    if (input.health <= 0 || input.strength <= 0 || input.defense <= 0) {
        return false;
    }

    return true
}

const performAttack = (attacker: Character, defender: Character) => {

    const validAttacker = validateCharacter(attacker)

    const validDefense = validateCharacter(defender)

    if (!validAttacker && !validDefense) {
        throw new Error("Invalid character")
    }

    if (defender.defense < attacker.strength) {
        defender.defense -= attacker.strength
    }

}


export const performAttackMock = (attacker: Character, defender: Character, validator: (input: Character) => boolean) => {

    if (!validator(attacker) && !validator(defender)) {
        throw new Error("Invalid character")
    }

    if (defender.defense < attacker.strength) {
        defender.health -= attacker.strength - defender.defense
    }

    //está não recebe diretamente outra função
}




