const person = [
  {
    name: "Mark Hendry",
    job: "FULL STACK DEVELOPER",
    desc: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    img: "Pic1.jpg",
  },
  {
    name: "James Bond",
    job: "DATA SCIENTIST",
    desc: "I find myself in the realm of 'baby meggings twee health goth'a fusion of unconventional styles that defy norms. A harmonious symphony of interests, I champion bicycle rights while indulging in the vibrant. in humblebrags.",
    img: "Pic2.jpg",
  },
  {
    name: "Scarlett Johnson",
    job: "UI/UX DESIGNER",
    desc: "Long before trends became mainstream, I reveled in chambray's embrace and sought out the authentic in pop-up havens. My journey extends to the spiritual as well, embodying the shamanic wisdom while playfully in humblebrags.",
    img: "Pic3.jpg",
  },
  {
    name: "Alexander Bell",
    job: "DATA ANALYST",
    desc: "Radiating an aura of unconventionality, I am the embodiment of 'baby meggings twee health goth' culture. With a fervent dedication to bicycle rights and an affinity for the vivid shades of tumeric and chartreuse. choosen one",
    img: "Pic4.jpg",
  },
  {
    name: "Rosy Prince",
    job: "SOFTWARE DEVELOPER",
    desc: "I was charting my course long before mainstream caught on. Chambray was my second skin, a testament to my authenticity in a world of fleeting fads and pop-up sensations. a symphony of introspection and social commentary.",
    img: "Pic5.jpg",
  },
  {
    name: "Otis Johnson",
    job: "DEVOPS MANAGER",
    desc: "As I open a coloring book, I venture into realms painted by the touch of salvia, all while finding solace in the embrace of a well-worn hoodie that symbolizes my journey. hues of tumeric and chartreuse commentary man. in humblebrags.",
    img: "Pic6.jpg",
  },
  
]

var image = document.querySelector(".image");
const name1 = document.querySelector(".font-top");
var job = document.querySelector(".job");
var para = document.querySelector(".desc");
var left = document.querySelector(".left");
var right = document.querySelector(".right");
var sup = document.querySelector(".suprise");
var index = 0;
right.addEventListener("click", () => {
    if(index < person.length)
    {
        index = index + 1;
        image.setAttribute("src", `Resource/${person[index].img}`)
        name1.innerHTML = person[index].name
        job.innerHTML = person[index].job
        para.innerHTML = person[index].desc
    }
});
left.addEventListener("click", () => {
    if(index >= 0)
    {
        index = index - 1;
        image.setAttribute("src", `Resource/${person[index].img}`)
        name1.innerHTML = person[index].name
        job.innerHTML = person[index].job
        para.innerHTML = person[index].desc
    }
});
sup.addEventListener("click", () => {
    index = Math.floor(Math.random() * person.length)
    console.log(index);
    image.setAttribute("src", `Resource/${person[index].img}`)
    name1.innerHTML = person[index].name
    job.innerHTML = person[index].job
    para.innerHTML = person[index].desc
});