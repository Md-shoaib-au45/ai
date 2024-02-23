document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var formData = new FormData(this);
    
    fetch('http://localhost:3000/', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Optionally, update UI based on response
    })
    .catch(error => console.error('Error:', error));
  });
  