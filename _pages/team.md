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

{% assign sorted_members = site.data.team | sort: "year" %}

<div id="memberContainer">
  {% for member in sorted_members %}
    <div class="member" data-position="{{ member.position }}" data-alumni="{{ member.alumni }}">
      {% if member.display == 1 %}
        <div class="row">
          <div class="col-sm-6 clearfix">
            <img src="{{ member.image }}" class="img-responsive" width="35%" style="float: left" />
            <h4>{{ member.name }}</h4>
            <i>{{ member.position }}, {{ member.affiliation }} <br>email: {{ member.email }}</i>
            <ul style="overflow: hidden">
              {% if member.bio1 != "" %}<li>{{ member.bio1 }}</li>{% endif %}
              {% if member.bio2 != "" %}<li>{{ member.bio2 }}</li>{% endif %}
              {% if member.bio3 != "" %}<li>{{ member.bio3 }}</li>{% endif %}
              {% if member.bio4 != "" %}<li>{{ member.bio4 }}</li>{% endif %}
            </ul>
          </div>
        </div>
      {% endif %}
    </div>
  {% endfor %}
</div>

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
