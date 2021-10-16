function mapObject(arr =[],objectKeys=null){
    return arr.map(x=>{
        let map ={}
        let newObj = objectKeys.map(response=>{
            map[response]=x[response]
            return map
        })
        return newObj
    })
}
module.exports = mapObject