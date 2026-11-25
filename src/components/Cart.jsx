import { useState } from "react";

function Cart({evenement, description, adresse, prix, accèsPMR, date}){
    const [open, setOpen] = useState(false);
    return(
        <article className="box">
            <ul className="datas-container">
                <li><span>Evenement: </span>{evenement}</li>
                <li><span>Description: </span>{description}</li>
                <li><span>Adresse: </span>{adresse}</li>
                <li><span>Prix: </span>{prix}</li>
                <li><span>AccèsPMR: </span>{accèsPMR === 1 ? "oui" : "Non renseigné"}</li>
            </ul>
            <div className="button-container">
                <button type="button" onClick={() => setOpen(!open)}>{open ? "Hide Date" : "Save The Date"}</button>
                {open && <p>{date === null ? " date à venir" : date}</p>}
            </div>
        </article>
    )
}
export default Cart;
