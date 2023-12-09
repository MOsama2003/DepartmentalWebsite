import Tables from "../CoursesOffers/Tables";
import Footer from "../LandingPage/Footer";
export default function Jobs() {
  const columns = ["Serial no.", "Company", "Status", "E-mails"];
  const data = [
    ["CT-175", "Programming Fundamentals", "3+1", "Nill"],
    ["CT-174", "Fundamentals of IT", "2+1", "Nill"],
    ["CT-162", "Discrete Structures", "3+0", "Nill"],
    ["HS-104", "Functional English", "3+0", "Nill"],
    ["MT-173", "Calculus", "3+0", "Nill"],
    ["HS-105", "Pakistan Studies", "2+0", "Nill"],
  ];
  return (
    <>
      <center>
        <h1 className="Semester-mainheading">Jobs & InternShips</h1>
        <hr className="teacher-line" />
        <br /><br />
        <Tables columns={columns} data={data} />
      </center>
      <br /><br />
      <Footer></Footer>
    </>
  );
}
