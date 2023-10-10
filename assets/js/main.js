document.addEventListener('DOMContentLoaded', function() {
    let authors = document.querySelectorAll('.author');
    let detailsDiv = document.querySelector('.author-details');

    authors.forEach(author => {
        author.addEventListener('click', function() {
            let affiliation = this.dataset.affiliation;
            let email = this.dataset.email;
            if (detailsDiv.innerHTML == `${affiliation}<br><a href="mailto:${email}">${email}</a>` || !detailsDiv.classList.contains('show')) {
                detailsDiv.classList.toggle('show');
            }
            if (detailsDiv.innerHTML != `${affiliation}<br><a href="mailto:${email}">${email}</a>` && detailsDiv.classList.contains('show')) {
                detailsDiv.innerHTML = `${affiliation}<br><a href="mailto:${email}">${email}</a>`;
            }
        });

        author.addEventListener('mouseover', function() {
            let affiliation = this.dataset.affiliation;
            let email = this.dataset.email;
            if (detailsDiv.innerHTML != `${affiliation}<br><a href="mailto:${email}">${email}</a>` && detailsDiv.classList.contains('show')) {
                detailsDiv.innerHTML = `${affiliation}<br><a href="mailto:${email}">${email}</a>`;
            }
        });

    });

    document.getElementById('toggleColumns').addEventListener('click', function() {
        const content = document.querySelector('.content');
        content.classList.toggle('two-columns');
    });      

    document.getElementById('darkToggle').addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        // Optionally, store the user's preference in localStorage for persistence
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.removeItem('theme');
        }
    });

    document.getElementById('dysToggle').addEventListener('click', function() {
        document.body.classList.toggle('dyslexia-mode');
        
        // Optionally, store the user's preference in localStorage for persistence
        if (document.body.classList.contains('dyslexia-mode')) {
            localStorage.setItem('font', 'dyslexia');
        } else {
            localStorage.removeItem('font');
        }
    });
    
    // Check user's preference on page load
    if (localStorage.getItem('font') === 'dyslexia') {
        document.body.classList.add('dyslexia-mode');
    }
    
    // Check user's preference on page load
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }
    
    
});