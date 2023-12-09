import TeacherCard from "./TeacherCard";
import female from "../assets/images.png";
import male from "../assets/download.png";
import Footer from "../LandingPage/Footer";

export default function Teachermain() {
  const data = [
    {
      img: 'data:image/jpeg;base64,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',
      heading: "Dr. Shehnila",
      designation: "Chairperson",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum in sed necessitatibus."
    },
    {
      img: male,
      heading: "Dr. Wahabuddin",
      designation: "Associate Professor",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum in sed necessitatibus."
    },
    {
      img: 'https://media.licdn.com/dms/image/C4E03AQHFvmCUXuYMgQ/profile-displayphoto-shrink_800_800/0/1560249489086?e=2147483647&v=beta&t=Rz22qIXKW8MsY6nQQuqtvbADSyJwYbneJPWI8cCf9As',
      heading: "Dr. Raheela Asif",
      designation: "Associate Professor",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum in sed necessitatibus."
    },
    {
      img: 'data:image/jpeg;base64,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',
      heading: "Dr. Kashif Khan",
      designation: "Assistant Professor",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum in sed necessitatibus."
    },
    {
      img: male,
      heading: "Dr.  Mustafa Latif",
      designation: "Assistant Professor",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum in sed necessitatibus."
    },
    {
      img: 'data:image/jpeg;base64,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',
      heading: "Dr. Faraz Hyder",
      designation: "Assistant Professor",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum in sed necessitatibus."
    },
    {
      img: female,
      heading: "Engr. Shumaila",
      designation: "Assistant Professor",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum in sed necessitatibus."
    },
    {
      img : female,
      heading : "Ms. Zainab",
      designation: "Lecturer",
      content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum in sed necessitatibus."
    },
    {
      img: female,
      heading: "Engr. Simra",
      designation: "Assistant Professor",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum in sed necessitatibus."
    },
    {
      img: 'https://scholar.googleusercontent.com/citations?view_op=view_photo&user=tBT9D3NXk84C&citpid=5',
      heading: "Engr. Asma Khan",
      designation: "Assistant Professor",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum in sed necessitatibus."
    },
    {
      img: female,
      heading: "Engr. Ms. Sidra",
      designation: "Lecturer",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum in sed necessitatibus."
    },
    {
      img: female,
      heading: "Ms. Sana Fatima",
      designation: "Lecturer",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum in sed necessitatibus."
    },
    {
      img: 'data:image/jpeg;base64,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',
      heading: "Engr. Syed Sheraz",
      designation: "Lecturer",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum in sed necessitatibus."
    },
    {
      img: female,
      heading: "Engr. Sheerina",
      designation: "Lecturer",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum in sed necessitatibus."
    },
    {
      img: 'https://media.licdn.com/dms/image/D4D03AQH2s4h3y-eKcw/profile-displayphoto-shrink_800_800/0/1681689296395?e=2147483647&v=beta&t=_uBrCm3cWauA8bKZ76lSzOcXQKyXbhdHnNiH-0QmimQ',
      heading: "Engr. Shiza Riaz",
      designation: "Lecturer",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum in sed necessitatibus."
    },
    {
      img: 'https://i1.rgstatic.net/ii/profile.image/1135975879196677-1647849163735_Q512/Naveera-Sami.jpg',
      heading: "Engr. Naveera",
      designation: "Lecturer",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum in sed necessitatibus."
    },
    {
      img: female,
      heading: "Ms. Noor Afshan",
      designation: "IT Manager(Sr)",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum in sed necessitatibus."
    },
    {
      img: female,
      heading: "Ms. Nazish Irfan.",
      designation: "IT Manager(Sr)",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum in sed necessitatibus."
    },
  ];

  return (
    <>
      <center>
        <br />
        <br />
        <h1 className="teacher-heading">Faculty</h1>
        <br />
        <hr className="teacher-line" />
        <br />
        <br />
        <br />
        <div className="Teachers-grid">
          {data.map((item, index) => {
            return (
              <TeacherCard
                img={item.img}
                key={index}
                designation = {item.designation}
                heading={item.heading}
                content={item.content}
              ></TeacherCard>
            );
          })}
        </div>
      </center>
      <br />
      <br />
      <br />
      <br />
      <Footer></Footer>
    </>
  );
}
