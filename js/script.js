jQuery(document).ready(function() {

    let isSuccess = true;

    const   $SUBMIT     = jQuery('input[type=submit]'),
            $CATNAME    = jQuery('#catname'),
            $MESSAGE    = jQuery('#message'),
            $OURCATS    = jQuery('#our_cats');


//----------Validation du formulaire----------

    // Lors du click sur le bouton "envoyer"
   	$SUBMIT.on("click", function(event) {

    	// Suppression du fonctionnement par défaut du bouton (actualisation de la page)
    	event.preventDefault();

    	// Vérification du nom
    	if ($CATNAME.val() == null) {
    		// Si vide : message d'erreur
            $isSuccess = false;
            console.log($isSuccess)
            $CATNAME.css({"border-color" : "#dc3545"});
        } else {
        	// Sinon : succès
        	$isSuccess = true;
            // Vérification du message
            if ($MESSAGE.val().length < 15) {
                // Si la longueur du message est inférieure à 15 caractères : message d'erreur
                $isSuccess = false;
                $MESSAGE.css({"border-color" : "#dc3545"});
            } else {
                // Sinon : succès
                $isSuccess = true;
            }
        }

        // Si tous les champs sont valides
        if($isSuccess) {
            // Message de succès
            jQuery(".form-group").remove();
            jQuery("form").html("Votre message a été envoyé avec succès.").addClass("success");

        	// Réinitialisation des variables
        	$isSuccess = true;

			// Réinitialisation des champs
        	$CATNAME.val("");
        	$MESSAGE.val("");
        }
    });

//----------Bordures des champs----------

    // La bordure du champ reprend sa couleur par défaut lorsque la valeur est changée
    $CATNAME.change(function() {
        jQuery(this).css({"border-color" : "rgb(206, 212, 218)"});
    });
    // La bordure du champ reprend sa couleur par défaut lorsque la valeur est changée
    $MESSAGE.change(function() {
        jQuery(this).css({"border-color" : "rgb(206, 212, 218)"});
    });

//----------Tête de chat----------

    // Tête de chat change de couleur au survol de l'ensemble de la zone
    $OURCATS.mouseover(function() {
        jQuery(this).find("img").addClass("hover");

    });
    // Tête de chat retrouve sa couleur initiale lorsque la souris quitte la section
    $OURCATS.mouseout(function() {
        jQuery(this).find("img").removeClass("hover");

    });
});