// console.log('buttons js loaded');

const btnDonation = document.getElementById('btn-show-donation');
const sectDonation = document.getElementById('donation');

const btnHistory = document.getElementById('btn-show-history');
const sectHistory = document.getElementById('history');

btnDonation.addEventListener('click', function(){
    toggleSections(btnDonation, sectDonation);
});

btnHistory.addEventListener('click', function(){
    toggleSections(btnHistory, sectHistory);
});