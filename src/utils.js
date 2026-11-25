import {results} from "./datas.js"

export const formatDatas = (event) => {
    // const results = await main();
    // Evenement, Description, Adresse, Prix, Accès PMR
    return{
        id:event.event_id,
        evenement: event.title,
        description: event.lead_text,
        adresse: [event.address_street, results.address_zipcode, results.address_city].filter(Boolean).join(" "),
        prix: event.price_type,
        accèsPMR: event.pmr,
    };
 }
