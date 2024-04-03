document.addEventListener('DOMContentLoaded', function () {
    const cardForm = document.getElementById('cardForm');
    const modal = document.getElementById('modal');
    const certificateContent = document.getElementById('certificateContent');
    const closeModal = document.querySelector('.close');
  
    // Hiding the modal initially
    modal.style.display = 'none';
  
    cardForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      // 🚨 Getting input values
      const studentNameInput = document.getElementById('studentName');
      const personalMessageInput =  document.getElementById('personalMessage');
      const courseNameInput =document.getElementById('courseName') ; 
  
      const studentName = studentNameInput.value;
      const personalMessage = personalMessageInput.value;
      const courseName = courseNameInput ? courseNameInput.value : "a course"; // Fallback to "a course" if no input
  
      if (studentName.trim() === '' || personalMessage.trim() === '') {
        alert('Please fill in all fields');
        return;
      };
  
      // 🚨 Generating certificate content dynamically
      const showContent = `
      <h1>Certificate of Archievement</h1>
      <h2>This is to certify that </h2>
            <h3>${studentName}</h3>
            <p>has almost completed the</p>
            <h3> ${courseName} Course</h3>
            <p>with legendary perseverance and world-class bad-assery for not giving up 🏆</p>
            <img src="logo.png" style="width: 200px; height: auto;">
            <p>${personalMessage} </p>
        `;
        
        // Setting the certificate content
        certificateContent.innerHTML = showContent;
    
      //  Displaying the modal
      modal.style.display = 'block';
  
      // Clearing the form inputs
      studentNameInput.value = '';
      personalMessageInput.value = '';
      if(courseNameInput) courseNameInput.value = '';
    });
  
    //  🚨 Closing the modal when the close button is clicked
    closeModal.addEventListener('click', function () {
      modal.style.display = 'none';
  });
  });
  