// HIDDEN & SHOW PASSWORD
document.addEventListener("DOMContentLoaded", () => {
    const passwordInput = document.getElementById("password");
    const toggleBtn = document.getElementById("toggleBtn");

    toggleBtn.addEventListener("click", () => {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
        } else {
            passwordInput.type = "password";
        }
    });
});

// HIDDEN & SHOW RE-PASSWORD
document.addEventListener("DOMContentLoaded", () => {
    const passwordInput = document.getElementById("password_confirmation");
    const toggleBtn = document.getElementById("toggle-re-password");

    toggleBtn.addEventListener("click", () => {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
        } else {
            passwordInput.type = "password";
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
// Get the product modal
const productModal = document.getElementById("mega_menu_products_modal");
// // Get the button that opens the modal
const products_btn = document.getElementById("mega_menu_products_btn");
const products_footer1_btn = document.getElementById("mega_menu_products1_btn");
const products_footer2_btn = document.getElementById("mega_menu_products2_btn");
const products_footer3_btn = document.getElementById("mega_menu_products3_btn");
const products_footer4_btn = document.getElementById("mega_menu_products4_btn");
const products_footer5_btn = document.getElementById("mega_menu_products5_btn");
const products_footer6_btn = document.getElementById("mega_menu_products6_btn");
const products_footer7_btn = document.getElementById("mega_menu_products7_btn");
const products_footer8_btn = document.getElementById("mega_menu_products8_btn");
const products_footer9_btn = document.getElementById("mega_menu_products9_btn");
// // Get the button that opens the product contents in modal
const productContent = document.getElementById("product");
// // Get the blogs modal
const blogsModal = document.getElementById("mega_menu_blogs_modal");
// // Get the button that opens the modal
const blogs_btn = document.getElementById("mega_menu_blogs_btn");
// // Get the button that opens the blogs and ideas contents in modal
const blogsContent = document.getElementById("idea_blog");

const blogs_mobile_btn = document.getElementById("mega_menu_blogs_mobile_btn");



 // Get the <span> element that closes the modal
 const close1 = document.getElementById("close1");
 const close2 = document.getElementById("close2");
 const close3 = document.getElementById("close3");
 const close4 = document.getElementById("close4");
 const close5 = document.getElementById("close5");
 const close6 = document.getElementById("close6");
 const close7 = document.getElementById("close7");
 const close8 = document.getElementById("close8");
 const close9 = document.getElementById("close9");
 const close10 = document.getElementById("close10");
 const close11 = document.getElementById("close11");
  // When the user clicks on <span> (x), close the modal
  close1.onclick = function() {
    productModal.style.display = "none";
    blogsModal.style.display = "none";
}
close2.onclick = function() {
    productModal.style.display = "none";
    blogsModal.style.display = "none";
}
close3.onclick = function() {
    productModal.style.display = "none";
    blogsModal.style.display = "none";
}
close4.onclick = function() {
    productModal.style.display = "none";
    blogsModal.style.display = "none";
}
close5.onclick = function() {
    productModal.style.display = "none";
    blogsModal.style.display = "none";
}
close6.onclick = function() {
    productModal.style.display = "none";
    blogsModal.style.display = "none";
}
close7.onclick = function() {
    productModal.style.display = "none";
    blogsModal.style.display = "none";
}
close8.onclick = function() {
    productModal.style.display = "none";
    blogsModal.style.display = "none";
}
close9.onclick = function() {
    productModal.style.display = "none";
    blogsModal.style.display = "none";
}
close10.onclick = function() {
    productModal.style.display = "none";
    blogsModal.style.display = "none";
}
close11.onclick = function() {
    productModal.style.display = "none";
    blogsModal.style.display = "none";
}

    //SHAPES AND SIZES
    const shapesAndSizes = document.getElementById("shapesSizesPanel");
    const shapeSizes = document.getElementById("shapesSizesTab");

    //LOOKS AND COLORS
    const looksAndColors = document.getElementById("looksColorsPanel");
    const looksColors = document.getElementById("looksColorsTab");

    //MOSAICS, VINYLS AND BORDERS
    const mosaicsSubwayAndBorders = document.getElementById(
        "mosaicsSubwayBrodersPanel"
    );
    const mosaicsSubwayBorders = document.getElementById(
        "mosaicsSubwayBordersTab"
    );

    const vinylsAndBorders = document.getElementById(
        "vinylsBrodersPanel"
    );
    const vinylsBorders = document.getElementById(
        "vinylsBordersTab"
    );

    //FINISHES
    const finishesPanel = document.getElementById("finishesPanel");
    const finishesTab = document.getElementById("finishesTab");

    //APPLICATIONS
    const applicationsPanel = document.getElementById("applicationsPanel");
    const applicationsTab = document.getElementById("applicationsTab");

    //SANITARY WARES
    const sanitaryAndWares = document.getElementById("sanitaryWaresPanel");
    const sanitaryWares = document.getElementById("sanitaryWaresTab");

    //TRIMS, GROUTS AND ADHESIVES
    const trimsGroutsAndAdhesives = document.getElementById(
        "trimsGroutsAdhesivesPanel"
    );
    const trimsGroutsAdhesives = document.getElementById(
        "trimsGroutsAdhesivesTab"
    );

    const toolsTrimsAndLevelerSpacers = document.getElementById(
        "toolsTrimsLevelerSpacersPanel"
    );
    const toolsTrimsLevelerSpacers = document.getElementById(
        "toolsTrimsLevelerSpacersTab"
    );

    // When the user clicks the button, open the modal
    products_btn.onmouseenter = function () {
        productModal.style.display = "flex";
        shapesAndSizes.style.display = "flex";
        mosaicsSubwayAndBorders.style.display = "none";
        vinylsAndBorders.style.display = "none";
        sanitaryAndWares.style.display = "none";
        trimsGroutsAndAdhesives.style.display = "none";
        toolsTrimsAndLevelerSpacers.style.display = "none";
        looksAndColors.style.display = "none";
        finishesPanel.style.display = "none";
        applicationsPanel.style.display = "none";
        blogsModal.style.display = "none";
    };

    products_footer1_btn.onclick = function () {
        productModal.style.display = "flex";
        shapesAndSizes.style.display = "flex";
        mosaicsSubwayAndBorders.style.display = "none";
        vinylsAndBorders.style.display = "none";
        sanitaryAndWares.style.display = "none";
        trimsGroutsAndAdhesives.style.display = "none";
        toolsTrimsAndLevelerSpacers.style.display = "none";
        looksAndColors.style.display = "none";
        finishesPanel.style.display = "none";
        applicationsPanel.style.display = "none";
        blogsModal.style.display = "none";
    };

    products_footer2_btn.onclick = function () {
        productModal.style.display = "flex";
        shapesAndSizes.style.display = "none";
        looksAndColors.style.display = "flex";
        mosaicsSubwayAndBorders.style.display = "none";
        vinylsAndBorders.style.display = "none";
        sanitaryAndWares.style.display = "none";
        trimsGroutsAndAdhesives.style.display = "none";
        toolsTrimsAndLevelerSpacers.style.display = "none";
        finishesPanel.style.display = "none";
        applicationsPanel.style.display = "none";
        blogsModal.style.display = "none";
    };

    products_footer3_btn.onclick = function () {
        productModal.style.display = "flex";
        shapesAndSizes.style.display = "none";
        looksAndColors.style.display = "none";
        vinylsAndBorders.style.display = "flex";
        mosaicsSubwayAndBorders.style.display = "none";
        sanitaryAndWares.style.display = "none";
        trimsGroutsAndAdhesives.style.display = "none";
        toolsTrimsAndLevelerSpacers.style.display = "none";
        finishesPanel.style.display = "none";
        applicationsPanel.style.display = "none";
        blogsModal.style.display = "none";
    };

    products_footer4_btn.onclick = function () {
        productModal.style.display = "flex";
        shapesAndSizes.style.display = "none";
        looksAndColors.style.display = "none";
        vinylsAndBorders.style.display = "none";
        mosaicsSubwayAndBorders.style.display = "flex";
        sanitaryAndWares.style.display = "none";
        trimsGroutsAndAdhesives.style.display = "none";
        toolsTrimsAndLevelerSpacers.style.display = "none";
        finishesPanel.style.display = "none";
        applicationsPanel.style.display = "none";
        blogsModal.style.display = "none";
    };

    products_footer5_btn.onclick = function () {
        productModal.style.display = "flex";
        shapesAndSizes.style.display = "none";
        looksAndColors.style.display = "none";
        vinylsAndBorders.style.display = "none";
        mosaicsSubwayAndBorders.style.display = "none";
        finishesPanel.style.display = "flex";
        applicationsPanel.style.display = "none";
        sanitaryAndWares.style.display = "none";
        trimsGroutsAndAdhesives.style.display = "none";
        toolsTrimsAndLevelerSpacers.style.display = "none";
        blogsModal.style.display = "none";
    };

    products_footer6_btn.onclick = function () {
        productModal.style.display = "flex";
        shapesAndSizes.style.display = "none";
        looksAndColors.style.display = "none";
        vinylsAndBorders.style.display = "none";
        mosaicsSubwayAndBorders.style.display = "none";
        finishesPanel.style.display = "none";
        applicationsPanel.style.display = "flex";
        sanitaryAndWares.style.display = "none";
        trimsGroutsAndAdhesives.style.display = "none";
        toolsTrimsAndLevelerSpacers.style.display = "none";
        blogsModal.style.display = "none";
    };

    products_footer7_btn.onclick = function () {
        productModal.style.display = "flex";
        shapesAndSizes.style.display = "none";
        looksAndColors.style.display = "none";
        vinylsAndBorders.style.display = "none";
        mosaicsSubwayAndBorders.style.display = "none";
        finishesPanel.style.display = "none";
        applicationsPanel.style.display = "none";
        sanitaryAndWares.style.display = "flex";
        trimsGroutsAndAdhesives.style.display = "none";
        toolsTrimsAndLevelerSpacers.style.display = "none";
        blogsModal.style.display = "none";
    };

    products_footer8_btn.onclick = function () {
        productModal.style.display = "flex";
        shapesAndSizes.style.display = "none";
        looksAndColors.style.display = "none";
        vinylsAndBorders.style.display = "none";
        mosaicsSubwayAndBorders.style.display = "none";
        finishesPanel.style.display = "none";
        applicationsPanel.style.display = "none";
        sanitaryAndWares.style.display = "none";
        trimsGroutsAndAdhesives.style.display = "flex";
        toolsTrimsAndLevelerSpacers.style.display = "none";
        blogsModal.style.display = "none";
    };

    products_footer9_btn.onclick = function () {
        productModal.style.display = "flex";
        shapesAndSizes.style.display = "none";
        looksAndColors.style.display = "none";
        vinylsAndBorders.style.display = "none";
        mosaicsSubwayAndBorders.style.display = "none";
        finishesPanel.style.display = "none";
        applicationsPanel.style.display = "none";
        sanitaryAndWares.style.display = "none";
        trimsGroutsAndAdhesives.style.display = "none";
        toolsTrimsAndLevelerSpacers.style.display = "flex";
        blogsModal.style.display = "none";
    };

    productContent.onmouseleave = function () {
        productModal.style.display = "none";
        blogsModal.style.display = "none";
    };

    blogs_btn.onmouseenter = function () {
        blogsModal.style.display = "flex";
        productModal.style.display = "none";
    }

    blogsContent.onmouseleave = function () {
        blogsModal.style.display = "none";
        productModal.style.display = "none";
    }

    blogs_mobile_btn.onclick = function () {
        blogsModal.style.display = "flex";
        productModal.style.display = "none";
    }
    //Shapes and Sizes
    shapeSizes.onmouseenter = function () {
        shapesAndSizes.style.display = "flex";
        looksAndColors.style.display = "none";
        mosaicsSubwayAndBorders.style.display = "none";
        vinylsAndBorders.style.display = "none";
        sanitaryAndWares.style.display = "none";
        trimsGroutsAndAdhesives.style.display = "none";
        toolsTrimsAndLevelerSpacers.style.display = "none";
        finishesPanel.style.display = "none";
        applicationsPanel.style.display = "none";
        // blog.style.display = "none";
    };

    //Looks and Colors
    looksColors.onmouseenter = function () {
        looksAndColors.style.display = "flex";
        shapesAndSizes.style.display = "none";
        mosaicsSubwayAndBorders.style.display = "none";
        vinylsAndBorders.style.display = "none";
        sanitaryAndWares.style.display = "none";
        trimsGroutsAndAdhesives.style.display = "none";
        toolsTrimsAndLevelerSpacers.style.display = "none";
        finishesPanel.style.display = "none";
        applicationsPanel.style.display = "none";
        // blog.style.display = "none";
    };

    //Mosaics, Vinyls and Borders
    mosaicsSubwayBorders.onmouseenter = function () {
        mosaicsSubwayAndBorders.style.display = "flex";
        vinylsAndBorders.style.display = "none";
        shapesAndSizes.style.display = "none";
        looksAndColors.style.display = "none";
        sanitaryAndWares.style.display = "none";
        trimsGroutsAndAdhesives.style.display = "none";
        toolsTrimsAndLevelerSpacers.style.display = "none";
        finishesPanel.style.display = "none";
        applicationsPanel.style.display = "none";
        // blog.style.display = "none";
    };

    vinylsBorders.onmouseenter = function () {
        vinylsAndBorders.style.display = "flex";
        mosaicsSubwayAndBorders.style.display = "none";
        shapesAndSizes.style.display = "none";
        looksAndColors.style.display = "none";
        sanitaryAndWares.style.display = "none";
        trimsGroutsAndAdhesives.style.display = "none";
        toolsTrimsAndLevelerSpacers.style.display = "none";
        finishesPanel.style.display = "none";
        applicationsPanel.style.display = "none";
        // blog.style.display = "none";
    };

    //Finishes
    finishesTab.onmouseenter = function () {
        finishesPanel.style.display = "flex";
        sanitaryAndWares.style.display = "none";
        looksAndColors.style.display = "none";
        shapesAndSizes.style.display = "none";
        mosaicsSubwayAndBorders.style.display = "none";
        vinylsAndBorders.style.display = "none";
        trimsGroutsAndAdhesives.style.display = "none";
        toolsTrimsAndLevelerSpacers.style.display = "none";
        applicationsPanel.style.display = "none";
    };

    //Applications
    applicationsTab.onmouseenter = function () {
        applicationsPanel.style.display = "flex";
        sanitaryAndWares.style.display = "none";
        looksAndColors.style.display = "none";
        shapesAndSizes.style.display = "none";
        mosaicsSubwayAndBorders.style.display = "none";
        vinylsAndBorders.style.display = "none";
        trimsGroutsAndAdhesives.style.display = "none";
        toolsTrimsAndLevelerSpacers.style.display = "none";
        finishesPanel.style.display = "none";
    };

    //Sanitary Wares
    sanitaryWares.onmouseenter = function () {
        sanitaryAndWares.style.display = "flex";
        looksAndColors.style.display = "none";
        shapesAndSizes.style.display = "none";
        mosaicsSubwayAndBorders.style.display = "none";
        vinylsAndBorders.style.display = "none";
        trimsGroutsAndAdhesives.style.display = "none";
        toolsTrimsAndLevelerSpacers.style.display = "none";
        finishesPanel.style.display = "none";
        applicationsPanel.style.display = "none";
        // blog.style.display = "none";
    };

    //Trims, Grouts and Adhesives
    trimsGroutsAdhesives.onmouseenter = function () {
        trimsGroutsAndAdhesives.style.display = "flex";
        toolsTrimsAndLevelerSpacers.style.display = "none";
        sanitaryAndWares.style.display = "none";
        looksAndColors.style.display = "none";
        shapesAndSizes.style.display = "none";
        mosaicsSubwayAndBorders.style.display = "none";
        vinylsAndBorders.style.display = "none";
        finishesPanel.style.display = "none";
        applicationsPanel.style.display = "none";
        // blog.style.display = "none";
    };

       //Trims, Grouts and Adhesives
       toolsTrimsLevelerSpacers.onmouseenter = function () {
        toolsTrimsAndLevelerSpacers.style.display = "flex";
        trimsGroutsAndAdhesives.style.display = "none";
        sanitaryAndWares.style.display = "none";
        looksAndColors.style.display = "none";
        shapesAndSizes.style.display = "none";
        mosaicsSubwayAndBorders.style.display = "none";
        vinylsAndBorders.style.display = "none";
        finishesPanel.style.display = "none";
        applicationsPanel.style.display = "none";
        // blog.style.display = "none";
    };

    const mega_menu_products_btn_mobile = document.getElementById(
        "mega_menu_products_btn_mobile"
    );
    const mega_menu_close_btn_mobile = document.getElementById(
        "mega_menu_close_btn_mobile"
    );

    mega_menu_products_btn_mobile.addEventListener("click", () => {
        productModal.style.display = "flex";
        mega_menu_products_btn_mobile.classList.add("tw-hidden");
        mega_menu_close_btn_mobile.classList.remove("tw-hidden");
    });

    mega_menu_close_btn_mobile.addEventListener("click", () => {
        productModal.style.display = "none";
        mega_menu_close_btn_mobile.classList.add("tw-hidden");
        mega_menu_products_btn_mobile.classList.remove("tw-hidden");
    });

    // // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == productModal) {
            productModal.style.display = "none";
        }
    };

    //REGISTRATION EMAIL VALIDATION
    const regForm = document.getElementById("regForm");
    const regEmail = document.getElementById("email");
    const regEmailError = document.getElementById("regEmailError");

    regEmail.addEventListener("input", function () {
        if (!validateEmail(regEmail.value)) {
            regEmailError.textContent = "Invalid Email Address";
        } else {
            regEmailError.textContent = "";
        }
    });
    regForm.addEventListener("submit", function (event) {
        if (!validateEmail(regEmail.value)) {
            regEmailError.textContent = "Invalid Email Address";
            event.preventDefault();
        } else {
            regEmailError.textContent = "";
        }
    });

    function validateEmail(email) {
        const regEmailPattern =
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // input string is a valid email address.
        return regEmailPattern.test(email);
    }
    //END OF REGISTRATION EMAIL VALIDATION

    // FULL NAME VALIDATION
    const regName = document.getElementById("name");
    const regNameError = document.getElementById("regNameError");

    regName.addEventListener("input", function () {
        if (!validateName(regName.value)) {
            regNameError.textContent = "Invalid Fullname";
        } else {
            regNameError.textContent = "";
        }
    });
    regForm.addEventListener("submit", function (event) {
        if (!validateName(regName.value)) {
            regNameError.textContent = "Invalid Fullname";
            event.preventDefault();
        } else {
            regNameError.textContent = "";
        }
    });

    function validateName(name) {
        const regNamePattern = /^[a-zA-Z\s]{2,}$/; // input contains only alphabetic characters (both uppercase and lowercase) and spaces.
        return regNamePattern.test(name);
    }
    // END OF FULL NAME VALIDATION

    const regPassword = document.getElementById("password");
    const regRePassword = document.getElementById("password_confirmation");
    const regPasswordError = document.getElementById("regPasswordError");
    const regRePasswordError = document.getElementById("regRePasswordError");
    const submitButton = document.getElementById("submitButton");

    // Listen for input events on both password fields
    regPassword.addEventListener("input", validatePasswords);
    regRePassword.addEventListener("input", validatePasswords);

    regPassword.addEventListener("input", function () {
        if (!validatePasswordPattern(regPassword.value)) {
            regPasswordError.textContent = "Minimum 8 characters.";
        } else {
            regPasswordError.textContent = "";
        }
    });

    regRePassword.addEventListener("input", function () {
        if (!validatePasswords(regRePassword.value)) {
            regRePasswordError.textContent = "Password do not match.";
        } else {
            regRePasswordError.textContent = "";
        }
    });

    // Listen for form submission
    regForm.addEventListener("submit", function (event) {
        if (!validatePasswords()) {
            regPasswordError.textContent =
                "Passwords do not match or do not meet the requirements.";
            event.preventDefault();
        } else {
            regPasswordError.textContent = "";
        }
    });

    function validatePasswordPattern(password) {
        const passwordPattern = /^.{8,}$/;
        return passwordPattern.test(password);
    }

    function validatePasswords() {
        const password = regPassword.value;
        const repassword = regRePassword.value;

        // Validate passwords and enable/disable submit button
        if (password !== repassword || password.length < 8) {
            submitButton.disabled = true;
            submitButton.classList.add("tw-bg-slate-200");
            submitButton.classList.remove("tw-bg-blue-50");
            return false;
        } else {
            submitButton.disabled = false;
            submitButton.classList.remove("tw-bg-slate-200");
            submitButton.classList.add("tw-bg-blue-50");
            return true;
        }
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const accordionButtons = document.querySelectorAll(
        "[data-accordion-target]"
    );

    accordionButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const target = this.getAttribute("data-accordion-target");
            const accordionBody = document.querySelector(target);
            const accordionIcon = this.querySelector("[data-accordion-icon]");

            if (accordionBody.classList.contains("tw-hidden")) {
                accordionBody.classList.remove("tw-hidden");
                accordionBody.setAttribute("aria-hidden", "false");
                this.setAttribute("aria-expanded", "true");
                // Store the state in local storage
                localStorage.setItem("accordionState", target);
                // Remove rotation class when expanding accordion
                if (accordionIcon) {
                    accordionIcon.classList.remove("tw-rotate-180");
                }
            } else {
                accordionBody.classList.add("tw-hidden");
                accordionBody.setAttribute("aria-hidden", "true");
                this.setAttribute("aria-expanded", "false");
                // Remove the state from local storage
                localStorage.removeItem("accordionState");
                // Add rotation class when collapsing accordion
                if (accordionIcon) {
                    accordionIcon.classList.add("tw-rotate-180");
                }
            }
        });
    });

    // Retrieve accordion state from local storage
    const accordionState = localStorage.getItem("accordionState");
    if (accordionState) {
        const accordionBody = document.querySelector(accordionState);
        if (accordionBody) {
            accordionBody.classList.remove("tw-hidden");
            accordionBody.setAttribute("aria-hidden", "false");
            const correspondingButton = document.querySelector(
                `[data-accordion-target="${accordionState}"]`
            );
            if (correspondingButton) {
                correspondingButton.setAttribute("aria-expanded", "true");
                const accordionIcon = correspondingButton.querySelector(
                    "[data-accordion-icon]"
                );
                if (accordionIcon) {
                    // Check accordion state and add/remove rotation class accordingly
                    if (accordionBody.classList.contains("tw-hidden")) {
                        accordionIcon.classList.add("tw-rotate-180");
                    } else {
                        accordionIcon.classList.remove("tw-rotate-180");
                    }
                }
            }
        }
    }

    // Event listener for the index link/button
    const indexLink = document.getElementById("indexLink");
    if (indexLink) {
        indexLink.addEventListener("click", function (event) {
            // Clear accordion state before navigating to index.php
            localStorage.removeItem("accordionState");
        });
    }

    // Function to show the loading spinner
    function showLoadingSpinner() {
        $("#loading-spinner").removeClass("tw-hidden").addClass("tw-flex");
    }

    // Function to scroll back to the top
    function scrollToTop() {
        $("html, body").animate(
            {
                scrollTop: $("#product-list-container").offset().top,
            },
            500
        );
    }

    const searchForm = document.getElementById("spinner");
    if (searchForm) {
        searchForm.addEventListener("submit", function (event) {
            // Show the loading spinner
            showLoadingSpinner();
            // Scroll back to the top
            scrollToTop();
        });
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));

    // Dropdown functionality
    const dropdownButton = document.getElementById("dropdownButton");
    const dropdownContent = document.getElementById("dropdownContent");

    dropdownButton.addEventListener("click", function() {
        dropdownContent.style.display = (dropdownContent.style.display === "none") ? "block" : "none";
    });

    document.addEventListener("click", function(event) {
        if (event.target !== dropdownButton && !dropdownContent.contains(event.target) && dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        }
    });
});

