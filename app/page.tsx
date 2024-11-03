

export default function Home() {
  return (
    <div>
     
    <nav className="flex w-full bg-black h-32 items-center space-x-1 mr-auto">
    
     <div className="flex justify-items-start space-x-3 px-4">
      <div className="bg-gray-400 h-10 w-20"></div>
      <div className="bg-yellow-200 h-10 w-44"></div>
      </div>


      <div className="flex justify-items-end space-x-2 p-10" > 


        <div className="bg-green-700 h-10 w-44"></div>
        <div className="bg-yellow-700 h-10 w-44"></div>
        <div className="bg-orange-400 h-10 w-44"></div>
        <div className="bg-pink-500 h-10 w-44"></div>
        <div className="bg-blue-500 h-10 w-44"></div>
      </div>
    
    </nav>
    <br></br>
    <br>
    </br>


    <div className="flex space-x-10 px-4 w-full justify-between ">          
          <h1 className=" bg-pink-400 h-64 w-1/2"> </h1>
           <h1 className="bg-blue-400 h-64 w-1/2"> </h1>
           <h1 className="bg-green-400 h-64 w-1/2"> </h1>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="flex space-x-10 px-4 w-full justify-between">          
          <h1 className=" bg-gray-400 h-64 w-1/2"> </h1>
           <h1 className="bg-black h-64 w-1/2"> </h1>
        </div>
        <br></br>
        <br></br>

        <footer>
          <h1 className="bg-blue-300 h-10 w-full"> </h1>
        
        </footer>
</div>
 

);
}

