export const formatData = async () => {
    const results = await main();
    // Evenement, Description, Adresse, Prix, Accès PMR
    return{
        Id:results.event_id,
        Evenement: results.title,
        Description: results.lead_text,
        Adresse: results.address_street + results.address_zipcode + results.address_city,
        Prix: results.price_type,
        AccèsPMR: results.pmr
    }
 }
console.log(formatData())