// Rewards carousel
document.addEventListener("DOMContentLoaded", () => {
let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    //
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);


}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};

});
// carousel first function
// let items = document.querySelectorAll('.slider .item-reward');
// let next = document.getElementById('next');
// let prev = document.getElementById('prev');

// let active = 3;
// function loadShow() {
//     let stt = 0;
//         items[active].style.transform = `none`;
//         items[active].style.zIndex = 1;
//         items[active].style.filter = 'none';
//         items[active].style.opacity = 1;
//     for (var i = active + 1; i < items.length; i++){
//         stt++;
//         items[i].style.transform = `translateX(${50*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
//         items[i].style.zIndex = -stt;
//         items[i].style.filter = 'blur(3px)';
//         items[i].style.opacity = stt > 2 ? 0: 0.6;
//     }
//      stt = 0;
//     for (var i = active - 1; i >= 0; i--){
//         stt++;
//         items[i].style.transform = `translateX(${-50*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
//         items[i].style.zIndex = -stt;
//         items[i].style.filter = 'blur(3px)';
//         items[i].style.opacity = stt > 2 ? 0: 0.6;


// }
// }
// loadShow();
// next.onclick = function () {
//     active = active + 1 < items.length ? active + 1 : active;
//     loadShow();

// }
// prev.onclick = function () {
//     active = active - 1 >= 0 ? active - 1 : active;
//     loadShow();

