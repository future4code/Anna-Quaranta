import { validateCharacter, performAttackMock } from './../src/index';
import { Character } from "../src/index"

describe("Test validateCharacter", () => {

    test("validate empty string name", () => {
        const input: Character = {
            name: "",
            health: 1500,
            defense: 400,
            strength: 600
        }

        const result = validateCharacter(input)

        expect(result).toBe(false)
    })

    test("validate health === 0", () => {
        const input: Character = {
            name: "Isabella",
            health: 0,
            defense: 400,
            strength: 600
        }

        const result = validateCharacter(input)

        expect(result).toBe(false)
    })

    test("validate strength === 0", () => {
        const input: Character = {
            name: "Isabella",
            health: 1500,
            defense: 400,
            strength: 0
        }

        const result = validateCharacter(input)

        expect(result).toBe(false)
    })

    test("validate defense === 0", () => {
        const input: Character = {
            name: "Isabella",
            health: 1500,
            defense: 0,
            strength: 500
        }

        const result = validateCharacter(input)

        expect(result).toBe(false)
    })

    test("validate health negative", () => {
        const input: Character = {
            name: "Isabella",
            health: -1,
            defense: 500,
            strength: 500
        }

        const result = validateCharacter(input)

        expect(result).toBe(false)
    })

    test("validate defense negative", () => {
        const input: Character = {
            name: "Isabella",
            health: 10,
            defense: -1,
            strength: 500
        }

        const result = validateCharacter(input)

        expect(result).toBe(false)
    })

    test("validate strength negative", () => {
        const input: Character = {
            name: "Isabella",
            health: 10,
            defense: 500,
            strength: -1
        }

        const result = validateCharacter(input)

        expect(result).toBe(false)
    })

    test("validate character valid", () => {
        const input: Character = {
            name: "Isabella",
            health: 10,
            defense: 500,
            strength: 200
        }

        const result = validateCharacter(input)

        expect(result).toBe(true)
    })
})

describe("Test performAttackMock", () => {
    test("performAttackMock valid", () => {

        const attacker: Character = {
            name: "Isabella",
            health: 1500,
            defense: 200,
            strength: 600
        }

        const defender: Character = {
            name: "Yago",
            health: 1500,
            defense: 400,
            strength: 800
        }

        const mock = jest.fn(() => {
            return true
        })

        performAttackMock(attacker, defender, mock)

        expect(defender.health).toEqual(1300)
        expect(mock).toHaveBeenCalled()
        // expect(mock).toHaveBeenCalledTimes(2)
        expect(mock).toHaveReturnedTimes(2)
    })

    test("performAttackMock invalid", () => {

        const attacker: Character = {
            name: "Isabella",
            health: 1500,
            defense: 500,
            strength: 700
        }

        const defender: Character = {
            name: "Yago",
            health: 0,
            defense: 500,
            strength: 200
        }

        const mock = jest.fn(() => {
            return false
        })

        try {
            performAttackMock(attacker, defender, mock)
        } catch (error) {

            if (error instanceof Error) {
                expect(error.message).toBe("Invalid character")
                expect(mock).toHaveBeenCalled()
                expect(mock).toBeCalledTimes(2)
                expect(mock).toHaveReturnedTimes(2)
            }
        }
    })
})
