/**
 * Publications Page JavaScript
 * Handles BibTeX citation display and copying
 */

(function() {
    'use strict';

    /**
     * Clean BibTeX by removing internal fields
     * @param {string} rawBibtex - Raw BibTeX content
     * @returns {string} Cleaned BibTeX
     */
    function cleanBibtex(rawBibtex) {
        const lines = rawBibtex.split('\n');
        const filteredLines = lines.filter(line => {
            const trimmedLine = line.trim();
            return !(
                trimmedLine.includes('selected =') ||
                trimmedLine.includes('type =') ||
                trimmedLine.includes('presentation =') ||
                trimmedLine.includes('acceptance_rate =')
            );
        });
        return filteredLines.join('\n');
    }

    /**
     * Show/hide BibTeX citation
     * @param {string} key - Publication key
     */
    function showBibtex(key) {
        const bibtexContainer = document.getElementById('bibtex-' + key);
        if (!bibtexContainer) return;

        if (bibtexContainer.style.display === 'none') {
            // Clean and display the BibTeX when first shown
            const rawBibtex = document.getElementById('bibtex-raw-' + key);
            if (rawBibtex) {
                const cleanedBibtex = cleanBibtex(rawBibtex.textContent);
                const cleanContainer = document.getElementById('bibtex-clean-' + key);
                if (cleanContainer) {
                    cleanContainer.textContent = cleanedBibtex;
                }
            }
            bibtexContainer.style.display = 'block';
        } else {
            bibtexContainer.style.display = 'none';
        }
    }

    /**
     * Copy BibTeX to clipboard
     * @param {string} key - Publication key
     */
    function copyBibtex(key) {
        const cleanBibtexElement = document.getElementById('bibtex-clean-' + key);
        if (!cleanBibtexElement) return;

        const text = cleanBibtexElement.textContent;
        
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(function() {
                showCopyFeedback(key);
            }).catch(function(err) {
                console.error('Failed to copy text: ', err);
                fallbackCopyText(text);
            });
        } else {
            fallbackCopyText(text);
        }
    }

    /**
     * Show copy success feedback
     * @param {string} key - Publication key
     */
    function showCopyFeedback(key) {
        const button = document.querySelector('#bibtex-' + key + ' .btn');
        if (!button) return;

        const originalText = button.innerHTML;
        const originalBg = button.style.backgroundColor;

        button.innerHTML = '<i class="fas fa-check me-1"></i>Copied!';
        button.style.backgroundColor = 'var(--gray-700)';
        
        setTimeout(function() {
            button.innerHTML = originalText;
            button.style.backgroundColor = originalBg || 'var(--gray-500)';
        }, 2000);
    }

    /**
     * Fallback copy method for older browsers
     * @param {string} text - Text to copy
     */
    function fallbackCopyText(text) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
            document.execCommand('copy');
            console.log('Text copied using fallback method');
        } catch (err) {
            console.error('Fallback copy failed: ', err);
        }
        
        document.body.removeChild(textArea);
    }

    // Make functions globally available
    window.showBibtex = showBibtex;
    window.copyBibtex = copyBibtex;

})();
