import React from 'react';
import "./sidebarFilter.scss";

const SidebarFilter = () => {
  return (
    <div className="sidebar-filter border-end me-3">
        <div className="vertical-filters-filter border-bottom ps-3 py-4">
            <span className="filters-header text-sm font-bold text-uppercase">Category</span>
            <ul className="categories-list">
                <li className="form-check d-flex">
                    <input className="form-check-input" type="checkbox" value="" id="cat-shirts"/>
                    <label className="form-check-label text-sm d-flex align-items-center" htmlFor="cat-shirts">
                    Women's Shirts <span className="categories-num ml-2">(30)</span>
                    </label>
                </li> 
                <li className="form-check d-flex">
                    <input className="form-check-input" type="checkbox" value="" id="cat-dressess"/>
                    <label className="form-check-label text-sm d-flex align-items-center" htmlFor="cat-dressess">
                    Dresses <span className="categories-num ml-2">(30)</span>
                    </label>
                </li> 
                <li className="form-check d-flex">
                    <input className="form-check-input" type="checkbox" value="" id="cat-blazers"/>
                    <label className="form-check-label text-sm d-flex align-items-center" htmlFor="cat-blazers">
                    Blazers <span className="categories-num ml-2">(30)</span>
                    </label>
                </li> 
                <li className="form-check d-flex">
                    <input className="form-check-input" type="checkbox" value="" id="cat-sportwear"/>
                    <label className="form-check-label text-sm d-flex align-items-center" htmlFor="cat-sportwear">
                    Sportswear <span className="categories-num ml-2">(30)</span>
                    </label>
                </li>               
            </ul>
            <div className="show-more">+15 more</div>
        </div>
        <div className="vertical-filters-filter border-bottom ps-3 py-4">
            <span className="filters-header text-sm font-bold text-uppercase">Brand</span>
            <ul className="categories-list">
                <li className="form-check d-flex">
                    <input className="form-check-input" type="checkbox" value="" id="brand-kalini"/>
                    <label className="form-check-label text-sm d-flex align-items-center" htmlFor="brand-kalini">
                    KALINI <span className="categories-num ml-2">(30)</span>
                    </label>
                </li> 
                <li className="form-check d-flex">
                    <input className="form-check-input" type="checkbox" value="" id="brand-anouk"/>
                    <label className="form-check-label text-sm d-flex align-items-center" htmlFor="brand-anouk">
                    Anouk <span className="categories-num ml-2">(30)</span>
                    </label>
                </li> 
                <li className="form-check d-flex">
                    <input className="form-check-input" type="checkbox" value="" id="brand-sangria"/>
                    <label className="form-check-label text-sm d-flex align-items-center" htmlFor="brand-sangria">
                    Sangria <span className="categories-num ml-2">(30)</span>
                    </label>
                </li> 
                <li className="form-check d-flex">
                    <input className="form-check-input" type="checkbox" value="" id="brand-soch"/>
                    <label className="form-check-label text-sm d-flex align-items-center" htmlFor="brand-soch">
                    Soch <span className="categories-num ml-2">(30)</span>
                    </label>
                </li>               
            </ul>
            <div className="show-more">+15 more</div>
        </div>
        <div className="vertical-filters-filter border-bottom ps-3 py-4">
            <span className="filters-header text-sm font-bold text-uppercase">Price</span>
            <ul className="categories-list">
                <li className="form-check d-flex">
                    <input className="form-check-input" type="checkbox" value="" id="price-199"/>
                    <label className="form-check-label text-sm d-flex align-items-center" htmlFor="price-199">
                    Rs. 199 to Rs. 12275 <span className="categories-num ml-2">(30)</span>
                    </label>
                </li> 
                <li className="form-check d-flex">
                    <input className="form-check-input" type="checkbox" value="" id="price-12275"/>
                    <label className="form-check-label text-sm d-flex align-items-center" htmlFor="price-12275">
                    Rs. 12275 to Rs. 24351 <span className="categories-num ml-2">(30)</span>
                    </label>
                </li> 
                <li className="form-check d-flex">
                    <input className="form-check-input" type="checkbox" value="" id="price-24351"/>
                    <label className="form-check-label text-sm d-flex align-items-center" htmlFor="price-24351">
                    Rs. 24351 to Rs. 36427 <span className="categories-num ml-2">(30)</span>
                    </label>
                </li> 
                <li className="form-check d-flex">
                    <input className="form-check-input" type="checkbox" value="" id="price-36427"/>
                    <label className="form-check-label text-sm d-flex align-items-center" htmlFor="price-36427">
                    Rs. 36427 to Rs. 48503 <span className="categories-num ml-2">(30)</span>
                    </label>
                </li>               
            </ul>
            <div className="show-more">+15 more</div>
        </div>
        <div className="vertical-filters-filter border-bottom ps-3 py-4">
            <span className="filters-header text-sm font-bold text-uppercase">Color</span>
            <ul className="categories-list">
                <li className="form-check d-flex">
                    <input className="form-check-input" type="checkbox" value="" id="color-blue"/>
                    <label className="form-check-label text-sm d-flex align-items-center" htmlFor="color-blue">
                   <span className="color blue"></span> Blue <span className="categories-num ml-2">(30)</span>
                    </label>
                </li> 
                <li className="form-check d-flex">
                    <input className="form-check-input" type="checkbox" value="" id="color-green"/>
                    <label className="form-check-label text-sm d-flex align-items-center" htmlFor="color-green">
                    <span className="color green"></span> Green <span className="categories-num ml-2">(30)</span>
                    </label>
                </li> 
                <li className="form-check d-flex">
                    <input className="form-check-input" type="checkbox" value="" id="color-pink"/>
                    <label className="form-check-label text-sm d-flex align-items-center" htmlFor="color-pink">
                    <span className="color pink"></span> Pink <span className="categories-num ml-2">(30)</span>
                    </label>
                </li> 
                <li className="form-check d-flex">
                    <input className="form-check-input" type="checkbox" value="" id="color-red"/>
                    <label className="form-check-label text-sm d-flex align-items-center" htmlFor="color-red">
                    <span className="color red"></span> Red <span className="categories-num ml-2">(30)</span>
                    </label>
                </li>   
                <li className="form-check d-flex">
                    <input className="form-check-input" type="checkbox" value="" id="color-yellow"/>
                    <label className="form-check-label text-sm d-flex align-items-center" htmlFor="color-yellow">
                    <span className="color yellow"></span> Yellow <span className="categories-num ml-2">(30)</span>
                    </label>
                </li>            
            </ul>
            <div className="show-more">+15 more</div>
        </div>
        <div className="vertical-filters-filter ps-3 py-4">
            <span className="filters-header text-sm font-bold text-uppercase">Discount Range</span>
            <ul className="categories-list">
                <li className="form-check d-flex">
                    <input className="form-check-input" type="radio" name="price" value="" id="dis-10"/>
                    <label className="form-check-label text-sm d-flex align-items-center" htmlFor="dis-10">
                    10% and above <span className="categories-num ml-2">(30)</span>
                    </label>
                </li> 
                <li className="form-check d-flex">
                    <input className="form-check-input" type="radio" name="price" value="" id="dis-20"/>
                    <label className="form-check-label text-sm d-flex align-items-center" htmlFor="dis-20">
                    20% and above <span className="categories-num ml-2">(30)</span>
                    </label>
                </li> 
                <li className="form-check d-flex">
                    <input className="form-check-input" type="radio" name="price" value="" id="dis-30"/>
                    <label className="form-check-label text-sm d-flex align-items-center" htmlFor="dis-30">
                    30% and above <span className="categories-num ml-2">(30)</span>
                    </label>
                </li> 
                <li className="form-check d-flex">
                    <input className="form-check-input" type="radio" name="price" value="" id="dis-40"/>
                    <label className="form-check-label text-sm d-flex align-items-center" htmlFor="dis-40">
                    40% and above <span className="categories-num ml-2">(30)</span>
                    </label>
                </li>               
            </ul>
            <div className="show-more">+5 more</div>
        </div>
    
    
    </div>
  )
}

export default SidebarFilter