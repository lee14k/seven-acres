const ServicesTripleBox =()=> {
    return (
        <div className="flex flex-col justify-center items-center">     
            <h1>Our Services</h1>  
            <p>In addition to our blooms, we offer a wide range of services.</p>
            <div className="grid grid-cols-3 gap-24">
            <div className="services-triple-box-item">
                <h2>Service 1</h2>
                <p>Service 1 description</p>
            </div>
            <div className="services-triple-box-item">
                <h2>Service 2</h2>
                <p>Service 2 description</p>
            </div>
            <div className="services-triple-box-item">
                <h2>Service 3</h2>
                <p>Service 3 description</p>
            </div>
            </div>
            </div>
 
    )
}
export default ServicesTripleBox;