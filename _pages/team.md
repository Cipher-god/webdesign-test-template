---
title: "test page"
layout: gridlay
sitemap: false
permalink: /test/
---

<!-- Add a dropdown menu for filtering -->
<label for="positionFilter">Filter by Position:</label>
<select id="positionFilter">
  <option value="all">All Positions</option>
  <option value="Assistant Professor">Assistant Professor</option>
  <option value="Undergraduate student">Undergraduate student</option>
  <option value="MS(R) student">MS(R) student</option>
  <option value="PhD student">PhD student</option>
  <option value="Research Assistant">Research Assistant</option>
  <option value="Intern">Intern</option>
</select>

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

{% for member in sorted_members %}
  <div class="member" data-position="{{ member.position }}" data-alumni="{{ member.alumni }}">
    {% if member.display == 1 %}
      <div class="row">
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
      </div>
    {% endif %}
  </div>
{% endfor %}

<!-- Filter script -->
<script>
  document.addEventListener('DOMContentLoaded', function () {
    var positionFilter = document.getElementById('positionFilter');
    var members = document.querySelectorAll('.member');

    positionFilter.addEventListener('change', function () {
      var selectedPosition = positionFilter.value;

      members.forEach(function (member) {
        var position = member.getAttribute('data-position');
        var alumni = member.getAttribute('data-alumni');

        if ((selectedPosition === 'all' || position === selectedPosition) && alumni === '0') {
          member.style.display = 'block'; // Show member
        } else {
          member.style.display = 'none'; // Hide member
        }
      });
    });
  });
</script>

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

<script src="filter.js"></script>

<script>
  document.getElementById('positionFilter').addEventListener('change', function() {
    var selectedPosition = this.value;
    var members = document.getElementsByClassName('member');

    // Loop through all members and show/hide based on selected position
    for (var i = 0; i < members.length; i++) {
      var position = members[i].getAttribute('data-position');
      var alumni = members[i].getAttribute('data-alumni');

      if ((selectedPosition === 'all' || position === selectedPosition) && alumni === '0') {
        members[i].style.display = 'block'; // Show member
      } else {
        members[i].style.display = 'none'; // Hide member
      }
    }
  });
</script>
{% endraw %}


## Alumni

{% for member in sorted_members %}
{% if member.display == 1 and member.alumni == 1 %}

<div class="col-sm-12 clearfix member" data-position="{{ member.position }}" data-alumni="{{ member.alumni }}">
  <img src="{{ member.image }}" class="img-thumbnail" width="100px" style="float: left" />
  <h4>{{ member.name }}</h4>
  <i>{{ member.position }}, {{ member.affiliation }} ({{ member.year }}) <br>email: {{ member.email }}</i>
  <h5>{{ member.alumni_current }}</h5>
</div>

{% endif %}
{% endfor %}
