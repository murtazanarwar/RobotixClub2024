import NumberAnimation from "../components/Animation/Animation";
import "../styles/About.css";

function About() {
  return (
    <div>
      <div className="aboutPage">
        <main className="flex">
          <section className="about-section">
            <div className="flex min-w-fit px-4 py-7 header">
              <h2 id="typewriter">Few Words About Us</h2>
            </div>
            <div className="container-fluid content">
              <div className="description">
                <div className="desc" id="desc1">
                  <h2 className="">Who Are We ??</h2>
                  <p>
                    The Robotix Club of NIT Raipur is a convergence of
                    innovators, contributors, and experts in the field of
                    Robotics. Since its inception in 2014, the club has inspired
                    minds. Founded by enthusiastic and ardent students, our
                    vision is to promote the versatile field of robotics and its
                    ever-growing applications. We ensure that every student
                    seeking knowledge receives it. Under the guidance of our
                    esteemed faculty In-charge, Dr. Rajesh Doriya (Department of
                    Information Technology), the club operates smoothly.
                  </p>
                </div>
                <div className="desc" id="desc2">
                  <h2>Our Vision</h2>
                  <p>
                    Robotix Club NITRR aims to foster technological skills in
                    mechatronics and robotics by translating theoretical
                    knowledge into real-life applications. We strive to provide
                    simple yet creative solutions for complex real-world
                    problems. Emphasizing student-centric events and workshops,
                    we aim to expand the reach of robotics within the college.
                    The club operates as a cohesive unit, involving students and
                    teachers alike.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <div className="teamDetails">
        <div className="memberCount">
          <div className="para">
            <p>Total Members</p>

            <p id="members" className="count">
              <NumberAnimation targetNumber={100} />
            </p>
          </div>
          <img src="management.png" alt="" />
        </div>

        <div className="eventCount">
          <div className="para">
            <p>Events Organized</p>
            <p id="events" className="count">
              <NumberAnimation targetNumber={25} />
            </p>
          </div>
          <img src="event.png" alt="" />
        </div>
        <div className="participationCount">
          <div className="para">
            <p>Participations</p>
            <p id="part" className="count">
              <NumberAnimation targetNumber={60} />
            </p>
          </div>
          <img src="support.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;