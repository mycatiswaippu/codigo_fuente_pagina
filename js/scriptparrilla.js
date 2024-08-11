document.addEventListener('DOMContentLoaded', function() {
    const responsables = document.querySelectorAll('.responsable');
    const tooltip = document.getElementById('tooltip');
    const tooltipImg = document.getElementById('tooltip-img');

    responsables.forEach(responsable => {
        responsable.addEventListener('mouseenter', function(e) {
            const imgSrc = e.target.getAttribute('data-img');
            tooltipImg.src = imgSrc;
            tooltip.style.display = 'block';
            tooltip.style.left = `${e.pageX + 10}px`;
            tooltip.style.top = `${e.pageY + 10}px`;
        });

        responsable.addEventListener('mousemove', function(e) {
            tooltip.style.left = `${e.pageX + 10}px`;
            tooltip.style.top = `${e.pageY + 10}px`;
        });

        responsable.addEventListener('mouseleave', function() {
            tooltip.style.display = 'none';
            tooltipImg.src = '';
        });
    });
});