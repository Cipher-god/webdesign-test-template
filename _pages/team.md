<script>
// Get all checkboxes with class filterCheckbox
const checkboxes = document.querySelectorAll('.filterCheckbox');

// Function to update the display of members based on selected positions
function updateMemberDisplay() {
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
    
    // Clean up existing rows
    const existingRows = document.querySelectorAll('.row');
    existingRows.forEach(row => row.remove());
    
    // Adjust the row structure based on the visible members
    const visibleMembers = document.querySelectorAll('.member[style="display: block;"]');
    let row = document.createElement('div');
    row.className = 'row';
    visibleMembers.forEach((member, index) => {
        if (index % 2 === 0) {
            // Start a new row for every two members
            row = document.createElement('div');
            row.className = 'row';
            member.parentNode.insertBefore(row, member);
        }
        row.appendChild(member);
    });
}

// Add event listener to each checkbox
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateMemberDisplay);
});

// Initial call to update the display
updateMemberDisplay();
</script>
