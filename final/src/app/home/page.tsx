import Nav from "../nav";

export default function Base() {
    return (
    <>
    <Nav/>
    <div className="relative z-10 flex max-w-max flex-1 items-center justify-center">
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
        <img
      src="https://advancetitan.com/wp-content/uploads/2020/09/College_Textbooks.jpg"
      alt="Shoes"
      className="rounded-xl" />
        </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-white">Math Book Deal!</h2>
                <p className="text-white">Deals on a mathbook check it out</p>
            <div className="card-actions">
             <button className="btn btn-primary">Buy Now</button>
            </div>
        </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
        <img
      src="https://advancetitan.com/wp-content/uploads/2020/09/College_Textbooks.jpg"
      alt="Shoes"
      className="rounded-xl" />
        </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-white">English Book Deal!</h2>
                <p className="text-white">Deals on a English check it out</p>
            <div className="card-actions">
             <button className="btn btn-primary">Buy Now</button>
            </div>
        </div>
     </div>
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
     <img
      src="https://advancetitan.com/wp-content/uploads/2020/09/College_Textbooks.jpg"
      alt="Shoes"
      className="rounded-xl" />
        </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-white">Other Book Deal!</h2>
                <p className="text-white">Deals on whatever</p>
            <div className="card-actions">
             <button className="btn btn-primary">Buy Now</button>
            </div>
        </div>
        </div>
    </div>




    </>
    
    )}
     
    