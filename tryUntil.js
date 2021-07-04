'use strict';

class TryUntil{
  /**
   * @method retry continually calls a method upon receiving an error until a non-error response is returned
   * @param  {Function} funct - the web request method to be called
   * @param  {Array} params - A string or array of parameters needed for the web request method
   * @param  {Object} context - The object to be used as the contextual `this` when calling the method
   * @returns {Object} - The non-error response object returned by the method
   */
  async retry(funct,params,context){
    const f = funct
    const p = []
    let c = context
    if (!c){
      c = globalThis
    }
    if (typeof params !== 'string'){
      for (let i in params){
        p.push(params[i])
      }
    }else{
      p.push(params)
    }
    let result
    let err
    do {
      try{
        err=0
        result = await f.apply(c,p)
        return result
      }catch(error){
        err=error
        // Uncomment either of these lines if you wish to raise the error for debugging.
        // throw new Error(error)
        // console.error(error)
      }
    } while (err!==0)
  }
}
