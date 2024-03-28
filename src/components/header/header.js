
document.addEventListener("DOMContentLoaded", function () {
  const cityItems = document.querySelectorAll("#staticBackdrop .list-item");

  const input = document.querySelector("input");

  cityItems.forEach(function (item, index) {
    item.addEventListener("mouseover", function () {
      const city = item.textContent;

      if (index > 1) {
        input.value = `Владимирская область, ${city}`;
      } else {
        input.value = city;
      }
    });
  });

  cityItems.forEach(function (item) {
    item.addEventListener("click", function () {
      const city = item.textContent;

      const modalButton = document.querySelector(
        '[data-bs-target="#staticBackdrop"]'
      );

      modalButton.textContent = city;

      const modal = bootstrap.Modal.getInstance(
        document.getElementById("staticBackdrop")
      );
      modal.hide();
    });
  });
});

const icon = document.querySelector(".icon-visually-impaired");
const tooltip = document.querySelector(".tooltip-visually-impaired");

let timer;

icon.addEventListener("mouseenter", function () {
  tooltip.style.display = "block";
});

icon.addEventListener("mouseleave", function () {
  timer = setTimeout(function () {
    tooltip.style.display = "none";
  }, 5000);
});

tooltip.addEventListener("mouseenter", function () {
  clearTimeout(timer);
});

tooltip.addEventListener("mouseleave", function () {
  tooltip.style.display = "none";
});
