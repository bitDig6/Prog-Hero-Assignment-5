// console.log('utilities is loaded');

function toggleSections(buttonId,sectionId){
    // console.log('toggle function working', buttonId, sectionId);
    document.getElementById('donation').classList.add('hidden');
    document.getElementById('history').classList.add('hidden');

    sectionId.classList.remove('hidden');

    document.getElementById('btn-show-donation').classList.remove('bg-lime-400');
    document.getElementById('btn-show-donation').classList.remove('text-gray-600');
    document.getElementById('btn-show-history').classList.remove('bg-lime-400');
    document.getElementById('btn-show-history').classList.remove('text-gray-600');

    buttonId.classList.add('bg-lime-400');
    buttonId.classList.add('text-gray-600');  
}

function getInputFieldValue(id){
    const val =  parseFloat(document.getElementById(id).value);
    return val;
}

function getTextFieldValue(id){
    const val = parseFloat(document.getElementById(id).innerText);
    return val;
}

function updateAmounts(inputId, donateId, donationAmount, newTotalCoinsAmount){
    const totalCoins = document.getElementById('total-coins');
    const donateIdElement = document.getElementById(donateId);
    const inputIdElement = document.getElementById(inputId);

    totalCoins.innerText = newTotalCoinsAmount;
    donateIdElement.innerText = donationAmount;
    inputIdElement.value = '';
}

function createHistoryEntry(btnId, donationAmount){
    const historyEntries = document.getElementById('history-entries');
    let msg = '';

    if(btnId === 'btn-nk-donate'){
        msg = donationAmount + ' Tk. donated for flood relief at Noakhali, Bangladesh';
    }

    const outerDiv = document.createElement('div');
    const innerDiv1 = document.createElement('div');
    // const innerDiv2 = 

    outerDiv.classList.add('w-full');
    outerDiv.classList.add('border');
    outerDiv.classList.add('rounded-xl');
    outerDiv.classList.add('p-8');    
    outerDiv.classList.add('space-y-4');

    innerDiv1.innerText = msg;
    innerDiv1.classList.add('text-xl');
    innerDiv1.classList.add('font-bold');

    outerDiv.appendChild(innerDiv1);

    historyEntries.appendChild(outerDiv);
}