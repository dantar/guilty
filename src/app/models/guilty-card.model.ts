export class GuiltyCard {
    suspect: string;
    severity: number;
    revealed: boolean;
    confirmed?: boolean;
    available?: boolean;
    cost?: number;
}

export class SuspectCard {
    suspect: string;
    guilty: number;
    accused: boolean;
}