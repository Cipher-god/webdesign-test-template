---
title: "test page"
layout: gridlay
sitemap: false
permalink: /test/
---

# Group Members  

{% assign positions = "Assistant Professor,Undergraduate student,MS(R) student,PhD student,Research Assistant,Intern" | split: "," %}
{% assign ap_members = '' | split: '' %}
{% assign us_members = '' | split: '' %}
{% assign msr_members = '' | split: '' %}
{% assign phd_members = '' | split: '' %}
{% assign ra_members = '' | split: '' %}
{% assign int_members = '' | split: '' %}
{% assign oth_members = '' | split: '' %}

{% assign sorted_members = site.data.team | sort: "year" %}

{% for member in sorted_members %}
  {% assign member_positions = member.position | split: "," %}
  {% for position in member_positions %}
    {% if position == 'Assistant Professor' %}
      {% assign ap_members = ap_members | push: member %}
    {% elsif position == 'Undergraduate student' %}
      {% assign us_members = us_members | push: member %}
    {% elsif position == 'MS(R) student' %}
      {% assign msr_members = msr_members | push: member %}
    {% elsif position == 'PhD student' %}
      {% assign phd_members = phd_members | push: member %}
    {% elsif position == 'Research Assistant' %}
      {% assign ra_members = ra_members | push: member %}
    {% elsif position == 'Intern' %}
      {% assign int_members = int_members | push: member %}
    {% else %}
      {% assign oth_members = oth_members | push: member %}
    {% endif %}
  {% endfor %}
{% endfor %}

{% assign sorted_members = '' | split: '' | concat: ap_members | concat: phd_members | concat: msr_members | concat: ra_members | concat: us_members | concat: int_members | concat: oth_members %}

<div id="filter">
  <label>
    <input type="checkbox" id="filter-ap" value="Assistant Professor" checked> Assistant Professor
  </label>
  <label>
    <input type="checkbox" id="filter-us" value="Undergraduate student" checked> Undergraduate Student
  </label>
  <label>
    <input type="checkbox" id="filter-msr" value="MS(R) student" checked> MS(R) Student
  </label>
  <label>
    <input type="checkbox" id="filter-phd" value="PhD student" checked> PhD Student
  </label>
  <label>
    <input type="checkbox" id="filter-ra" value="Research Assistant" checked> Research Assistant
  </label>
  <label>
    <input type="checkbox" id="filter-int" value="Intern" checked> Intern
  </label>
</div>

<div id="members">
  {% assign number_printed = 0 %}
  {% for member in sorted_members %}
    {% assign member_positions = member.position | split: "," %}
    {% assign show_member = false %}
    {% for position in member_positions %}
      {% if position == 'Assistant Professor' and site.data.filter.ap %}
        {% assign show_member = true %}
      {% elsif position == 'Undergraduate student' and site.data.filter.us %}
        {% assign show_member = true %}
      {% elsif position == 'MS(R) student' and site.data.filter.msr %}
        {% assign show_member = true %}
      {% elsif position == 'PhD student' and site.data.filter.phd %}
        {% assign show_member = true %}
      {% elsif position == 'Research Assistant' and site.data.filter.ra %}
        {% assign show_member = true %}
      {% elsif position == 'Intern' and site.data.filter.int %}
        {% assign show_member = true %}
      {% endif %}
    {% endfor %}
    {% if show_member %}
      {% assign even_odd = number_printed | modulo: 2 %}
      {% if even_odd == 0 %}
        <div class="row">
      {% endif %}
      <div class="col-sm-6 clearfix">
        <img src="{{ member.image }}" class="img-responsive" width="35%" style="float: left" />
        <h4>{{ member.name }}</h4>
        <i>{{ member.position }}, {{ member.affiliation }} <br>email: {{ member.email }}</i>
        <ul style="overflow: hidden">
          {% if member.bio1 != "" %}
            <li>{{ member.bio1 }}</li>
          {% endif %}
          {% if member.bio2 != "" %}
            <li>{{ member.bio2 }}</li>
          {% endif %}
          {% if member.bio3 != "" %}
            <li>{{ member.bio3 }}</li>
          {% endif %}
          {% if member.bio4 != "" %}
            <li>{{ member.bio4 }}</li>
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
  document.addEventListener("DOMContentLoaded", function() {
    var filterCheckboxes = document.querySelectorAll('#filter input[type="checkbox"]');
    var membersContainer = document.getElementById('members');

    var filter = {};
    filterCheckboxes.forEach(function(checkbox) {
      checkbox.addEventListener('change', function() {
        filter[checkbox.value] = checkbox.checked;
        updateMembers();
      });
    });

    function updateMembers() {
      var members = membersContainer.querySelectorAll('.col-sm-6');
      members.forEach(function(member) {
        var position = member.querySelector('h4').textContent.split(',')[0].trim();
        member.style.display = filter[position] ? 'block' : 'none';
      });
    }
  });
</script>
