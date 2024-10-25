const btnHistory = document.getElementById('btn-show-history');
const sectHistory = document.getElementById('history');

btnHistory.addEventListener('click', function(){
    toggleSections(btnHistory, sectHistory);
});

function createHistoryEntry(btnId, donationAmount){
    const historyEntries = document.getElementById('history-entries');
    let msg = '';
    const d = new Date()

    if(btnId === 'btn-nk-donate'){
        msg = donationAmount + ' Tk. donated for flood relief at Noakhali, Bangladesh';
    }else if(btnId === 'btn-feni-donate'){
        msg = donationAmount + ' Tk. donated for flood relief at Feni, Bangladesh';
    }else{
        msg = donationAmount + ' Tk. donated for injured in the Quota Movement';
    }

    const outerDiv = document.createElement('div');
    const innerDiv1 = document.createElement('div');
    const innerDiv2 = document.createElement('div');

    outerDiv.classList.add('w-full');
    outerDiv.classList.add('border');
    outerDiv.classList.add('rounded-xl');
    outerDiv.classList.add('p-8');    
    outerDiv.classList.add('space-y-4');

    innerDiv1.innerText = msg;
    innerDiv1.classList.add('text-xl');
    innerDiv1.classList.add('font-bold');

    //inner div 2 date and time
    innerDiv2.innerText =  `Date: ${d}`;
    innerDiv2.classList.add('text-base');
    innerDiv2.classList.add('font-light');
    innerDiv2.classList.add('opacity-70');

    outerDiv.appendChild(innerDiv1);
    outerDiv.appendChild(innerDiv2);

    historyEntries.appendChild(outerDiv);
}