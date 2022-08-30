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