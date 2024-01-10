document.getElementById('usernameDisplay').innerText = localStorage.getItem('username');
document.getElementById('ageDisplay').innerText = localStorage.getItem('age');

let del = document.getElementById("delete");
del.onclick = function(){
    localStorage.removeItem('username');
    localStorage.removeItem('age');
    alert('User deleted from localStorage!');
}