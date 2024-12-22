//creating function & accessing in component
function Postal(){
    return(<>
    <Address/>
    <Post/>
    <Dist/>
    <State/>
    </>
    );
}
function Address(){
    return <h2>Address:Near medical</h2>  
}
function Post(){
    return <h2>Post:Burla</h2>
}
function Dist(){
    return <h2>Dist:Sambalpur</h2>
}

function State(){
    return <h2>State:Odisha</h2>
}
export default Postal;

