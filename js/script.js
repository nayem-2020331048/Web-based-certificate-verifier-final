const submitBtn = document.getElementById("submit-form");

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const regNo = document.getElementById("registrationNumber").value;
  const dob = document.getElementById("dateOfBirth").value;
  const docType = document.getElementById("documentType").value;

  console.log({ regNo, dob, docType });

    
      
      if(regNo == "2020331001" || regNo == "2020331002" || regNo == "2020331003"){

        if (docType == "certificate")
        {
          window.location.href = `View.html`;
        }
        else 
        {
          window.location.href = `Transcript.html`;
        }

        
      }

      else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Not found",
        });
      } 

});
