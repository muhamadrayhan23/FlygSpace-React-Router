export interface ContainerProduct {
    id: number;
    name: string;
    image: string;
}

export const products1: ContainerProduct[] = [
    {
        id: 1,
        name: "Batoid TS",
        image: "/img/batoid-3.jpg",
    },
    {
        id: 2,
        name: "Convenire TS",
        image: "/img/convenire-3.jpg",
    },
    {
        id: 3,
        name: "Pistial TS",
        image: "/img/pistial-3.jpg",
    }
];