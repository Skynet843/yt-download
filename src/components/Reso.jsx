function Reso(props) {

    return(
        <>
        <a className="reso" href={props.obj.link}
        //     ()=>{
        //     return `${props.link}`
        // }
        >
            {props.obj.name}
        </a>
        </>
    )
}
export default Reso;