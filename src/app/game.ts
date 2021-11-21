export interface Game {
    name: string,
    cost: number,
}

export const Games: Game[] = [
    {
        name: 'Sonic adventures',
        cost: 4
    },
    {
        name: 'Mario',
        cost: 2
    },
    {
        name: 'Pac-Man',
        cost: 1
    },
    {
        name: 'Donkey Kong',
        cost: 10
    },
]