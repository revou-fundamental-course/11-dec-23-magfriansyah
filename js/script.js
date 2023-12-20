function replaceName() {
  let name = prompt("What's your name?", "");
  if (name === null || name === "") {
    document.getElementById("error").innerHTML = "Name cannot be empty!";
  } else {
    document.getElementById("name").innerHTML = name;
    document.getElementById("error").innerHTML = "";
  }
}

document.getElementById("tombol").addEventListener("click", function () {
  replaceName();
});

var slideIndex = 1;
showDivs(slideIndex);

var slideInterval = setInterval(function () {
  plusDivs(1);
}, 3000);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("img-slideshow");

  if (n < 1) {
    slideIndex = x.length;
  } else if (n > x.length) {
    slideIndex = 1;
  }

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  x[slideIndex - 1].style.display = "block";
}

function validateForm() {
  const nama = document.getElementById("nama").value;
  const tgl_lahir = document.getElementById("tgl_lahir").value;
  const jenis_kelamin = document.querySelector(
    'input[name="jenis_kelamin"]:checked'
  );
  const pesan = document.getElementById("pesan").value;

  if (nama.trim() === "") {
    alert("Nama is required.");
    return false;
  }

  if (tgl_lahir.trim() === "") {
    alert("Tanggal Lahir is required.");
    return false;
  }

  if (!jenis_kelamin) {
    alert("Jenis Kelamin is required.");
    return false;
  }

  if (pesan.trim() === "") {
    alert("Pesan is required.");
    return false;
  }

  handleSubmit();
  return false;
}

function handleSubmit() {
  const nama = document.getElementById("nama").value;
  const tgl_lahir = document.getElementById("tgl_lahir").value;
  const jenis_kelamin = document.querySelector(
    'input[name="jenis_kelamin"]:checked'
  ).value;
  const pesan = document.getElementById("pesan").value;

  const cardBox = document.querySelector(".card-box");
  cardBox.innerHTML = `
    <p>Current Time : ${getCurrentTime()}</p>
    <p>Nama : ${nama}</p>
    <p>Tanggal Lahir : ${tgl_lahir}</p>
    <p>Jenis Kelamin : ${jenis_kelamin}</p>
    <p>Pesan : ${pesan}</p>
  `;

  document.getElementById("myForm").reset();
  return false;
}

function getCurrentTime() {
  const now = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  };
  const formattedDateTime = now.toLocaleDateString("en-US", options);
  return formattedDateTime;
}

document.querySelectorAll(".nav-items a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
