// filter.js

document.addEventListener('DOMContentLoaded', function () {
    var positionFilter = document.getElementById('positionFilter');
    var members = document.getElementsByClassName('member');

    positionFilter.addEventListener('change', function () {
        var selectedPosition = positionFilter.value;

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
});