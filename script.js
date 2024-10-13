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

document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.input');
    const contents = {
        'membre-bg': document.getElementById('membre-bg-content'),
        'membre-tech': document.getElementById('membre-tech-content'),
        'membre-com': document.getElementById('membre-com-content'),
    };

    function showContent(selectedId) {
        Object.keys(contents).forEach(id => {
            contents[id].classList.add('hidden');  // Ajout de la classe 'hidden' pour masquer les sections
        });

        if (contents[selectedId]) {
            contents[selectedId].classList.remove('hidden');  // Retirer la classe 'hidden' pour afficher le contenu
        }
    }

    tabs.forEach(tab => {
        tab.addEventListener('change', function () {
            showContent(this.id);
        });
    });

    const checkedInput = document.querySelector('.input:checked');
    if (checkedInput) {
        showContent(checkedInput.id);
    }
});
