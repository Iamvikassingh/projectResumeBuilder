const btn = document.getElementById("addcontent");
const inputfields = document.querySelector(".addfields");

btn.addEventListener("click", () => {
    const writearea = document.createElement("p");
    writearea.innerHTML = prompt("enter your text here");

    const flex = document.createElement("div");
    inputfields.appendChild(flex);
    flex.appendChild(writearea);
});


const educationBtn = document.getElementById("add-education");
const educationField = document.getElementById("education-content");

educationBtn.addEventListener("click", () => {
    const horizontalLine = document.createElement("hr");

    const educationDate = document.createElement("h4");
    educationDate.innerHTML = prompt("Add Education completion month/year");
    educationDate.className = "educationdate";

    const educationCourse = document.createElement("h5");
    educationCourse.innerHTML = prompt("Add Education completion course.");
    educationCourse.className = "educationcourse";

    const educationPercent = document.createElement("h5");
    educationPercent.innerHTML = prompt("Add from where you complete the course");
    educationPercent.className = "educationpercent";

    educationField.appendChild(educationDate);
    educationField.appendChild(educationCourse);
    educationField.appendChild(educationPercent);
    educationField.appendChild(horizontalLine);
});


const projectsBtn = document.getElementById("add-projects");
const projectsField = document.getElementById("addprojects");


projectsBtn.addEventListener("click", () => {

    const projecsItem = document.createElement("li");
    projecsItem.innerHTML = "Project on : " + "<b>" + prompt("Enter Your Project Name") + "</b>" + ".";
    projectsField.appendChild(projecsItem);
});




const addTechnicalskill = document.getElementById("addtechnicalskills");
const addTechnicalbtn = document.getElementById("addtechnicalskillsbtn");

addTechnicalbtn.addEventListener("click", () => {
    const technicalField = document.createElement("li");
    technicalField.innerHTML = "<i class='bi bi-stars'></i>" + prompt("Enter Technical skills") + ".";
    addTechnicalskill.appendChild(technicalField);
})


const addsoftskill = document.getElementById("addsoftskills");
const addsoftbtn = document.getElementById("addsoftskillbtn");

addsoftbtn.addEventListener("click", () => {
    const softField = document.createElement("li");
    softField.innerHTML = "<i class='bi bi-stars'></i>" + prompt("Enter Technical skills") + ".";
    addsoftskill.appendChild(softField);
})



const declaraionAddbtn = document.getElementById("adddeclarationcontent");
const adddeclarationfield = document.getElementById("adddeclarationfields");

declaraionAddbtn.addEventListener("click", () => {
    const addcontentfield = document.createElement("p");
    addcontentfield.innerHTML = prompt("ADD DECLARATION ");

    adddeclarationfield.appendChild(addcontentfield);
});


// pdf making code
const button = document.getElementById('download-button');


function generatePDF() {
    // Choose the element that your content will be rendered to.
    //const element = document.getElementById('invoice');
    // Choose the element and save the PDF for your user.
    //html2pdf().from(element).save();

    var element = document.getElementById('invoice');
    var opt = {
        margin: 0,
        filename: prompt("ENTER THE FILE NAME !"),
        html2canvas: { dpi: 300, letterRendering: true, useCORS: true, logging: true, enableLinks: true, allowTaint: true, foreignObjectRendering: true, enableJavascript: true, HTMLImageElement: true },
        image: { type: 'jpeg', quality: 0.98 },
        pagebreak: { avoid: "tr", mode: "css", before: "#nextpage1" },
        html2canvas: { scale: 4 },
        jsPDF: { unit: 'in', format: 'Tabloid', orientation: 'portrait', imageData: 'HTMLImageElement', dataUrl: 'string', }
    };


    // New Promise-based usage:
    html2pdf().set(opt).from(element).save().toPdf();

    // Old monolithic-style usage:
    html2pdf(element, opt);
}


button.addEventListener('click', generatePDF);



const experienceBtn = document.getElementById("add-experience");
const experienceField = document.getElementById("experience-content");

experienceBtn.addEventListener("click", () => {
    const horizontalLine = document.createElement("hr");

    const educationDate = document.createElement("h4");
    educationDate.innerHTML = prompt("Add experience completion month/year");
    educationDate.className = "educationdate";

    const educationCourse = document.createElement("h5");
    educationCourse.innerHTML = prompt("Add experience Designation.");
    educationCourse.className = "educationcourse";

    const educationPercent = document.createElement("h6");
    educationPercent.innerHTML = prompt("Add where you complete the experience");
    educationPercent.className = "educationpercent";

    experienceField.appendChild(educationDate);
    experienceField.appendChild(educationCourse);
    experienceField.appendChild(educationPercent);
    experienceField.appendChild(horizontalLine);
});