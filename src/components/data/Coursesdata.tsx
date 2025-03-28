import { Certificate } from "crypto";

export const schools = [
    { name: "School of Business", id: "business" },
    { name: "School of Cosmetology", id: "cosmetology" },
    { name: "School of Computer Science and ICT", id: "ict" },
    { name: "School of Medicine and Nursing", id: "medicine" },
    { name: "School of Hospitality, Food & Bevearage", id: "hospitality" },
    { name: "School of Accounting", id: "accounting" }
  ];
  
  export const courses = {
    business: {
       
      certificate: [
        {
          name: "Certificate in Business Management",
          description: "Gain essential skills in managing businesses...",
          duration: "3 Semesters",
          fee: "Ksh 15,000 per Semester",
          requirements: "KCSE D and above",
        },
        {
          name: "Certificate in Sales and Marketing",
          description: "Learn sales and marketing strategies...",
          duration: "3 Semesters",
          fee: "Ksh 15,000 per Semester",
          requirements: "KCSE D and above",
        },
        {
          name: "Certificate in Human Resource Management",
          description: "Learn talent acquisition and workforce management...",
          duration: "3 Semesters",
          fee: "Ksh 15,000 per Semester",
          requirements: "KCSE D and above",
           
        }
      ],
      diploma: [
        {
          name: "Diploma in Human Resource Management",
          description: "Learn talent acquisition and workforce management...",
          duration: "6 Semesters",
          fee: "Ksh 20,000 per Semester",
          requirements: "KCSE C- and above",
        },
        {
          name: "Diploma in Business Management",
          description: "Learn talent acquisition and workforce management...",
          duration: "6 Semesters",
          fee: "Ksh 20,000 per Semester",
          requirements: "KCSE C- and above",
        },
        {
          name: "Diploma in Sales and Marketing",
          description: "Learn talent acquisition and workforce management...",
          duration: "6 Semesters",
          fee: "Ksh 20,000 per Semester",
          requirements: "KCSE C- and above",
        }
      ]
    },
  cosmetology: {
       
      certificate: [
        {
          name: "Certificate in Beauty and Hairdressing",
          description: "Gain essential skills in beauty and hairdressing...",
          duration: "2 semesters",
          fee: "Ksh 20,000 per Semester",
          requirements: "KCPE and above",
        },
        {
          name: "Certificate in Cosmetology",
          description: "Gain essential skills in Cosmetology",
          duration: "3 semesters",
          fee: "Ksh 20,000 per Semester",
          requirements: "KCPE and above",
        },

      ],
      diploma: [
        {
          name: "Diploma in Cosmetology",
          description: "Advanced beauty and wellness skills...",
          duration: "3 Semesters",
          fee: "Ksh 24,000 per Semester",
          requirements: "KCSE D and above",
        },
        {
          name: "Diploma in Beauty and Hairdressing",
          description: "Advanced beauty and wellness skills...",
          duration: "4 Semesters",
          fee: "Ksh 24,000 per Semester",
          requirements: "KCSE D and above",
        },
      ]
    },

  ict: {

      artisan: [
        {
          name: "Artisan in ICT",
          description: "Gain essential skills in computer applications...",
          duration: "3 semesters",
          fee: "kSH 20,000 per Semester",
          requirements: "KCPE and above",
        }

      ],
        
        certificate: [
          {
            name: "Certificate in ICT",
            description: "Gain essential skills in computer applications...",
            duration: "4 semesters",
            fee: "Ksh 22,000 per Semester",
            requirements: "KCSE D and above",
          },
           
  
        ],
        diploma: [
          {
            name: "Diploma in ICT",
            description: "Advanced computer science skills...",
            duration: "6 Semesters",
            fee: "Ksh 24,000 per Semester",
            requirements: "KCSE C- and above",
          },
          
        ]

    },
    medicine: {
       
      certificate: [
        {
          name: "Certificate in Nursing Assistant", 
          description: "Gain essential skills in nursing...",
          duration: "6 Months",
          fee: "Ksh 60,000 -Total cost of Study ",
          requirements: "KCSE D- and above",
        },
        {
          name: "Certificate in Home Care Management",
          description: "Gain essential skills in home care...",
          duration: "3 Months",
          fee: "Ksh 31,200 - Total cost of Study",
          requirements: "KCSE and above",
        },
        {
          name: "Certificate in Care Giving",
          description: "Gain essential skills in pharmacy...",
          duration: "3 Months",
          fee: "Ksh 30,900 - Total cost of Study",
          requirements: "KCSE  and above",
        }

      ],
       
    },
    accounting: {
      certificate: [
        {
          name: "Certificate in C.A.M.S",
          description: "Gain essential skills in accounting...",
          duration: "3 Semesters",
          fee: "Ksh 15,000 per Semester",
          requirements: "KCSE D and above",
        }
         
      ],
      diploma: [
        {
          name: "Diploma in A.T.D",
          description:" Gain essential skills in A.T.D...",
          duration: "6 Semesters",
          fee: "Ksh 20,000 per Semester",
          requirements: "KCSE C- and above",
        }
      ],
    
    },
    hospitality: {
      artisan: [
        {
          name:"Artisan in Food and Beverage",
          description: "Gain essential skills in food and beverage...",
          duration: "3 Semesters",  
          fee: "Ksh 20,000 PER SEMESTER",
          requirements:"KCPE AND ABOVE"
        },
        {
          name:"Artisan in Catering",
          description: "Gain essential skills in catering...",
          duration: "3 Semesters",  
          fee: "Ksh 18,000 PER SEMESTER",
          requirements:"KCPE AND ABOVE"
        },
        {
          name:"Artisan in Tourism",
          description: "Gain essential skills in tourism...",
          duration: "3 Semesters",  
          fee: "Ksh 20,000 PER SEMESTER",
          requirements:"KCPE AND ABOVE" 


        }
      ],
      certificate: [
        {
          name:"Certificate in Food and Beverage",
          description: "Gain essential skills in food and beverage...",
          duration: "4 Semesters",  
          fee: "Ksh 22,000 PER SEMESTER",
          requirements:"KCSE D AND ABOVE"
        },
        {
          name:"Certificate in Tourism",
          description: "Gain essential skills in tourism...",
          duration: "4 Semesters",  
          fee: "Ksh 20,000 PER SEMESTER",
          requirements:"KCSE D AND ABOVE" 
        },
        {
          name:"Certificate in Catering",
          description: "Gain essential skills in catering...",
          duration: "4 Semesters",  
          fee: "Ksh 22,000 PER SEMESTER",
          requirements:"KCSE D AND ABOVE"
        }
      ],
      
      diploma: [
        {
          name:"Diploma in Food and Beverage",
          description: "Gain essential skills in food and beverage...",
          duration: "6 Semesters",  
          fee: "Ksh 24,000 PER SEMESTER",
          requirements:"KCSE C- AND ABOVE"
        },
        {
          name:"Diploma in Tourism",
          description: "Gain essential skills in tourism...",
          duration: "6 Semesters",  
          fee: "Ksh 22,000 PER SEMESTER",
          requirements:"KCSE C- AND ABOVE" 
        },
        {
          name:" Diploma in Catering",
          description: "Gain essential skills in catering...",
          duration: "6 Semesters",  
          fee: "Ksh 24,000 PER SEMESTER",
          requirements:"KCSE C- AND ABOVE"
        }
      ]

    }


  
  };
  