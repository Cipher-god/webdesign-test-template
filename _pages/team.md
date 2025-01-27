---
title: "test page"
layout: gridlay
sitemap: false
permalink: /test/
---

<style>
/* CSS styles */
.row {
  display: flex;
  flex-wrap: wrap;
}

.member {
  width: 50%; /* Display two members per row */
}
</style>

<div>
<label><input type="checkbox" class="filterCheckbox" data-position="Assistant Professor"> Assistant Professor</label>
<label><input type="checkbox" class="filterCheckbox" data-position="Undergraduate student"> Undergraduate Student</label>
<label><input type="checkbox" class="filterCheckbox" data-position="MS(R) student"> MS(R) Student</label>
<label><input type="checkbox" class="filterCheckbox" data-position="PhD student"> PhD Student</label>
<label><input type="checkbox" class="filterCheckbox" data-position="Research Assistant"> Research Assistant</label>
<label><input type="checkbox" class="filterCheckbox" data-position="Intern"> Intern</label>
<label><input type="checkbox" class="filterCheckbox" data-position="MSc student"> MSc Student</label>
</div>

# Group Members  

{% assign ap_members = '' | split: '' %}
{% assign us_members = '' | split: '' %}
{% assign msr_members = '' | split: '' %}
{% assign phd_members = '' | split: '' %}
{% assign ra_members = '' | split: '' %}
{% assign int_members = '' | split: '' %}
{% assign msc_members = '' | split: '' %}
{% assign oth_members = '' | split: '' %}

{% assign sorted_members = site.data.team | sort: "year" %}

{% for member in sorted_members %}
{% if member.position == 'Assistant Professor' %}
{% assign ap_members = ap_members | push: member %}
{% elsif member.position == 'Undergraduate student' %}
{% assign us_members = us_members | push: member %}
{% elsif member.position == 'MS(R) student' %}
{% assign msr_members = msr_members | push: member %}
{% elsif member.position == 'PhD student' %}
{% assign phd_members = phd_members | push: member %}
{% elsif member.position == 'Research Assistant' %}
{% assign ra_members = ra_members | push: member %}
{% elsif member.position == 'Intern' %}
{% assign int_members = int_members | push: member %}
{% elsif member.position == 'MSc student' %}
{% assign msc_members = msc_members | push: member %}
{% else %}
{% assign oth_members = oth_members | push: member %}
{% endif %}
{% endfor %}

{% assign sorted_members = '' | split: '' | concat: ap_members | concat: phd_members | concat: msr_members | concat: ra_members | concat: us_members | concat: int_members | concat: msc_members | concat: oth_members %}

<div class="row">
{% for member in sorted_members %}
{% if member.display == 1 and member.alumni == 0 %}
<div class="col-sm-6 clearfix member" data-position="{{ member.position }}" data-alumni="{{ member.alumni }}">
<img src="{{ member.image }}" class="img-responsive" width="35%" style="float: left" />
<h4>{{ member.name }}</h4>
<i>{{ member.position }}, {{ member.affiliation }} <br>email: {{ member.email }}</i>
<ul style="overflow: hidden">
{% if member.bio1 != "" %}
<li> {{ member.bio1 }} </li>
{% endif %}
{% if member.bio2 != "" %}
<li> {{ member.bio2 }} </li>
{% endif %}
{% if member.bio3 != "" %}
<li> {{ member.bio3 }} </li>
{% endif %}
{% if member.bio4 != "" %}
<li> {{ member.bio4 }} </li>
{% endif %}
</ul>
</div>
{% endif %}
{% endfor %}
</div>

## Alumni

{% for member in sorted_members %}
{% if member.display == 1 and member.alumni == 1 %}
<div class="col-sm-12 clearfix">
<img src="{{ member.image }}" class="img-thumbnail" width="100px" style="float: left" />
<h4>{{ member.name }}</h4>
<i>{{ member.position }}, {{ member.affiliation }} ({{ member.year }}) <br>email: {{ member.email }}</i>
<h5>{{ member.alumni_current }}</h5>
</div>
{% endif %}
{% endfor %}

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
