const webMarcos = document.getElementById("webmarcosTimer");
webMarcos.addEventListener("click", () => {
  (webMarcos.disabled = !0), (webMarcos.innerText = `${countdown}`);
  const n = setInterval(() => {
    countdown--,
      countdown < 0
        ? (clearInterval(n), (window.location.href = downloadLink))
        : (webMarcos.innerText = `${countdown}`);
  }, 1e3);
});
