// INI JS RUANG KELUARGA 

function saklar1() {
    let toggle1 = document.getElementById("default-toggle1");
    let toggle2 = document.getElementById("default-toggle2");
    let toggle3 = document.getElementById("default-toggle3");

    let lampu1 = document.getElementById("lampu1");
    let lampu2 = document.getElementById("lampu2");
    let lampu3 = document.getElementById("lampu3");

    if (toggle1.checked) {
        lampu1.src ="assets/on.gif"
    } else {
        lampu1.src ="assets/off.gif"
    }

    if (toggle2.checked) {
        lampu2.src ="assets/on.gif"
    } else {
        lampu2.src ="assets/off.gif"
    }

    if (toggle3.checked) {
        lampu3.src ="assets/on.gif"
    } else {
        lampu3.src ="assets/off.gif"
    }
}

function saklarGroup1() {
    let toggleGroup1 = document.getElementById("toggle-group1");
    let toggle1 = document.getElementById("default-toggle1");
    let toggle2 = document.getElementById("default-toggle2");
    let toggle3 = document.getElementById("default-toggle3");

    toggle1.checked = toggleGroup1.checked;
    toggle2.checked = toggleGroup1.checked;
    toggle3.checked = toggleGroup1.checked;

    saklar1();
}

// INI JS RUANG MAKAN 

function saklar2() {
    let toggle4 = document.getElementById("default-toggle4");

    let lampu4 = document.getElementById("lampu4");

    if (toggle4.checked) {
        lampu4.src ="assets/on.gif"
    } else {
        lampu4.src ="assets/off.gif"
    }

}

function saklarGroup2() {
    let toggleGroup2 = document.getElementById("toggle-group2");
    let toggle4 = document.getElementById("default-toggle4");

     toggle4.checked = toggleGroup2.checked;

     saklar2();
}

// INI JS RUANG TIDUR

function saklar3() {
    let toggle5 = document.getElementById("default-toggle5");
    let toggle6 = document.getElementById("default-toggle6");

    let lampu5 = document.getElementById("lampu5");
    let lampu6 = document.getElementById("lampu6");

    if (toggle5.checked) {
        lampu5.src ="assets/on.gif"
    } else {
        lampu5.src ="assets/off.gif"
    }

     if (toggle6.checked) {
        lampu6.src ="assets/on.gif"
    } else {
        lampu6.src ="assets/off.gif"
    }

}

function saklarGroup3() {
    let toggleGroup3 = document.getElementById("toggle-group3");
    let toggle5 = document.getElementById("default-toggle5");
    let toggle6 = document.getElementById("default-toggle6");

     toggle5.checked = toggleGroup3.checked;
     toggle6.checked = toggleGroup3.checked;

     saklar3();
}

// INI JS RUANG TAMU 

function saklar4() {
    let toggle7 = document.getElementById("default-toggle7");
    let toggle8 = document.getElementById("default-toggle8");
    let toggle9 = document.getElementById("default-toggle9");
    let toggle10 = document.getElementById("default-toggle10");

    let lampu7 = document.getElementById("lampu7");
    let lampu8 = document.getElementById("lampu8");
    let lampu9 = document.getElementById("lampu9");
    let lampu10 = document.getElementById("lampu10");

    if (toggle7.checked) {
        lampu7.src ="assets/on.gif"
    } else {
        lampu7.src ="assets/off.gif"
    }

     if (toggle8.checked) {
        lampu8.src ="assets/on.gif"
    } else {
        lampu8.src ="assets/off.gif"
    }
    if (toggle9.checked) {
        lampu9.src ="assets/on.gif"
    } else {
        lampu9.src ="assets/off.gif"
    }

     if (toggle10.checked) {
        lampu10.src ="assets/on.gif"
    } else {
        lampu10.src ="assets/off.gif"
    }

}

