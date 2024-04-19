---
title: "test page"
layout: gridlay
sitemap: false
permalink: /test/
---

## Group Members

<div class="filter-container">
  <select id="position-filter">
    <option value="all">All Positions</option>
    <option value="professor">Professors</option>
    <option value="phd">PhD Students</option>
    <option value="msr">MS(R) Students</option>
    <option value="us">Undergraduate Students</option>
    <option value="ra">Research Assistants</option>
    <option value="intern">Interns</option>
    <option value="other">Other</option>
  </select>
</div>

{% assign sorted_members = site.data.team | sort: "year" %}

<script>
  document.getElementById('position-filter').addEventListener('change', function() {
    const selectedPosition = this.value;
    const memberList = document.getElementById('member-list');
    memberList.innerHTML = ''; // Clear existing members

    {% for member in sorted_members %}
      {% if member.display == 1 and member.alumni == 0 %}
        {% assign visible = false %}
        {% if selectedPosition == "all" or selectedPosition == member.position.toLowerCase() %}
          {% assign visible = true %}
        {% endif %}
        
        {% if visible %}
          <div class="row">
            </div>
        {% endif %}
      {% endif %}
    {% endfor %}
  });
</script>

<div id="member-list">
  </div>

## Alumni

{% for member in sorted_members %}
  {% if member.display == 1 and member.alumni == 1 %}
    <div class="col-sm-12 clearfix">
      </div>
  {% endif %}
{% endfor %}
