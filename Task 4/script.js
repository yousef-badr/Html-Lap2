function saveUserInfo() {
  const usernameInput = document.getElementById('username');
  const ageInput = document.getElementById('age');

  const username = usernameInput.value; 
  const age = ageInput.value; 

  if (username !== '' && age !== '') {
      localStorage.setItem('username', username);
      localStorage.setItem('age', age);

      window.location.href = 'display.html';
  } else {
      alert('Please enter valid username and age.');
  }
}
