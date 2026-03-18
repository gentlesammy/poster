

const Counter = ({ab}) => {
    //ab = ab + 10000; // lets assume a customer depositted 10000 and we need to add it to account balance., we donmt do it like this
  return (
    <div className="row">
        <div className="col-md-12">
            <h1>Account Balanace: {ab}</h1>
        </div>
    </div>
  )
}

export default Counter