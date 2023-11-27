import ck from "./Images/citronkaka.png"
import dk from "./Images/dumlekaka.png"
import kk from "./Images/kladdkaka.png"
import kok from "./Images/kolakakor.png"
import sk from "./Images/sockerkaka.png"

export function getRecipes() {

    return [
        {   title: "Citronkaka",
            path: "a",
            image: ck,
            ingredients: ["long ingredient", "ing2"],
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            link: ""
        },        
        {   title: "Dumlekaka",
            path: "b",
            image: dk,
            ingredients: ["ing5", "ing2"],
            description: "Desc2",
            link: ""
        },        
        {   title: "Kladdkaka",
            path: "c",
            image: kk,
            ingredients: ["ing5", "ing2"],
            description: "Desc2",
            link: ""
        },        
        {   title: "Kolakaka",
            path: "d",
            image: kok,
            ingredients: ["ing5", "ing2"],
            description: "Desc2",
            link: ""
        },        
        {   title: "Sockerkaka",
            path: "e",
            image: sk,
            ingredients: ["ing5", "ing2"],
            description: "Desc2",
            link: ""
        }
    ]


}