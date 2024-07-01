document.getElementById('color-select').addEventListener('change', function() {
    var selectedColor = this.value;
    var viewer = document.getElementById('DRLJ');
    var posterImage;
    if (selectedColor === 'Black') {
        viewer.setAttribute('src', '/DRLJB.glb');
        posterImage = '/photos/Defaltam Red Leather Jacket.webp';
    } else {
        viewer.setAttribute('src', '/DRLJ.glb');
        posterImage = '/photos/denimFronttt.webp';
    }
    viewer.setAttribute('poster', posterImage);
});

document.getElementById('purchase-button').addEventListener('click', function() {
    var selectedColor = document.getElementById('color-select').value;
    var href;
    if (selectedColor === 'Black') {
        href = 'https://buy.stripe.com/4gweYP9Ie26mf9m9AF';
    } else {
        href = 'https://buy.stripe.com/4gw9Ev07EfXcgdq4gk';
    }
    // Change the window location to the appropriate href
    window.location.href = href;
});

    const modelViewer = document.getElementById('DRLJ');

  modelViewer.oncontextmenu = function(event) {
    // Prevent default right-click behavior
    return false;
  };
  
  modelViewer.onclick = function(event) {
    // Check if the right mouse button was clicked
    if (event.button === 2) {
      // Prevent default behavior for right-click
      return false;
    }
  };