function saklarGroup4() {
    let toggleGroup4 = document.getElementById("toggle-group4");
    let toggle7 = document.getElementById("default-toggle7");
    let toggle8 = document.getElementById("default-toggle8");
    let toggle9 = document.getElementById("default-toggle9");
    let toggle10 = document.getElementById("default-toggle10");

     toggle7.checked = toggleGroup4.checked;
     toggle8.checked = toggleGroup4.checked;
     toggle9.checked = toggleGroup4.checked;
     toggle10.checked = toggleGroup4.checked;

     saklar4();
}

// INI BUTTON ON ALL 

function onall() {
    let toggleGroup1 = document.getElementById("toggle-group1"); 
    let toggleGroup2 = document.getElementById("toggle-group2");
    let toggleGroup3 = document.getElementById("toggle-group3");
    let toggleGroup4 = document.getElementById("toggle-group4");

    let toggle1 = document.getElementById("default-toggle1");
    let toggle2 = document.getElementById("default-toggle2");
    let toggle3 = document.getElementById("default-toggle3");
    let toggle4 = document.getElementById("default-toggle4");
    let toggle5 = document.getElementById("default-toggle5");
    let toggle6 = document.getElementById("default-toggle6");
    let toggle7 = document.getElementById("default-toggle7");
    let toggle8 = document.getElementById("default-toggle8");
    let toggle9 = document.getElementById("default-toggle9");
    let toggle10 = document.getElementById("default-toggle10");

    if (toggleGroup1 && toggleGroup2 && toggleGroup3 && toggleGroup4 && toggle1 && toggle2 && toggle3 && toggle4 && toggle5 && toggle6 && toggle7 && toggle8 && toggle9 && toggle10) {
        toggleGroup1.checked = true;
        toggleGroup2.checked = true;
        toggleGroup3.checked = true;
        toggleGroup4.checked = true;

        toggle1.checked = true;
        toggle2.checked = true;
        toggle3.checked = true;
        toggle4.checked = true;
        toggle5.checked = true;
        toggle6.checked = true;
        toggle7.checked = true;
        toggle8.checked = true;
        toggle9.checked = true;
        toggle10.checked = true;
    }

    saklar1();
    saklar2();
    saklar3();
    saklar4();
}

// INI BUTTON OFF ALL 

function offall() {
    let toggleGroup1 = document.getElementById("toggle-group1"); 
    let toggleGroup2 = document.getElementById("toggle-group2");
    let toggleGroup3 = document.getElementById("toggle-group3");
    let toggleGroup4 = document.getElementById("toggle-group4");

    let toggle1 = document.getElementById("default-toggle1");
    let toggle2 = document.getElementById("default-toggle2");
    let toggle3 = document.getElementById("default-toggle3");
    let toggle4 = document.getElementById("default-toggle4");
    let toggle5 = document.getElementById("default-toggle5");
    let toggle6 = document.getElementById("default-toggle6");
    let toggle7 = document.getElementById("default-toggle7");
    let toggle8 = document.getElementById("default-toggle8");
    let toggle9 = document.getElementById("default-toggle9");
    let toggle10 = document.getElementById("default-toggle10");

    if (toggleGroup1 && toggleGroup2 && toggleGroup3 && toggleGroup4 && toggle1 && toggle2 && toggle3 && toggle4 && toggle5 && toggle6 && toggle7 && toggle8 && toggle9 && toggle10) {
        toggleGroup1.checked = false;
        toggleGroup2.checked = false;
        toggleGroup3.checked = false;
        toggleGroup4.checked = false;

        toggle1.checked = false;
        toggle2.checked = false;
        toggle3.checked = false;
        toggle4.checked = false;
        toggle5.checked = false;
        toggle6.checked = false;
        toggle7.checked = false;
        toggle8.checked = false;
        toggle9.checked = false;
        toggle10.checked = false;
    }

    saklar1();
    saklar2();
    saklar3();
    saklar4();
}