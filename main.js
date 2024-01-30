// const buttonToggleMode = document.getElementById('toggleDark')

// buttonToggleMode.addEventListener('click', () => {
//   document.documentElement.classList.toggle('dark')
// })

const navToggle = document.getElementById('navToggle')

navToggle.onclick = (e) => {
  const nav = document.getElementById('navMobile');

  e.target.classList.contains('active') ? (e.target.classList.remove('active'), nav.classList.add('hidden')) : (e.target.classList.add('active'), nav.classList.remove('hidden'))
}

// Dark Mode

if (
  localStorage.theme === 'dark' || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

const changeDarkMode = () => {
  let theme = document.documentElement.classList.toggle('dark')
  theme
    ? (localStorage.theme = 'dark')
    : (localStorage.theme = 'light')
}

const buttonToggleMode = document.getElementById('toggleDark')

buttonToggleMode.addEventListener('click', changeDarkMode)