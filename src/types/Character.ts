import { IStory } from "./Story";

export interface ICharacter {
    name: string;
    id: number;
    comics: {
        items: IStory[];
        available: number;
    };
    series: {
        items: IStory[];
        available: number;
    },
    events: {
        items: IStory[];
        available: number;
    };
    thumbnail: {
        path: string;
        extension: string
    };
    description: string
}