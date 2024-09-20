import "./Robofest.css";



function Robofest() {


  return (
    <>
      <div className="fest_bg">
        <div className="svgbg">
          <div className="svg1  ">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
        <div className="svgbg">
          <div className="svg2">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </div>

        <div className="fest">
          <div className="main1">
            <h1 className="l-heading anim1">
              <span> About RoboFest</span>
              {/* <span> DONE RIGHT</span> */}
            </h1>
            <p className="sub-title anim1">
            The stage is set, the robots are ready – join us as we kick off RoboFest, a symposium of innovation and a celebration of technological brilliance. People bring their awesome robot creations to compete
              in different events. It&apos;s not just about winning – it&apos;s a chance
              for robot enthusiasts to show off their creations, learn from each
              other, and celebrate the amazing things robots can do. There are
              exciting robot battles, tricky challenges, and lots of fun. It&apos;s a
              big gathering of smart and creative people who love playing with
              robots and pushing the limits of what they can do.
            </p>
            <a href="https://forms.gle/tZy6hTWUnGVxKGDt8" className="btn anim  anim1 orange">
             ROBOEXPO
            </a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSf3nyKN3mRB-nlX7La6hotLO6t6bAidR3qNHwf6EoDdieuqaA/viewform?usp=sf_link" className="btn anim anim2  orange">
             ROBOFIGHT
            </a>
            <a href="https://forms.gle/f4r5HykFZKjb4u22A" className="btn anim anim3  orange">
             ROBORACE
            </a>
            <a href="https://forms.gle/trhjq9FcVsYbh2wk8" className="btn anim anim4  orange">
             IDEATHON
            </a>
            <a href="https://forms.gle/HY1y2kpR5q7BguX46" className="btn anim anim5 orange">
             ROBOTHON
            </a><a href="https://drive.google.com/file/d/1LB7Ou_u5NXkioI-9McxO-qxtz9Wx42a9/view?usp=drivesdk" className="lnk ">
             Problems statement Link
            </a>
          </div>
          <div className="imge">
            <img
              className="fest_robo"
              src="src/components/Robofest/fest_robo.png"
              alt="Robotix Club NITRR"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Robofest;