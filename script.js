
var isSecure=false;
var safeURL=false;
var hasVirus=false;



document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page

    var textValue = document.getElementById("textInput").value;
    var resultDiv = document.getElementById("resultDiv");

    resultDiv.classList.add("result");


    var finaltxt = ""


    var securetxt = ""

    if (safeURL && hasVirus) {
      securetxt = "This website is Secure. <br /> <br />" ;
    }
    else {
      securetxt = "This website is Not Secure. <br /><br />";
    }


    var googletxt = ""

    if (safeURL){
      googletxt = "Google Safe Browsing API detects that this url is not compromised. <br /><br />";
    }
    else {
      googletxt = "Google Safe Browsing API detects that this url is compromised. <br /><br />";
    }

    var virustxt = ""
    
    if (hasVirus) {
      virustxt = "Virus Total API declares that this site does not contain any malware. <br />";
    }
    else {

      virustxt = "Virus Total API declares that this site does contain malware. <br />";

    }

    finaltxt = securetxt + googletxt + virustxt;

    resultDiv.innerHTML = VirusTotalscanWebsite(textValue);
  });