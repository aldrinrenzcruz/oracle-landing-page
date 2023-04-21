const dropdowns = document.querySelectorAll('.dropdown');
let currentDropdown = null;
dropdowns.forEach(dropdown => {
  const dropdownContent = dropdown.querySelector('.dropdown-content');
  dropdownContent.style.display = 'none';
  dropdown.addEventListener('click', (event) => {
    if (currentDropdown && currentDropdown !== dropdown) {
      currentDropdown.querySelector('.dropdown-content').style.display = 'none';
    }
    if (dropdownContent.style.display === 'none') {
      dropdownContent.style.display = 'block';
      currentDropdown = dropdown;
    } else {
      dropdownContent.style.display = 'none';
      currentDropdown = null;
    }
    event.stopPropagation();
  });
  document.addEventListener('click', (event) => {
    if (!dropdown.contains(event.target)) {
      dropdownContent.style.display = 'none';
      currentDropdown = null;
    }
  });
});


// If adding/removing .active class on selected dropdown is needed, use the following script:
// const dropdowns = document.querySelectorAll('.dropdown');
// let currentDropdown = null;
// dropdowns.forEach(dropdown => {
//   const dropdownContent = dropdown.querySelector('.dropdown-content');
//   dropdownContent.style.display = 'none';
//   dropdown.addEventListener('click', (event) => {
//     if (currentDropdown && currentDropdown !== dropdown) {
//       currentDropdown.querySelector('.dropdown-content').style.display = 'none';
//       currentDropdown.classList.remove('active');
//     }
//     if (dropdownContent.style.display === 'none') {
//       dropdownContent.style.display = 'block';
//       currentDropdown = dropdown;
//       dropdown.classList.add('active');
//     } else {
//       dropdownContent.style.display = 'none';
//       currentDropdown = null;
//       dropdown.classList.remove('active');
//     }
//     event.stopPropagation();
//   });
//   document.addEventListener('click', (event) => {
//     if (!dropdown.contains(event.target)) {
//       dropdownContent.style.display = 'none';
//       currentDropdown = null;
//       dropdown.classList.remove('active');
//     }
//   });
// });