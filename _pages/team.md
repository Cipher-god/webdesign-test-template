---
title: "test page"
layout: gridlay
sitemap: false
permalink: /test/
---

<!-- Filter Options -->
<div id="filter-options">
  <label><input type="checkbox" class="filter" value="Assistant Professor"> Assistant Professor</label>
  <label><input type="checkbox" class="filter" value="Undergraduate student"> Undergraduate Student</label>
  <label><input type="checkbox" class="filter" value="MS(R) student"> MS(R) Student</label>
  <label><input type="checkbox" class="filter" value="PhD student"> PhD Student</label>
  <label><input type="checkbox" class="filter" value="Research Assistant"> Research Assistant</label>
  <label><input type="checkbox" class="filter" value="Intern"> Intern</label>
</div>

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
  {% else %}
    {% assign oth_members = oth_members | push: member %}
  {% endif %}
{% endfor %}

{% assign sorted_members = '' | split: '' | concat: ap_members | concat: phd_members | concat: msr_members | concat: ra_members | concat: us_members | concat: int_members | concat: oth_members %}

{% assign number_printed = 0 %}
{% for member in sorted_members %}
  {% if member.display == 1 and member.alumni == 0 %}
    {% assign even_odd = number_printed | modulo: 2 %}
    {% if even_odd == 0 %}
      <div class="row">
    {% endif %}
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
    {% assign number_printed = number_printed | plus: 1 %}
    {% if even_odd == 1 %}
      </div>
    {% endif %}
  {% endif %}
{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
  </div>
{% endif %}

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

<!-- Filter JavaScript -->
{% raw %}
<script>
document.addEventListener('DOMContentLoaded', function () {
  const checkboxes = document.querySelectorAll('.filter');
  const members = document.querySelectorAll('.member');

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
      const selectedFilters = Array.from(checkboxes)
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.value);

      members.forEach((member) => {
        const position = member.getAttribute('data-position');
        const alumni = member.getAttribute('data-alumni');
        const isVisible = selectedFilters.includes(position) || selectedFilters.includes(alumni);
        member.style.display = isVisible ? 'block' : 'none';
      });
    });
  });
});
</script>
{% endraw %}
