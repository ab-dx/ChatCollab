

export default function Channelbar(props){
    return(
        <>
         <div style={{ backgroundColor: "#2f3136", width: 180, position: 'absolute'}} className="text-white shadow-sm p-4 h-screen ">
           Test
           <br/>
           <button className="p-4 bg-green-500 text-white shadow-md focus:outline-none" onClick={async () => {

            const req = await fetch('/time');
           // const res = await req.json();
            
            console.table(req);

          }}>Test go brr</button>
         </div>
        </>
    );
}