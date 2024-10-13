document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.input');
    const contents = {
        'projet-actuel': document.getElementById('projet-actuel-content'),
        'projet-futur': document.getElementById('projet-futur-content'),
        'ancien-projet': document.getElementById('ancien-projet-content'),
    };

    // Fonction pour afficher le contenu correspondant
    function showContent(selectedId) {
        // Masquer tous les contenus
        Object.values(contents).forEach(content => {
            content.style.display = 'none';
        });

        // Afficher le contenu correspondant au bouton sélectionné
        if (contents[selectedId]) {
            contents[selectedId].style.display = 'block';
        }
    }

    // Ajouter un écouteur d'événement pour chaque bouton radio
    tabs.forEach(tab => {
        tab.addEventListener('change', function () {
            showContent(this.id);
        });
    });

    // Afficher le contenu du bouton radio sélectionné par défaut
    const checkedInput = document.querySelector('.input:checked');
    if (checkedInput) {
        showContent(checkedInput.id);
    }
});
