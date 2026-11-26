import {results} from "./datas.js"

export const formatDatas = (event) => {
    // const results = await main();
    // Evenement, Description, Adresse, Prix, Accès PMR
    return{
        id:event.event_id,
        date:event.date_description,
        evenement: event.title,
        description: event.lead_text,
        adresse: [event.address_street, event.address_zipCode, event.address_city].join(" "),
        prix: event.price_type,
        accèsPMR: event.pmr,
    };
 }
