import {cellLives} from "./cellSurvival";

describe("Cell Survival", () =>
{
    it("is live, has 1 live neighbour: dies", () => {
        const result = cellLives(1,1);
        expect(result).toBe(false)
    })

    it("is live, has 0 live neighbour: dies", () => {
        const result = cellLives(1,0);
        expect(result).toBe(false)
    })

    it("is live, has 4 neighbours: dies", () => {
        const result = cellLives(1,4);
        expect(result).toBe(false)
    })

    it("is live, has 8 neighbours: dies", () => {
        const result = cellLives(1,8);
        expect(result).toBe(false)
    })

    it("is live, has 2 neighbours: lives", () => {
        const result = cellLives(1,2);
        expect(result).toBe(true)
    })

    it("is live, has 3 neighbours: lives", () => {
        const result = cellLives(1,3);
        expect(result).toBe(true)
    })

    it("is dead, has 3 neighbours: lives", () => {
        const result = cellLives(0,3);
        expect(result).toBe(true)
    })

}) 