export default function Navbar() {
    return (
        <>
            <div className="fixed w-full h-[100px] flex justify-between items-center bg-linear-to-bl from-orange-500 to-amber-500 px-10">
                <a href="/" className="flex justify-center items-center gap-5">
                    <img src="/image 1.png" className="w-20 h-20" alt="" />
                    <div>
                        <h1 className="font-bold text-xl text-white">chukyo kasei kogyo co ltd</h1>
                    </div>
                </a>
                <div className="flex justify-center items-center gap-5">
                    <a href="/">Home</a>
                    <a href="#product">Product</a>
                    <a href="/law">Law, Regulations & Safety</a>
                </div>
            </div>
        </>
    )
}