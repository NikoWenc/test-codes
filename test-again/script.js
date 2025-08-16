const root = document.documentElement;
const themeButton = document.querySelector('#theme');

// function changeTheme (){
//     return root.className = 'dark' ? 'light': 'dark'
// }

themeButton.addEventListener('click', () => {
    const newTheme = root.className === 'dark' ? 'light': 'dark'
    return root.className = newTheme;
});