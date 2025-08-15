/**
 * Academic Website JavaScript
 * Main functionality for interactive elements
 */

(function() {
    'use strict';

    /**
     * Toggle abstract visibility between single-line and expanded
     * @param {HTMLElement} button - The toggle button clicked
     */
    function toggleAbstract(button) {
        const abstractText = button.parentElement.querySelector('.abstract-text, .selected-publication-abstract');
        if (!abstractText) return;
        
        const isExpanded = abstractText.style.whiteSpace === 'normal';
        
        if (isExpanded) {
            // Collapse to single line
            abstractText.style.whiteSpace = 'nowrap';
            abstractText.style.overflow = 'hidden';
            abstractText.style.textOverflow = 'ellipsis';
            abstractText.style.lineHeight = '1.4';
            button.innerHTML = '<small>more</small>';
        } else {
            // Expand to full text
            abstractText.style.whiteSpace = 'normal';
            abstractText.style.overflow = 'visible';
            abstractText.style.textOverflow = 'initial';
            abstractText.style.lineHeight = '1.6';
            button.innerHTML = '<small>less</small>';
        }
    }

    /**
     * Toggle news section visibility
     */
    function toggleNews() {
        const additionalNews = document.getElementById('additional-news');
        const toggleBtn = document.getElementById('toggle-news-btn');
        
        if (!additionalNews || !toggleBtn) return;
        
        if (additionalNews.style.display === 'none') {
            additionalNews.style.display = 'block';
            toggleBtn.innerHTML = '<i class="fas fa-chevron-up me-2"></i>Show Less News';
            // Smooth scroll to additional news
            setTimeout(() => {
                additionalNews.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'nearest' 
                });
            }, 100);
        } else {
            additionalNews.style.display = 'none';
            toggleBtn.innerHTML = '<i class="fas fa-chevron-down me-2"></i>Show More News';
        }
    }

    // Make functions globally available
    window.toggleAbstract = toggleAbstract;
    window.toggleNews = toggleNews;

    // Initialize any needed functionality when DOM is loaded
    document.addEventListener('DOMContentLoaded', function() {
        // Add any initialization code here
        console.log('Academic website initialized');
    });

})();
