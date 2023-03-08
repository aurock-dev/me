$(document).on('click', '#linkLinkedin', function(){
    window.open('https://www.linkedin.com/in/jeremy-dussol','_blank');
})

$(document).on('click', '#linkGitlab', function(){
    window.open('https://gitlab.com/users/aurock/projects','_blank');
})

$(document).on('click', '#tabMe', function(){
    hideAllContent();
    inactiveAllTab();
    this.classList.add('active');
    document.querySelector('#contentMe').classList.remove('hidden')
})

$(document).on('click', '#tabDev', function(){
    hideAllContent();
    inactiveAllTab();
    this.classList.add('active');
    document.querySelector('#contentDev').classList.remove('hidden')
})

$(document).on('click', '#tabContact', function(){
    hideAllContent();
    inactiveAllTab();
    this.classList.add('active');
    document.querySelector('#contentContact').classList.remove('hidden')
})

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