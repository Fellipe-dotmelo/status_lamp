const turnOnOff = document.getElementById("turnOnOff");

const lamp = document.getElementById("lamp");

function isLampQuebrada() {
  return lamp.src.indexOf("quebrada") > -1;
}

function lampOn() {
  if (!isLampQuebrada()) {
    lamp.src = "./img/ligada.jpg";
  }
}

function lampOff() {
  if (!isLampQuebrada()) {
    lamp.src = "./img/desligada.png";
  }
}

function lampQuebrada() {
  lamp.src = "./img/quebrada.png";
}

function lampOnOff() {
  if (turnOnOff.textContent == "Acender") {
    lampOn();
    turnOnOff.textContent = "Apagar ";
  } else {
    lampOff();
    turnOnOff.textContent = "Acender";
  }
}

turnOnOff.addEventListener("click", lampOnOff);
lamp.addEventListener("dblclick", lampQuebrada);
lamp.addEventListener("mouseover", lampOn);
lamp.addEventListener("mouseleave", lampOff);
