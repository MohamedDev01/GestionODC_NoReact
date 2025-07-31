// Unified script for highlighting active links in menu and sidebar
document.addEventListener('DOMContentLoaded', function () {
    // Function to highlight active links
    function highlightActiveLinks() {
        const currentPath = window.location.pathname.split('/').pop().toLowerCase();
        
        // Handle menu links
        const menuLinks = document.querySelectorAll('.menu a');
        menuLinks.forEach(link => {
            const linkPath = link.getAttribute('href').toLowerCase();
            if (linkPath === currentPath || (linkPath === '' && currentPath === '') || 
                (currentPath === 'index.html' && (linkPath === '' || linkPath === 'index.html'))) {
                link.classList.add('active');
            }
        });
        
        // Handle sidebar links
        const sidebarLinks = document.querySelectorAll('.list-unstyled a');
        sidebarLinks.forEach(link => {
            const linkPath = link.getAttribute('href').toLowerCase();
            if (linkPath === currentPath || 
                (linkPath === '' && currentPath === '') || 
                (currentPath === 'index.html' && (linkPath === '' || linkPath === 'index.html'))) {
                link.classList.add('active');
            }
        });
    }
    
    // Function to handle file upload preview
    function handleFileUpload() {
        const profileUpload = document.getElementById('profile-upload');
        const profileImage = document.getElementById('profile-image');
        
        if (profileUpload && profileImage) {
            profileUpload.addEventListener('change', function () {
                const file = this.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function (e) {
                        profileImage.src = e.target.result;
                    };
                    reader.readAsDataURL(file);
                }
            });
        }
    }
    
    // Initialize functions
    highlightActiveLinks();
    handleFileUpload();
    
    // Re-run on navigation changes
    window.addEventListener('popstate', highlightActiveLinks);
});

// CSS for active links
const style = document.createElement('style');
