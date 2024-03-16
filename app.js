const toastEl = document.querySelector(".toast"),
  wifiIcon = toastEl.querySelector(".wifi_icon"),
  titleEl = toastEl.querySelector("p"),
  SubtitleEl = toastEl.querySelector("span"),
  btnClose = toastEl.querySelector(".close_icon");

function ajax() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

  xhr.addEventListener("load", () => {
    if (xhr.status === 200 && xhr.status < 300) {
      toastEl.classList.remove("offline");
      toastEl.classList.remove("no_move");
      wifiIcon.innerHTML = `<i class="fa-solid fa-wifi"></i>`;
      titleEl.innerText = "You're in Line Now";
      SubtitleEl.innerText = "Internet is Connected";
    } else {
      offLine();
    }

    btnClose.addEventListener("click", () => toastEl.classList.add("hide"));
    // setTimeout(() => {
    //     toastEl.classList.remove("hide");
    // }, 3000);
  });
  xhr.addEventListener("error", () => {
    if (xhr.status == 0) {
      offLine();
      btnClose.addEventListener("click", () =>
        toastEl.classList.add("no_move")
      );
    }
  });

  xhr.send();

  function offLine() {
    toastEl.classList.remove("hide");
    toastEl.classList.add("offline");
    wifiIcon.innerHTML = `<i class="fa-solid fa-phone-slash"></i>`;
    titleEl.innerText = "You're off Line Now";
    SubtitleEl.innerText = "Oops! Internet is disconnected!";
  }
}

window.addEventListener("load", ajax);
