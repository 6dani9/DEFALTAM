var showpage = false;
document.getElementById('paragraph').style.display = 'none';
document.getElementById('logo').addEventListener('click', function() {
    this.style.opacity = '0';
    setTimeout(() => {
        this.remove();
        showpage = true;
        if (showpage) {
            document.getElementById('paragraph').style.display = 'block'; // Show the paragraph
        }
    }, 500);
});

// Initially hide the paragraph
