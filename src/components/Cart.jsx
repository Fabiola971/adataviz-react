function Cart({evenement, description, adresse, prix, accèsPMR}){
    return(
        <article className="box">
            <ul className="datas-container">
                <li><span>Evenement: </span>{evenement}</li>
                <li><span>Description: </span>{description}</li>
                <li><span>Adresse: </span>{adresse}</li>
                <li><span>Prix: </span>{prix}</li>
                <li><span>AccèsPMR: </span>{accèsPMR === 1 ? "oui" : "Non renseigné"}</li>
            </ul>
        </article>
    )
}
export default Cart;
