---
title: "test page"
layout: gridlay
sitemap: false
permalink: /test/
---

<script src="filter.js" defer></script>

<input type="checkbox" id="ap_checkbox" name="position" value="Assistant Professor">
<label for="ap_checkbox">Assistant Professor</label>
<input type="checkbox" id="us_checkbox" name="position" value="Undergraduate student">
<label for="us_checkbox">Undergraduate Student</label>
<input type="checkbox" id="msr_checkbox" name="position" value="MS(R) student">
<label for="msr_checkbox">MS(R) Student</label>
<input type="checkbox" id="phd_checkbox" name="position" value="PhD student">
<label for="phd_checkbox">PhD Student</label>
<input type="checkbox" id="ra_checkbox" name="position" value="Research Assistant">
<label for="ra_checkbox">Research Assistant</label>
<input type="checkbox" id="int_checkbox" name="position" value="Intern">
<label for="int_checkbox">Intern</label>

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

<div id="group-members">
    {% for member in sorted_members %}
        <div class="col-sm-6 clearfix member" data-position="{{ member.position }}" data-alumni="{{ member.alumni }}">
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
