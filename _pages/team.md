---
title: "test page"
layout: gridlay
sitemap: false
permalink: /test/
---

<!-- Add checkboxes for filtering -->
<fieldset>
  <legend>Filter by Position:</legend>
  <label><input type="checkbox" class="positionFilter" value="Assistant Professor"> Assistant Professor</label><br>
  <label><input type="checkbox" class="positionFilter" value="Undergraduate student"> Undergraduate student</label><br>
  <label><input type="checkbox" class="positionFilter" value="MS(R) student"> MS(R) student</label><br>
  <label><input type="checkbox" class="positionFilter" value="PhD student"> PhD student</label><br>
  <label><input type="checkbox" class="positionFilter" value="Research Assistant"> Research Assistant</label><br>
  <label><input type="checkbox" class="positionFilter" value="Intern"> Intern</label><br>
</fieldset>

# Group Members  

{% assign ap_members = '' | split: '' %}
{% assign us_members = '' | split: '' %}
{% assign msr_members = '' | split: '' %}
{% assign phd_members = '' | split: '' %}
{% assign ra_members = '' | split: '' %}
{% assign int_members = '' | split: '' %}
{% assign oth_members = '' | split: '' %}

{% assign sorted_members = site.data.team | sort: "year" %}

{% for member in sorted_members %}
  {% assign member_position = member.position %}
  {% assign member_alumni = member.alumni %}
  {% if member_position == 'Assistant Professor' %}
    {% assign ap_members = ap_members | push: member %}
  {% elsif member_position == 'Undergraduate student' %}
    {% assign us_members = us_members | push: member %}
  {% elsif member_position == 'MS(R) student' %}
    {% assign msr_members = msr_members | push: member %}
  {% elsif member_position == 'PhD student' %}
    {% assign phd_members = phd_members | push: member %}
  {% elsif member_position == 'Research Assistant' %}
    {% assign ra_members = ra_members | push: member %}
  {% elsif member_position == 'Intern' %}
    {% assign int_members = int_members | push: member %}
  {% else %}
    {% assign oth_members = oth_members | push: member %}
  {% endif %}
{% endfor %}

{% assign all_members = ap_members | concat: us_members | concat: msr_members | concat: phd_members | concat: ra_members | concat: int_members | concat: oth_members %}

{% for member in all_members %}
  {% assign member_position = member.position %}
  {% assign member_alumni = member.alumni %}
  {% assign display_member = false %}
  {% if member_alumni == 0 %}
    {% if member_position == 'Assistant Professor' and ap_members.size > 0 %}
      {% assign display_member = true %}
    {% elsif member_position == 'Undergraduate student' and us_members.size > 0 %}
      {% assign display_member = true %}
    {% elsif member_position == 'MS(R) student' and msr_members.size > 0 %}
      {% assign display_member = true %}
    {% elsif member_position == 'PhD student' and phd_members.size > 0 %}
      {% assign display_member = true %}
    {% elsif member_position == 'Research Assistant' and ra_members.size > 0 %}
      {% assign display_member = true %}
    {% elsif member_position == 'Intern' and int_members.size > 0 %}
      {% assign display_member = true %}
    {% endif %}
  {% else %}
    {% if member_position == 'Assistant Professor' and ap_members.size > 0 %}
      {% assign display_member = true %}
    {% elsif member_position == 'Undergraduate student' and us_members.size > 0 %}
      {% assign display_member = true %}
    {% elsif member_position == 'MS(R) student' and msr_members.size > 0 %}
      {% assign display_member = true %}
    {% elsif member_position == 'PhD student' and phd_members.size > 0 %}
      {% assign display_member = true %}
    {% elsif member_position == 'Research Assistant' and ra_members.size > 0 %}
      {% assign display_member = true %}
    {% elsif member_position == 'Intern' and int_members.size > 0 %}
      {% assign display_member = true %}
    {% endif %}
  {% endif %}
  {% if display_member %}
    <div class="member">
      <h4>{{ member.name }}</h4>
      <p>{{ member.position }}</p>
      <p>{{ member.affiliation }}</p>
      <p>Email: {{ member.email }}</p>
      <p>Bio: {{ member.bio }}</p>
    </div>
  {% endif %}
{% endfor %}

<script>
  // Function to handle filter change
  function filterMembers() {
    var selectedPositions = Array.from(document.querySelectorAll('.positionFilter:checked')).map(function (checkbox) {
      return checkbox.value;
    });

    var members = document.querySelectorAll('.member');

    members.forEach(function (member) {
      var position = member.querySelector('p:nth-of-type(2)').textContent;

      if (selectedPositions.includes(position) || selectedPositions.length === 0) {
        member.style.display = 'block';
      } else {
        member.style.display = 'none';
      }
    });
  }

  // Event listener for filter change
  document.querySelectorAll('.positionFilter').forEach(function (checkbox) {
    checkbox.addEventListener('change', filterMembers);
  });
</script>
