document.addEventListener('DOMContentLoaded', function() {
  const checkboxes = document.querySelectorAll('input[name="position"]');
  checkboxes.forEach(function(checkbox) {
      checkbox.addEventListener('change', function() {
          const position = checkbox.value;
          const members = document.querySelectorAll('.member');
          members.forEach(function(member) {
              if (position === 'all') {
                  member.style.display = 'block';
              } else if (member.dataset.position === position) {
                  member.style.display = checkbox.checked ? 'block' : 'none';
              }
          });
      });
  });
});
