export const actions = {
  async create({commit}, payload){
    try {
      const url=`http://directory/api/client?fio=${payload.fio}&email=${payload.email}&phone=${payload.phone}}`
      const resultdata = await this.$axios.post(url)
      console.log('create result', resultdata)
      return resultdata
    } catch(e){
      console.log('create error')
      throw  e
    }
  }
}
