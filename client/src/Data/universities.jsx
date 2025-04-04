const universities = [
  { 
    name: "Curtin University", 
    minScore: 6, 
    location: "Telfair Moka", 
    image: "https://static.sliit.lk/wp-content/uploads/2017/12/sliit-international-section-international-programs-unit-img-1.jpg",
    availableCourses: ["Engineering", "Architecture", "construction", "Technology", "Software Development", "Cybersecurity."],
    departments: ["IT", "Engineering", "Business", "Health Sciences"],
    scholarships: ["Merit-based", "Need-based"]
  },
  
  { 
    name: "Middlesex University", 
    minScore: 22, 
    location: "Cascavelle, Flic en Flac", 
    image: "",
    availableCourses: ["Law", "Computer Science", "Business Administration"],
    departments: ["Law", "Computer Science", "Business"],
    scholarships: ["Partial Scholarships"]
  },

  { 
    name: "Open University", 
    minScore: 6, 
    location: "Reduit, Moka", 
    image: "https://africa-school-bucket3.s3.amazonaws.com/static/img/school/2022/03/10/openmu.jpg",
    availableCourses: ["Education", "Computer Science", "Social Sciences"],
    departments: ["Education", "Social Sciences", "Computer Science"],
    scholarships: ["Full Scholarships"]
  },

  { 
    name: "Université des Mascareignes", 
    minScore: 6, 
    location: "Réduit, Moka", 
    image: "https://image.free-apply.com/gallery/l/uni/gallery/lg/1048000024/2c63b6eab606e9f28fd97ccac6993a6bb69bcb94.jpg?s=640",
    availableCourses: ["Business", "Management", "Marketing", ],
    departments: ["Business", "Management", "Marketing"],
    scholarships: ["Need-based"]
  },

  { 
    name: "University of Mauritius", 
    minScore: 6, 
    location: "Réduit, Moka", 
    image: "https://images.shiksha.com/mediadata/images/1462257957phpGUyIvS.jpeg",
    availableCourses: ['Engineering', 'Architecture', 'Construction.'],
    departments: ['Engineering', 'Architecture', 'Construction.'],
    scholarships: ["Merit-based"]
  },

  { 
    name: "University of Technology", 
    minScore: 6, 
    location: "Pointe aux sable", 
    image: "https://africa-school-bucket3.s3.amazonaws.com/static/img/school/2022/03/10/utm.jpg",
    availableCourses: ["Technology", "Engineering", "Computer Science"],
    departments: ["Technology", "Engineering", "Computer Science"],
    scholarships: ["Partial Scholarships"]
  },

  { 
    name: "Whitefield Business School", 
    minScore: 6, 
    location: "Eau coulee, Curepipe", 
    image: "https://image.free-apply.com/gallery/l/uni/gallery/lg/1048000007/7ac3c2ae64c25b0e3e4c12351344b495b76229b5.jpg?s=640",
    availableCourses: ["Business Administration", "Finance"],
    departments: ["Business", "Finance"],
    scholarships: ["Merit-based", "Need-based"]
  },

  { 
    name: "JSS academy of Higher Education", 
    minScore: 6, 
    location: "Vacoas Phoenix", 
    image: "https://jssonline.org/wp-content/uploads/2018/11/jsscampus.jpg",
    availableCourses: ["Healthcare", "Business", "Engineering"],
    departments: ["Healthcare", "Business", "Engineering"],
    scholarships: ["Merit-based"]
  },

  { 
    name: "Rushmore Business school", 
    minScore: 6, 
    location: "Vacoas Phoenix", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKtSgTmxHPITb6JU32uGfgSu71aQr4WUdeow&s",
    availableCourses: ["Business Administration", "Entrepreneurship"],
    departments: ["Business", "Entrepreneurship"],
    scholarships: ["Partial Scholarships"]
  },

  { 
    name: "Anna medical college", 
    minScore: 21, 
    location: "Montagne blanche, Flaq", 
    image: "https://amcrc.org/assets/images/campus/campus-1.jpg",
    availableCourses: ["Medicine", "Healthcare"],
    departments: ["Medicine", "Healthcare"],
    scholarships: ["Merit-based"]
  },
    
  { 
    name: "African Leadership College", 
    minScore: 18, 
    location: "Beau Plan, Pamplemousses", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1g8zrDMyL-kmX6chKSY5j5ZN9sa72UaPh-A&s",
    availableCourses: ["Leadership", "Business", "Entrepreneurship"],
    departments: ["Leadership", "Business", "Entrepreneurship", "engineering"],
    scholarships: ["Full Scholarships"]
  }
];
localStorage.setItem("universitiesData", JSON.stringify(universities));


export default universities;
