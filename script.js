
function addBloon() {
    // Retrieve bloon text from input field
    var bloonText = document.getElementById('messageInput').value;

    // Create a new bloon element
    var bloon = document.createElement('div');
    bloon.classList.add('bloon');
            
            // Clear input field after adding bloon
            document.getElementById('messageInput').value = '';            // Set the bloon text with formatted message
            var formattedMessage = bloonText.replace(/(\:\)|\:-\)|\:\(|\:-\(|\:\D|<3)/g, '<span style="color: red;">$&</span>');
            bloon.innerHTML = formattedMessage;

            // Append the new bloon to the container
            var bloonContainer = document.getElementById('bloonContainer');
            bloonContainer.insertBefore(bloon, bloonContainer.firstChild);
        })
        .catch(function(error) {
            console.error("Error adding bloon: ", error);
        });
}




document.getElementById("year").textContent = new Date().getFullYear();
