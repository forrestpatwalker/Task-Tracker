import { Link } from "react-router-dom";

const About = () => {
    return (
        <div>
            <h4>Version 1.0.0</h4>
            <a href="https://www.forrestpatwalker.com/">My Website</a>
            <br/>
            <Link to="/">Go Back</Link>
        </div>
    );
};

export default About;