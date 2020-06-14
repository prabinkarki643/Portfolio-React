import React, { Component } from "react";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import {
  Tab,
  Tabs,
  Row,
  Col,
  Table,
  Button as RBButton
} from "react-bootstrap";
import './styles.css'
import {
  Divider,
  Avatar,
  Fab,
  withStyles,
} from "@material-ui/core";
import { Chart } from "primereact/chart";
import Colors from "../../assets/themes/Colors";

const styles = {
  linkedInRoot: {
    backgroundColor: "#1778b5",
    '&:focus':{
      outline:'none'
     }
  },
  instagramRoot: {
    backgroundColor: Colors.baseColor,
    '&:focus':{
      outline:'none'
     }
  }
};
class Home extends Component {
  constructor(props) {
    super(props);
    this.chartData = {
      webprogramming: {
        labels: [
          "HTML",
          "CSS",
          "JAVASCRIPT",
          "TYPESCRIPT",
          "REACT JS",
          "ANGULAR JS",
          "PHP",
          "NODE JS"
        ],
        datasets: [
          {
            label: "Web Programming",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: [99, 95, 95, 80, 99, 50, 80, 90]
          }
        ]
      },
      mobileAppDevelopment: {
        labels: ["ANDROID", "IOS", "REACT-NATIVE"],
        datasets: [
          {
            label: "Mobile App Development",
            backgroundColor: "green",
            borderColor: "green",
            data: [50, 70, 95, 100]
          }
        ]
      }
    };
  }

  componentDidMount() {

  }

