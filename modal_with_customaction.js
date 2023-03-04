// Learn Template literals: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
// Learn about Modal: https://getbootstrap.com/docs/5.0/components/modal/

var modalWrap = null;
/**
 * 
 * @param {string} title 
 * @param {string} description content of modal body 
 * @param {string} dest content of detination placeholder 
 * @param {string} yesBtnLabel label of Yes button 
 * @param {string} noBtnLabel label of No button 
 * @param {function} callback callback function when click Yes button
 */
const showModal = (title, description, yesBtnLabel = 'Yes', noBtnLabel = 'Cancel', callback) => {
  if (modalWrap !== null) {
    modalWrap.remove();
  }

  modalWrap = document.createElement('div');
  modalWrap.innerHTML = `
    <div class="modal fade" tabindex="-1">
      <div class="modal-dialog modal-xl modal-fullscreen-xl-down">
        <div class="modal-content">
          <div class="modal-header bg-light">
            <h5 class="modal-title">${title}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>${description}</p>
          </div>
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" style="font-weight:700;" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Contact us for inquiry 
                </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                <form onsubmit="sendEmail();">
                    <div class="mb-3">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" class="form-control" id="name">
                    </div>
                    <div class="mb-3">
                        <label for="InputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp">
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="headCount" class="form-label">Number of passengers</label>
                        <input type="text" class="form-control" id="headCount" placeholder="Ex. 2 Adults, 1 child">
                        <div id="headCountHelp" class="form-text">Adults Age - 10 Years & above, Infant Age - below 2 Years </div>
                    </div>
                    <div class="mb-3">
                        <label for="dates" class="form-label">Tentatives Dates</label>
                        <input type="text" class="form-control" id="dates" placeholder="Ex. 11/04/2022 to 20/04/2022">
                        <div id="headCountHelp" class="form-text">Get better rates for booking your tour before 3 months from travel</div>
                    </div>
                    <div class="mb-3">
                        <fieldset disabled>
                        <label for="tourName" class="form-label">Destination Details</label>
                        <input type="text" class="form-control" id="tourName" value='Defaul as per selected tour'>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                </div>
          </div>
        </div>
          <div class="modal-footer bg-light">
            
            <button type="button" class="btn btn-primary modal-success-btn" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    <script src="https://smtpjs.com/v3/smtp.js"></script>
    <script>
        function sendEmail(){
            Email.send({
                Host : "smtp.gmail.com",
                Username : "abhishekmazumdar94",
                Password : "caeengineer2020",
                To : 'mazumdarabhishek94@gmail.com',
                From : document.getElementById("InputEmail1").value,
                Subject : "This is the subject",
                Body : "And this is the body"
            }).then(
              message => alert(message)
            );
        }
    </script>
  `;

  modalWrap.querySelector('.modal-success-btn').onclick = callback;

  document.body.append(modalWrap);

  var modal = new bootstrap.Modal(modalWrap.querySelector('.modal'));
  modal.show();
}