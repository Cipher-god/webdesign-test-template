<script>
// Get all checkboxes with class filterCheckbox
const checkboxes = document.querySelectorAll('.filterCheckbox');

// Add event listener to each checkbox
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    // Get the value of the clicked checkbox
    const position = this.dataset.position;
    
    // Get all members
    const members = document.querySelectorAll('.member');
    
    // Initialize array to store selected positions
    const selectedPositions = [];
    
    // Loop through checkboxes to find selected positions
    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        selectedPositions.push(checkbox.dataset.position);
      }
    });
    
    // If no checkboxes are selected, show all members
    if (selectedPositions.length === 0) {
      members.forEach(member => {
        member.style.display = 'block';
      });
    } else {
      // Show members with selected positions
      members.forEach(member => {
        if (selectedPositions.includes(member.dataset.position)) {
          member.style.display = 'block';
        } else {
          member.style.display = 'none';
        }
      });
    }
  });
});
</script>
