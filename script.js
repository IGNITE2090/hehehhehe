const typing = document.querySelector('.typing');
if (typing) {
  const text = typing.innerText;
  typing.innerText = '';
  let i = 0;
  setInterval(() => {
    if (i < text.length) {
      typing.innerText += text.charAt(i);
      i++;
    }
  }, 100);
}
const promises = document.querySelectorAll('.promise-list li');

promises.forEach((promise, index) => {
  setTimeout(() => {
    promise.classList.add('show');
  }, index * 400); // 0.4s delay between each promise
});
const kissesBox = document.getElementById('kisses');

if (kissesBox) {
  let count = 0;
  const total = 100;

  const interval = setInterval(() => {
    const kiss = document.createElement('span');
    kiss.className = 'kiss';
    kiss.innerText = '💋';
    kissesBox.appendChild(kiss);

    count++;
    if (count === total) {
      clearInterval(interval);
    }
  }, 120); // speed of kisses
}
function checkPassword() {
  const input = document.getElementById('passwordInput').value;
  const correctPassword = "nancythebeauty";

  if (input === correctPassword) {
    document.getElementById('lockScreen').style.display = "none";
    document.getElementById('surpriseContent').style.display = "block";
  } else {
    document.getElementById('errorMsg').style.display = "block";
  }
}
