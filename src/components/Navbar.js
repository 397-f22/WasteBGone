import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = ({title}) => {
    return (
        <nav style={{textAlign: "center", backgroundColor: "green"}}>
            <h3 style={{padding: "10px", color: "white"}}>{title}</h3>
        </nav>
    );
}

export default Navbar;