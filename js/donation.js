const btnDonation = document.getElementById('btn-show-donation');
const sectDonation = document.getElementById('donation');

btnDonation.addEventListener('click', function(){
    toggleSections(btnDonation, sectDonation);
});