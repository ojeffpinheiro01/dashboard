import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { Link } from "react-router-dom";

function Home() {
    return (
      <>
        <NavBar />
        <br />
        <div className="container">
          <div className="jumbotron">
            <h1 className="display-4">AmazonJeff</h1>
            <p className="lead">Analise o desempenho das suas vendas por diferentes perspectivas</p>
            <br />
            <hr />
            <p>Esta aplicação consiste em exibir um dashboard a partir de dados fornecidos por um back end construído com Spring Boot.</p>
            <Link className="btn btn-success btn-lg" to="/dashboard">
              Access Dashboard
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }
  
  export default Home;