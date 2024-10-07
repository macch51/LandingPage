import Demoimage from "../assets/demo.svg"
function Demo() {
    return (
        <div className="bg-demobg mx-20 relative z-10 mt-4 inset-x-0 bottom-0sm:py-8 flex justify-center rounded-3xl">
            <img src={Demoimage} alt="Demo" style={{ imageRendering: 'crisp-edges' }} />
        </div>
    )
}
export default Demo;
