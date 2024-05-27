const validation=(data : any)=>{

    const errors={}

    // formulaire de creation du restaurant
    const name_pattern= /^[A-Za-z0-9]+$/
    const city_pattern= /^[A-Za-z0-9]+$/i
    const nbcouv_pattern= /^[0-9]+$/
    const parking_pattern= /^(oui|non)$/i
    const terrasse_pattern= /^(oui|non)$/i;
   
    
    if(!data.name){
        errors.name='le nom est requis';
    }
    else if(!name_pattern.test(data.name)){
        errors.name='le nom ne peut contenir que des lettres et des lettres'
    }else if(data.name.length < 2){
        errors.name='le nom doit comporter pluse deux caracteres'
    }


    if(!data.city){
        errors.city='la ville est requise'
    }else if(!city_pattern.test(data.city)){
        errors.city='la ville ne peut contenir que des lettes de "A-Z" et les nombre de "0-9"'
    }

    if(!data.nbcouverts){
        errors.nbcouverts='le nombre de couverts est requis'
    }else if(!nbcouv_pattern.test(data.nbcouverts)){
        errors.nbcouverts='ce champs ne peut contenir que des nombres'
    }


    if(!data.parking){
        errors.parking='ce champs est requis'
    }else if(!parking_pattern.test(data.parking)){
        errors.parking='vous ne pouvez repondre que par OUI/NON'
    }

    if(!data.terrasse){
        errors.terrasse='ce champs est requis'
    }else if(!terrasse_pattern.test(data.terrasse)){
        errors.terrasse='vous ne pouvez repondre que par OUI/NON"'
    }

    // formulaire de creation de l'employe

    const first_name_pattern= /^[A-Za-z]+$/i
    const last_name_pattern= /^[A-Za-z]+$/i;


    if(!data.first_name){
        errors.first_name='le champs prenom est requis'
    }else if(!first_name_pattern.test(data.first_name)){
        errors.first_name= "le champs prenom n'accepte que des lettres"
    }

    if(!data.last_name){
        errors.last_name='le champs prenom est requis'
    }else if(!last_name_pattern.test(data.last_name)){
        errors.last_name= "le champs prenom n'accepte que des lettres"
    }


    if(!data.hire_date){
        errors.hire_date="la date d'embauche est requise";
    }

    if(!data.restaurant_id){
        errors.restaurant_id="veuillez selectionner un restaurant";
    }


    

    return errors;
}

export default validation;