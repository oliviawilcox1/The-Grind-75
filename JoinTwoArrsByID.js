var join = function(arr1, arr2) {
    const joinedArrays = [...arr1, ...arr2]
    const map = new Map()
  
  //   joinedArrays.forEach((ele)=> {
  //     if(map.has(ele.id)){
  //         const newVals = {...map.get(ele.id), ...ele}
  //         map.set(ele.id, newVals)
  //     } else {
  //         map.set(ele.id, ele)
  //     }
  //   })
  //   const arr = Array.from(map.values()).sort((a,b) => a.id - b.id)
  //   return arr
  
  
    // another way 
      joinedArrays.sort((a,b )=> a.id - b.id)
      
      const grouped = joinedArrays.reduce((acc, curr)=> {
  
          if(acc[curr.id]){
              acc[curr.id] = {...acc[curr.id], ...curr}
          } else {
              acc[curr.id] = curr
          }
          return acc 
      }, {})
      return Object.values(grouped)
  };