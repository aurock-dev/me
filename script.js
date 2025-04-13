function changeTab(tab){
    hideAllContent();
    inactiveAllTab();
    tab.classList.add('active');
    document.querySelector('#' + tab.id.replace('tab', 'content')).classList.remove('hidden');
}

function hideAllContent(){
    document.querySelectorAll('.tabContent').forEach((content) => {
        content.classList.add('hidden');
    })
}

function inactiveAllTab(){
    document.querySelectorAll('.tab').forEach((button) => {
        button.classList.remove('active');
    })
}