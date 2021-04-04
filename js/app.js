function showDropDown(index, image) {
  var toggle = document.getElementsByClassName("text-drp")[index];
  if (toggle.style.display === "block") {
    toggle.style.display = "none";
  } else {
    toggle.style.display = "block";
  }
  rotate(image);
}

// // To Rotate image to 180 degree
function rotate(image) {
  var imageAngle = image.getAttribute("style", "transform: rotate");
  if (imageAngle === null) {
    image.setAttribute("style", "transform: rotate(0deg)");
    imageAngle = "transform: rotate(0deg)";
  }
  imageAngle =
    imageAngle === "transform: rotate(0deg)"
      ? "transform: rotate(180deg)"
      : "transform: rotate(0deg)";
  image.setAttribute("style", imageAngle);
}

$(document).ready(function () {
  $(".main-slider").slick({
    autoplay: true,
    arrows: true,
    slidesToShow: 2,
    prevArrow:
      "<a type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' id='image aria-hidden='true'></i></a>",
    nextArrow:
      "<a type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></a>",
  });
});

var doctorsObject = [
  {
    doctorTitle: "Pediatric BMT",
    doctorImage: "./images/Bitmap Copy.png",
    doctorName: "Dr. Vijay Agarwal",
    doctorDegree: "MD, MRCP, PhD,CCT",
    doctorQualification:
      "Lead & Sr. Consultant - Medical Oncology & Haematology",
    doctorInfo:
      "Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004.",
  },

  {
    doctorTitle: "Adult BMT",
    doctorImage: "./images/Bitmap Copy.png",
    doctorName: "Dr.  Agarwal",
    doctorDegree: "MD, MRCP, PhD,CCT",
    doctorQualification:
      "Lead & Sr. Consultant - Medical Oncology & Haematology",
    doctorInfo:
      "Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004.",
  },
  {
    doctorTitle: "Pediatric BMT",
    doctorImage: "./images/Bitmap Copy.png",
    doctorName: "Dr.  Agarwal",
    doctorDegree: "MD, MRCP, PhD,CCT",
    doctorQualification:
      "Lead & Sr. Consultant - Medical Oncology & Haematology",
    doctorInfo:
      "Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004.",
  },
  {
    doctorTitle: "Adult BMT",
    doctorImage: "./images/Bitmap Copy.png",
    doctorName: "Dr.  Agarwal",
    doctorDegree: "MD, MRCP, PhD,CCT",
    doctorQualification:
      "Lead & Sr. Consultant - Medical Oncology & Haematology",
    doctorInfo:
      "Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004.",
  },
];

function showDoctorsWithDOM() {
  doctorsObject.forEach(function (value, index) {
    let doctorsList = document.getElementById("doctorlist");
    let arrangeDiv = document.createElement("div");
    arrangeDiv.setAttribute("class", "arrange");
    let pediatricDiv = document.createElement("div");
    pediatricDiv.setAttribute("class", "pediatric");

    // Doctor Title
    let doctorTitleElement = document.createElement("h2");
    let doctorTitleNode = document.createTextNode(value.doctorTitle);
    doctorTitleElement.appendChild(doctorTitleNode);
    pediatricDiv.appendChild(doctorTitleElement);

    // Doctor Image
    let doctorImage = document.createElement("IMG");
    pediatricDiv.appendChild(doctorImage);
    doctorImage.src = value.doctorImage;
    doctorImage.alt = "Alternative Image";

    // Doctor Name
    let doctorNameDiv = document.createElement("div");
    doctorNameDiv.setAttribute("class", "doctor-name");
    let doctorNameElement = document.createElement("h3");
    let doctorNameNode = document.createTextNode(value.doctorName);
    doctorNameElement.appendChild(doctorNameNode);
    doctorNameDiv.appendChild(doctorNameElement);
    pediatricDiv.appendChild(doctorNameDiv);

    // Doctor Degree
    let doctorDegreeParagraph = document.createElement("p");
    let doctorDegreeTextNode = document.createTextNode(value.doctorDegree);
    doctorDegreeParagraph.appendChild(doctorDegreeTextNode);
    pediatricDiv.appendChild(doctorDegreeParagraph);

    // Doctor Qualification
    let doctorQualificationParagraph = document.createElement("p");
    let doctorQualificationTextNode = document.createTextNode(
      value.doctorQualification
    );
    doctorQualificationParagraph.appendChild(doctorQualificationTextNode);
    pediatricDiv.appendChild(doctorQualificationParagraph);

    // Doctor Details Div
    let detailsDiv = document.createElement("div");
    detailsDiv.setAttribute("class", "details");

    // Border Div
    let borderDiv = document.createElement("div");
    borderDiv.setAttribute("class", "border");
    detailsDiv.appendChild(borderDiv);
    pediatricDiv.appendChild(detailsDiv);

    // Doctor Info
    let doctorInfoParagraph = document.createElement("p");
    let doctorInfoTextNode = document.createTextNode(value.doctorInfo);
    doctorInfoParagraph.appendChild(doctorInfoTextNode);
    detailsDiv.appendChild(doctorInfoParagraph);

    // Know More
    let knowMoreButton = document.createElement("button");
    let knowMoreButtonTextNode = document.createTextNode("Know More");
    knowMoreButton.appendChild(knowMoreButtonTextNode);
    knowMoreButton.setAttribute("onclick", "onClickOfKnowMore()");
    detailsDiv.appendChild(knowMoreButton);

    arrangeDiv.appendChild(pediatricDiv);
    doctorsList.appendChild(arrangeDiv);
  });
}

function onClickOfKnowMore() {
  alert("Coming soon!");
}

showDoctorsWithDOM();
