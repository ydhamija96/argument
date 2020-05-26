export interface EntityT {
    id: string;
}

export interface ChoiceT extends EntityT{
    text: string;
    timesChosen: number;
    endWith?: string;
}

export interface PropositionT extends EntityT{
    text: string;
    timesPresented: number;
    choices: ChoiceT[];
}
