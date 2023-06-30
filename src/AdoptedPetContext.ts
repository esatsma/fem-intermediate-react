import { createContext } from "react";
import { Pet } from "./APIResponsesTypes";

const AdoptedPetContext = createContext<[Pet | null, (adoptedPet: Pet) => void]>([
    {
        id: 666,
        name: "Apollo",
        animal: "dog",
        description: "Lorem Ipsum",
        breed: "Beagle",
        images: [],
        city: "Portland",
        state: "Oregon"
    },
    () => {}
]);

export default AdoptedPetContext;