  render() {
    const { classes, width } = this.props;
    return (
      <div>
        <div id="about" style={{ paddingTop:20,paddingBottom:5 }}>
         <div>
            <div style={{}}>
              <center style={{marginBottom: 20}}>
                    <Avatar
                      alt="Prabin Profile Image"
                      src={require("../../assets/images/prabin_profile.jpg")}
                      style={{ height: 100, width: 100 }}
                    />
                    <div style={{fontWeight:'bold'}}>Hi, I'm Prabin karki</div>
                    <div>React-Node(<small>FullStack Developer</small>) & React-Native Developer</div>
              </center>
              <Row noGutters>
                <Col>
                  <div>
                    <span style={{ fontWeight: "bold" }}>Phone No:</span>
                    <ul>
                      <li>
                        Nepal-{" "}
                        <a
                          style={{
                            textDecoration: "underline",
                            color: "inherit"
                          }}
                          href="tel:+977-9840096080"
                        >
                          (+977)-9840096080
                        </a>
                      </li>
                      <li>
                        India-{" "}
                        <a
                          style={{
                            textDecoration: "underline",
                            color: "inherit"
                          }}
                          href="tel:+977-9840096080"
                        >
                          (+91)-9900925609
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col></Col>
                <Col>
                  <div>
                    <span style={{ fontWeight: "bold" }}>Email: </span>
                    <a
                      style={{ textDecoration: "underline", color: "inherit" }}
                      href="mailto:prabinkarki643@gmail.com?&subject=Subject&body=Hello"
                    >
                      PRABINKARKI643@GMAIL.COM
                    </a>
                    <div>
                      <span style={{ fontWeight: "bold", textAlign: "left" }}>
                        Date Of Birth:
                      </span>{" "}
                      15/12/1995
                    </div>
                    <div>
                      <span style={{ fontWeight: "bold", textAlign: "left" }}>
                        Github:
                      </span>
                      <a
                      style={{ textDecoration: "underline", color: "inherit" }}
                      href="https://github.com/githubprabin143"
                      target="_blank"
                    >
                      https://github.com/githubprabin143
                    </a>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            <p>
              Hi my name is PRABIN KARKI and I have done my Bachelor of
              Engineering in Computer Science & Engineering from Bangalore
              Technological Institute,India in june 2018.
            </p>
          </div>
          <div>
            <h3>Follow Me On</h3>
            <div>
              <a
                style={{
                  textDecoration: "none",
                  color: "inherit"
                }}
                href="https://www.facebook.com/pravin.karki.98"
                target="_blank"
                className="mr-3"
              >
                <Fab
                  color="primary"
                  title="facebook"
                  style={{ width: 70, height: 70 }}
                >
                  <i className="fa fa-facebook fa-2x" />
                </Fab>
              </a>
              <a
                style={{
                  textDecoration: "none",
                  color: "inherit"
                }}
                href="https://www.linkedin.com/in/prabin-karki-936546159/"
                target="_blank"
                className="mr-3"
              >
                <Fab
                  color="primary"
                  title="linkedin"
                  style={{ width: 70, height: 70 }}
                  classes={{
                    root: classes.linkedInRoot
                  }}
                >
                  <i className="fa fa-linkedin fa-2x" />
                </Fab>
              </a>
              <a
                style={{
                  textDecoration: "none",
                  color: "inherit"
                }}
                href="https://www.instagram.com/prabin_karki_143/"
                target="_blank"
                className="mr-3"
              >
                <Fab
                  color="primary"
                  title="instagram"
                  style={{ width: 70, height: 70 }}
                  classes={{
                    root: classes.instagramRoot
                  }}
                >
                  <i className="fa fa-instagram fa-2x" />
                </Fab>
              </a>
            </div>

            <div>
              <center>
                <a
                  style={{
                    textDecoration: "none"
                  }}
                  target="_blank"
                  href="mailto:pravinkarki143.pk@gmail.com?&subject=Hiring You&body=Hello, Prabin"
                >
                  <Fab
                    variant="extended"
                    color="primary"
                    style={{ fontWeight: "bold", width: "30%",marginTop:20 }}
                    classes={{ root: classes.instagramRoot }}
                  >
                    Hire Me
                  </Fab>
                </a>
              </center>
            </div>
          </div>
        </div>
        <Divider />

        <div
          id="career"
          style={{ paddingTop:50 }}
        >
          <center>
            <h2 style={{ fontSize: "6vw", fontWeight: "bold" }}>
              CAREER OBJECTIVE
            </h2>
          </center>
          To pursue a challenging career and be part of a progressive
          organization that gives scope to enhance my knowledge, skills and to
          reach the pinnacle in the computing and research field with sheer
          determination, dedication and hard work.
        </div>
        <Divider />

        <div
          id="education"
          style={{ paddingTop:50 }}
        >
          <center>
            <h2 style={{ fontSize: "6vw", fontWeight: "bold" }}>EDUCATION</h2>
          </center>

          <Table bordered>
            <thead>
              <tr>
                <th>Degree</th>
                <th>Institution</th>
                <th>University/Board</th>
                <th>Year Of Passing</th>
                <th>% or GPA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>B.E</td>
                <td>Bangalore Technological Institution</td>
                <td>VTU</td>
                <td>2018</td>
                <td>77</td>
              </tr>
              <tr>
                <td>12th</td>
                <td>Pinnacle Academy</td>
                <td>HSEB</td>
                <td>2014</td>
                <td>77</td>
              </tr>
              <tr>
                <td>10th</td>
                <td>Shree Bishanku Narayan Secondary School</td>
                <td>SLC</td>
                <td>2012</td>
                <td>81.52</td>
              </tr>
            </tbody>
          </Table>
        </div>

        <Divider />
        <div
          id="skills"
          style={{ paddingTop:50 }}
        >
          <center>
            <h2 style={{ fontSize: "6vw", fontWeight: "bold" }}>SKILLS</h2>
            <div className="content-section implementation">
              <Row>
                <Col>
                    <h5 style={{textAlign:'left'}}>Web Programming</h5>
                  <Chart
                    style={{ width: "100%",paddingTop:50 }}
                    type="bar"
                    data={this.chartData.webprogramming}
                    options={{
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }}
                    }
                  />
                </Col>
                <Col>
                <h5 style={{textAlign:'left'}}>Mobile App Development</h5>
                  <Chart
                    style={{ width: "100%" ,paddingTop:20}}
                    type="bar"
                    data={this.chartData.mobileAppDevelopment}
                    options={{
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }}
                    }
                  />
                </Col>
              </Row>
              <h5 style={{textAlign:'left'}}>Extra Skills</h5>
              <Table bordered>
                <tbody>
                  <tr>
                    <td style={{ fontWeight: "bold" }}>Platforms</td>
                    <td>WINDOWS, LINUX, UBUNTU.</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "bold" }}>Software Tools</td>
                    <td>
                      Microsoft Office, Android Studio, Xcode, Exlipse, Visual
                      Studio, VS Code.
                    </td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "bold" }}>Specialization</td>
                    <td>
                      <ul>
                        <li>OOPS Concept</li>
                        <li>MVC Pattern</li>
                        <li>Operating System Concepts</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </center>
        </div>
        <Divider />

        <div
          id="be_projects"
          style={{ paddingTop:50 }}
        >
          <center>
            <h2 style={{ fontSize: "6vw", fontWeight: "bold" }}>BE PROJECTS</h2>
          </center>
          <div>
            <center>
              <h1
                style={{
                  fontWeight: "bold",
                  fontSize: isWidthUp("sm", width) ? 40 : 25
                }}
              >
                Tic-Tac –Toe Game Using Computer Graphics.
              </h1>
              <h4 style={{ textAlign: "end" }}>6th SEM</h4>
            </center>
            <div>
              <h2 style={{ fontWeight: "bold" }}>Description</h2>
              <p>
                Tic-tac-toe (American English), noughts and crosses (British
                English), or Xs and Os is a paper-and-pencil game for two
                players, X and O, who take turns marking the spaces in a 3×3
                grid. The player who succeeds in placing three of their marks in
                a horizontal, vertical, or diagonal row is the winner.
              </p>
            </div>
            <div>
              <h2 style={{ fontWeight: "bold" }}>Technology Used</h2>
              <Table bordered>
                <tbody>
                  <tr>
                    <td style={{ fontWeight: "bold" }}>Operating System</td>
                    <td>Window</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "bold" }}>Designing Tool</td>
                    <td>Computer Graphics, OpenGL</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "bold" }}>IDE Used</td>
                    <td>Visual Studio with C++</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>

          <div style={{ marginTop: "10%" }}>
            <center>
              <h1
                style={{
                  fontWeight: "bold",
                  fontSize: isWidthUp("sm", width) ? 40 : 25
                }}
              >
                Blood Donation Management System Using Android Application.
              </h1>
              <h4 style={{ textAlign: "end" }}>8th SEM</h4>
            </center>
            <div>
              <h2 style={{ fontWeight: "bold" }}>Description</h2>
              <p>
                The Blood Donation Agent is to create an Information about the
                donor and organization that are related to donating the blood.
                Through this application any person who is interested in
                donating the blood can register himself in the same way if any
                organization wants to register itself with this site that can
                also register. Moreover if any general consumer wants to make
                request blood online he can also take the help of this site.
                Admin is the main authority who can do addition, deletion, and
                modification if required.
              </p>
            </div>
            <div>
              <h2 style={{ fontWeight: "bold" }}>Technology Used</h2>
              <Table bordered>
                <tbody>
                  <tr>
                    <td style={{ fontWeight: "bold" }}>Operating System</td>
                    <td>Window/Ubuntu,Android</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "bold" }}>Web Server</td>
                    <td>Personal Web Server/XAMPP</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "bold" }}>Web Browser</td>
                    <td>Google Chrome/Mobile Browser</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "bold" }}>Designing Tool</td>
                    <td>CSS, JavaScript, Bootstrap, PHP</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "bold" }}>
                      Server Side Scripting
                    </td>
                    <td>PHP</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "bold" }}>
                      Client Side Scripting
                    </td>
                    <td>HTML, CSS, JavaScript</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "bold" }}>Backend</td>
                    <td colSpan="2">Oracle 10g, MYSQL</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "bold" }}>Android Platform</td>
                    <td>Android Studio 3.0.1</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <h4 style={{ textAlign: "end" }}>
              <a  target="_blank" href="https://ijartet.com/3708/v5s142018april2018bti/conference">
                See Paper
              </a>
            </h4>
          </div>
        </div>
        <Divider />

        <div
          id="products"
          style={{ paddingTop:50 }}
        >
          <center>
            <h2 style={{ fontSize: "6vw", fontWeight: "bold" }}>PRODUCTS</h2>
          </center>
          <div>
            <h3 style={{fontSize:isWidthUp('sm',width)?20:16}}>
              Here are the some of my products or projects I have done after my
              BE.
            </h3>
          </div>
          <Table bordered>
            <tbody>
              <tr>
                <td style={{ fontWeight: "bold" }}>Personal Projects</td>
                <td>
                  <ul>
                    <li>Shopping Website Using Node Js and React JS.</li>
                    <li>Blood Donation Website Using Node Js and React JS.</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td style={{ fontWeight: "bold" }}>Company Projects</td>
                <td>
                  <ul>
                    <li>AR In Web Using React JS.</li>
                    <li>
                      IDA Chrome Extension Using HTML, CSS, JAVASCRIPT & SERVICE
                      WORKER.
                    </li>
                    <li>AKADEMIE BAR Using React JS and Node JS.</li>
                    <li>Demo App in Swift & Objective-C.</li>
                    <li>Yello Hospital App Using React-Native, Redux.</li>
                    <li>London Fire Stopping App Using React-Native, Redux.</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td style={{ fontWeight: "bold" }}>Live Projects</td>
                <td>
                  <ul>
                    <li><a target="_blank" href="https://www.espolon.glass">https://www.espolon.glass</a></li>
                    <li><a  target="_blank" href="https://akademie.bar">https://akademie.bar</a></li>
                    <li><a target="_blank" href="https://askthe.gure">https://askthe.gure</a></li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td style={{ fontWeight: "bold" }}>Github</td>
                <td>
                  <ul>
                    <li><a target="_blank" href="https://github.com/githubprabin143">https://github.com/githubprabin143</a></li> 
                   </ul>
                </td>
              </tr>
              <tr>
                <td style={{ fontWeight: "bold" }}>Specialization</td>
                <td>
                  <ul>
                    <li>OOPS Concept.</li>
                    <li>MVC Pattern.</li>
                    <li>Operating System Concepts.</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <Divider/>
        <div className="mb-5">
            <center>
            <a
                style={{
                textDecoration: "none"
                }}
                target="_blank"
                href="https://drive.google.com/open?id=1eGvHeG8LswlJjNMkFN2q_WhLcxl-AnSZ"
            >
                <Fab
                variant="extended"
                color="primary"
                style={{ fontWeight: "bold", width: "30%",marginTop:20 }}
                classes={{ root: classes.instagramRoot }}
                >
                Get Resume
                </Fab>
            </a>
            </center>
        </div>
        <Divider />
      </div>
    );
  }
}

export default withStyles(styles)(withWidth()(Home));
