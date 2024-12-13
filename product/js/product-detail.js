const stars = document.querySelectorAll(".star-wrapper i");
for (const star of stars) {
    star.addEventListener("click", function (event) {
        const element = event.target;
        value = element.closest(".star").getAttribute("rating");
        console.log(value);
        // console.log(element.attributes.rating.value);
        const ratingWrapper = this.closest(".rating");
        const ratingInput = ratingWrapper.querySelector("input[name='rating']");
        ratingWrapper.classList.remove(
            "rating-1r",
            "rating-2r",
            "rating-3r",
            "rating-4r",
            "rating-5r"
        );
        ratingWrapper.classList.add(`rating-${value}r`);
        ratingInput.value = value;
    });
}
