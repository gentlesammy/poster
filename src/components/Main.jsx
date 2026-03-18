

//import the image like a component

import bc from "../images/cb.jpg"
const Main = ({products}) => {
    let sn = 1;

    return(
        <div className="col-md-8">
            <h3>Main Section</h3>
            <img src={bc} alt="background blah" className="img-fluid" />
            <table className="table">
                <thead>
                    <tr>
                        <th>SN</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            products.map((pro)=>{
                                return (
                                    <tr key={pro.id}>
                                        <td>{sn++}</td>
                                        <td>{pro.name}</td>
                                        <td>{pro.price}</td>
                                    </tr>
                                )

                            }) 

                        }
                </tbody>
            </table>
        </div>
    )

}

 export default Main;