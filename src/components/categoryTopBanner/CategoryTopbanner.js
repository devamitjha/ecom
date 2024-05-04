import "./categoryTopBanner.scss";
import { useLocation } from "react-router-dom";

function CategoryTopBanner() {
    const location = useLocation();
    const url = location.pathname;
    const splitcatName = url.split("/");
    const categoryName = splitcatName[2];

    return (
        <div className="categoryTopBanner">
            <img src={process.env.PUBLIC_URL + "/images/categoryTopBanner.jpg"} alt="Top Banner"/>
            <div className="cat-breadcrumb text-center">
                <div className="text-3xl my-2 text-capitalize">{categoryName}</div>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active text-capitalize" aria-current="page">{categoryName}</li>
                </ol>
            </div>
        </div>
    )
}

export default CategoryTopBanner