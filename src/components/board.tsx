

export default function Board(){
    return(
        <main className="p-6 grid grid-cols-3 bg-teal-500 h-full md:w-3/4 md:mr-auto md:ml-auto xl:w-2/4">
            <div className="box h-36 w-full  border-b-8 border-slate-500"></div>
            <div className="box h-36 w-full  border-b-8 border-slate-500 border-r-8 border-l-8"></div>
            <div className="box h-36 w-full  border-b-8 border-slate-500"></div>
            <div className="box h-36 w-full  border-b-8 border-slate-500"></div>
            <div className="box h-36 w-full  border-b-8 border-slate-500 border-r-8 border-l-8"></div>
            <div className="box h-36 w-full  border-b-8 border-slate-500"></div>
            <div className="box h-36 w-full  border-slate-500"></div>
            <div className="box h-36 w-full  border-slate-500 border-r-8 border-l-8"></div>
            <div className="box h-36 w-full  border-slate-500"></div>
            </main>
    )}