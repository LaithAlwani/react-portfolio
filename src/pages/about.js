
const About = () => {

    return (
        <div className="row">
            {/* <!-- Personal Image  --> */}
            <div className=" col-md-6 order-md-2 ">
                <img className="img-fluid p-3" src="assets/images/my-image.JPG" alt="middle eastern man" />
            </div>
            {/* <!-- About Me --> */}
            <article className="col-md-6 order-md-1 my-auto">
                <h2 className="">&#60;About Me&#62;</h2>
                <p className="font-weight-bold">I am a full stack web develpoer from Ottawa, Ontairo.</p>
                <div className="text-left">
                    <p>I enjoy problem solving and taking on tough challenges and turning into a simple clean solution.
                        I
                        have experience in Html, CSS, JavaScript, jQuery and MERN Stack(Mongo, Express, REACT and
                        Nodejs).
                    </p>
                    <p>When I'm not coding or learning a new technology, you would find me videogaming, playing music or
                        kicking around a soccer ball.</p>
                </div>
            </article>
        </div>
     );
}
 
export default About;