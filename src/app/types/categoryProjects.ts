export default interface CategoryProjects {
    readonly id: number;
    readonly title: string;
    readonly description: string;
    readonly image: string;
    readonly projects?: Project[]
}

export interface Project {
    readonly title: string;
    readonly description: string;
    readonly image: string;
    readonly github: string;
    readonly demo: string;
}