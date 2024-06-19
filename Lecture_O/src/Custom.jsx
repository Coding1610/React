import { useState } from "react";

// Custom Hook
function useCustom(){
    const [count,setCount] = useState(0);
    const inCount = () => {
        setCount(count+1);
    };
    return{
        count,
        inCount
    };
}

export default useCustom