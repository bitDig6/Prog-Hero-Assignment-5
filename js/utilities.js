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