export interface Entity {
    id: string;
}

export interface Choice extends Entity{
    text: string;
    timesChosen: number;
    endWith?: string;
}

export interface Proposition extends Entity{
    text: string;
    timesPresented: number;
    choices: Choice[];
}
