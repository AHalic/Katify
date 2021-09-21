import Status from "./Status.js"
import CatCard from "./CatCard.js";

document.getElementsByClassName("discard-button")[0].addEventListener("onclick", () => {
    card = new CatCard;
    
    // Aparece o modal
    card.status(Status.discarded);
})