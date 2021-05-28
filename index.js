let hamburger = document.querySelector(".hamburger"),
    navMenu = document.querySelector(".nav-menu ul"),
    modal = document.querySelector(".modal"),
    leftArrow = document.querySelector(".img-one"),
    rightArrow = document.querySelector(".img-two"),
    headerImage = document.querySelector(".header-image"),
    imageArrayDesktop = [
        "images/desktop-image-hero-1.jpg",
        "images/desktop-image-hero-2.jpg",
        "images/desktop-image-hero-3.jpg"
    ],
    imageArrayMobile = [
        "images/mobile-image-hero-1.jpg",
        "images/mobile-image-hero-2.jpg",
        "images/mobile-image-hero-3.jpg"
    ],
    closeIcon = document.querySelector(".close-icon");

hamburger.addEventListener("click", function() {
    navMenu.classList.add("menu-dropdown");
    modal.classList.add("show");
})
closeIcon.addEventListener("click", function() {
    navMenu.classList.remove("menu-dropdown");
    modal.classList.remove("show");
})
if(window.innerWidth > 850) {
    headerImage.setAttribute("src", imageArrayDesktop[0])

    leftArrow.addEventListener("click", function() {
        let imageAttr = headerImage.getAttribute("src");
        let imageAttrIndex = imageArrayDesktop.indexOf(imageAttr)

        if(imageAttrIndex <= 0) {
            imageAttrIndex = imageArrayDesktop.length - 1;
            headerImage.setAttribute("src", imageArrayDesktop[imageAttrIndex])
        }
        else if(imageAttrIndex > 0) {
            imageAttrIndex --
            headerImage.setAttribute("src", imageArrayDesktop[imageAttrIndex])
        }
    })
    rightArrow.addEventListener("click", function() {
        let imageAttr = headerImage.getAttribute("src");
        let imageAttrIndex = imageArrayDesktop.indexOf(imageAttr);

        if(imageAttrIndex < imageArrayDesktop.length - 1) {
            imageAttrIndex ++;
            headerImage.setAttribute("src", imageArrayDesktop[imageAttrIndex])
        }
        else if(imageAttrIndex >= imageArrayDesktop.length - 1) {
            imageAttrIndex = 0;
            headerImage.setAttribute("src", imageArrayDesktop[imageAttrIndex])
        }
    })
}
else if(window.innerWidth <= 850) {
    headerImage.setAttribute("src", imageArrayMobile[0])

    leftArrow.addEventListener("click", function() {
        let imageAttr = headerImage.getAttribute("src");
        let imageAttrIndex = imageArrayMobile.indexOf(imageAttr)

        if(imageAttrIndex <= 0) {
            imageAttrIndex = imageArrayMobile.length - 1;
            headerImage.setAttribute("src", imageArrayMobile[imageAttrIndex])
        }
        else if(imageAttrIndex > 0) {
            imageAttrIndex --
            headerImage.setAttribute("src", imageArrayMobile[imageAttrIndex])
        }
    })
    rightArrow.addEventListener("click", function() {
        let imageAttr = headerImage.getAttribute("src");
        let imageAttrIndex = imageArrayMobile.indexOf(imageAttr);

        if(imageAttrIndex < imageArrayMobile.length - 1) {
            imageAttrIndex ++;
            headerImage.setAttribute("src", imageArrayMobile[imageAttrIndex])
        }
        else if(imageAttrIndex >= imageArrayMobile.length - 1) {
            imageAttrIndex = 0;
            headerImage.setAttribute("src", imageArrayMobile[imageAttrIndex])
        }
    })
}
 