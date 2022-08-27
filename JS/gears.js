/* When the user clicks on the button, 
 toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}


// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

//checking and stuff

let vName, vCPF, vPassword, vcPassword;
let errorName, errorCPF, errorPassword;
let dataArray = [];

function verifyName() {
    if (document.querySelector("#vName").value == "" || document.querySelector("#vName").value == " ") {
        document.getElementById("vName").style.borderColor = "red";
        document.getElementById("vName").style.borderStyle = "dashed";

        document.getElementById("vNameErM").textContent = "Your name can't be empty.";

        vName == false;
        errorName = 1;
        console.log(errorName);
    }
    else if (vName != false) {
        document.getElementById("vName").style.borderColor = "black";
        document.getElementById("vName").style.borderStyle = "solid";

        document.getElementById("vNameErM").textContent = "looks fine for now.";

        vName == true;
        errorName = 0;
        console.log(errorName);
    }
}

function verifyCPF() {
    if (document.querySelector("#vCPF").value.length != 11) {
        document.getElementById("vCPF").style.borderColor = "red";
        document.getElementById("vCPF").style.borderStyle = "dashed";

        document.getElementById("vCPFErM").textContent = "CPF must be 11 digits.";

        vCPF == false;
        errorCPF = 1;
        console.log(errorCPF);
    }
    else if (vName != false) {
        document.getElementById("vCPF").style.borderColor = "black";
        document.getElementById("vCPF").style.borderStyle = "solid";

        document.getElementById("vCPFErM").textContent = "looks fine for now.";

        vName == true;
        errorCPF = 0;
        console.log(errorCPF);
    }
}

function verifyPassword() {
    if (document.querySelector("#Password").value != "" || document.querySelector("#Password").value != " ") {

        if (document.querySelector("#Password").value != document.querySelector("#cPassword").value) {
            document.getElementById("Password").style.borderColor = "red";
            document.getElementById("Password").style.borderStyle = "dashed";
            document.getElementById("cPassword").style.borderColor = "red";
            document.getElementById("cPassword").style.borderStyle = "dashed";

            document.getElementById("vPasswordErM").textContent = "Passwords must match.";

            vPassword == false;
            errorPassword = 1;
            console.log(errorPassword);
        }
        else if (vPassword != false) {
            document.getElementById("Password").style.borderColor = "black";
            document.getElementById("Password").style.borderStyle = "solid";
            document.getElementById("cPassword").style.borderColor = "black";
            document.getElementById("cPassword").style.borderStyle = "solid";

            document.getElementById("vPasswordErM").textContent = "looks fine for now.";

            vPassword == true;
            errorPassword = 0;
            console.log(errorPassword);
        }

    }
    else {
        document.getElementById("vPasswordErM").textContent = "Passwords can't be empty.";
        vPassword == false;
        errorPassword = 1;
        console.log(errorPassword);
    }

}

document.querySelector("#adv1").addEventListener("click", () => {
    verifyName();
    verifyCPF();
    verifyPassword();

    if (errorName == 0 && errorCPF == 0 && errorPassword == 0) {
        dataArray.push(document.querySelector("#vName").value, document.querySelector("#vCPF").value, document.querySelector("#Password").value);
        console.log(dataArray)

        document.getElementById("pag1").style.display = "none";
        document.getElementById("pag2").style.display = "block";
    }

})

let errorYears, errorState, errorPro;
let vPro, vState, vYears;

function verifyPro() {
    if (document.querySelector("#vPro").value == "" || document.querySelector("#vPro").value == " ") {
        document.getElementById("vPro").style.borderColor = "red";
        document.getElementById("vPro").style.borderStyle = "dashed";

        document.getElementById("vProErM").textContent = "Your profession can't be empty.";

        vPro == false;
        errorPro = 1;
        console.log(errorPro);
    }
    else if (vPro != false) {
        document.getElementById("vPro").style.borderColor = "black";
        document.getElementById("vPro").style.borderStyle = "solid";

        document.getElementById("vProErM").textContent = "looks fine for now.";

        vPro == true;
        errorPro = 0;
        console.log(errorPro);
    }
}

let radioselected;

function verifyRadio(radioselected) {
    if (document.getElementById("RS").checked || document.getElementById("SC").checked || document.getElementById("PR").checked) {
        document.getElementById("RS").style.borderColor = "black";
        document.getElementById("RS").style.borderStyle = "solid";
        document.getElementById("SC").style.borderColor = "black";
        document.getElementById("SC").style.borderStyle = "solid";
        document.getElementById("PR").style.borderColor = "black";
        document.getElementById("PR").style.borderStyle = "solid";

        document.getElementById("vStateErM").textContent = "looks fine for now.";

        vState == true;
        errorState = 0;
        console.log(errorState);
        if (document.getElementById("RS").checked) {
            radioselected = "RS";
        }
        if (document.getElementById("SC").checked) {
            radioselected = "SC";
        }
        if (document.getElementById("PR").checked) {
            radioselected = "PR";
        }
    }
    else {
        document.getElementById("RS").style.borderColor = "red";
        document.getElementById("RS").style.borderStyle = "dashed";
        document.getElementById("SC").style.borderColor = "red";
        document.getElementById("SC").style.borderStyle = "dashed";
        document.getElementById("PR").style.borderColor = "red";
        document.getElementById("PR").style.borderStyle = "dashed";

        document.getElementById("vStateErM").textContent = "You must work in one of these states!";

        vState == false;
        errorState = 1;
        console.log(errorState);
    }


}

function verifyYears() {
    if (document.querySelector("#vYears").value < 0 || document.querySelector("#vYears").value > 50) {
        document.getElementById("vYears").style.borderColor = "red";
        document.getElementById("vYears").style.borderStyle = "dashed";

        document.getElementById("vYearsErM").textContent = "Please enter a valid amount.";

        vYears == false;
        errorYears = 1;
        console.log(errorYears);
    }
    else {
        document.getElementById("vYears").style.borderColor = "black";
        document.getElementById("vYears").style.borderStyle = "solid";

        document.getElementById("vYearsErM").textContent = "looks fine for now.";

        vYears == true;
        errorYears = 0;
        console.log(errorYears);
    }
}


document.querySelector("#adv2").addEventListener("click", () => {
    verifyPro();
    verifyRadio(radioselected);
    verifyYears();

    if (errorPro == 0 && errorState == 0 && errorYears == 0) {
        dataArray.push(document.querySelector("#vPro").value, document.querySelector("#vYears").value, radioselected);
        console.log(dataArray)

        document.getElementById("pag2").style.display = "none";
        document.getElementById("pag3").style.display = "block";

        document.getElementById("logging").innerHTML = JSON.stringify(dataArray);
    }

})

let lastV;

function lastverify() {
    if (document.getElementById("checkY").checked) {
        document.getElementById("vYearsErM").textContent = "Great!";
    }
    if (document.getElementById("checkN").checked) {
        document.getElementById("vYearsErM").textContent = "Do it again!";
    }
}

document.querySelector("#adv3").addEventListener("click", () => {
    lastverify();
})