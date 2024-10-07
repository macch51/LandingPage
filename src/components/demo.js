import Demoimage from "../assets/demo.svg"
function Demo() {
    return (
        <div className="bg-demobg mx-20 relative z-10 mt-0 sm:py-8 flex justify-center rounded-xl">
            <img src={Demoimage} alt="Demo" />
        </div>
    )
}
export default Demo;
