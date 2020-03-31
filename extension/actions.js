(function() {

    function removeTrash() {
        let annoyingPopup = document.querySelector('.Informer_root_3INwJ');
        if (annoyingPopup) {
            annoyingPopup.remove();
            document.removeEventListener("DOMSubtreeModified", removeTrash);
        }         
    }
    
    document.addEventListener("DOMSubtreeModified", removeTrash);          
})();