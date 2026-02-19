import { Link } from "react-router-dom";

function Breadcrumb({singleProduct}) {

   
    return (
        <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
           
                <span className="flex items-center gap-2">
                     <Link to={"/"} >Home</Link> / <h2>{singleProduct.name}</h2>
                </span>
           
        </div>
    );
}

export default Breadcrumb;
