import { Link } from "react-router-dom";

function Breadcrumb() {


    const items =
        [
            { label: "Home", path: "/" },
            { label: "Pro Phone 13 Pro Demo Mock-up", path: "/cart" },
            { label: "Checkout" }
        ]




    return (
        <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            {items.map((item, index) => (
                <span key={index} className="flex items-center gap-2">
                    {item.path ? (
                        <Link to={item.path} className="hover:text-black">
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-black font-medium">{item.label}</span>
                    )}

                    {index !== items.length - 1 && <span>/</span>}
                </span>
            ))}
        </div>
    );
}

export default Breadcrumb;
