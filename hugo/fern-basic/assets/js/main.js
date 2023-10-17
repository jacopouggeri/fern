function applyUserPreference(key, className, targetElement) {
    const savedPreference = localStorage.getItem(key);
    if (savedPreference) {
        const element = targetElement || document.body;
        element.classList.add(`${savedPreference}-mode`);
    }
}

function handleHashChange() {
    const targetedElement = document.querySelector(window.location.hash);

    if (targetedElement) {
        // Remove the highlighted class from any previously targeted parent
        const prevHighlighted = document.querySelector('.highlighted');
        if (prevHighlighted) {
            prevHighlighted.classList.remove('highlighted');
        }

        // Check if the targeted element is a SPAN and highlight its parent
        if (targetedElement.tagName === 'SPAN') {
            const parentElement = targetedElement.parentElement;
            if (parentElement) {
                // Force a reflow to restart the animation
                void parentElement.offsetWidth;
                parentElement.classList.add('highlighted');
            }
        }
    }
}

// Handle hashchange target being blocked by fixed header
window.addEventListener("hashchange", handleHashChange);

window.onload = function() {
    if (window.location.hash) {
        handleHashChange();
    }
};

// Check if there is a hash in the URL on page load and scroll to the target
document.addEventListener('DOMContentLoaded', function() {
    if (location.hash) {
        handleHashChange();
    }
});

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


    // Toggle for Arial
    document.getElementById('arialToggle').addEventListener('click', function() {
        document.body.style.fontFamily = 'Arial';
        localStorage.setItem('fontPreference', 'Arial'); // Store the preference
    });

    // Toggle for Garamond
    document.getElementById('garToggle').addEventListener('click', function() {
        document.body.style.fontFamily = 'Garamond';
        localStorage.setItem('fontPreference', 'Garamond'); // Store the preference
    });

    // Toggle for Open Dyslexic
    document.getElementById('dysToggle').addEventListener('click', function() {
        document.body.style.fontFamily = 'OpenDyslexic';
        localStorage.setItem('fontPreference', 'OpenDyslexic'); // Store the preference
    });
    
    // Apply styling preferences
    applyUserPreference('theme', 'dark-mode');
    applyUserPreference('column', 'two-columns', document.querySelector('.content'));

    // Retrieve and apply font preference when the page loads
    let fontPreference = localStorage.getItem('fontPreference');
    if (fontPreference) {
        document.body.style.fontFamily = fontPreference;
    }

    window.addEventListener('beforeprint', () => {
        // Apply styling preferences on print
        applyUserPreference('theme', 'dark-mode');
        applyUserPreference('column', 'two-columns', document.querySelector('.content'));

        // Retrieve and apply font preference when the page loads
        let fontPreference = localStorage.getItem('fontPreference');
        if (fontPreference) {
            document.body.style.fontFamily = fontPreference;
        }
    });     
    
});
