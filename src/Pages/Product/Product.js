import React from 'react'
import './Product.css'
import {Link} from 'react-router-dom'
import Charts from '../../Component/topbar/Charts/Charts'
import {productData} from '../../DummyData'
import { Publish } from '@mui/icons-material'

const Product = () => {
    return (
        <div className="product">
           <div className="productTitleContainer">
           <h1 className="productTitle">Product</h1>
           <Link to="/newproduct">
           <button className="productAddButton">Create
           </button>
           </Link>
           </div> 
           <div className="productTop">
           <div className="productTopLeft">
           <Charts data={productData} dataKey="Sales" title="Sales Performance" />
           </div>
           <div className="productTopRight">
           <div className="productInfoTop">
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg_dTrsHL6KTnYXXK8zBGJ80yEV7UnNAWCCg&usqp=CAU" alt="" className="productInfoImg" />
           <span className="productName">Noise Airpods</span>
           </div>
           <div className="productInfoBottom">
           <div className="productInfoItem">
           <span className="productInfoKey">Id:</span>
           <span className="productInfoValue">123</span>
           </div>
           <div className="productInfoItem">
           <span className="productInfoKey">Sales:</span>
           <span className="productInfoValue">5123</span>
           </div>
           <div className="productInfoItem">
           <span className="productInfoKey">active:</span>
           <span className="productInfoValue">yes</span>
           </div>
           <div className="productInfoItem">
           <span className="productInfoKey">in stock</span>
           <span className="productInfoValue">no</span>
           </div>
           </div>
           </div>
           </div>
           <div className="productBottom">
           <form className="productForm">
           <div className="productFormLeft">
           <label>Product Name</label>
           <input type="text" placeholder="Noise Airpods"/>
           <label>In stock</label>
           <select name="instock" id="instock">
           <option value="yes">Yes</option>
           <option value="no">No</option>
           </select>
           <label>Active</label>
           <select name="active" id="active">
           <option value="yes">Yes</option>
           <option value="no">No</option>
           </select>
           </div>
           <div className="productFormRight">
           <div className="productUpload">
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg_dTrsHL6KTnYXXK8zBGJ80yEV7UnNAWCCg&usqp=CAU" alt="" className="productUploadImg"/>
           <label htmlFor="file">
           <Publish/>
           </label>
           <input type="file" id="file" style={{display:"none"}}/>
           </div>
           <button className="productButton">Update</button>
           </div>
           </form>
           </div>
        </div>
    )
}

export default Product
