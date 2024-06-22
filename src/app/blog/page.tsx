
export default function Blog() {
    return (
        <div className="flex justify-center">
        <div className="mt-20 h-auto rounded-lg border-2 p-5">
            <div className="flex">
                <img className="rounded-full" src="https://placehold.co/40x40/png" alt="" />
                <div className="ml-2 flex-col justify-center">
                    <p className="text-xs text-slate-600 ">Henrique Leme de Brito</p>
                    <p className="text-xs text-slate-600 font-light">Jul 24 '23</p>
                </div>
            </div>
            <h1 className="font-bold text-lg">Don't Throw "Consulting Services" Onto Your Website</h1>
            <span className="text-sm hover:bg-slate-100 hover:border-black p-1 rounded-md">#freelance</span>
        </div>
      </div>       
    )
}