var simplifyPath = function(path) {
    console.log(path)
    const stack = []
    const components = path.split("/")

    for(let component of components){

        if(component === "." || component === ''){
            continue;
        } else if(component === '..' ){
           stack.pop()
        }
        else {
            stack.push(component)
        }
    }

    return `/${stack.join('/')}`
}