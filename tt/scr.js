var obj1 = {
    name: "Arvind",
    age: 20,
    city: "Bhilai",
    social:{
        linkedin: "arvind-kumar-007/",
        github: "/ArvindKumar007",
        instagram: "www.instagram.com",
        facebook: "facebook.comarvindkumar007",
        
    }
}
var obj2 = JSON.parse(JSON.stringify(obj1));
obj2.social.github = "Rahul Github"
console.log(obj1.social.github);
console.log(obj2.social.github);

