    document.getElementById('nation-filter').addEventListener('change', filterCharacters);
        document.getElementById('weapon-filter').addEventListener('change', filterCharacters);
        document.getElementById('element-filter').addEventListener('change', filterCharacters);

        function filterCharacters() 
        {
            const nationFilter = document.getElementById('nation-filter').value;
            const weaponFilter = document.getElementById('weapon-filter').value;
            const elementFilter = document.getElementById('element-filter').value;

            const characters = document.querySelectorAll('.character-card');

            characters.forEach(character => {
                const characterNation = character.getAttribute('data-nation');
                const characterWeapon = character.getAttribute('data-weapon');
                const characterElement = character.getAttribute('data-element');

                let show = true;

                // checks if characs match filter(s)
                if (nationFilter !== 'all' && characterNation !== nationFilter) show = false;
                if (weaponFilter !== 'all' && characterWeapon !== weaponFilter) show = false;
                if (elementFilter !== 'all' && characterElement !== elementFilter) show = false;

                // shows/hides characs based on filter(s)... 
                if (show) 
                {
                    character.style.display = 'block';
                } 
                else 
                {
                    character.style.display = 'none';
                }
            });
        }