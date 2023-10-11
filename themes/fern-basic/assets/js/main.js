function applyUserPreference(key, className, targetElement) {
    const savedPreference = localStorage.getItem(key);
    if (savedPreference) {
        const element = targetElement || document.body;
        element.classList.add(`${savedPreference}-mode`);
    }
}

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

    document.getElementById('garToggle').addEventListener('click', function() {
        document.body.classList.toggle('garamond-mode');
        
        // Optionally, store the user's preference in localStorage for persistence
        if (document.body.classList.contains('garamond-mode')) {
            localStorage.setItem('font', 'garamond');
        } else {
            localStorage.removeItem('font');
        }
    });

    document.getElementById('toggleColumns').addEventListener('click', function() {
        const content = document.querySelector('.content');
        content.classList.toggle('two-columns');

        // Optionally, store the user's preference in localStorage for persistence
        if (content.classList.contains('two-columns')) {
            localStorage.setItem('column', 'double');
        } else {
            localStorage.removeItem('column');
        }
    });
    
    // Apply styling preferences
    applyUserPreference('theme', 'dark-mode');
    applyUserPreference('font', 'dyslexia-mode');
    applyUserPreference('font', 'garamond-mode');
    applyUserPreference('column', 'two-columns', document.querySelector('.content'));


    window.addEventListener('beforeprint', () => {
        // Apply styling preferences on print
        applyUserPreference('theme', 'dark-mode');
        applyUserPreference('font', 'dyslexia-mode');
        applyUserPreference('font', 'garamond-mode');
        applyUserPreference('column', 'two-columns', document.querySelector('.content'));
    });     
    
    
});