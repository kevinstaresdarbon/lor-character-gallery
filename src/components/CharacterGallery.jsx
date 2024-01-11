import Character from "./Character"
import charData from "../data/characterData.json"

const CharacterGallery = (props) =>
{
    return (charData.map(c => <Character key={c.id} {...c} />))
}

export default CharacterGallery;