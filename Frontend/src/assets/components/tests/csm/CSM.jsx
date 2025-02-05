import './CSM.css';

function CSM() {
    const facultyData =
        [
            {
              "name": "Dr. B. Janakiramaiah",
              "designation": "Professor & Head",
              "contact": "9440586340",
              "email": "janakiramaiah@pvpsiddhartha.ac.in",
              "room": "CSM100001",
              "photo": "https://www.pvpsiddhartha.ac.in/images/CSMSTAFF/CSM100001.jpg"
            },
            {
              "name": "CH. Naresh",
              "designation": "Assistant Professor",
              "contact": "9390903208",
              "email": "naresh.ch@pvpsiddhartha.ac.in",
              "room": "CSM010001",
              "photo": "https://www.pvpsiddhartha.ac.in/images/CSMSTAFF/CSM010001.jpg"
            },
            {
              "name": "Ms. P. Sujatha",
              "designation": "Assistant Professor",
              "contact": "8520881544",
              "email": "psujatha@pvpsiddhartha.ac.in",
              "room": "CSM010003",
              "photo": "https://www.pvpsiddhartha.ac.in/images/CSMSTAFF/CSM010003.jpg"
            },
            {
              "name": "Mr. G. Venkata Krishna",
              "designation": "Assistant Professor",
              "contact": "9000224632",
              "email": "vkrishna@pvpsiddhartha.ac.in",
              "room": "CSM010005",
              "photo": "https://www.pvpsiddhartha.ac.in/images/CSMSTAFF/CSM010005.jpg"
            },
            {
              "name": "Mr. K.S.S Narayana",
              "designation": "Assistant Professor",
              "contact": "9440764235",
              "email": "kssnarayana@pvpsiddhartha.ac.in",
              "room": "CSM010006",
              "photo": "https://www.pvpsiddhartha.ac.in/images/CSMSTAFF/CSM010006.jpg"
            },
            {
              "name": "Mr. B. Kalyan Chakravarthy",
              "designation": "Assistant Professor",
              "contact": "8978125792",
              "email": "kalyanchakravarthy@pvpsiddhartha.ac.in",
              "room": "CSM010007",
              "photo": "https://www.pvpsiddhartha.ac.in/images/CSMSTAFF/CSM010007.jpg"
            },
            {
              "name": "Mrs. T. Deepa",
              "designation": "Assistant Professor",
              "contact": "8977772577",
              "email": "deepa@pvpsit.ac.in",
              "room": "CSM010008",
              "photo": "https://www.pvpsiddhartha.ac.in/images/CSMSTAFF/CSM010008.jpg"
            },
            {
              "name": "Mrs. G. Gayatri",
              "designation": "Assistant Professor",
              "contact": "8770706429",
              "email": "gamanigayatri@pvpsit.ac.in",
              "room": "CSM010009",
              "photo": "https://www.pvpsiddhartha.ac.in/images/CSMSTAFF/CSM010009.jpg"
            },
            {
              "name": "Mrs. N. Susmitha",
              "designation": "Assistant Professor",
              "contact": "7550121079",
              "email": "susmithan@pvpsiddhartha.ac.in",
              "room": "CSM010010",
              "photo": "https://www.pvpsiddhartha.ac.in/images/CSMSTAFF/CSM010010.jpg"
            }
    ];
    
    const nonTeachingStaffData = [
        {
            "name": "Mr. T. Anil Kumar",
            "designation": "Assistant Professor",
            "contact": "9866414164",
            "email": "Not Provided",
            "room": "CSM011001",
            "photo": "https://www.pvpsiddhartha.ac.in/images/CSMSTAFF/CSM011001.jpg"
          },
          {
            "name": "Ms. M. Gunadeepya",
            "designation": "Assistant Professor",
            "contact": "9515653597",
            "email": "Not Provided",
            "room": "CSM011002",
            "photo": "https://www.pvpsiddhartha.ac.in/images/CSMSTAFF/CSM011002.jpg"
          },
          {
            "name": "Ms. K. Saranya",
            "designation": "Assistant Professor",
            "contact": "9948699589",
            "email": "Not Provided",
            "room": "CSM001001",
            "photo": "https://www.pvpsiddhartha.ac.in/images/CSMSTAFF/CSM001001.jpg"
          }          

    ]

    return (
        <div className="staff-container">
            <h2 className="staff-heading">Teaching Staff</h2>
            <div className="faculty-container">
                {facultyData.map((faculty, index) => (
                    <div key={index} className="faculty-card">
                        <img src={faculty.photo} alt={faculty.name} className="faculty-photo" />
                        <h3 className="faculty-name">{faculty.name}</h3>
                        <p className="faculty-designation">{faculty.designation}</p>
                        <p className="faculty-room">Room: {faculty.room}</p>
                        <p className="faculty-room">Contact: {faculty.contact}</p>
                        <p className="faculty-email">{faculty.email}</p>
                    </div>
                ))}
            </div>

            <h2 className="staff-heading">Non-Teaching Staff</h2>
            <div className="non-teaching-container">
                {nonTeachingStaffData.map((staff, index) => (
                    <div key={index} className="staff-card">
                        <img src={staff.photo} alt={staff.name} className="staff-photo" />
                        <h3 className="staff-name">{staff.name}</h3>
                        <p className="staff-designation">{staff.designation}</p>
                        <p className="staff-empid">EMP ID: {staff.empId}</p>
                        <p className="staff-contact">Contact: {staff.contact}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CSM;
