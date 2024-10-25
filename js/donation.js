

document.getElementById('btn-show-donation').addEventListener('click', function(){
    const btnDonation = document.getElementById('btn-show-donation');
    const sectDonation = document.getElementById('donation');
    toggleSections(btnDonation, sectDonation);
});

document.getElementById('btn-nk-donate').addEventListener('click', function(){
    // console.log('donate nk btn working');
    const donationAmount = getInputFieldValue('input-nk-donate');
    if(isNaN(donationAmount) || donationAmount < 0){
       alert('Please enter a valid donation amount');
       return;
    }
    
    const totalCoinsAmount = getTextFieldValue('total-coins');

    if(donationAmount > totalCoinsAmount){
        alert('Sorry! you do not have sufficient balance.');
        return;
    }

    const nkDonateAmount = getTextFieldValue('nk-donate');
    const newTotalCoinsAmount = totalCoinsAmount - donationAmount;
    const newNkDonationAmount = nkDonateAmount + donationAmount;

    updateAmounts('input-nk-donate','nk-donate', newNkDonationAmount, newTotalCoinsAmount);
    alert('Donation done successfully');

    createHistoryEntry('btn-nk-donate', donationAmount);
    
    // console.log(`donation made: ${donationAmount} nk-donation ${nkDonateAmount} current ${newTotalCoinsAmount}`);
});

document.getElementById('btn-feni-donate').addEventListener('click', function(){
    // console.log('donate nk btn working');
    const donationAmount = getInputFieldValue('input-feni-donate');
    if(isNaN(donationAmount) || donationAmount < 0){
       alert('Please enter a valid donation amount');
       return;
    }

    const totalCoinsAmount = getTextFieldValue('total-coins');

    if(donationAmount > totalCoinsAmount){
        alert('Sorry! you do not have sufficient balance.');
        return;
    }

    const feniDonateAmount = getTextFieldValue('feni-donate')

    const newTotalCoinsAmount = totalCoinsAmount - donationAmount;
    const newFeniDonationAmount = feniDonateAmount + donationAmount;

    updateAmounts('input-feni-donate', 'feni-donate', newFeniDonationAmount, newTotalCoinsAmount);
    alert('Donation done successfully');
    
    // console.log(`donation made: ${donationAmount} feni-donation ${feniDonateAmount} current ${totalCoinsAmount}`);
    
});

document.getElementById('btn-protest-donate').addEventListener('click', function(){
    // console.log('donate nk btn working');
    const donationAmount = getInputFieldValue('input-protest-donate');
    if(isNaN(donationAmount) || donationAmount < 0){
       alert('Please enter a valid donation amount');
       return;
    }
    
    const totalCoinsAmount = getTextFieldValue('total-coins');

    if(donationAmount > totalCoinsAmount){
        alert('Sorry! you do not have sufficient balance.');
        return;
    }

    const protestDonateAmount = getTextFieldValue('protest-donate');

    const newTotalCoinsAmount = totalCoinsAmount - donationAmount;
    const newProtestDonationAmount = protestDonateAmount + donationAmount;

    updateAmounts('input-protest-donate', 'protest-donate', newProtestDonationAmount, newTotalCoinsAmount);
    alert('Donation done successfully');
    
    // console.log(`donation made: ${donationAmount} protest-donation ${protestDonateAmount} current ${totalCoinsAmount}`); 
});