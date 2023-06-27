import { useState } from "react"

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"]

const SearchParams = () => {
    const [location, setLocation ] = useState("")
    const [animal, setAnimal] = useState("")
    const [breed, setBreed] = useState("")
    const breeds = []

    const handleChange = (e) => {
        setLocation(e.target.value)
    }

    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input onChange={handleChange} id="location" value={location} placeholder="Location" />
                </label>
                <label htmlFor="animal">
                    animal
                    <select id="animal" value={animal} onChange={ e=> {
                        setAnimal(e.target.value)
                        setBreed("")
                    }} >
                        <option />
                        {ANIMALS.map(animal => (
                            <option key={animal}>{animal}</option>
                        ))}
                    </select>
                </label>
                <label htmlFor="breed">
                    breed
                    <select id="breed" value={breed} disabled={breeds.length === 0} onChange={ e=> {
                        setBreed(e.target.value)
                    }} >
                        <option />
                        {breeds.map(breed => (
                            <option key={breed}>{breed}</option>
                        ))}
                    </select>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams