
export interface ContainerEvent {
  id: number;
  title: string;
  image: string;
  date: string;
  description: string;
}

export const eventData: ContainerEvent[] = [
  {
    id: 1,
    title: "Soul Vibes",
    image: "/img/band1.jpeg",
    date: "Oct 5, 2025",
    description: "An evening of soulful music and art expression.",
  },
  {
    id: 2,
    title: "Indie Night",
    image: "/img/band2.jpg",
    date: "Oct 7, 2025",
    description: "Showcase of rising indie bands and acoustic sets.",
  },
  {
    id: 3,
    title: "Retro Jam",
    image: "/img/band3.jpeg",
    date: "Oct 10, 2025",
    description: "Throwback vibes with retro visuals and vinyl DJs.",
  },
  {
    id: 4,
    title: "Street Beats",
    image: "/img/band4.jpg",
    date: "Oct 12, 2025",
    description: "Live graffiti, breakdance battles, and hip-hop sets.",
  },
  {
    id: 5,
    title: "Jazz Fusion",
    image: "/img/band5.jpg",
    date: "Oct 14, 2025",
    description: "Modern jazz meets electronic groove in one stage.",
  },
  {
    id: 6,
    title: "NIRBD Reunion",
    image: "/img/band6.jpg",
    date: "Oct 16, 2025",
    description: "Legendary band returns for one epic performance.",
  },
  {
    id: 7,
    title: "Comic Sound",
    image: "/img/band7.jpeg",
    date: "Oct 18, 2025",
    description: "Comic art meets music in a colorful mashup.",
  },
  {
    id: 8,
    title: "Underground Pulse",
    image: "/img/band8.jpg",
    date: "Oct 20, 2025",
    description: "Raw and real underground music showcase.",
  }
];