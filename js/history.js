const btnHistory = document.getElementById('btn-show-history');
const sectHistory = document.getElementById('history');

btnHistory.addEventListener('click', function(){
    toggleSections(btnHistory, sectHistory);
});

