import lejava from "./assets/1lejava.jpg"
import nika from "./assets/1nika.jpg"
import vako from "./assets/1vako.jpg"
import dati from "./assets/dati.jpg"
import doxna from "./assets/doxna.jpg"
import goisa from "./assets/goisa.jpg"
import crew from "./assets/Crew.png"


function Main() {
    return(
        <main className="container">
            <div className="container main">
            <div className="row">
                <div className="col-sm-5 main-txt">
                    <h1>Hello i'm <b>Gio Gagnidze</b></h1>
                    <h1>Currently working in <b>GOA</b></h1>
                    <div className="social">
                        <a href="https://www.facebook.com/profile.php?id=100072526356583"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/_gagno__/"><i className="fab fa-instagram"></i></a>
                        <a href="https://github.com/giogagnidze/"><i className="fab fa-github"></i></a>
                        <a href="https://www.youtube.com/@Goal_Oriented_Academy__GOA"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
                <div className="col-sm-7 img-div">
                    <img className="img-responsive" src={crew} alt="Gagnidze Crew logo"/>
                </div>
            </div>
            
            <div className="container mt-5 pt-5">
                <div id="about" className="d-flex justify-content-center align-items-center mt-5 pt-5">
                    <h1 className=""><b>About</b> us</h1>
                </div>
                <div className="d-flex justify-content-center">
                    <h2>რატომ უნდა შემოხვიდე ჩემს რაზმში?</h2>
                </div>
                <div className="row">
                    <div className="col-md-6 col-12 mt-3">
                        <p style={{fontSize: "19px"}}>გოაში 1 წელია რაც ვსწავლობ და უკვე ძალიან დიდი გამოცდილება მაქვს. GOA საუკეთესო აკაადემია საუკეთესო სისტემით. აქ შემოსულ ბავშვებს ეყოლებათ რაზმის ლიდერი რომელიც გააკონტროლებს მათ, ასევე დახმარება ყველანაირ გასაჭირში და გვერდში ეყოლება. ლიდერის მოვალეობაა ბავშვს სისტემატიურად წეროს და კითხოს რამე თუ ვერ გაიგო. ასევე მისი მოველებაა რომ ბავშვს ის მასალა ახლიდან გაავლევინოს და აუხსნას რაც ვერ გაიგო. ამ ყველა კრიტერიუმს ჩემი რაზმში კარგად აკმაყოფილებს. გვაქ გათამაშებებიც, ყოველ თვე ტარდება Kahoot რომელსაც ადგენს ლიდერი, ამ შემთხვევაში მე. Kahoot იქნება გავლილ მასალაზე. Top 3 ადგილზე იქნება ფულადი პრიზები. ასევე გოაში გვყავს მინი ლიდერებიც რაც ერთი დიდი ნაბიჯია ლიდერობისკენ. საუკეთესო და მონდომებული ბავშვები მინი ლიდერები გახდებიან შემდეგ კი პირადად ვიზრუნებ იმაზე რომ ლიდერები გახდეთ და საკუთარი ხელფასი გქონდეთ.</p>
                    </div>  
                
                <div className="col-md-6 d-md-flex d-none justify-content-center align-items-center">
                    <img src={crew} alt="Gagnos img" width="300" height="300"/>
                </div>
            </div>

            <div id="student" className="container4">
                <div className="students">
                    <div className="students-name">
                        <h1>My <b>Students!</b></h1>
                    </div>
                    <div className="students-photo  d-lg-flex d-none">
                        <div className="row kakali">

                            <div className="child doxna col-lg-4 col-md-6 col-12">
                                <a href="https://github.com/doxna2O/"><img src={doxna}/></a>
                            </div>
                            <div className="child goisa col-lg-4 col-md-6 col-12">
                                <a href="https://github.com/demetre3goisashvili/"><img src={goisa}/></a>
                            </div>
                            <div className="child dati col-lg-4 col-md-6 col-12">
                                <a href="https://github.com/datikuknishvili/"><img src={dati}/></a>
                            </div>

                        </div>
                        <div className="row kakali">
                            <div className="child lejava col-lg-4 col-md-6 col-12">
                                <a href="https://github.com/andria123-bot/"><img src={lejava}  width="300"/></a>
                            </div>
                            <div className="child vako col-lg-4 col-md-6 col-12">
                                <a href="https://github.com/ZathuraONG/"><img src={vako} width="300"/></a>
                            </div>
                            <div className="child nika col-lg-4 col-md-6 col-12">
                                <a href="https://github.com/nikusha55/"><img src={nika} width="300"/></a>
                            </div>
                        </div>
                    </div>
                        <div className="students-photo d-lg-none d-flex">
                        <div className="row kakali">

                            <div className="child doxna col-lg-4 col-md-6 col-12">
                                <a href="https://github.com/doxna2O/"><img src={doxna}/></a>
                            </div>
                            <div className="child goisa col-lg-4 col-md-6 col-12">
                                <a href="https://github.com/demetre3goisashvili/"><img src={goisa}/></a>
                            </div>
                        </div>
                        <div className="row kakali">
                            <div className="child dati col-lg-4 col-md-6 col-12">
                                <a href="https://github.com/datikuknishvili/"><img src={dati}/></a>
                            </div>
                            <div className="child lejava col-lg-4 col-md-6 col-12">
                                <a href="https://github.com/andria123-bot/"><img src={lejava}  width="300"/></a>
                            </div>
                        </div>
                        <div className="row kakali">
                            <div className="child vako col-lg-4 col-md-6 col-12">
                                <a href="https://github.com/ZathuraONG/"><img src={vako} width="300"/></a>
                            </div>
                            <div className="child nika col-lg-4 col-md-6 col-12">
                                <a href="https://github.com/nikusha55/"><img src={nika} width="300"/></a>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div id="skill" className="fifth-div container mt-5">
                <div id="center">
                    <div className="skills text-center mb-4">
                        <h1>My <b>Skills!</b></h1>
                    </div>
                    <div className="ps text-center mb-4">
                        <h1><b>Programming Language</b> Skills:</h1>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4 mb-4">
                            <div className="skillbox">
                                <p><b>Communication</b></p>
                                <p>100%</p>
                                <div className="skill">
                                    <div className="skill_level" style={{width: "100%"}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 mb-4">
                            <div className="skillbox">
                                <p><b>HTML</b></p>
                                <p>95%</p>
                                <div className="skill">
                                    <div className="skill_level" style={{width: "95%"}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 mb-4">
                            <div className="skillbox">
                                <p><b>CSS</b></p>
                                <p>90%</p>
                                <div className="skill">
                                    <div className="skill_level" style={{width: "90%"}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 mb-4">
                            <div className="skillbox">
                                <p><b>Python</b></p>
                                <p>70%</p>
                                <div className="skill">
                                    <div className="skill_level" style={{width: "70%"}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 mb-4">
                            <div className="skillbox">
                                <p><b>JavaScript</b></p>
                                <p>70%</p>
                                <div className="skill">
                                    <div className="skill_level" style={{width: "70%"}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 mb-4">
                            <div className="skillbox">
                                <p><b>React</b></p>
                                <p>50%</p>
                                <div className="skill">
                                    <div className="skill_level" style={{width: "50%"}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 mb-4">
                            <div className="skillbox">
                                <p><b>Bootstrap</b></p>
                                <p>50%</p>
                                <div className="skill">
                                    <div className="skill_level" style={{width: "50%"}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 mb-4">
                            <div className="skillbox">
                                <p><b>Git</b></p>
                                <p>60%</p>
                                <div className="skill">
                                    <div className="skill_level" style={{width: "60%"}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 mb-4">
                            <div className="skillbox">
                                <p><b>Tailwind CSS</b></p>
                                <p>45%</p>
                                <div className="skill">
                                    <div id="contact" className="skill_level" style={{width: "45%"}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="contact" className="container pt-5 mt-3 py-5">
                <div className="d-flex justify-content-center align-items-center pt-5">
                    <div className="login-box">
                        <h1 className="c-m py-5">Contact <b>Me!</b></h1>
                        <form>
                            <div className="input-box">
                                <input id="name" type="text" className="form-control" required />
                                <label>Name</label>
                            </div>
                            <div className="input-box">
                                <input id="surname" type="text" className="form-control" required />
                                <label>Lastname</label>
                            </div>
                            <div className="input-box">
                                <input id="email" type="text" className="form-control" required />
                                <label>Email</label>
                            </div>
                            <div className="input-box">
                                <input id="number" type="tel" className="form-control" required />
                                <label>Number</label>
                            </div>
                            <div className="input-box">
                                <input id="message" className="form-control" rows="4" required />
                                <label>Message</label>
                            </div>
                            <button type="submit" className="form-btn btn-block">Submit</button>
                        </form>
                    </div>
                </div>
            </div>

            <footer className="text-white pt-5 py-5">
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-md-6 text-center mb-3 mb-md-0">
                            <div className="footer">
                                <a href="https://www.facebook.com/profile.php?id=100072526356583" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                                <a href="https://www.instagram.com/_gagno__/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                                <a href="https://github.com/giogagnidze/" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                                <a href="https://www.youtube.com/@Goal_Oriented_Academy__GOA" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
                                <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noopener noreferrer"><i className="fab fa-google"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-6 text-center mb-3 mb-md-0">
                            <div className="footer-copyright">
                                <p>Copyright &copy; 2024. Designed by <b><a href="https://github.com/giogagnidze" className="text">Gio Gagnidze</a></b> and <b><a href="https://github.com/doxna2O/" className="text">Nikoloz Dokhnadze</a></b></p>
                                <p>Made with <b>React </b>and<b> Bootstrap</b></p>
                            </div>
                        </div>
                        <div className="col-md-6 text-center">
                            <div className="footer-phone">
                                <p>Gio Gagnidze:  <i className="fa fa-phone"></i> <a href="tel:592153236" className="text-white">+995 592-15-32-36</a></p>
                                <p>Nikoloz Dokhnadze:  <i className="fa fa-phone"></i> <a href="tel:592153236" className="text-white">+995 511-22-57-55</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            </div>
        </main>
    );
}

export default Main;