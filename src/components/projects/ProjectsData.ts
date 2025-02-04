import { type ProjectType } from "@/types/Types";

export const projectsData: ProjectType[] = [
  {
    id: Math.random(),
    type: "project",
    title: "Flash Card App",
    imageUrl:
      "https://res.cloudinary.com/dlmutdhbp/image/upload/v1738641179/mapa-sonoro_fwfmcl.png",
    link: "https://flashcards.alejoforero.com",
    newWindow:true,
    summary: "ass",
    tech: "React, Redux Toolkit, FastApi, Docker, Nginx",
  },
  {
    id: Math.random(),
    type: "project",
    title: "NetArt",
    imageUrl:
      "https://res.cloudinary.com/dlmutdhbp/image/upload/v1738641178/lineas-de-fuga_hrlqjy.png",
    link: "/netart",
    newWindow:false,
    summary: "Exploring the realm of sound experimentation and the generation of images \
    through code has played a pivotal role in my evolution as a programmer. \
    Click to visit a compilation of the various experiments I've undertaken  \
    in this domain over the past few years along with the projects I've collaborated \
    on with my students at the University",
    tech: "JavaScript, P5Js",
  },
];
