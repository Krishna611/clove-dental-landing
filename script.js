// Scroll to top on reload
window.onbeforeunload = () => {
  window.scrollTo(0, 0);
};
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', () => {
    const answer = item.nextElementSibling;
    const plus = item.querySelector('.plus');
    
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
      plus.textContent = '+';
    } else {
      answer.style.display = 'block';
      plus.textContent = '-';
    }
  });
});
