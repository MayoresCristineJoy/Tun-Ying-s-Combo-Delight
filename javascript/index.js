document.getElementById('profile-picture').addEventListener('click', function() {
    document.getElementById('dropdown-menu').classList.toggle('show');
});

document.addEventListener('click', function(event) {
    const profilePicture = document.getElementById('profile-picture');
    const dropdownMenu = document.getElementById('dropdown-menu');
    if (!profilePicture.contains(event.target)) {
        dropdownMenu.classList.remove('show');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const bagIcon = document.getElementById('bagIcon');
    const bagPanel = document.getElementById('bagPanel');
    const closeBagPanel = document.getElementById('closeBagPanel');
    const closeBagPanel1 = document.getElementById('closeBagPanel1');
    const mobileToggle = document.getElementById('mobileToggle');
    const navbar = document.getElementById('navbar-default');
    const openTerms = document.getElementById('openTerms');
    const termsPanel = document.getElementById('termsPanel');
    const closeTerms = document.getElementById('closeTerms');

    bagIcon.addEventListener('click', () => {
        if (bagPanel.classList.contains('hidden'))
        {
            bagPanel.classList.remove('hidden');
        }
    });

    openTerms.addEventListener('click', () => {
        termsPanel.classList.remove('hidden');
    });

    closeTerms.addEventListener('click', () => {
        termsPanel.classList.add('hidden');
    });


    mobileToggle.addEventListener('click', () => {
        if (navbar.classList.contains('hidden'))
        {
            navbar.classList.remove('hidden');
        }
        else
        {
            navbar.classList.add('hidden');
        }
    });

    closeBagPanel.addEventListener('click', () => {
        bagPanel.classList.add('hidden');
    });

    closeBagPanel1.addEventListener('click', () => {
        bagPanel.classList.add('hidden');
    });
});