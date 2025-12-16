   // js function for searching
        function searchBuilds() {
            let input = document.getElementById('searchBar').value.toLowerCase(); // convert input to lowercase
            let items = document.getElementsByClassName('result-item'); // get all results
            let searchResults = document.getElementById('searchResults');

            // loop to check if it matches the search 
            for (let i = 0; i < items.length; i++) {
                let itemText = items[i].textContent.toLowerCase();
                if (itemText.indexOf(input) > -1) {
                    items[i].style.display = ''; // shows matching charac
                } else {
                    items[i].style.display = 'none'; // hides non-matching characs
                }
            }
        }

// NOT WORKING YET,, THIS IS A WORK IN PROGRESS..! *cries*