import React, { useEffect, useState } from 'react'

function useOnlineOffline() {

    const[onOff, setonOff] = useState(true)

    useEffect(()=>{
        const handleOnline=()=>{
            setonOff(true)
        }
        const handleOffline=()=>{
            setonOff(false)
        }

            // Event Listeners
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);


    // Cleanup when component unmount
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
    },[])
  return onOff
}

export default useOnlineOffline