// }

// About Us animation

document.addEventListener("scroll", function() {
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
    var popupElements = document.querySelectorAll(".popup");

    popupElements.forEach(function(popup, index) {
      var popupOffset = popup.offsetTop;

      if (scrollPosition + windowHeight > popupOffset) {
        popup.style.opacity = "1";
        popup.style.transform = "scale(1)";
      }
    });
  });

// JavaScript code for redirecting to blog content page
document.querySelectorAll('.blog-link').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        var url = this.getAttribute('href');
        window.location.href = url;
    });
});


// // about-us scroll animation

// const header = document.querySelector("header");
// const sectionOne = document.querySelector(".home-intro");

// const faders = document.querySelectorAll(".fade-in");
// const sliders = document.querySelectorAll(".slide-in");

// const sectionOneOptions = {
//   rootMargin: ""
// };

// const sectionOneObserver = new IntersectionObserver(function(
//   entries,
//   sectionOneObserver
// ) {
//   entries.forEach(entry => {
//     if (!entry.isIntersecting) {
//       header.classList.add("nav-scrolled");
//     } else {
//       header.classList.remove("nav-scrolled");
//     }
//   });
// },
// sectionOneOptions);

// sectionOneObserver.observe(sectionOne);

// const appearOptions = {
//   threshold: 0,
//   rootMargin: ""
// };

// const appearOnScroll = new IntersectionObserver(function(
//   entries,
//   appearOnScroll
// ) {
//   entries.forEach(entry => {
//     if (!entry.isIntersecting) {
//       return;
//     } else {
//       entry.target.classList.add("appear");
//       appearOnScroll.unobserve(entry.target);
//     }
//   });
// },
// appearOptions);

// faders.forEach(fader => {
//   appearOnScroll.observe(fader);
// });

// sliders.forEach(slider => {
//   appearOnScroll.observe(slider);
// });



// scroll count
var counted = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 1;
  }

});
