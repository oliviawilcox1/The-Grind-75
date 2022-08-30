var isIsomorphic = function(s, t) {
       
  
    for (var i = 0; i < s.length; i++) {
      console.log("iteration is " + i)
      console.log("S is letter " + s[i] + " and index is " + s.indexOf(s[i]) + " while T is letter " + t[i] + " and index is "+ t.indexOf(t[i]))
 
            if (s.indexOf(s[i]) != t.indexOf(t[i])) {
                return false;
            }
        }
  return true;
};

console.log(isIsomorphic("foo", "bar"))



var isIsomorphic = function(s, t) {
       
    let map = new Map()
    let dicMap2 = {}

    for (var i = 0; i < s.length; i++) {
       if (!(s[i] in map)) {
              map[s[i]] = t[i];
        } else {
            if (map[s[i]] !== t[i]) {
                  return false;
        }
      }
    }
  
     for (let i = 0; i < t.length; i++) {
          if (!(t[i] in dicMap2)) {
              dicMap2[t[i]] = s[i];
          } else {
              if (dicMap2[t[i]] !== s[i]) {
                  return false;
              }
          }
      }
      return true;
  };
  
  console.log(isIsomorphic("foo", "bar"))